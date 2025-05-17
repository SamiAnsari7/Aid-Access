'use server';

/**
 * @fileOverview Generates a summary of a patient's treatment history.
 *
 * - generateTreatmentSummary - A function that generates the treatment summary.
 * - GenerateTreatmentSummaryInput - The input type for the generateTreatmentSummary function.
 * - GenerateTreatmentSummaryOutput - The return type for the generateTreatmentSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTreatmentSummaryInputSchema = z.object({
  patientName: z.string().describe('The name of the patient.'),
  medicalHistory: z.string().describe('The patient\'s medical history.'),
  medications: z.string().describe('The medications currently being taken by the patient.'),
  visits: z.string().describe('A description of the patient\'s visits.'),
});
export type GenerateTreatmentSummaryInput = z.infer<typeof GenerateTreatmentSummaryInputSchema>;

const GenerateTreatmentSummaryOutputSchema = z.object({
  summary: z.string().describe('A summary of the patient\'s treatment history.'),
});
export type GenerateTreatmentSummaryOutput = z.infer<typeof GenerateTreatmentSummaryOutputSchema>;

export async function generateTreatmentSummary(input: GenerateTreatmentSummaryInput): Promise<GenerateTreatmentSummaryOutput> {
  return generateTreatmentSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTreatmentSummaryPrompt',
  input: {schema: GenerateTreatmentSummaryInputSchema},
  output: {schema: GenerateTreatmentSummaryOutputSchema},
  prompt: `You are an AI assistant that summarizes patient treatment histories.

  Summarize the following information about the patient:\n
  Patient Name: {{{patientName}}}
  Medical History: {{{medicalHistory}}}
  Medications: {{{medications}}}
  Visits: {{{visits}}}
  `,
});

const generateTreatmentSummaryFlow = ai.defineFlow(
  {
    name: 'generateTreatmentSummaryFlow',
    inputSchema: GenerateTreatmentSummaryInputSchema,
    outputSchema: GenerateTreatmentSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

// src/ai/flows/generate-medicine-suggestions.ts
'use server';
/**
 * @fileOverview AI-powered suggestions for medicine or therapy based on patient's health problems and medications.
 *
 * - generateMedicineSuggestions - A function that handles the generation of medicine and therapy suggestions.
 * - GenerateMedicineSuggestionsInput - The input type for the generateMedicineSuggestions function.
 * - GenerateMedicineSuggestionsOutput - The return type for the generateMedicineSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMedicineSuggestionsInputSchema = z.object({
  healthProblems: z
    .string()
    .describe('The current health problems of the patient.'),
  medications: z
    .string()
    .describe('The medications currently being taken by the patient.'),
});
export type GenerateMedicineSuggestionsInput = z.infer<
  typeof GenerateMedicineSuggestionsInputSchema
>;

const GenerateMedicineSuggestionsOutputSchema = z.object({
  suggestions: z.array(z.string()).describe(
    'A list of suggested medicines or therapies relevant to the patient\'s condition.'
  ),
  summary: z.string().describe('A summary of the suggestions.'),
});
export type GenerateMedicineSuggestionsOutput = z.infer<
  typeof GenerateMedicineSuggestionsOutputSchema
>;

export async function generateMedicineSuggestions(
  input: GenerateMedicineSuggestionsInput
): Promise<GenerateMedicineSuggestionsOutput> {
  return generateMedicineSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMedicineSuggestionsPrompt',
  input: {schema: GenerateMedicineSuggestionsInputSchema},
  output: {schema: GenerateMedicineSuggestionsOutputSchema},
  prompt: `You are an AI assistant specializing in providing medical suggestions. Based on the patient's current health problems and medications, suggest potential medicines or therapies relevant to their condition.

Health Problems: {{{healthProblems}}}
Medications: {{{medications}}}

Provide a list of suggestions and a brief summary.

Output in JSON format.
`,
});

const generateMedicineSuggestionsFlow = ai.defineFlow(
  {
    name: 'generateMedicineSuggestionsFlow',
    inputSchema: GenerateMedicineSuggestionsInputSchema,
    outputSchema: GenerateMedicineSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

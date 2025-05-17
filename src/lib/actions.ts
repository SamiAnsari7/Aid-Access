// src/lib/actions.ts
'use server';

import { 
  generateMedicineSuggestions, 
  type GenerateMedicineSuggestionsInput, 
  type GenerateMedicineSuggestionsOutput 
} from '@/ai/flows/generate-medicine-suggestions';
import { 
  findRareMedicines, 
  type FindRareMedicinesInput, 
  type FindRareMedicinesOutput 
} from '@/ai/flows/find-rare-medicines';
import { 
  generateTreatmentSummary, 
  type GenerateTreatmentSummaryInput, 
  type GenerateTreatmentSummaryOutput 
} from '@/ai/flows/generate-treatment-summary';

export async function getMedicineSuggestionsAction(
  input: GenerateMedicineSuggestionsInput
): Promise<GenerateMedicineSuggestionsOutput | { error: string }> {
  try {
    const result = await generateMedicineSuggestions(input);
    return result;
  } catch (error) {
    console.error('Error generating medicine suggestions:', error);
    return { error: 'Failed to generate medicine suggestions. Please try again.' };
  }
}

export async function findRareMedicinesAction(
  input: FindRareMedicinesInput
): Promise<FindRareMedicinesOutput | { error: string }> {
  try {
    const result = await findRareMedicines(input);
    return result;
  } catch (error) {
    console.error('Error finding rare medicines:', error);
    return { error: 'Failed to find rare medicines. Please try again.' };
  }
}

export async function generateTreatmentSummaryAction(
  input: GenerateTreatmentSummaryInput
): Promise<GenerateTreatmentSummaryOutput | { error: string }> {
  try {
    const result = await generateTreatmentSummary(input);
    return result;
  } catch (error) {
    console.error('Error generating treatment summary:', error);
    return { error: 'Failed to generate treatment summary. Please try again.' };
  }
}

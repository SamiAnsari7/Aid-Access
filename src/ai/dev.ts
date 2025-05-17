import { config } from 'dotenv';
config();

import '@/ai/flows/generate-treatment-summary.ts';
import '@/ai/flows/find-rare-medicines.ts';
import '@/ai/flows/generate-medicine-suggestions.ts';
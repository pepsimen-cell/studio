'use server';
/**
 * @fileOverview A flow for generating changelogs.
 *
 * - getChangelogs - A function that returns a list of changelogs.
 * - GetChangelogsOutput - The return type for the getChangelogs function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const ChangeSchema = z.object({
  type: z.enum(['Added', 'Improved', 'Fixed']).describe('The type of change.'),
  description: z.string().describe('A description of the change.'),
});

const ChangelogSchema = z.object({
  id: z.string().describe('A unique identifier for the changelog, e.g., changelog-1'),
  version: z.string().describe('The version number, e.g., v2.5.1'),
  date: z.string().describe('The date of the release in YYYY-MM-DD format.'),
  changes: z.array(ChangeSchema),
});

const GetChangelogsOutputSchema = z.object({
  changelogs: z.array(ChangelogSchema),
});

export type GetChangelogsOutput = z.infer<typeof GetChangelogsOutputSchema>;

export async function getChangelogs(): Promise<GetChangelogsOutput> {
  return changelogsFlow();
}

const prompt = ai.definePrompt({
  name: 'changelogsPrompt',
  output: { schema: GetChangelogsOutputSchema },
  prompt: `You are the lead developer for "Skates Garage", a company that sells cheats for online games like Fortnite.

  Generate a list of 2 recent changelogs for your software products ("Fortnite DMA", "Fortnite Private", etc.). Each changelog should have a version, a recent date, and a list of changes (Added, Improved, Fixed).

  Make the version numbers and dates sequential and in descending order (newest first). The changes should be plausible for this kind of software.`,
});

const changelogsFlow = ai.defineFlow(
  {
    name: 'changelogsFlow',
    outputSchema: GetChangelogsOutputSchema,
  },
  async () => {
    const { output } = await prompt();
    return output!;
  }
);

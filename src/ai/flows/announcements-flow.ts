'use server';
/**
 * @fileOverview A flow for generating announcements.
 *
 * - getAnnouncements - A function that returns a list of announcements.
 * - GetAnnouncementsOutput - The return type for the getAnnouncements function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const AnnouncementSchema = z.object({
  id: z.string().describe('A unique identifier for the announcement, e.g., announcement-1'),
  title: z.string().describe('The title of the announcement.'),
  date: z.string().describe('The date of the announcement in YYYY-MM-DD format.'),
  content: z.string().describe('The full content of the announcement.'),
});

const GetAnnouncementsOutputSchema = z.object({
  announcements: z.array(AnnouncementSchema),
});

export type GetAnnouncementsOutput = z.infer<typeof GetAnnouncementsOutputSchema>;

export async function getAnnouncements(): Promise<GetAnnouncementsOutput> {
  return announcementsFlow();
}

const prompt = ai.definePrompt({
  name: 'announcementsPrompt',
  output: { schema: GetAnnouncementsOutputSchema },
  prompt: `You are the community manager for "Skates Garage", a company that sells cheats for online games like Fortnite. Your tone is professional but with a bit of edgy gamer slang.

  Generate a list of 3 recent announcements. The content should be similar in tone and style to what you might find in this Discord announcements channel: https://discord.com/channels/1359271973099667617/1381481321368522896

  Do not copy the content directly, but use it as a strong inspiration for the kind of announcements to make (e.g., product updates, new features, status changes).

  Make sure the dates are recent and in descending order (newest first).`,
});

const announcementsFlow = ai.defineFlow(
  {
    name: 'announcementsFlow',
    outputSchema: GetAnnouncementsOutputSchema,
  },
  async () => {
    const { output } = await prompt();
    return output!;
  }
);

'use server';

/**
 * @fileOverview Automatically categorizes blog posts based on their content using AI.
 *
 * - categorizeBlog - A function that categorizes a blog post.
 * - CategorizeBlogInput - The input type for the categorizeBlog function.
 * - CategorizeBlogOutput - The return type for the categorizeBlog function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CategorizeBlogInputSchema = z.object({
  blogContent: z.string().describe('The content of the blog post.'),
  availableCategories: z.array(z.string()).describe('The available categories for the blog.'),
});
export type CategorizeBlogInput = z.infer<typeof CategorizeBlogInputSchema>;

const CategorizeBlogOutputSchema = z.object({
  category: z.string().describe('The most appropriate category for the blog post.'),
});
export type CategorizeBlogOutput = z.infer<typeof CategorizeBlogOutputSchema>;

export async function categorizeBlog(input: CategorizeBlogInput): Promise<CategorizeBlogOutput> {
  return categorizeBlogFlow(input);
}

const prompt = ai.definePrompt({
  name: 'categorizeBlogPrompt',
  input: {schema: CategorizeBlogInputSchema},
  output: {schema: CategorizeBlogOutputSchema},
  prompt: `Given the following blog post content and available categories, determine the most appropriate category for the blog post.\n\nBlog Post Content: {{{blogContent}}}\n\nAvailable Categories: {{#each availableCategories}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}\n\nReturn the category as a string.\n`,
});

const categorizeBlogFlow = ai.defineFlow(
  {
    name: 'categorizeBlogFlow',
    inputSchema: CategorizeBlogInputSchema,
    outputSchema: CategorizeBlogOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

import { tool } from "@openai/agents";
import { z } from "zod";
import { retrievePortfolioContext } from "@/ai/retriever";

export const searchPortfolio = tool({
  name: "searchPortfolio",
  description:
    "Search Huzaifa Rehan's portfolio knowledge base for accurate information about skills, services, projects, contact details, and experience.",
  parameters: z.object({
    query: z
      .string()
      .min(2)
      .describe("A focused search query about the portfolio."),
  }),
  async execute({ query }) {
    const results = await retrievePortfolioContext(query);

    if (results.length === 0) {
      return "No matching portfolio content was found.";
    }

    return JSON.stringify(
      results.map((result) => ({
        score: result.score,
        content: result.content,
        reference: {
          title: result.metadata.title,
          page: result.metadata.page,
          section: result.metadata.section,
          url: result.metadata.url,
          sourceFile: result.metadata.sourceFile,
        },
      })),
      null,
      2,
    );
  },
});


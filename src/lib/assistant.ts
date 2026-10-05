export const ASK_ASSISTANT_EVENT = "portfolio-assistant:ask";

export interface AskAssistantDetail {
  question?: string;
}

// Opens the floating chatbot from anywhere on the page, optionally sending a question.
export function askAssistant(question?: string) {
  window.dispatchEvent(
    new CustomEvent<AskAssistantDetail>(ASK_ASSISTANT_EVENT, {
      detail: { question },
    }),
  );
}

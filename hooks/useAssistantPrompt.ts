import axios from "@/libs/axios";
import { ExplanationPayload } from "@/types/explanationPayload";
import { useMutation } from "react-query";

export const useAssistantPrompt = () => {
  return useMutation("assistant-prompt", {
    mutationFn: async (text) => {
      const { data } = await axios.post(`assistant/explain`, {
        text: text,
      });
      console.log(data);
      return data as ExplanationPayload;
    },
  });
};

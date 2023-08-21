import { useAuth } from "@/contexts/AuthContext";
import { axiosAuth } from "@/libs/axios";
import { ExplanationPayload } from "@/types/explanationPayload";
import { useMutation } from "react-query";

export const useAssistantPrompt = () => {
  const { token } = useAuth();
  return useMutation("assistant-prompt", {
    mutationFn: async (text) => {
      const { data } = await axiosAuth.post(`assistant/explain`, {
        text: text,
      }, {
        headers: {
          Authorization: `Bearer ${token.access}`
        }
      });
      return data as ExplanationPayload;
    },
  });
};

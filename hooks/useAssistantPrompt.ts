import { ExplanationPayload } from "@/types/explanationPayload";
import { useMutation } from "react-query";
import useAxiosAuth from "./useAxios";
import { useAuth } from "@/contexts/AuthContext";

export const useAssistantPrompt = () => {
  const { token } = useAuth();
  const axios = useAxiosAuth();
  return useMutation("assistant-prompt", {
    mutationFn: async (text) => {
      const { data } = await axios.post(
        `assistant/explain`,
        {
          text: text,
        },
        {
          headers: {
            Authorization: `Bearer ${token.access}`,
          },
        },
      );
      return data as ExplanationPayload;
    },
  });
};

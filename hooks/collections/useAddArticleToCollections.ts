import { useMutation } from "react-query";
import useAxiosAuth from "../useAxios";
import { useAuth } from "@/contexts/AuthContext";
import { CollectionPayload } from "@/types/collectionPayload";

interface AddArticleType {
  articleId: string;
  ids: string[];
}

export const useAddArticleToCollections = () => {
  const { user, token } = useAuth();
  const axios = useAxiosAuth();
  return useMutation("add-to-collection", {
    mutationFn: async (payload: AddArticleType) => {
      const { data } = await axios.post(
        `/article/${payload.articleId}/collection`,
        {
          collection_ids: payload.ids, // TODO
        },
        {
          headers: {
            Authorization: `Bearer ${token.access}`,
          },
        },
      );

      return data as CollectionPayload;
    },
  });
};

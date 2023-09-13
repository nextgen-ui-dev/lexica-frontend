import { useMutation } from "react-query";
import useAxiosAuth from "../useAxios";
import { useAuth } from "@/contexts/AuthContext";
import { CollectionPayload } from "@/types/collectionPayload";

export const useCreateCollections = () => {
  const { token } = useAuth();
  const axios = useAxiosAuth();
  return useMutation("create-collections", {
    mutationFn: async (title: string) => {
      const { data } = await axios.post(
        `/article/collection/new`,
        {
          name: title,
          visibility: "private", // by default, a collection is private
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

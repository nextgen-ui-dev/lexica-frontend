import { useQuery } from "react-query";
import useAxiosAuth from "../useAxios";
import { useAuth } from "@/contexts/AuthContext";
import { Collection } from "@/types/collection";

export const useGetListOfAddedCollectionsInArticle = (articleId: string) => {
  const { token } = useAuth();
  const axios = useAxiosAuth();

  const { data, isFetching, refetch } = useQuery("get-list-collections", {
    queryFn: async () => {
      const url = `/article/${articleId}/collection`;
      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token.access}`,
        },
      });
      return data as Collection[];
    },
    refetchOnWindowFocus: true,
  });

  return {
    data,
    isFetching,
    refetch,
  };
};

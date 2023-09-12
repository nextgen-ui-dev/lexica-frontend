import { useQuery } from "react-query";
import useAxiosAuth from "../useAxios";
import { useAuth } from "@/contexts/AuthContext";
import { Collection } from "@/types/collection";

export const useGetCollection = (collectionId: string) => {
  const { token } = useAuth();
  const axios = useAxiosAuth();

  const { data, isFetching, refetch } = useQuery(
    `get-collection-${collectionId}`,
    {
      queryFn: async () => {
        const url = `/article/collection/${collectionId}`;
        const { data } = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token.access}`,
          },
        });

        return data as Collection;
      },
    },
  );

  return {
    data,
    isFetching,
    refetch,
  };
};

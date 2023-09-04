import { axiosAuth } from "@/libs/axios";
import { Articles } from "@/types/article";
import { useQuery } from "react-query";

export const useArticles = (
  q: string | null = null,
  categoryId: string | null = null,
) => {
  const { data, isFetching, refetch } = useQuery(["articles", q, categoryId], {
    queryFn: async () => {
      let url = "article";
      if (q !== null) {
        url += `?q=${q}`;
      }
      if (categoryId !== null) {
        url +=
          q !== null
            ? `&category_id=${categoryId}`
            : `?category_id=${categoryId}`;
      }
      const { data } = await axiosAuth.get(url);
      return data as Articles;
    },
    refetchOnWindowFocus: false,
  });

  return {
    data,
    isFetching,
    refetch,
  };
};

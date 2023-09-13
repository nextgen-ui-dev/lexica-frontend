import { axiosAuth } from "@/libs/axios";
import { ArticleDetail } from "@/types/articleDetail";
import { useQuery } from "react-query";

export const useArticle = (id: string) => {
  return useQuery(`article-detail-${id}`, {
    queryFn: async () => {
      const { data } = await axiosAuth.get(`article/${id}`);
      console.log("useArticle()", data);
      return data as ArticleDetail;
    },
    refetchOnWindowFocus: false,
  });
};

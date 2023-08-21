import { axiosAuth } from "@/libs/axios";
import { Articles } from "@/types/article";
import { useQuery } from "react-query";

export const useArticles = () => {
  return useQuery("articles", {
    queryFn: async () => {
      const { data } = await axiosAuth.get(`article`);
      return data as Articles;
    },
    refetchOnWindowFocus: false,
  });
};

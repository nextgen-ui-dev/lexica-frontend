import axios, { axiosAuth } from "@/libs/axios";
import { Articles } from "@/types/article";
import { useQuery } from "react-query";

export const useThreeRecentArticle = () => {
  return useQuery("articles", {
    queryFn: async () => {
      const { data } = await axiosAuth.get(`article?page_size=3`);
      return data as Articles;
    },
    refetchOnWindowFocus: false,
  });
};

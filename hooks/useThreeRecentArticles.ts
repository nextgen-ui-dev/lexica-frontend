import axios from "@/libs/axios";
import { Articles } from "@/types/articles";
import { useQuery } from "react-query";

export const useThreeRecentArticle = () => {
  return useQuery("articles", {
    queryFn: async () => {
      const { data } = await axios.get(`article?page_size=3`);
      return data as Articles;
    },
    refetchOnWindowFocus: false,
  });
};

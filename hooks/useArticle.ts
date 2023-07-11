import axios from "@/libs/axios";
import { ArticleDetail } from "@/types/articleDetail";
import { useQuery } from "react-query";

export const useArticle = (id: string) => {
    return useQuery('article-detail', {
        queryFn: async () => {
            const { data } = await axios.get(`article/${id}`);
            return data as ArticleDetail
        },
        refetchOnWindowFocus: false
    });
}
import axios from "@/libs/axios";
import { Articles } from "@/types/articles";
import { useQuery } from "react-query";

export const useArticles = () => {
    return useQuery('articles', {
        queryFn: async () => {
            const { data } = await axios.get(`article`);
            return data as Articles
        },
        refetchOnWindowFocus: false
    });
}
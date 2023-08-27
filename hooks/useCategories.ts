import { axiosAuth } from "@/libs/axios";
import { Category } from "@/types/category";
import { useQuery } from "react-query";

export const useCategories = () => {
  const { data, isFetching } = useQuery("categories", {
    queryFn: async () => {
      const { data } = await axiosAuth.get(`article/category`);
      return data as Category[];
    },
    refetchOnWindowFocus: false,
  });
  return {
    data,
    isFetching,
  };
};

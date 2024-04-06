import { useQuery } from "@tanstack/react-query";
import { getNewsErrorType, getNewsSuccessType } from "../types/QueriesTypes";
import { $host } from "../../../../services/requestServices";

export function getNews() {
  return useQuery<getNewsSuccessType[], getNewsErrorType>({
    queryKey: ["getNews"],
    queryFn: async () => {
      const res = await $host.get("api/v1/news");
      return res.data;
    },
    refetchOnWindowFocus: false,
  });
}

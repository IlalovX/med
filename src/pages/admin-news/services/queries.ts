import { useQuery } from "@tanstack/react-query";
import { $host } from "../../../services/requestServices";
import { getNewsErrorType, getNewsSuccessType } from "../types/QueriesTypes";

export function getNews() {
  return useQuery<getNewsSuccessType[], getNewsErrorType>({
    queryKey: ["getNews"],
    queryFn: async () => {
      const res = await $host.get("api/v1/news");
      return res.data;
    },
  });
}

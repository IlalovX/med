import { useQuery } from "@tanstack/react-query";
import { $host } from "../../../services/requestServices";
import { getNewsErrorType, getNewsSuccessType } from "../types/QueriesType";
import { useParams } from "react-router-dom";

export function getNewsDetail() {
  const { id } = useParams();
  return useQuery<getNewsSuccessType, getNewsErrorType>({
    queryKey: ["getNews"],
    queryFn: async () => {
      const res = await $host.get(`api/v1/news/${id}`);
      return res.data;
    },
  });
}

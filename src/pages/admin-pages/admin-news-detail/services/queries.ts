import { useQuery } from "@tanstack/react-query";
import { getNewsErrorType, getNewsSuccessType } from "../types/QueriesType";
import { useParams } from "react-router-dom";
import { $host } from "../../../../services/requestServices";

export function getNewsDetail() {
  const { id } = useParams();
  return useQuery<getNewsSuccessType, getNewsErrorType>({
    queryKey: ["getNew"],
    queryFn: async () => {
      const res = await $host.get(`api/v1/news/${id}`);
      return res.data;
    },
  });
}

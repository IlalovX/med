import { useQuery } from "@tanstack/react-query";
import { $host } from "../../../../services/requestServices";
import { getHistoryErrorType, getHistorySuccessType } from "../types/QueriesTypes";

export function getHistory() {
  return useQuery<getHistorySuccessType, getHistoryErrorType>({
    queryKey: ["getHistory"],
    queryFn: async () => {
      const res = await $host.get(`api/v1/faculties/history`);
      return res.data;
    },
  });
}

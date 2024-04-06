import { useQuery } from "@tanstack/react-query";
import { $host } from "../../../../services/requestServices";
import {
  getRegulationsSuccessType,
  getRegulationsErrorType,
} from "../types/QueriesTypes";

export function getRegulations() {
  return useQuery<getRegulationsSuccessType, getRegulationsErrorType>({
    queryKey: ["getRegulations"],
    queryFn: async () => {
      const res = await $host.get(`api/v1/institute/rule`);
      return res.data;
    },
  });
}

import { useQuery } from "@tanstack/react-query";
import { $host } from "../../../../services/requestServices";
import {
  getStatuteSuccessType,
  getStatuteErrorType,
} from "../types/QueriesTypes";

export function getStatute() {
  return useQuery<getStatuteSuccessType, getStatuteErrorType>({
    queryKey: ["getStatute"],
    queryFn: async () => {
      const res = await $host.get(`api/v1/institute/ordinance`);
      return res.data;
    },
  });
}

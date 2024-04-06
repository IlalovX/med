import { useQuery } from "@tanstack/react-query";
import { $host } from "../../../../services/requestServices";
import { getInfoErrorType, getInfoSuccessType } from "../types/QueriesTypes";

export function getInstitute() {
  return useQuery<getInfoSuccessType, getInfoErrorType>({
    queryKey: ["getInformation"],
    queryFn: async () => {
      const res = await $host.get(`api/v1/institute`);
      return res.data;
    },
  });
}

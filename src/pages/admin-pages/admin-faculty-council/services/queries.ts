import { useQuery } from "@tanstack/react-query";
import { $host } from "../../../../services/requestServices";
import {
  getCouncilErrorType,
  getCouncilSuccessType,
} from "../types/QueriesTypes";

export function getCouncil() {
  return useQuery<getCouncilSuccessType, getCouncilErrorType>({
    queryKey: ["getCouncil"],
    queryFn: async () => {
      const res = await $host.get(`api/v1/faculties/composition-council`);
      return res.data;
    },
  });
}

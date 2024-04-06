import { useQuery } from "@tanstack/react-query";
import {
  getResearchErrorType,
  getResearchSuccessType,
} from "../types/QueriesTypes";
import { $host } from "../../../../services/requestServices";

export function getResearch() {
  return useQuery<getResearchSuccessType, getResearchErrorType>({
    queryKey: ["getResearch"],
    queryFn: async () => {
      const res = await $host.get(`api/v1/faculties/student-research-society`);
      return res.data;
    },
  });
}

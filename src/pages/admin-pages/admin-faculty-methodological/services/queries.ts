import { useQuery } from "@tanstack/react-query";
import {
  getMethodologicalErrorType,
  getMethodologicalSuccessType,
} from "../types/QueriesTypes";
import { $host } from "../../../../services/requestServices";

export function getMethodological() {
  return useQuery<getMethodologicalSuccessType, getMethodologicalErrorType>({
    queryKey: ["getMethodological"],
    queryFn: async () => {
      const res = await $host.get(`api/v1/faculties/scientific-research-work`);
      return res.data;
    },
  });
}

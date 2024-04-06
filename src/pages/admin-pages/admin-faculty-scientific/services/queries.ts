import { useQuery } from "@tanstack/react-query";
import {
  getScientificErrorType,
  getScientificSuccessType,
} from "../types/QueriesTypes";
import { $host } from "../../../../services/requestServices";

export function getScientific() {
  return useQuery<getScientificSuccessType, getScientificErrorType>({
    queryKey: ["getScientific"],
    queryFn: async () => {
      const res = await $host.get(
        `api/v1/faculties/student-scientific-society`
      );
      return res.data;
    },
  });
}

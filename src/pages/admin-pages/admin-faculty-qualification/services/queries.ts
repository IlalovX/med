import { useQuery } from "@tanstack/react-query";
import {
  getQualificationErrorType,
  getQualificationSuccessType,
} from "../types/QueriesTypes";
import { $host } from "../../../../services/requestServices";

export function getQualification() {
  return useQuery<getQualificationSuccessType, getQualificationErrorType>({
    queryKey: ["getQualification"],
    queryFn: async () => {
      const res = await $host.get(`api/v1/faculties/classification`);
      return res.data;
    },
  });
}

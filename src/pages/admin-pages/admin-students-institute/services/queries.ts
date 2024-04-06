import { useQuery } from "@tanstack/react-query";
import { $host } from "../../../../services/requestServices";
import {
  getStudentsErrorType,
  getStudentsSuccessType,
} from "../types/QueriesTypes";

export function getStudents() {
  return useQuery<getStudentsSuccessType, getStudentsErrorType>({
    queryKey: ["getStudents"],
    queryFn: async () => {
      const res = await $host.get(`api/v1/institute/dormitory`);
      return res.data;
    },
  });
}

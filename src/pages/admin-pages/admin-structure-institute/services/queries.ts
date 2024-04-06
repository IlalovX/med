import { useQuery } from "@tanstack/react-query";
import { $host } from "../../../../services/requestServices";
import {
  getStructureErrorType,
  getStructureSuccessType,
} from "../types/QueriesTypes";

export function getStructure() {
  return useQuery<getStructureSuccessType, getStructureErrorType>({
    queryKey: ["getStructure"],
    queryFn: async () => {
      const res = await $host.get(`api/v1/institute/structure`);
      return res.data;
    },
  });
}

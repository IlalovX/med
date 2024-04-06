import { useQuery } from "@tanstack/react-query";
import {
  getStructureErrorType,
  getStructureSuccessType,
} from "../types/Queries";
import { $host } from "../../../../services/requestServices";

export function getStructure() {
  return useQuery<getStructureSuccessType, getStructureErrorType>({
    queryKey: ["getStructure"],
    queryFn: async () => {
      const res = await $host.get("api/v1/faculties/structure");
      return res.data;
    },
  });
}

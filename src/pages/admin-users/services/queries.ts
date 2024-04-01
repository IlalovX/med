import { useQuery } from "@tanstack/react-query";
import { $host } from "../../../services/requestServices";
import { getUsersErrorType, getUsersSuccessType } from "../types/QueriesTypes";

export function getUsers() {
  return useQuery<getUsersSuccessType[], getUsersErrorType>({
    queryKey: ["getUsers"],
    queryFn: async () => {
      const res = await $host.get("api/v1/teachers");
      return res.data;
    },
  });
}

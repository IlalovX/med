import { useQuery } from "@tanstack/react-query";
import { $host } from "../../../../services/requestServices";
import {
  getBuildingsRoomErrorType,
  getBuildingsSuccessType,
} from "../types/QueriesTypes";

export function getBuildings() {
  return useQuery<getBuildingsSuccessType[], getBuildingsRoomErrorType>({
    queryKey: ["getBuildings"],
    queryFn: async () => {
      const res = await $host.get(`api/v1/institute/building`);
      return res.data;
    },
  });
}

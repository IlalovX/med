import { useQuery } from "@tanstack/react-query";
import { $host } from "../../../../services/requestServices";
import {
  getLaboratoryRoomErrorType,
  getLaboratoryRoomSuccessType,
} from "../types/QueriesTypes";

export function getLaboratoryRoom() {
  return useQuery<getLaboratoryRoomSuccessType[], getLaboratoryRoomErrorType>({
    queryKey: ["getLaboratoryRoom"],
    queryFn: async () => {
      const res = await $host.get(`api/v1/institute/laboratory`);
      return res.data;
    },
  });
}

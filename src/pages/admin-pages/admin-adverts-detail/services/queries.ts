import { useQuery } from "@tanstack/react-query";
import {
  getAdvertErrorType,
  getAdvertSuccessType,
} from "../types/QueriesTypes";
import { useParams } from "react-router-dom";
import { $host } from "../../../../services/requestServices";

export function getAdvertDetail() {
  const { id } = useParams();
  return useQuery<getAdvertSuccessType, getAdvertErrorType>({
    queryKey: ["getAdvert"],
    queryFn: async () => {
      const res = await $host.get(`api/v1/advertisements/${id}`);
      return res.data;
    },
  });
}

import { useQuery } from "@tanstack/react-query";
import {
  getAdvertSuccessType,
  getAdvertsErrorType,
} from "../types/QueriesType";
import { $host } from "../../../../services/requestServices";

export function getAdvert() {
  return useQuery<getAdvertSuccessType[], getAdvertsErrorType>({
    queryKey: ["getAdvertisement"],
    queryFn: async () => {
      const res = await $host.get("api/v1/advertisements");
      return res.data;
    },
    refetchOnWindowFocus: false,
  });
}

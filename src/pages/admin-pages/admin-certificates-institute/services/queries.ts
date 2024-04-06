import { useQuery } from "@tanstack/react-query";
import { $host } from "../../../../services/requestServices";
import {
  getCertificatesErrorType,
  getCertificatesSuccessType,
} from "../types/QueriesTypes";

export function getCertificate() {
  return useQuery<getCertificatesSuccessType[], getCertificatesErrorType>({
    queryKey: ["getCertificate"],
    queryFn: async () => {
      const res = await $host.get(`api/v1/institute/certificate`);
      return res.data;
    },
  });
}

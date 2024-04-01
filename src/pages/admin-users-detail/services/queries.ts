import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { $host } from "../../../services/requestServices";

export function getUserDetail() {
  const { id } = useParams();
  return useQuery({
    queryKey: ["getProducts", id],
    queryFn: async () => {
      const res = await $host.get(`api/v1/teachers/${id}`);
      return res.data;
    },
    refetchOnWindowFocus: false,
    enabled: !!id,
  });
}

import { useMutation } from "@tanstack/react-query";
import { $host } from "../../../services/requestServices";

export function useAddNew() {
  return useMutation(async (data: any) => {
    const res = await $host.post("/api/v1/news", data);
    return res.data;
  });
}

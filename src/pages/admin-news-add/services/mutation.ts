import { useMutation } from "@tanstack/react-query";
import { $host } from "../../../services/requestServices";

export function useAddNews() {
  return useMutation<any, any, any>(async (data) => {
    const res = await $host.post("/api/v1/news", data);
    return res;
  });
}

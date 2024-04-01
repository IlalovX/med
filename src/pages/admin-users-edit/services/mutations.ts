import { useMutation } from "@tanstack/react-query";
import { $host } from "../../../services/requestServices";

export function usePutUser() {
  return useMutation<any, any, any>(async (data) => {
    const res = await $host.put("/api/v1/teachers", data);
    return res;
  });
}

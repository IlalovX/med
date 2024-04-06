import { useMutation } from "@tanstack/react-query";
import { $host } from "../../../../services/requestServices";

export function usePutUser() {
  return useMutation({
    mutationFn: async (data: any) => {
      const res = await $host.put("/api/v1/teachers", data);
      return res;
    },
  });
}

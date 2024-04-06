import { useMutation } from "@tanstack/react-query";
import { $host } from "../../../../services/requestServices";

export function useAddAdvert() {
  return useMutation({
    mutationFn: async (data: any) => {
      const res = await $host.post("/api/v1/advertisements", data);
      return res.data;
    },
  });
}

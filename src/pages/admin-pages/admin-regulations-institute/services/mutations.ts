import { useMutation } from "@tanstack/react-query";
import { $host } from "../../../../services/requestServices";

export function useRegulations() {
  return useMutation<any, any, any>({
    mutationFn: async (data) => {
      const res = await $host.post(`api/v1/institute/rule`, data);
      return res.data;
    },
  });
}

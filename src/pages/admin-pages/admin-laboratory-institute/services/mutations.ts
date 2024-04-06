import { useMutation } from "@tanstack/react-query";
import { $host } from "../../../../services/requestServices";

export function useLaboratory() {
  return useMutation<any, any, any>({
    mutationFn: async (data) => {
      const res = await $host.post(`api/v1/institute/laboratory`, data);
      return res.data;
    },
  });
}

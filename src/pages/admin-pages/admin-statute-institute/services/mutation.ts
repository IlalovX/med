import { useMutation } from "@tanstack/react-query";
import { $host } from "../../../../services/requestServices";

export function useStatute() {
  return useMutation<any, any, any>({
    mutationFn: async (data) => {
      const res = await $host.post(`api/v1/institute/ordinance`, data);
      return res.data;
    },
  });
}

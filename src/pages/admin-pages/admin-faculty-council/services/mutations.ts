import { useMutation } from "@tanstack/react-query";
import { $host } from "../../../../services/requestServices";

export function useQualification() {
  return useMutation<any, any, any>({
    mutationFn: async (data) => {
      const res = await $host.post(`api/v1/faculties/classification`, data);
      return res.data;
    },
  });
}

import { useMutation } from "@tanstack/react-query";
import { $host } from "../../../../services/requestServices";

export function useDeleteNew() {
  return useMutation<any, any, any>({
    mutationFn: async (data) => {
      const res = await $host.delete(`/api/v1/news/${data.id}`);
      return res.data;
    },
  });
}

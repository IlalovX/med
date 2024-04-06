import { useMutation } from "@tanstack/react-query";
import { $host } from "../../../../services/requestServices";

export function useDeleteUser() {
  return useMutation<any, any, any>({
    mutationFn: async (id: any) => {
      const res = await $host.delete(`/api/v1/teachers/${id}`);
      return res.data;
    },
  });
}

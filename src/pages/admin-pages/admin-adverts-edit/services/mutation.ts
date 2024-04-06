import { useMutation } from "@tanstack/react-query";
import { $host } from "../../../../services/requestServices";

export function useEditAdvert({ id }: { id: string }) {
  return useMutation({
    mutationFn: async (data: any) => {
      const res = await $host.put(`/api/v1/news${id}`, data);
      return res.data;
    },
  });
}

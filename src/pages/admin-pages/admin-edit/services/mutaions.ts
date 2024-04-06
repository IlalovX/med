import { useMutation } from "@tanstack/react-query";
import { $host } from "../../../../services/requestServices";

export function useEditContacts() {
  return useMutation<any, any, any>({
    mutationFn: async (id: any) => {
      const res = await $host.put(`/api/v1/contacts/${id}`);
      return res.data;
    },
  });
}

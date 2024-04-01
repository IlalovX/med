import { useMutation } from "@tanstack/react-query";
import { $host } from "../../../services/requestServices";

export function useAddUser() {
  return useMutation({
    mutationFn: async (data: any) => {
      const res = await $host.post("/api/v1/teachers", data);
      return res.data;
    },
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });
}

import { useMutation } from "@tanstack/react-query";
import { $host } from "../../../../services/requestServices";

export function useHistory() {
  return useMutation<any, any, any>({
    mutationFn: async (data) => {
      const res = await $host.post("api/v1/faculties/history", data);
      return res.data;
    },
  });
}

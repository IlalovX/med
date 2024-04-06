import { useMutation } from "@tanstack/react-query";
import { $host } from "../../../../services/requestServices";

export function useMethodological() {
  return useMutation<any, any, any>({
    mutationFn: async (data) => {
      const res = await $host.post(
        "api/v1/faculties/scientific-research-work",
        data
      );
      return res.data;
    },
  });
}

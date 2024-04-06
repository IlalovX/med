import { useMutation } from "@tanstack/react-query";
import { $host } from "../../../../services/requestServices";

export function useResearch() {
  return useMutation<any, any, any>({
    mutationFn: async (data) => {
      const res = await $host.post(
        "api/v1/faculties/education-methodical-work",
        data
      );
      return res.data;
    },
  });
}

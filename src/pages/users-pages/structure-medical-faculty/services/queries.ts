import { useQuery } from "@tanstack/react-query";
import { $host } from "../../../../services/requestServices";

export function getStructureFaculty() {
  return useQuery<any, any>({
    queryKey: ["getStructureFaculty"],
    queryFn: async () => {
      const res = await $host.get("api/v1/faculties/structure");
      return res.data;
    },
  });
}

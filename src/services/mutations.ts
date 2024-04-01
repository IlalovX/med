import { useMutation } from "@tanstack/react-query";
import { $host } from "./requestServices";

export function useUploadImage() {
  return useMutation({
    mutationFn: async (data: any) => {
      const res = await $host.post("/api/v1/upload", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res;
    },
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });
}

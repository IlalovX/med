import { useMutation } from "@tanstack/react-query";
import { $host } from "./requestServices";

export function useUploadImage() {
  return useMutation<any, any, File>(async (data) => {
    const formData = new FormData();
    formData.append("file", data);
    const res = await $host.post("/api/v1/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res;
  });
}

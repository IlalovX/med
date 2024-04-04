import { useQuery } from "@tanstack/react-query";
import { $host } from "./requestServices";
import {
  getContactsErrorType,
  getContactsSuccessType,
} from "../types/QueriesTypes";

export function getContacts() {
  return useQuery<getContactsSuccessType, getContactsErrorType>({
    queryKey: ["getContacts"],
    queryFn: async () => {
      const res = await $host.get("api/v1/contacts");
      return res.data;
    },
  });
}

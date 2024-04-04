import { AxiosError } from "axios";

export interface getContactsSuccessType {}

export type getContactsErrorType = AxiosError<{
  message: { [key: string]: string };
}>;

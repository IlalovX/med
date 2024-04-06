import { AxiosError } from "axios";

export interface getHistorySuccessType {
  faculty: string;
  info: string;
  language: string;
  photo: string;
  title: string;
}

export type getHistoryErrorType = AxiosError<{
  message: { [key: string]: string };
}>;

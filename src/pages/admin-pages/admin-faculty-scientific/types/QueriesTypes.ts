import { AxiosError } from "axios";

export interface getScientificSuccessType {
  faculty: string;
  info: string;
  language: string;
  photo: string;
  title: string;
}

export type getScientificErrorType = AxiosError<{
  message: { [key: string]: string };
}>;

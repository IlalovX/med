import { AxiosError } from "axios";

export interface getResearchSuccessType {
  faculty: string;
  info: string;
  language: string;
  photo: string;
  title: string;
}

export type getResearchErrorType = AxiosError<{
  message: { [key: string]: string };
}>;

import { AxiosError } from "axios";

export interface getCouncilSuccessType {
  faculty: string;
  info: string;
  language: string;
  photo: string;
  title: string;
}

export type getCouncilErrorType = AxiosError<{
  message: { [key: string]: string };
}>;

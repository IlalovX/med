import { AxiosError } from "axios";

export interface getMethodologicalSuccessType {
  faculty: string;
  info: string;
  language: string;
  photo: string;
  title: string;
}

export type getMethodologicalErrorType = AxiosError<{
  message: { [key: string]: string };
}>;

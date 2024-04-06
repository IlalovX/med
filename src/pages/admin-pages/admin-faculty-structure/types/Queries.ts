import { AxiosError } from "axios";

export interface getStructureSuccessType {
  faculty: string;
  info: string;
  language: string;
  photo: string;
  title: string;
}

export type getStructureErrorType = AxiosError<{
  message: { [key: string]: string };
}>;

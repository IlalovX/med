import { AxiosError } from "axios";

export interface getQualificationSuccessType {
  faculty: string;
  firstDesc: string;
  language: string;
  secondDesc: string;
  title: string;
}

export type getQualificationErrorType = AxiosError<{
  message: { [key: string]: string };
}>;

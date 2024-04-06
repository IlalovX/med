import { AxiosError } from "axios";

export interface getRegulationsSuccessType {
  text: string;
  title: string;
}

export type getRegulationsErrorType = AxiosError<{
  message: { [key: string]: string };
}>;

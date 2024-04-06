import { AxiosError } from "axios";

export interface getStudentsSuccessType {
  description: string;
  images: [string];
  title: string;
}

export type getStudentsErrorType = AxiosError<{
  message: { [key: string]: string };
}>;

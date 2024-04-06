import { AxiosError } from "axios";

export interface getNewsSuccessType {
  createdDate: string;
  description: string;
  flags: [string];
  header: string;
  id: 0;
  language: string;
  photo: string;
}

export type getNewsErrorType = AxiosError<{
  message: { [key: string]: string };
}>;

import { AxiosError } from "axios";

export interface getAdvertSuccessType {
  createdDate: string;
  description: string;
  flags: [string];
  header: string;
  id: 0;
  language: string;
  photo: string;
}

export type getAdvertErrorType = AxiosError<{
  message: { [key: string]: string };
}>;

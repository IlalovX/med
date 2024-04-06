import { AxiosError } from "axios";

export interface getStatuteSuccessType {
  description: string;
  images: [string];
  title: string;
}

export type getStatuteErrorType = AxiosError<{
  message: { [key: string]: string };
}>;

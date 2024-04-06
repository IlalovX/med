import { AxiosError } from "axios";

export interface getCertificatesSuccessType {
  id: number;
  image: string;
  title: string;
}

export type getCertificatesErrorType = AxiosError<{
  message: { [key: string]: string };
}>;

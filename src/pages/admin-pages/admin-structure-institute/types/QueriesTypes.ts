import { AxiosError } from "axios";

export interface getStructureSuccessType {
  title: string;
}

export type getStructureErrorType = AxiosError<{
  message: { [key: string]: string };
}>;

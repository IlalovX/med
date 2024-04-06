import { AxiosError } from "axios";

export interface getInfoSuccessType {
  faculties: number;
  image: string;
  info: string;
  learningProcess: number;
  professors: number;
  students: number;
  title: string;
}

export type getInfoErrorType = AxiosError<{
  message: { [key: string]: string };
}>;

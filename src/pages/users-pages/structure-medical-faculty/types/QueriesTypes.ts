import { AxiosError } from "axios";

export interface getStructureFacultySuccessType {
  dayFrom: string;
  dayTo: string;
  email: string;
  faculty: string;
  firstName: string;
  id: number;
  language: string;
  lastName: string;
  phone: string;
  photo: string;
  timeFrom: string;
  timeTo: string;
}

export type getStructureFacultyErrorType = AxiosError<{
  message: { [key: string]: string };
}>;

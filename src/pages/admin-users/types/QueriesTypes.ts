import { AxiosError } from "axios";

export interface getUsersSuccessType {
  address: string;
  birthDate: string;
  birthPlace: string;
  city: string;
  degree: string;
  email: string;
  endDate: string;
  firstName: string;
  id: number;
  lastName: string;
  phone: string;
  photo: string;
  startDate: string;
  university: string;
}

export type getUsersErrorType = AxiosError<{
  message: { [key: string]: string };
}>;

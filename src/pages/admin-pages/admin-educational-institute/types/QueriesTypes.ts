import { AxiosError } from "axios";

export interface getBuildingsSuccessType {
  id: number;
  image: string;
  title: string;
}

export type getBuildingsRoomErrorType = AxiosError<{
  message: { [key: string]: string };
}>;

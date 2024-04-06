import { AxiosError } from "axios";

export interface getLaboratoryRoomSuccessType {
  id: number;
  image: string;
  title: string;
}

export type getLaboratoryRoomErrorType = AxiosError<{
  message: { [key: string]: string };
}>;

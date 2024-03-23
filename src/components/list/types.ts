import { ReactElement } from 'react';

export type IProps = {
  data: IData[];
  deliveredSeq: number;
  setDeliveredSeq: Function;
};

export type IData = {
  sequence_number: number, 
  eta: string, 
  time_window: string, 
  street: string, 
  zip: string, 
  city: string,
  lat: number,
  lng: number
}
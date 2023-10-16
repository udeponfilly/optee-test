import { Energy } from './energy.models';

export class Consumption {
  id?: number;
  date!: string;
  energyType!: Energy | number;
  quantity!: number;
  cost!: number;
}

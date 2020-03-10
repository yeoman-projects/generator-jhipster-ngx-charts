import { Moment } from 'moment';
import { Country } from 'app/shared/model/enumerations/country.model';
import { Color } from 'app/shared/model/enumerations/color.model';

export interface IProduct {
  id?: number;
  name?: string;
  country?: Country;
  color?: Color;
  quantity?: number;
  price?: number;
  date?: Moment;
}

export class Product implements IProduct {
  constructor(
    public id?: number,
    public name?: string,
    public country?: Country,
    public color?: Color,
    public quantity?: number,
    public price?: number,
    public date?: Moment
  ) {}
}

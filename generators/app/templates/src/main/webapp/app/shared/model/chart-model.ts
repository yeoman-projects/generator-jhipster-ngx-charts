export interface ISerieEntry {
  name?: string;
  value?: number;
}

export class SerieEntry implements ISerieEntry {
  constructor(public name?: string, public value?: number) {}
}

export interface IMultiSerieEntry {
  name?: string;
  series?: ISerieEntry[];
}

export class MultiSerieEntry implements IMultiSerieEntry {
  constructor(public name?: string, public series?: ISerieEntry[]) {}
}

export interface IBubbleEntry {
  name?: string;
  x?: string;
  y?: number;
  r?: number;
}

export class BubbleEntry implements IBubbleEntry {
  constructor(public name?: string, public x?: string, public y?: number, public r?: number) {}
}

export interface IBubbleSerieEntry {
  name?: string;
  series?: ISerieEntry[];
}

export class BubbleSerieEntry implements IBubbleSerieEntry {
  constructor(public name?: string, public series?: IBubbleEntry[]) {}
}

export interface IChart {
  single?: ISerieEntry[];
  multi?: IMultiSerieEntry[];
  bubble?: IBubbleSerieEntry[];
}

export class Chart implements IChart {
  constructor(public single?: ISerieEntry[], public multi?: IMultiSerieEntry[], public bubble?: IBubbleSerieEntry[]) {}
}

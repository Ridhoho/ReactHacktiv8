type CafeSeries = {
  name: string;
  data: number[];
};

export type CafeDetail = {
  id: number;
  cafeId: string;
  chartTitle: string;
  categories: string[];
  series: CafeSeries[];
};

export type CafeWithDetail = {
  id: number;
  cafeId: string;
  name: string;
  city: string;
  province: string;
  sales: number;
  expenses: number;
  detail: CafeDetail | null;
};

export type CafeType = {
  id: number;
  cafeId: string;
  name: string;
  city: string;
  province: string;
  sales: number;
  expenses: number;
};

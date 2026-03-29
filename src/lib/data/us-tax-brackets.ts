// 2024 Federal Income Tax Brackets (Standard for 2025 Filing Season)
// Source: IRS Revenue Procedure 2023-48

export interface TaxBracket {
  rate: number;
  min: number;
  max: number | null;
}

export const TAX_BRACKETS_SINGLE = [
  { rate: 10, min: 0, max: 11600 },
  { rate: 12, min: 11601, max: 47150 },
  { rate: 22, min: 47151, max: 100525 },
  { rate: 24, min: 100526, max: 191950 },
  { rate: 32, min: 191951, max: 243725 },
  { rate: 35, min: 243726, max: 609350 },
  { rate: 37, min: 609351, max: null }
];

export const TAX_BRACKETS_MARRIED_JOINT = [
  { rate: 10, min: 0, max: 23200 },
  { rate: 12, min: 23201, max: 94300 },
  { rate: 22, min: 94301, max: 201050 },
  { rate: 24, min: 201051, max: 383900 },
  { rate: 32, min: 383901, max: 487450 },
  { rate: 35, min: 487451, max: 731200 },
  { rate: 37, min: 731201, max: null }
];

export const STANDARD_DEDUCTION = {
  SINGLE: 14600,
  MARRIED_JOINT: 29200,
  HEAD_OF_HOUSEHOLD: 21900
};

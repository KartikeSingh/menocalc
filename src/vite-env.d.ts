/// <reference types="vite/client" />

interface Question {
  index: number;
  value: string | number;
  selected: number;
  question: string;
  type: number;
  options?: undefined;
  isBmi?:boolean,
}
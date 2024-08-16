export type Dessert = {
  dessertID: string;
  dessertCategory: string;
  dessertName: string;
  dessertPrice: number;
  dessertIllustration: string;
};

export type LayoutProps = {
  children: React.ReactNode;
};

type KeyPropsCart = "add" | "remove" | "empty" | "confirm" | "carbon_neutral";
type KeyPropsQuantity = "increment" | "decrement";

export type KeyProps = {
  kind: KeyPropsCart | KeyPropsQuantity;
  css?: string;
};

export type CardProps = {
  dessertProps: Dessert;
};

export type ImageProps = {
  isThumbnail?: boolean;
  src: string;
  content: string;
  css?: string;
  action?: () => void;
};

interface Text {
  content: string | React.ReactNode | number;
  css?: string;
}

export interface Heading extends Text {
  kind: "h1" | "h2" | "h3";
}

export interface Paragraph extends Text {
  kind: "p" | "span";
}

export interface Link extends Text {
  path: string;
}

export interface TotalPrice {
  total?: number | string;
}

export interface Orders extends TotalPrice {
  title: string;
  quantity: number;
  price: string;
  confirm?: boolean;
  src?: string;
}

export type ActionButton = {
  onclick: () => void;
  content?: string;
};

export type ActionCard = {
  state: boolean;
};

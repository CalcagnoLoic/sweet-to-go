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
};

interface Text {
  content: string | React.ReactNode;
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

export type Orders = {
  title: string;
  quantity: number;
  total?: number | string;
  price: string;
};

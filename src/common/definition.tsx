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
};

export type CardProps = {
  dessertProps: Dessert
}

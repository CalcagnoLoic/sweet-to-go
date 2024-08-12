import { LayoutProps } from "../../definition";

const Layout = ({ children }: LayoutProps) => (
  <div className="mx-8 my-10 md:mx-16 md:mt-20 lg:mx-20 lg:mt-20">
    {children}
  </div>
);

export default Layout

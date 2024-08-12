import { LayoutProps } from "../../definition";

const Layout = ({ children }: LayoutProps) => (
  <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
    {children}
  </div>
);

export default Layout;

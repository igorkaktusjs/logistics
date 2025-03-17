import Header from "./Header";
import Sidebar from "./Sidebar";
import { ReactNode, useMemo } from "react";

interface LayoutProps {
  children: ReactNode;
}

/**
 * Layout component that wraps the application with a header and sidebar.
 */
const Layout = ({ children }: LayoutProps) => {
  const memoizedChildren = useMemo(() => children, [children]);

  return (
    <div className="container max-w-none">
      <Header />
      <div className="layout">
        <Sidebar />
        <div className="content ">{memoizedChildren}</div>
      </div>
    </div>
  );
};

export default Layout;

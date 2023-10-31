import SEO from "./SEO";

const Layout = ({ children }) => {
  return (
    <div className="bg-navyBlueDark min-h-screen">
      <SEO />
      {children}
    </div>
  );
};

//min-h-screen = min-height 100vh

export default Layout;

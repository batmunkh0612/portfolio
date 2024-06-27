const Layout = ({ children }) => {
  return (
    <div className="max-w-[1440px] m-auto p-4 lg:px-20 lg:py-4 md:px-10 md:py-2">
      {children}
    </div>
  );
}

export default Layout;
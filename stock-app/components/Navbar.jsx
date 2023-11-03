const Navbar = () => {
  return (
    <>
      {" "}
      <nav className="h-7 flex justify-center  text-primary items-center">
        <ul className="flex space-x-4 ">
          <li>
            <a className="hover:text-oceanBlueDark" href="/main">
              Home
            </a>
          </li>
          <li className="hover:text-oceanBlueDark">
            <a href="/about/page">About</a>
          </li>
          <li className="hover:text-oceanBlueDark">
            <a href="/stocks/list">Stock list</a>
          </li>
          <li className="hover:text-oceanBlueDark">
            <a href="/news/page">News</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menu = [
    { page: "Portfolio" },
    { page: "About" },
    { page: "Resume" },
    { page: "Contact" },
    { page: "Github" },
    { page: "Linkedin" },
  ];

  return (
    <header className="flex flex-row items-center justify-between h-[70px] fixed bg-white w-full max-w-[100vw] z-[10000]">
      <a
        className="m-2.5 border-4 border-black w-[50px] h-[50px] text-2xl flex justify-center items-center rounded-br-[30%] rounded-tl-[30%] transition-all text-[#333333]"
        href="#"
      >
        PK
      </a>
      <ul className="flex justify-around w-5/12">
        {menu.map((m, i) => (
          <li className="list-none" key={i}>
            <a
              className="no-underline tracking-[2px] uppercase font-bold text-sm relative py-2 text-[#333333] after:bottom-0 after:h-[3px] after:left-1/2 after:absolute after:bg-[#53ed6a] transition-["
              href="#"
            >
              {m.page}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );

  return (
    <header className="flex flex-row items-center justify-between px-4 py-2 sticky top-0 left-0 ml-0 width-full bg-white z-50 duration-200 h-[70px]">
      <a
        className="flex items-center h-10 px-10 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-500 rounded-tl-full rounded-br-full font-bold uppercase italic text-white hover:opacity-90"
        href="/"
      >
        Tech PK
      </a>
      <nav className="hidden sm:flex justify-between items-center gap-12 font-semibold">
        {menu.map((item, i) => (
          <a className="hover:text-gray-500" href="#" key={i}>
            {item.page}
          </a>
        ))}
      </nav>
      <nav className="sm:hidden flex flex-col items-end gap-1 font-semibold">
        <button
          className="sm:hidden font-bold text-xl hover:text-gray-500"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <GrClose /> : <GiHamburgerMenu />}
        </button>
        {showMenu && (
          <React.Fragment>
            {menu.map((item, i) => (
              <a className="hover:text-gray-500" href="#" key={i}>
                {item.page}
              </a>
            ))}
          </React.Fragment>
        )}
      </nav>
    </header>
  );
};
export default Header;

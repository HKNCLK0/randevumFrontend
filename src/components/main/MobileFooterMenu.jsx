import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import { Collapse } from "react-collapse";
import { Link } from "react-router-dom";

const MobileFooterMenu = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="font-Montserrat text-textColor">
      <h6
        onClick={() => setIsOpen(!isOpen)}
        className="text-primary-brand-color flex items-center justify-between font-semibold"
      >
        {title}
        <button className="grid md:hidden w-6 h-6 place-items-center rounded-lg bg-primary-brand-color bg-opacity-10 text-primary-brand-color">
          <span
            className={`transition-all transform ${
              isOpen ? "-rotate-180" : ""
            }`}
          >
            <IoIosArrowDown size={14} />
          </span>
        </button>
      </h6>
      <Collapse isOpened={isOpen}>
        <nav>
          <ul className="grid gap-y-2 md:gap-y-4">
            {items.map((item, index) => (
              <li key={index}>
                <Link to={item.to} className="text-sm hover:text-brand-color">
                  - {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Collapse>
    </div>
  );
};

export default MobileFooterMenu;

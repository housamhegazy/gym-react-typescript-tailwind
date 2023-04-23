import React from "react";
import DUMBLE1 from "../assets/DUMBLE1.png";
type Props = {
  children: string;
};

function Header({ children }: Props) {
  return (
    <div className="flex justify-center">
      <h1 className="relative text-center text-blue-900 font-bold text-3xl mb-[50px] inline-block mx-auto">
        <img
          className="absolute top-[-25%]  left-[-50%]  w-[50px] rotate-90"
          src={DUMBLE1}
        />
        <img
          className="absolute top-[-25%] right-[-50%]  w-[50px] rotate-[-90deg] "
          src={DUMBLE1}
        />
        {children}
      </h1>
    </div>
  );
}

export default Header;

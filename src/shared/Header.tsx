import React from "react";
import DUMBLE from "../assets/DUMBLE.png";
import DUMBLE2 from "../assets/DUMBLE2.png";
type Props = {
  children: string;
};

function Header({ children }: Props) {
  return (
    <div className="flex justify-center">
      <h1 className="relative text-center text-blue-900 font-bold text-3xl mb-[50px] inline-block mx-auto">
        <img
          className="absolute top-[-50%]  left-[-50%]  w-[80px]"
          src={DUMBLE}
        />
        <img
          className="absolute top-[-50%] right-[-50%]  w-[80px] "
          src={DUMBLE2}
        />
        {children}
      </h1>
    </div>
  );
}

export default Header;

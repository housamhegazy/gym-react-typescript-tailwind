import React from "react";
import IMAGE2 from "../../assets/IMAGE2.jpg";
import IMAGE3 from "../../assets/IMAGE3.jpg";
import IMAGE4 from "../../assets/IMAGE4.jpg";
import IMAGE5 from "../../assets/IMAGE5.jpg";
import IMAGE6 from "../../assets/IMAGE6.jpg";
import IMAGE7 from "../../assets/IMAGE7.jpg";
import Htext from "../../shared/Htext";
import Class from "./Class";
import Header from "../../shared/Header";
import { classTypes } from "../../shared/types";
const imageList: Array<classTypes> = [
  {
    img: IMAGE2,
    title: "best trainers in the world",
    description: "three classes per week to make agood shape and good muscels",
  },
  {
    img: IMAGE3,
    title: "best trainers in the world",
    description: "three classes per week to make agood shape and good muscels",
  },
  {
    img: IMAGE4,
    title: "best trainers in the world",
    description: "three classes per week to make agood shape and good muscels",
  },
  {
    img: IMAGE5,
    title: "best trainers in the world",
    description: "three classes per week to make agood shape and good muscels",
  },
  {
    img: IMAGE6,
    title: "best trainers in the world",
    description: "three classes per week to make agood shape and good muscels",
  },
  {
    img: IMAGE7,
    title: "best trainers in the world",
    description: "three classes per week to make agood shape and good muscels",
  },
  {
    img: IMAGE2,
    title: "best trainers in the world",
    description: "three classes per week to make agood shape and good muscels",
  },
  {
    img: IMAGE2,
    title: "best trainers in the world",
    description: "three classes per week to make agood shape and good muscels",
  },
];
type Props = {};

const Classes = (props: Props) => {
  return (
    <div id="classes" className=" bg-blue-100 py-10">
      <Header>Classes</Header>
      <div className="w-full mx-auto container overflow-x-auto overflow-y-hidden ">
        <ul className="flex w-[2000px] gap-8">
          {imageList.map((item: classTypes, index) => {
            return (
              <Class
                key={`${item.title}-${index}`}
                image={item.img}
                title={item.title}
                desc={item.description}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Classes;

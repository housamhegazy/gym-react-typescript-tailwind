import React from "react";
import KARAMGABER from "../../assets/KARAMGABER.jpg";
import BIGRAMI from "../../assets/BIGRAMI.jpg";
import MOSTAFA from "../../assets/MOSTAFA.jpg";
import Header from "../../shared/Header";
interface TrainersType {
  name: string;
  desc: string;
  imgURL: string;
}
const trainersData: Array<TrainersType> = [
  {
    name: "Karam Gaber",
    desc: "Unrealistic timelines to transform a physique safely and successfully are a recipe for disaster that may lead harm. While the world is full of overnight transformation promises, the reality is that developing a muscular, symmetrical, and proportional physique with striated muscle bellies and eye-popping veins in a safe manner requires patience, sacrifice, dedication, discipline, and hard work.",
    imgURL: `${KARAMGABER}`,
  },
  {
    name: "BIG RAMI",
    desc: "Besides educating clients, physique coaches also must perform various assessments (health, physique, fitness, etc.), design nutrition/exercise/supplementation programs",
    imgURL: `${BIGRAMI}`,
  },
  {
    name: " MOSTAFA",
    desc: "Unrealistic timelines to transform a physique safely and successfully are a recipe for disaster that may lead harm. While the world is full of overnight transformation promises, the reality is that developing a muscular, symmetrical, and proportional physique with striated muscle bellies and eye-popping veins in a safe manner requires patience, sacrifice, dedication, discipline, and hard work.",
    imgURL: `${MOSTAFA}`,
  },
];
const Trainers = () => {
  return (
    <div id="trainers" className="mx-auto bg-blue-200 px-5 py-5">
      <Header>Trainers</Header>
      {trainersData.map((coatch: TrainersType, index) => {
        return (
          <div
            key={index}
            className="md:flex justify-between items-center gap-8 border-b border-blue-900 mt-5"
          >
            <div className="basis-3/5 pl-5">
              <h1 className="text-xl text-blue-900 font-bold mb-4">
                {coatch.name}
              </h1>
              <p>{coatch.desc}</p>
            </div>
            <div className="basis-2/5 overflow-hidden rounded-tl-[50%] rounded-br-[50%] mb-5">
              <img
                src={coatch.imgURL}
                className="max-w-[50%] md:max-w-full mx-auto"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Trainers;

import React from "react";
import KARAMGABER from "../../assets/KARAMGABER.jpg";
import BIGRAMI from "../../assets/BIGRAMI.jpg";
import MOSTAFA from "../../assets/MOSTAFA.jpg";
import Header from "../../shared/Header";
import { motion } from "framer-motion"
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
    <div id="trainers" className="mx-auto bg-blue-200 px-5 pt-[50px]">
      <Header>Trainers</Header>
      {trainersData.map((coatch: TrainersType, index) => {
        return (
          <div
            key={index}
            className="md:flex justify-between items-center gap-8 border-b border-blue-900 mt-5"
          >
            <motion.div className="basis-3/5 pl-5" 
            initial='hidden'
            whileInView={'visible'}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
            }}
          
            >
              <h1 className="text-xl text-blue-900 font-bold mb-4">
                {coatch.name}
              </h1>
              <p>{coatch.desc}</p>
            </motion.div>
            <motion.div className="basis-2/5 overflow-hidden rounded-tl-[50%] rounded-br-[50%] mb-5"
              initial='hidden'
              whileInView={'visible'}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 }
              }}
            >
              <img
                src={coatch.imgURL}
                className="max-w-[50%] md:max-w-[70%] mx-auto"
              />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};
export default Trainers;

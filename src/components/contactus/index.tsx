import React from "react";
import CONTACTUS from "../../assets/CONTACTUS.jpg";
import Htext from "../../shared/Htext";
import Header from "../../shared/Header";
import { useForm, SubmitHandler } from "react-hook-form";
type Props = {};

type FormData = {
  name: string;
  email: string;
  textarea:string
};
const ContactUs = (props: Props) => {
  const { register, trigger, formState: { errors } } = useForm<FormData>();
  const onSubmit = async(e:any)=>{
    const isValid = await trigger();
    if(!isValid){
      e.preventDefault()
    }
  };  
  return (
    <div id="contactus" className="my-5 container mx-auto ">
      <Header>Contact Us</Header>
      <div className="lg:flex gap-8 justify-between items-center w-full">
        <div className="basis-2/5 mb-5">
          <form
            onSubmit={onSubmit}
            action="https://formsubmit.co/geohousam2@gmail.com"
            method="POST"
            className="flex flex-col w-full gap-4 px-2"
          >
            <input
              {...register("name", {
                required: { value: true, message: " name is required" },
                maxLength: { value: 20, message: "Max-length 20 letter" },
              })}
              type="text"
              placeholder="name"
              className="bg-blue-300 rounded-full px-3 py-2 w-full placeholder:text-gray-500"
            />
            {errors.name && <p className="text-[red]">{errors.name.message}</p>}

            <input
              {...register("email", {
                required: { value: true, message: " email is required" },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "email is wrong",
                },

              })}
              type="text"
              placeholder="email"
              className="bg-blue-300 rounded-full px-3 py-2 w-full placeholder:text-gray-500"
            />
            {errors.email && <p className="text-[red]">{errors.email.message}</p>}

            <textarea
            {...register("textarea", {
              required: { value: true, message: " message is required" },
              minLength: {
                value: 200,
                message: "at least 200 letter",
              },

            })}
              rows={5}
              cols={10}
              placeholder="message"
              className="bg-blue-300 rounded px-3 py-2 w-full placeholder:text-gray-500"
            />
            {errors.textarea && <p className="text-[red]">{errors.textarea.message}</p>}
            <button className="bg-blue-900 text-white px-4 py-2 rounded mx-auto">
              Send
            </button>
          </form>
        </div>
        <div className="basis-3/5">
          <img
            src={CONTACTUS}
            alt="CONTACTUS"
            className="w-full mx-auto px-2"
          />
        </div>
      </div>
    </div>
  );
};
export default ContactUs;

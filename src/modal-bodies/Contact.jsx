import React, { useRef, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef(null);
  const publicKey_ = import.meta.env.VITE_PUBLIC_KEY;
  const service = import.meta.env.VITE_SERVICE;
  const template = import.meta.env.VITE_TEMPLATE;
  const [fields, setFields] = useState({name:"",email:"",message:""})

  const sendEmail = () => {
    let didEmailSend = false;
    emailjs
      .sendForm(service, template, formRef.current, { publicKey: publicKey_ })
      .then(
        () => {
          didEmailSend = true;
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );

    return didEmailSend;
  };

  const handleSumbit = (e) => {
    e.preventDefault()
    if(fields.name == "" || fields.message == "" || fields.email == "") {
        toast.error("Please fill out all fields", {position: 'top-center', autoClose: 3000, theme: "dark"})
        return
    }
    const formSent = sendEmail()
    if (formSent) {
      toast.success("Your message was sent!", {position: 'top-center', autoClose: 3000, theme: "dark"})
    }
    else {
      toast.error("The messaging service is currently down", {position: 'top-center', autoClose: 3000, theme: "dark"})
    }
  }

  const clearFields = () => {
    setFields({name:"",email:"",message:""})
  }

  return (
    <div className="pt-3 px-3">
      <form action="" className="max-w-[700px] mx-auto" ref={formRef} >
        <div className="flex justify-between items-center border-b border-[#434343] pb-3">
          <button className="text-sm bg-blue-600 hover:bg-opacity-75 transition-all py-1.5 px-3 rounded-sm" onClick={(e) => handleSumbit(e)}>
            Send Message
          </button>
          <span className="text-lg text-[#dddddd] cursor-pointer hover:opacity-80 transition-all" onClick={clearFields}>
            <FaRegTrashAlt />
          </span>
        </div>
        <div className="mt-3">
          <label htmlFor="" className="mr-3 block text-sm">
            Name:
          </label>
          <input
            type="text"
            name="user_name"
            value={fields.name}
            onChange={(e) => setFields((prev) => ({...prev, name: e.target.value}))}
            className="border-none outline-none px-3 py-1.5 w-full bg-[#1c1c1c] mt-2 text-sm"
            placeholder="John Doe"
          />
        </div>
        <div className="mt-3">
          <label htmlFor="" className="mr-3 block text-sm">
            Your Email:
          </label>
          <input
            type="text"
            name="user_email"
            onChange={(e) => setFields((prev) => ({...prev, email: e.target.value}))}
            value={fields.email}
            className="border-none outline-none px-3 py-1.5 w-full bg-[#1c1c1c] mt-2 text-sm"
            placeholder="email@email.com"
          />
        </div>
        <div className="mt-3">
          <label htmlFor="" className="mr-3 block text-sm">
            Your Message:
          </label>
          <textarea
          value={fields.message}
          onChange={(e) => setFields((prev) => ({...prev, message: e.target.value}))}
            type="text"
            name="user_name"
            className="border-none outline-none px-3 py-1.5 w-full bg-[#1c1c1c] mt-2 text-sm h-[120px] resize-none rounded-sm"
            placeholder="Hello World."
          />
        </div>
      </form>
    </div>
  );
}
import { Mail, Phone, MapPin } from 'lucide-react';
import { SiGithub, SiLinkedin } from "react-icons/si";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

function ContactMe() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    toast.loading("Sending message...");
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.dismiss();
          toast.success("Message sent successfully 🚀");
          e.target.reset();
        },
        (error) => {
          toast.dismiss();
          toast.error("Failed to send message ❌");
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <section className="relative flex flex-col min-h-screen px-6 sm:px-10 bg-gradient-to-br from-[#1e0e2b] via-[#261a39] to-[#36244d] text-white overflow-hidden">

      {/* Radial glow background */}
      <div className="inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.2)_0%,transparent_70%)]" />
      <h1 className="text-center mt-8 text-4xl sm:text-5xl font-bold mb-2 bg-[linear-gradient(45deg,_#ff00b4,_#6a00ff)] bg-clip-text text-transparent w-full p-2">
        Get in Touch
      </h1>
      <p className="text-center text-gray-300 mb-10">
        Got a project idea or just want to say hi?
      </p>
      <div className='flex flex-col md:flex-row w-full'>
        <div className="relative z-10 p-6 md:p-0 w-full">
          <h2 className="text-2xl font-semibold mb-4">Let’s connect!</h2>
          <div className="flex flex-col gap-4 text-gray-300">
            <div className="flex items-center gap-2">
              <Mail size={20} className="text-purple-400" />
              <span>guptayash.hg@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={20} className="text-purple-400" />
              <span>+91 93993 06408</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-purple-400" />
              <span>India,Chattisgarh</span>
            </div>
          </div>

          <h3 className='mt-5 font-semibold'>Follow Me</h3>
          {/* Social Icons */}
          <div className="mt-4 flex gap-6">
            <a href="https://github.com/Yash-gupta-3732" className="hover:text-purple-400 transition-colors"><SiGithub size={24} /></a>
            <a href="https://www.linkedin.com/in/yash-gupta-004499256/" className="hover:text-purple-400 transition-colors"><SiLinkedin size={24} /></a>
          </div>
        </div>
        <div className="z-10 mb-4 w-full backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 bg-[linear-gradient(45deg,_#ff00b4,_#6a00ff)] bg-clip-text text-transparent">
            Contact Me
          </h2>

          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5 ">
            <div className="relative">
              <input
                type="text"
                id="name"
                name='from_name'
                required
                className="w-full px-4 pt-5 pb-2 text-white bg-black/10 border border-white/20 rounded-md focus:border-purple-400 focus:outline-none peer"
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-2.5 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-purple-400"
              >
                Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name='from_email'
                required
                className="w-full px-4 pt-5 pb-2 text-white bg-black/10 border border-white/20 rounded-md focus:border-purple-400 focus:outline-none peer"
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-2.5 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-purple-400"
              >
                Email
              </label>
            </div>

            <div className="relative">
              <textarea
                id="message"
                name='message'
                rows="4"
                required
                className="w-full px-4 pt-5 pb-2 text-white bg-black/10 border border-white/20 rounded-md focus:border-purple-400 focus:outline-none peer resize-none"
              />
              <label
                htmlFor="message"
                className="absolute left-4 top-2.5 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-purple-400"
              >
                Message
              </label>
            </div>
            <input
              type="hidden"
              name="subject"
              value="New message from portfolio by {{from_name}}"
            />
            <button
              type="submit"
              className="mt-4 px-6 py-3 bg-[linear-gradient(45deg,_#ff00b4,_#6a00ff)] rounded-md font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

    </section>
  );
}

export default ContactMe;

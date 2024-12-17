"use client"
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { FaDiscord, FaPaperPlane, FaPatreon, FaYoutube } from "react-icons/fa";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import Footer from "@/components/Footer";
import { sendEmail } from '@/actions/EmailSend';


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // console.log(formData);
    
    setFormData({ name: '', email: '', subject: '', message: '' });
  };


  return (
    <>
    <div className=" max-w-full p-5  leading-8  scroll-mt-28 flex flex-col bg-light-background dark:bg-dark-background h-screen overflow-auto">
        <div className="">
          <h2 className="text-3xl font-medium capitalize mb-8 text-left text-light-accent dark:text-dark-accent">Contact</h2>
          <div className="text-center">
            <p className="font-semibold text-xl">Get In Touch With Me!</p>
            <div className="font-medium">Your message is the key to unlocking our potential.</div>
          </div>
          <div className="grids">
            <div className="contact-info">
              <p className=" text-center font-medium text-base ">
                I&apos;m currently available to take on new projects. Feel free to send me a message about anything you want to discuss or hire me.
              </p>
              <h4 className="text-center hover:text-dark-secondary dark:hover:text-light-secondary">
                <a href="mailto:bhikhapurmustafa@gmail.com">bhikhapurmustafa@gmail.com</a>
              </h4>
              <div className="text-center">
                <h5 className="text-light-accent dark:text-dark-accent font-medium text-lg">Socials</h5>
                <div className="flex gap-5 text-2xl justify-center m-2 ">
                  <a href="https://github.com/B-Mustafa" className="transition-all hover:text-dark-accent dark:hover:text-light-accent hover:scale-125">
                    <AiFillGithub />
                  </a>
                  <a href="https://discord.com/users/790966930043305984" className="transition-all hover:text-dark-accent dark:hover:text-light-accent hover:scale-125">
                    <FaDiscord />
                  </a>
                  <a href="https://www.instagram.com/_mustafa_0203/?igshid=MzNINGNkZWQ4Mg%3D%3D" className="transition-all hover:text-dark-accent dark:hover:text-light-accent hover:scale-125">
                    <AiFillInstagram />
                  </a>
                  <a href="https://www.patreon.com/_Mustafa" className="transition-all hover:text-dark-accent dark:hover:text-light-accent hover:scale-125">
                    <FaPatreon />
                  </a>
                  <a href="https://www.youtube.com/@MUSTAFA-up2ej" className="transition-all hover:text-dark-accent dark:hover:text-light-accent hover:scale-125">
                    <FaYoutube />
                  </a>
                </div>
              </div>
             </div>
    <div className="new-contact-form max-w-2xl mx-auto">
    <form  action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
          setFormData({ name: '', email: '', subject: '', message: '' });
          setIsSubmitting(false);
        }}
            >
      <label htmlFor="name" className="block text-light-primary dark:text-dark-primary text-sm font-bold mb-2">
        Your Name:
      </label>
      <input
        name="name"
        type="text"
        required
        maxLength={500}
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="bg-light-background dark:bg-dark-background w-full p-3 border border-light-accent dark:border-dark-accent  rounded focus:outline-none focus:border-light-accent dark:focus:border-dark-accent"
        />

      <label htmlFor="email" className="block text-light-primary dark:text-dark-primary text-sm font-bold mb-2">
        Your Email:
      </label>
      <input
        name="senderEmail"
        type="email"
        required
        maxLength={500}
        placeholder="Your email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="bg-light-background dark:bg-dark-background w-full p-3 border border-light-accent dark:border-dark-accent  rounded focus:outline-none focus:border-light-accent dark:focus:border-dark-accent"
        />

      <label htmlFor="subject" className="block text-light-primary dark:text-dark-primary text-sm font-bold mb-2">
        Subject:
      </label>
      <input
        name="subject"
        type="text"
        required
        maxLength={500}
        placeholder="Your Subject"
        value={formData.subject}
        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        className="bg-light-background dark:bg-dark-background w-full p-3 border border-light-accent dark:border-dark-accent  rounded focus:outline-none focus:border-light-accent dark:focus:border-dark-accent"
        />

      <label htmlFor="message" className="block text-light-primary dark:text-dark-primary text-sm font-bold mb-2">
        Message:
      </label>
      <textarea
        name="message"
        placeholder="Your message"
        required
        maxLength={5000}
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="bg-light-background dark:bg-dark-background w-full p-3 border border-light-accent dark:border-dark-accent  rounded focus:outline-none focus:border-light-accent dark:focus:border-dark-accent"
        />

      <button
        type="submit"
        className=" w-48 flex items-center  justify-evenly bg-light-secondary dark:bg-dark-secondary text-white p-3 rounded-md dark:hover:bg-dark-accent hover:bg-light-accent focus:outline-none focus:shadow-light-accent dark:focus:shadow-dark-accent"
        >
        Send Message <FaPaperPlane/>
      </button>
    </form>
  </div>
            
          </div>
        </div>
        <div className="mt-5">
      <Footer/>
        </div>
      </div>
    </>
);
}; 


export default Contact;

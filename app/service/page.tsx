"use client"
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import React from "react";

interface Service {
  title: string;
  description: string;
}

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};


const servicesData: Service[] = [
  {
    title: 'Web Development',
    description: 'Create responsive and dynamic websites tailored to your needs.',
  },
  {
    title: 'UI/UX Design',
    description: 'Craft visually appealing and user-friendly interfaces for your projects.',
  },
  {
    title: 'SEO Optimization ',
    description: 'Optimize your website to rank higher on search engines and increase traffic.',
  },
  {
    title: 'Web Hosting',
    description: 'Host your website on a secure and fast server.',
  },
  {
    title: 'Maintenance',
    description: 'Keep your website up to date and secure.',
  },
  {
    title: 'E-Commerce',
    description: 'Build an online store to sell your products.',
  },
  
  {
    title: 'Database Management',
    description: 'Store and manage your data in a secure and efficient way.',
  },
];

const ServiceComponent: React.FC = () => {
  return (
    <section className="container mx-auto p-8 max-w-full text-center leading-8 scroll-mt-28 flex flex-col bg-light-background dark:bg-dark-background h-screen overflow-auto">
      <h2 className="text-3xl font-medium capitalize mb-8 text-left text-light-accent dark:text-dark-accent">Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <motion.div
            className="dark:bg-dark-background bg-light-background border border-light-accent text-light-text dark:text-dark-text p-7 shadow-md shadow-dark-primary dark:shadow-light-primary rounded  "
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: false,
            }}
            custom={index}
          >
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-light-text dark:text-dark-text">{service.description}</p>
          </motion.div>
        ))}
      </div>
     
    </section>
  );
};

export default ServiceComponent;

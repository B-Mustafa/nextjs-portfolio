"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  const name = formData.get("name");
  const subject = formData.get ("subject");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  if (!validateString(name , 5000)){
    return{
        error: "Invalid Name"
    }
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact@mustafabhikhapur.me",
      to: "bhikhapurmustafa@gmail.com",
      subject: `${subject}`,
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
          message: message,
          senderEmail: senderEmail,
          name: name,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};

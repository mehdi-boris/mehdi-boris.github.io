import { useNav } from "../hooks/useNav"
import '../IndexSimpleSection.css'
import '../Form.css'
import '../ButtonResume.css'
import { AiOutlineLinkedin } from "react-icons/ai";
import '../Icons.css'
import { useForm } from "react-hook-form"
import emailjs from "@emailjs/browser"
import React, { useState, useEffect } from 'react';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const contactRef = useNav("Contact");

  useEffect(() => {
    if (isSubmitted) {
    }
  }, [isSubmitted]);

  const onSubmit = (data) => {
    emailjs.send(
      'service_7swkjpl',
      'template_bdatl6n',
      {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message
      },
      '2c4hYCj7GjQKacNkv'
    )
    setIsSubmitted(true);
  };

  return (
    <section ref={contactRef} id="contactSection" className="simple-section">
      <h2 className="title">Stay in touch</h2>
      <div className='contact'>
        <div className='container'>
          <div className="basic">
            <span className='line'></span>
            <p className="text-white">I'm open to exploring and implementing fresh ideas and projects.</p>
            <p className="text-white">Let's talk and find a fit.</p>
            <div style={{ margin: '20px' }}>
              <a href="https://www.linkedin.com/in/mehdi-boris-bouhali-b71a58159/" target="_blank" rel="noopener noreferrer">
                <AiOutlineLinkedin size={42} style={{ color: '#00ffffff' }} />
              </a>
            </div>
          </div>
          <form className='col-2' onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true })} type="text" placeholder="Name" />
            {errors.name && <p className="text-missing">Name is required</p>}
            <input {...register("email", { required: true })} type="email" placeholder="Email" />
            {errors.email && <p className="text-missing">Email is required</p>}
            <input {...register("subject", { required: true })} placeholder="Subject" />
            {errors.subject && <p className="text-missing">Subject is required</p>}
            <textarea {...register("message", { required: true })} rows={3} placeholder="Message" />
            {errors.message && <p className="text-missing">Message is required</p>}
            <button className='button-resume'>Send</button>
            {isSubmitted && (
            <div>
              <p className="text-green" style={{ fontWeight: 'bold' }}>Thank you for submitting the form!</p>
            </div>
          )}
          </form>
        </div>
      </div>
      <p className="text-white" style={{ fontSize: '12px' }}>Copyright 2024. All rights reserved by Mehdi-Boris Bouhali.</p>
    </section>
  );
}

export default Contact;

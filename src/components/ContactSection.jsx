import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react'
import React from 'react'
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import ContactForm from './ContactForm';



const ContactSection = () => {

    const [issending, setissending] = useState(false);
    const handleSubmit = (e)=>{
        e.preventDefault()
        setissending(true);

        setTimeout(() => {
            toast('Your message have been sent!');
            setissending(false);
        }, 1500);
    }


    return (
        <section id='contact' className='py-24 px-4 relative bg-secondary/30'>
            <Toaster />
            <div className='container mx-auto max-w-5xl'> 
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Get In <span className='text-primary'>Touch</span></h2>
                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    Have a project in mind or want to collaborate? Feel free to reach out. 
                    i'm always open to dicussing new opportunities.
                </p>
                <div className=''>
                        <ContactForm/>
                </div>
            </div>
            
        </section>
    )
}

export default ContactSection

"use client"
import { useState, useRef } from "react";
import { toast } from "react-hot-toast";

export default function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: ""
    });
    
    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            toast.error("Please fill all required fields");
            return;
        }
        
        setIsSubmitting(true);
        const loadingToast = toast.loading(
            "Submitting your request...",
            { position: "top-center" }
        );
        
        try {
            const form = new FormData();
            
            // Append all form fields
            Object.entries(formData).forEach(([key, value]) => {
                form.append(key, value);
            });
            
            form.append("formType", "contact"); 
            
            const response = await fetch("/api/send-email", {
                method: "POST",
                body: form,
            });
            
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Failed to send email");
            }
            
            // Success
            toast.dismiss(loadingToast);
            toast.success("Message sent successfully! We'll get back to you soon.", {
                duration: 5000,
                position: "top-center",
            });
            
            // Reset form
            setFormData({
                name: "",
                email: "",
                company: "",
                message: ""
            });
            
        } catch (error) {
            toast.dismiss(loadingToast);
            toast.error("There was an error submitting the form. Please try again.", {
                duration: 5000,
                position: "top-center",
            });
            console.error("Form submission error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactMethods = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
            ,
            contact: <a className='text-blue-600 hover:underline transition-colors' href="mailto:support@quiratech.com">support@quiratech.com</a>,
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                </svg>
            ,
            contact: <a className='text-blue-600 hover:underline transition-colors' href="tel:+234816966136">+234 (816) 966-136</a>
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
            ,
            contact: "Off Ikorodu Rd, Fadeyi Lagos Nigeria"
        },
    ];

    return (
        <main className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
                    <div className="max-w-lg space-y-3">
                        <h3 className="text-indigo-600 font-semibold text-center justify-center">
                            Contact Us
                        </h3>
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Let us know how we can help to transform your business
                        </p>
                        <p>
                            We&apos;re here to help and answer any question you might have. We look forward to hearing from you! Please fill out the form, or use the contact information below.
                        </p>
                        <div>
                            <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                                {
                                    contactMethods.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-x-3">
                                            <div className="flex-none text-gray-400">
                                                {item.icon}
                                            </div>
                                            <p>{item.contact}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5"
                        >
                            <div>
                                <label className="font-medium">
                                    Full name
                                </label>
                                <input
                                    type="text"
                                    required
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium">
                                    Company
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full mt-2 capitalize px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium">
                                    Message
                                </label>
                                <textarea 
                                    name="message" 
                                    required 
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150 disabled:opacity-70"
                            >
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
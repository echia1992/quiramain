"use client"
import { useState, useRef } from "react";
import { toast } from "react-hot-toast";

const  CareerForm =()=> {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const fileInputRef = useRef(null);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        qualification:"",
        role: "",
        experience: "",
        salary: "",
        message: "",
        cvFile: null
    });
    
    // Available job positions (you can modify this list)
    const jobPositions = [
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
        "UI/UX Designer",
        "Project Manager",
        "DevOps Engineer",
        "Mobile Developer",
        "Other"
    ];
    const education = [
        "SSCE",
        "Professional Cert",
        "Bachelor Degree",
        "MSC / MBA",
        "Other"
    ];
    
    // Experience options
    const experienceOptions = [
        "0-1 years",
        "1-3 years",
        "3-5 years",
        "5-10 years",
        "10+ years"
    ];
    
    const salaryExpectation = [
        "50,000 - 95,000",
        "100,000 - 150,000",
        "160,000 - 200,000",
        "250,000 - 300,000",
        "500,000 - 1m"
    ];
    
    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    // Handle file upload
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        
        if (file) {
            // Check file type
            const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            if (!validTypes.includes(file.type)) {
                toast.error("Please upload a PDF or Word document");
                fileInputRef.current.value = "";
                return;
            }
            
            // Check file size (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                toast.error("File size exceeds 5MB limit");
                fileInputRef.current.value = "";
                return;
            }
            
            setFormData(prev => ({
                ...prev,
                cvFile: file
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Basic validation
        if (!formData.fullName || !formData.email || !formData.role || !formData.cvFile) {
            toast.error("Please fill all required fields and upload your CV");
            return;
        }
        
        setIsSubmitting(true);
        const loadingToast = toast.loading(
            "Submitting your application...",
            { position: "top-center" }
        );
        
        try {
            const form = new FormData();
            
            // Append all form fields
            Object.entries(formData).forEach(([key, value]) => {
                if (key !== "cvFile" && value !== null) {
                    form.append(key, value);
                }
            });
            
            // Append CV file
            if (formData.cvFile) {
                form.append("cvFile", formData.cvFile);
            }
            
            form.append("formType", "career");
            
            const response = await fetch("/api/send-email", {
                method: "POST",
                body: form,
            });
            
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Failed to send application");
            }
            
            // Success
            toast.dismiss(loadingToast);
            toast.success("Application submitted successfully! We'll review your profile and get back to you soon.", {
                duration: 5000,
                position: "top-center",
            });
            
            // Reset form
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                role: "",
                experience: "",
                salary: "",
                qualification:"",
                message: "",
                cvFile: null
            });
            
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
            
        } catch (error) {
            toast.dismiss(loadingToast);
            toast.error("There was an error submitting your application. Please try again.", {
                duration: 5000,
                position: "top-center",
            });
            console.error("Form submission error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-block px-2 py-1 text-sm text-indigo-600 font-semibold bg-indigo-50 rounded-full">
                        Join Our Team
                    </span>
                    <h2 className="text-gray-800 text-3xl font-bold sm:text-4xl mt-3">
                        Apply for an Open Position
                    </h2>
                    <p className="text-gray-600 mt-4">
                        We&apos;re always looking for talented individuals to join our team. Submit your application and let&apos;s create amazing solutions together.
                    </p>
                </div>
                
                <div className="max-w-4xl mx-auto">
                    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                        <div className="space-y-6">
                            {/* Personal Information Section */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                    Personal Information
                                </h3>
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            required
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="johndoe@example.com"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+123 456 7890"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                            </div>
                            
                            {/* Job Interest Section */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                    Job Interest
                                </h3>
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Position <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            name="role"
                                            required
                                            value={formData.role}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        >
                                            <option value="">Select a position</option>
                                            {jobPositions.map((position, idx) => (
                                                <option key={idx} value={position}>{position}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Years of Experience
                                        </label>
                                        <select
                                            name="experience"
                                            value={formData.experience}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        >
                                            <option value="">Select experience level</option>
                                            {experienceOptions.map((option, idx) => (
                                                <option key={idx} value={option}>{option}</option>
                                            ))}
                                        </select>
                                    </div>
                                   
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Stack Level
                                        </label>
                                        <select
                                            name="qualification"
                                            value={formData.education}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        >
                                            <option value="">Select educational level</option>
                                            {education.map((option, idx) => (
                                                <option key={idx} value={option}>{option}</option>
                                            ))}
                                        </select>
                                    </div>
                                   
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Salary Expectation
                                        </label>
                                        <select
                                            name="salary"
                                            value={formData.salaryExpectation}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        >
                                            <option value="">Select salary range</option>
                                            {salaryExpectation.map((option, idx) => (
                                                <option key={idx} value={option}>{option}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            
                            {/* CV Upload Section */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                    Upload Your CV
                                </h3>
                                <div className="rounded-lg border-2 border-dashed border-gray-300 px-6 py-8 text-center">
                                    <div className="mb-4">
                                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    
                                    <input
                                        id="cv-file"
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                        className="hidden"
                                        accept=".pdf,.doc,.docx"
                                    />
                                    
                                    <label
                                        htmlFor="cv-file"
                                        className="cursor-pointer rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none"
                                    >
                                        Upload CV
                                    </label>
                                    
                                    <p className="mt-2 text-sm text-gray-500">PDF or Word Document (Max 5MB)</p>
                                    
                                    {formData.cvFile && (
                                        <div className="mt-4 flex items-center justify-center text-sm text-gray-500">
                                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>{formData.cvFile.name} ({(formData.cvFile.size / (1024 * 1024)).toFixed(2)} MB)</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            
                            {/* Additional Information */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Additional Information
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    placeholder="Tell us why you're interested in this position and what makes you a great candidate..."
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                ></textarea>
                            </div>
                            
                            {/* Submit Button */}
                            <div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm font-medium disabled:opacity-70"
                                >
                                    {isSubmitting ? "Submitting Application..." : "Submit Application"}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CareerForm;
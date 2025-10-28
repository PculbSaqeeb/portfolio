// import Button from './Button'
// import InputField from './InputField'
// import TextAreaField from './TextAresField'
// import { useContext, useState } from 'react';
// import { DataContext } from '../context/dataContext';
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { contactFormSchema } from '../constant/formSchema/contactSchema';
// import { motion } from 'framer-motion';

// const BASE_URL = import.meta.env.VITE_BASE_URL;


// const ContactCard = () => {
//     const { portfolioData } = useContext(DataContext);
//     const [budget, setBudget] = useState(10000);
//     const [successfull, setSuccessfull] = useState(false);
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//         reset,
//     } = useForm({
//         resolver: zodResolver(contactFormSchema),
//     });

//     const min = 10000;
//     const max = 100000;

//     const handleChange = (e) => {
//         setBudget(Number(e.target.value));
//     };


//     const onSubmit = async (data) => {
//         const formData = {
//             ...data,
//             budget,
//         };

//         try {
//             const response = await fetch(`${BASE_URL}/api/contact-form/send`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });

//             const result = await response.json();

//             if (result.success) {
//                 setSuccessfull(true);
//             }

//             window.scrollTo({
//                 top: 0,
//                 behavior: "smooth",
//             });

//             setBudget(10000);
//             reset();
//         } catch (error) {
//             console.error("Error sending contact form:", error);
//         }
//     };

//     return (

//         <div className='flex justify-center px-4 sm:px-6'>

//             {successfull === false ? (<div className='p-[40px] w-full lg:w-auto rounded-xl shadow-[1px_1px_10px_rgba(0,0,0,0.3)] dark:border dark:border-gray-600 backdrop-blur-xl dark:bg-black/10'>
//                 <motion.p
//                     initial={{ opacity: 0, y: 50 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.2, ease: "easeIn", delay: 0.2 }}
//                     viewport={{ once: true, amount: 0.2 }}
//                     className='text-lg sm:text-xl font-semibold'>Send me a message</motion.p>
//                 <motion.p
//                     initial={{ opacity: 0, y: 50 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.2, ease: "easeIn", delay: 0.2 }}
//                     viewport={{ once: true, amount: 0.2 }}
//                     className='text-sm sm:text-base mt-2'>Fill out the form below and I'll get back to you as soon as possible.</motion.p>

//                 <form onSubmit={handleSubmit(onSubmit)} className='mt-4 sm:mt-6'>
//                     <InputField
//                         register={register}
//                         errors={errors}
//                         label="Name"
//                         name="name"
//                         placeholder="John Deo"
//                     />
//                     <InputField
//                         register={register}
//                         errors={errors}
//                         label="Email"
//                         type="email"
//                         name="email"
//                         placeholder="john@example.com"
//                     />
//                     <InputField
//                         register={register}
//                         errors={errors}
//                         label="Subject"
//                         name="subject"
//                         placeholder="Project inquiry"
//                     />

//                     <motion.div
//                         initial={{ opacity: 0, y: 50 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.2, ease: "easeIn", delay: 0.2 }}
//                         viewport={{ once: true, amount: 0.2 }}
//                         className="w-full mt-3 relative">
//                         <p>
//                             Set Your Budget <span className="text-red-500"> *</span>
//                         </p>
//                         {/* <div
//                             className="absolute -top-0 transform mt-8 -translate-x-1/2"
//                             style={{ left: `${percentage}%` }}
//                         >
//                             <span className="bg-black text-white px-2 py-1 rounded-md text-sm">
//                                 ${budget.toLocaleString()}
//                             </span>
//                         </div> */}



//                         <input
//                             type="range"
//                             min={min}
//                             max={max}
//                             value={budget}
//                             onChange={handleChange}
//                             aria-label="Select Budget Range"
//                             aria-valuemin="10000"
//                             aria-valuemax="100000"
//                             aria-valuenow={budget}
//                             className="w-full appearance-none h-[2px] bg-gray-600 rounded-full outline-none cursor-pointer accent-black dark:accent-gray-300 mt-2"
//                         />

//                         <div className="flex justify-between text-sm text-gray-600 dark:text-white mt-2">
//                             <span>${min.toLocaleString()}</span>
//                             <span>${max.toLocaleString()}</span>
//                         </div>

//                         <div className="text-center mt-4 text-lg font-semibold ">
//                             Selected Budget: ${budget.toLocaleString()}
//                         </div>
//                     </motion.div>

//                     <TextAreaField
//                         register={register}
//                         errors={errors}
//                         label="Project Description"
//                         name="projectDescription"
//                         placeholder="Write your message here..."
//                     />


//                     <motion.div
//                         initial={{ opacity: 0, y: 50 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.2, ease: "easeIn", delay: 0.2 }}
//                         viewport={{ once: true, amount: 0.2 }}
//                         className='flex items-center justify-center'>
//                         <button aria-label='Send Message' className='px-5 py-2 rounded-full mt-4 dark:bg-gradient-to-r dark:from-purple-400 dark:via-indigo-400 dark:to-blue-500 cursor-pointer bg-black text-white'>
//                             Send Message
//                         </button>
//                     </motion.div>


//                 </form>
//             </div>) : (

//                 <div className="max-w-md w-full p-6 sm:p-8 rounded-xl dark:bg-gray-500/10 bg-gray-900/10 backdrop-blur-md shadow-2xl border border-white/20 text-center">
//                     <div className="flex flex-col items-center justify-center gap-4">
//                         <div className="bg-green-600/90 p-3 rounded-full">
//                             <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//                             </svg>
//                         </div>

//                         <p className="text-xl sm:text-2xl font-semibold">Message Sent Successfully!</p>
//                         <p className="text-sm sm:text-base  dark:text-gray-200">Thank you for reaching out. I’ll get back to you as soon as possible.</p>

//                         <button
//                             onClick={() => setSuccessfull(false)}
//                             className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 mt-4 rounded-md hover:bg-gray-200 transition-all duration-200 cursor-pointer"
//                         >
//                             Send another message
//                         </button>
//                     </div>
//                 </div>

//             )}


//         </div>



//     )
// }

// export default ContactCard;



import Button from './Button';
import InputField from './InputField';
import TextAreaField from './TextAresField';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/dataContext';
import { motion } from 'framer-motion';
import image1 from '../assets/images/avatar/Group 11.png'
import pipe from '../assets/images/avatar/Group 9.png'


const BASE_URL = import.meta.env.VITE_BASE_URL;

const ContactCard = () => {
    const { portfolioData } = useContext(DataContext);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        projectDescription: '',
    });
    const [errors, setErrors] = useState({});
    const [budget, setBudget] = useState(10000);
    const [successfull, setSuccessfull] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        const tempErrors = {};
        if (!formData.name.trim()) tempErrors.name = "Name is required";
        if (!formData.email.trim()) tempErrors.email = "Email is required";
        else if (!/^\S+@\S+\.\S+$/.test(formData.email)) tempErrors.email = "Email is invalid";
        if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
        if (!formData.projectDescription.trim()) tempErrors.projectDescription = "Message is required";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const finalData = {
            ...formData,
            budget,
        };

        try {
            const response = await fetch(`${BASE_URL}/api/contact-form/send`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(finalData),
            });

            const result = await response.json();
            if (result.success) {
                setSuccessfull(true);
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    projectDescription: '',
                });
                setBudget(10000);
                setErrors({});
                setTimeout(() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
                        window.history.pushState(null, null, '#contact');
                    }
                }, 100);
            }
        } catch (error) {
            console.error('Form submission error:', error);
        }
    };

    const clearError = (fieldName) => {
        setErrors(prev => {
            const newErrors = { ...prev };
            delete newErrors[fieldName];
            return newErrors;
        });
    };

    useEffect(() => {
        if (successfull) {
            const contactSection = document.getElementById("contact");
            console.log(contactSection)
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }, [successfull]);

    const min = 10000;
    const max = 100000;

    return (
        <>
            <div className=' z-10 '>
                {!successfull ? (
                    <div className='p-4 sm:p-[20px] mx-auto max-w-[500px] rounded-xl shadow-md border border-[#A428FD60] bg-[rgba(255,255,255,0.05)] backdrop-blur-md'>
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, ease: "easeIn", delay: 0.2 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className='text-lg sm:text-xl font-semibold'>
                            Send me a message
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, ease: "easeIn", delay: 0.2 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className='text-sm sm:text-base mt-2'>
                            Fill out the form below and I'll get back to you as soon as possible.
                        </motion.p>

                        <form className='mt-4 sm:mt-6' onSubmit={handleSubmit}>
                            <InputField
                                onChange={handleInputChange}
                                value={formData.name}
                                errors={errors}
                                label="Name"
                                name="name"
                                placeholder="John Deo"
                                clearError={clearError}
                            />
                            <InputField
                                onChange={handleInputChange}
                                value={formData.email}
                                errors={errors}
                                label="Email"
                                type="email"
                                name="email"
                                placeholder="john@example.com"
                                clearError={clearError}
                            />
                            <InputField
                                onChange={handleInputChange}
                                value={formData.subject}
                                errors={errors}
                                label="Project queries"
                                name="subject"
                                placeholder="Project inquiry"
                                clearError={clearError}
                            />

                            {/* <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2, ease: "easeIn", delay: 0.2 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="w-full mt-3 relative">
                                <label htmlFor="budget" className="block font-medium">
                                    Set Your Budget
                                </label>
                                <input
                                    id="budget"
                                    name="budget"
                                    type="range"
                                    min={min}
                                    max={max}
                                    value={budget}
                                    aria-label="Select Budget Range"
                                    aria-valuemin={min}
                                    aria-valuemax={max}
                                    aria-valuenow={budget}
                                    onChange={(e) => setBudget(Number(e.target.value))}
                                    className="w-full appearance-none h-[2px] bg-[#A428FD] rounded-full outline-none cursor-pointer  accent-[#FFFFFF] mt-2"
                                />
                                <div className="flex justify-between items-center text-sm  sm:text-black mt-2">
                                    <span>${min.toLocaleString()}</span>
                                    <div className="text-center text-sm font-semibold">
                                        Selected Budget: ${budget?.toLocaleString()}
                                    </div>
                                    <span>${max.toLocaleString()}</span>
                                </div>

                            </motion.div> */}

                            <TextAreaField
                                onChange={handleInputChange}
                                value={formData.projectDescription}
                                errors={errors}
                                label="Project Description"
                                name="projectDescription"
                                placeholder="Write your message here..."
                                clearError={clearError}
                            />

                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2, ease: "easeIn", delay: 0.2 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className='flex items-center justify-center'
                            >
                                <button
                                    type="submit"
                                    className='px-6 py-2 mt-4 text-white font-semibold rounded-full border bg-gradient-to-r from-[#a428fd] via-[#7b3fe4] to-[#5736d8] transition-all duration-300 ease-in-out
      hover:from-[#b348ff] hover:via-[#8d4fff] hover:to-[#6545e0]
      hover:brightness-110 hover:shadow-[0_0_12px_rgba(164,40,253,0.5)] hover:scale-105 cursor-pointer'
                                >
                                    Send Message
                                </button>
                            </motion.div>
                        </form>
                    </div>
                ) : (
                    <div className="max-w-md w-full p-6 sm:p-8 rounded-xl dark:bg-gray-500/10 bg-gray-900/10 backdrop-blur-xs shadow-2xl border border-white/20 text-center mx-auto">
                        <div className="flex flex-col items-center justify-center gap-4">
                            <div className="bg-green-600/90 p-3 rounded-full">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <p className="text-xl sm:text-2xl font-semibold">Message Sent Successfully!</p>
                            <p className="text-sm sm:text-base ">Thank you for reaching out. I’ll get back to you as soon as possible.</p>
                            <button
                                onClick={() => setSuccessfull(false)}
                                className="bg-black text-white px-4 py-2 mt-4 rounded-md hover:bg-black/90 transition-all duration-200 cursor-pointer"
                            >
                                Send another message
                            </button>
                        </div>
                    </div>
                )}
            </div>
            {/* <section className="flex items-center justify-center text-black">
                <div className="w-[80%] min-h-[700px] bg-purple-400 rounded-[30px] overflow-hidden relative pb-10">
                    <div className="w-full rounded-b-[70px] flex flex-col lg:flex-row justify-between pt-24 px-6 lg:px-6 xl:px-10 2xl:px-20">
                        <div className='z-50 text-black mb-8 lg:mb-0'>
                            <p className='text-center lg:text-left text-4xl 2xl:text-5xl'>Let's Get In <span className='bold text-purple-600'>Touch!</span> </p>
                            <p className='text-center lg:text-left w-full xl:w-96 text-md 2xl:text-lg mt-1 leading-6'>Have a question or need assistance? Reach out to via mail, </p>
                            <p className='text-center lg:text-left text-purple-600'> Feel free to reach out with your queries.</p>
                        </div>

                        <div className=' z-10'>
                            {!successfull ? (
                                <div className='p-4 sm:p-[20px] w-full lg:w-auto rounded-xl shadow-md border border-[#A428FD60] bg-[rgba(255,255,255,0.05)] backdrop-blur-md'>
                                    <motion.p
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.2, ease: "easeIn", delay: 0.2 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        className='text-lg sm:text-xl font-semibold'>
                                        Send me a message
                                    </motion.p>
                                    <motion.p
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.2, ease: "easeIn", delay: 0.2 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        className='text-sm sm:text-base mt-2'>
                                        Fill out the form below and I'll get back to you as soon as possible.
                                    </motion.p>

                                    <form className='mt-4 sm:mt-6' onSubmit={handleSubmit}>
                                        <InputField
                                            onChange={handleInputChange}
                                            value={formData.name}
                                            errors={errors}
                                            label="Name"
                                            name="name"
                                            placeholder="John Deo"
                                            clearError={clearError}
                                        />
                                        <InputField
                                            onChange={handleInputChange}
                                            value={formData.email}
                                            errors={errors}
                                            label="Email"
                                            type="email"
                                            name="email"
                                            placeholder="john@example.com"
                                            clearError={clearError}
                                        />
                                        <InputField
                                            onChange={handleInputChange}
                                            value={formData.subject}
                                            errors={errors}
                                            label="Project queries"
                                            name="subject"
                                            placeholder="Project inquiry"
                                            clearError={clearError}
                                        />

                                        <motion.div
                                            initial={{ opacity: 0, y: 50 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.2, ease: "easeIn", delay: 0.2 }}
                                            viewport={{ once: true, amount: 0.2 }}
                                            className="w-full mt-3 relative">
                                            <label htmlFor="budget" className="block font-medium">
                                                Set Your Budget
                                            </label>
                                            <input
                                                id="budget"
                                                name="budget"
                                                type="range"
                                                min={min}
                                                max={max}
                                                value={budget}
                                                aria-label="Select Budget Range"
                                                aria-valuemin={min}
                                                aria-valuemax={max}
                                                aria-valuenow={budget}
                                                onChange={(e) => setBudget(Number(e.target.value))}
                                                className="w-full appearance-none h-[2px] bg-[#A428FD] rounded-full outline-none cursor-pointer  accent-[#FFFFFF] mt-2"
                                            />
                                            <div className="flex justify-between items-center text-sm  sm:text-black mt-2">
                                                <span>${min.toLocaleString()}</span>
                                                <div className="text-center text-sm font-semibold">
                                                    Selected Budget: ${budget?.toLocaleString()}
                                                </div>
                                                <span>${max.toLocaleString()}</span>
                                            </div>

                                        </motion.div>

                                        <TextAreaField
                                            onChange={handleInputChange}
                                            value={formData.projectDescription}
                                            errors={errors}
                                            label="Project Description"
                                            name="projectDescription"
                                            placeholder="Write your message here..."
                                            clearError={clearError}
                                        />

                                        <motion.div
                                            initial={{ opacity: 0, y: 50 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.2, ease: "easeIn", delay: 0.2 }}
                                            viewport={{ once: true, amount: 0.2 }}
                                            className='flex items-center justify-center'
                                        >
                                            <button
                                                type="submit"
                                                className='px-6 py-2 mt-4 text-white font-semibold rounded-full border bg-gradient-to-r from-[#a428fd] via-[#7b3fe4] to-[#5736d8] transition-all duration-300 ease-in-out
      hover:from-[#b348ff] hover:via-[#8d4fff] hover:to-[#6545e0]
      hover:brightness-110 hover:shadow-[0_0_12px_rgba(164,40,253,0.5)] hover:scale-105 cursor-pointer'
                                            >
                                                Send Message
                                            </button>
                                        </motion.div>
                                    </form>
                                </div>
                            ) : (
                                <div className="max-w-md w-full p-6 sm:p-8 rounded-xl dark:bg-gray-500/10 bg-gray-900/10 backdrop-blur-xs shadow-2xl border border-white/20 text-center mx-auto">
                                    <div className="flex flex-col items-center justify-center gap-4">
                                        <div className="bg-green-600/90 p-3 rounded-full">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <p className="text-xl sm:text-2xl font-semibold">Message Sent Successfully!</p>
                                        <p className="text-sm sm:text-base ">Thank you for reaching out. I’ll get back to you as soon as possible.</p>
                                        <button
                                            onClick={() => setSuccessfull(false)}
                                            className="bg-black text-white px-4 py-2 mt-4 rounded-md hover:bg-black/90 transition-all duration-200 cursor-pointer"
                                        >
                                            Send another message
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <img loading="lazy" className='w-80 h-auto absolute -top-35 left-[45%] z-2 object-cover' src={pipe} alt='pipe' />
                    <img
                        className="w-[460px] h-[450px] absolute top-60 xl:left-14 2xl:left-30 z-2 object-cover"
                        src={image1}
                        alt="contact-image"
                        width="460"
                        height="450"
                        loading="lazy"
                    />
                    <div className='w-full h-[500px] absolute bg-[#EBEFFF] top-0 z-[1] rounded-b-[80px]'>
                    </div>
                </div>
            </section> */}
        </>
    );
};

export default ContactCard;

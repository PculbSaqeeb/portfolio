import React from 'react'
import { useFadeInAnimation } from '../hooks/useAnimation';
import ContactCard from './ContactCard';
import { motion } from 'framer-motion';


const Contact = () => {
    const { ref, controls } = useFadeInAnimation();
    return (
        <>
            <section id='contact' className='mx-auto'>
                <motion.h2
                    animate={controls}
                    ref={ref}
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2, type: "spring", damping: 10 }}
                    className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center'>
                    Get In Touch
                </motion.h2>

                <motion.p
                    animate={controls}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeIn", delay: 0.2 }}
                    className='text-base sm:text-lg mt-4 text-white text-center mx-2'>
                    Have a project in mind or want to collaborate? I'd love to hear from you!
                </motion.p>

                <div className='mt-7'>
                    <ContactCard />
                </div>
            </section>
        </>
    )
}

export default Contact;



// import React, { useState } from 'react';

// const  Contact=() =>{
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     company: '',
//     projectType: '',
//     timeline: '',
//     budget: 25000,
//     subject: '',
//     description: ''
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
    
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
    
//     if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
//     if (!formData.email.trim()) newErrors.email = 'Email is required';
//     else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
//     if (!formData.projectType) newErrors.projectType = 'Please select a project type';
//     if (!formData.timeline) newErrors.timeline = 'Please select a timeline';
//     if (!formData.subject.trim()) newErrors.subject = 'Project subject is required';
//     if (!formData.description.trim()) newErrors.description = 'Project description is required';
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async () => {
//     if (!validateForm()) return;
    
//     setIsSubmitting(true);
    
//     // Simulate API call
//     try {
//       await new Promise(resolve => setTimeout(resolve, 1500));
//       alert('Project details sent successfully! 🎉');
//       // Reset form
//       setFormData({
//         fullName: '',
//         email: '',
//         company: '',
//         projectType: '',
//         timeline: '',
//         budget: 25000,
//         subject: '',
//         description: ''
//       });
//     } catch (error) {
//       alert('Error sending project details. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen text-white px-4 py-10 md:px-20">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
//           {/* Left Panel */}
//           <div className="space-y-6">
//             <div className=" p-6 bg-black/10 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100">
//               <h2 className="text-xl font-bold text-purple-400 mb-4">Let's Connect</h2>
//               <div className="space-y-4 text-sm">
//                 <div className="flex items-center gap-3 cursor-pointer">
//                   <span className="text-purple-400 text-lg">📧</span>
//                   <span>Email: hello@yourname.com</span>
//                 </div>
//                 <div className="flex items-center gap-3 cursor-pointer">
//                   <span className="text-purple-400 text-lg">⏱️</span>
//                   <span>Response Time: Within 24 hours</span>
//                 </div>
//                 <div className="flex items-center gap-3 cursor-pointer">
//                   <span className="text-purple-400 text-lg">📈</span>
//                   <span>Project Success: 98% completion rate</span>
//                 </div>
//               </div>
//             </div>
            
//             <div className=" p-6 rounded-2xl shadow-lg border border-gray-100">
//               <h3 className="text-lg font-semibold mb-4">What to Expect</h3>
//               <ul className="text-sm space-y-3">
//                 <li className="flex items-center gap-3">
//                   <span className="text-purple-400 text-lg">⚡</span>
//                   <span>Quick Response</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <span className="text-purple-400 text-lg">📋</span>
//                   <span>Detailed Proposal</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <span className="text-purple-400 text-lg">🗓️</span>
//                   <span>Timeline Planning</span>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Right Panel */}
//           <div className="lg:col-span-2 p-8 bg-black/90 backdrop-blur-md rounded-2xl shadow-xl border">
//             <h2 className="text-2xl font-bold mb-6">Start Your Project</h2>
//             <div className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="fullName" className="block mb-2 text-sm font-medium">Full Name</label>
//                   <input 
//                     type="text" 
//                     id="fullName"
//                     name="fullName"
//                     value={formData.fullName}
//                     onChange={handleInputChange}
//                     placeholder="John Doe" 
//                     className={`w-full p-3 rounded-lg  text-white border ${
//                       errors.fullName ? 'border-red-500' : 'border-gray-400'
//                     } focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors`}
//                   />
//                   {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block mb-2 text-sm font-medium">Email Address</label>
//                   <input 
//                     type="email" 
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     placeholder="john@company.com" 
//                     className={`w-full p-3 rounded-lg  text-white border ${
//                       errors.email ? 'border-red-500' : 'border-gray-400'
//                     } focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors`}
//                   />
//                   {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="company" className="block mb-2 text-sm font-medium">Company/Organization</label>
//                 <input 
//                   type="text" 
//                   id="company"
//                   name="company"
//                   value={formData.company}
//                   onChange={handleInputChange}
//                   placeholder="Your Company Name (Optional)" 
//                   className="w-full p-3 rounded-lg text-white border border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
//                 />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="projectType" className="block mb-2 text-sm font-medium">Project Type</label>
//                   <select 
//                     id="projectType"
//                     name="projectType"
//                     value={formData.projectType}
//                     onChange={handleInputChange}
//                     className={`w-full p-3 rounded-lg  text-white border ${
//                       errors.projectType ? 'border-red-500' : 'border-gray-600'
//                     } focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors`}
//                   >
//                     <option value="">Select project type</option>
//                     <option value="website">Website Development</option>
//                     <option value="mobile">Mobile App</option>
//                     <option value="design">UI/UX Design</option>
//                     <option value="ecommerce">E-commerce Platform</option>
//                     <option value="other">Other</option>
//                   </select>
//                   {errors.projectType && <p className="text-red-400 text-xs mt-1">{errors.projectType}</p>}
//                 </div>
//                 <div>
//                   <label htmlFor="timeline" className="block mb-2 text-sm font-medium">Timeline</label>
//                   <select 
//                     id="timeline"
//                     name="timeline"
//                     value={formData.timeline}
//                     onChange={handleInputChange}
//                     className={`w-full p-3 rounded-lg bg-black backdrop-blur-lg text-white border ${
//                       errors.timeline ? 'border-red-500' : 'border-gray-600'
//                     } focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors cursor-pointer`}
//                   >
//                     <option value="">When do you need this?</option>
//                     <option value="1-2-weeks">1-2 Weeks</option>
//                     <option value="1-month">1 Month</option>
//                     <option value="2-3-months">2-3 Months</option>
//                     <option value="flexible">Flexible</option>
//                   </select>
//                   {errors.timeline && <p className="text-red-400 text-xs mt-1">{errors.timeline}</p>}
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="budget" className="block mb-2 text-sm font-medium">Project Budget</label>
//                 <input 
//                   type="range" 
//                   id="budget"
//                   name="budget"
//                   min="5000" 
//                   max="100000" 
//                   step="5000"
//                   value={formData.budget}
//                   onChange={handleInputChange}
//                   className="w-full mt-2 accent-purple-500 cursor-pointer"
//                 />
//                 <div className="flex justify-between text-xs mt-2">
//                   <span className="text-gray-400">$5,000</span>
//                   <span className="text-purple-400 font-semibold">Selected: ${formData.budget.toLocaleString()}</span>
//                   <span className="text-gray-400">$100,000+</span>
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="subject" className="block mb-2 text-sm font-medium">Project Subject</label>
//                 <input 
//                   type="text" 
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleInputChange}
//                   placeholder="e.g., E-commerce Website Development" 
//                   className={`w-full p-3 rounded-lg text-white border ${
//                     errors.subject ? 'border-red-500' : 'border-gray-600'
//                   } focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors`}
//                 />
//                 {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
//               </div>

//               <div>
//                 <label htmlFor="description" className="block mb-2 text-sm font-medium">Project Description</label>
//                 <textarea 
//                   rows="5" 
//                   id="description"
//                   name="description"
//                   value={formData.description}
//                   onChange={handleInputChange}
//                   placeholder="Tell me about your project goals, requirements, features you need, target audience, and any specific preferences..." 
//                   className={`w-full p-3 rounded-lg text-white border ${
//                     errors.description ? 'border-red-500' : 'border-gray-600'
//                   } focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors resize-vertical`}
//                 />
//                 {errors.description && <p className="text-red-400 text-xs mt-1">{errors.description}</p>}
//                 <p className="text-xs text-gray-400 mt-2">The more details you provide, the better I can understand your needs.</p>
//               </div>

//               <button 
//                 type="button"
//                 onClick={handleSubmit}
//                 disabled={isSubmitting}
//                 className={`w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white p-3 rounded-xl text-center font-semibold transition-all duration-300 ${
//                   isSubmitting 
//                     ? 'opacity-50 cursor-not-allowed' 
//                     : 'hover:opacity-90 hover:shadow-lg transform hover:scale-[1.02]'
//                 }`}
//               >
//                 {isSubmitting ? (
//                   <span className="flex items-center justify-center gap-2">
//                     <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
//                     Sending...
//                   </span>
//                 ) : (
//                   '🚀 Send Project Details'
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;



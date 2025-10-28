import { motion } from "framer-motion";

const TextAreaField = ({ label, name, placeholder, className, errors ,onChange,value,clearError}) => {
    const handleChange = (e) => {
         if (onChange) {
            onChange(e);
        }
        
        // Then clear the error for this field if it exists
        if (clearError && errors[name]) {
            clearError(name);
        }
    };
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeIn", delay: 0.2 }}
      viewport={{once:true}}
      className="input-group flex flex-col mt-4">
      <label htmlFor={name}>{label}  </label>
      <textarea
        // {...register(name)}
        value={value}
        rows={4}  
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        className={`mt-1 border border-[#A428FD30] rounded-md p-2 focus:outline-none  focus:border-black focus:ring-1 focus:ring-black ${className}`}
      />

      {errors[name] && (
        <p className="text-red-500 text-sm mt-2">{errors[name]}</p>
      )}
    </motion.div>
  );
};

export default TextAreaField;

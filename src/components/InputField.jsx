import { motion } from "framer-motion";

const InputField = ({ label, type = "text", placeholder, name, errors, className, onChange, value, clearError }) => {
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
            viewport={{ once: true, amount: 0.6 }} className="input-group flex flex-col mt-4">
            <label htmlFor={name}>{label}
                {/* <span className="text-red-500"> *</span> */}
            </label>

            <motion.input
                value={value}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeIn", delay: 0.2 }}
                viewport={{ once: true, amount: 0.6 }}
                // {...register(name)}
                onChange={handleChange}
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                className={`rounded-md pl-3 mt-1 border border-[#A428FD30]  py-2 ${className}`}
            />

            {errors[name] && (
                <p className="text-red-500 text-sm mt-2">{errors[name]}</p>
            )}
        </motion.div>
    );
};

export default InputField;
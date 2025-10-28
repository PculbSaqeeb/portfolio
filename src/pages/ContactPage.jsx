import React from 'react'
import ContactCard from '../components/ContactCard'
import { motion } from 'framer-motion'
import { useFadeInAnimation } from '../hooks/useAnimation';

const ContactPage = () => {
  const { ref, controls } = useFadeInAnimation();

  return (
    <>
      <div className='py-20'>
        <div className=' mx-auto '>
          <motion.p
            animate={controls}
            ref={ref}
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, ease: "easeOut", delay: 0.2, type: "spring", damping: 7 }}
            className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center'>
            Get In Touch
          </motion.p>

          <motion.p
            animate={controls}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, ease: "easeIn", delay: 0.2 }}
            className='text-base sm:text-lg mt-4 dark:text-gray-300 text-center'>
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </motion.p>

          <div className='mt-7'>
            <ContactCard />
          </div>
        </div>
      </div>
    </>

  )
}

export default ContactPage;

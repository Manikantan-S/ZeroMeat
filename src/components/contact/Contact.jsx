import { useState ,useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const form = useRef();
  const [message, setMessage] = useState({})
  const [validate, setValidate] = useState()

  const sendEmail = (e) => {
    e.preventDefault();

    if(message['user_name'] !== undefined && message['subject'] !== undefined  && message['user_email'] !== undefined && message['message'] !== undefined ) {
      

      console.log(message['user_name'] , message['subject'] , message['user_email'], message['message'])

      setValidate(true);
      setMessage({})
      emailjs.sendForm('service_o0u4ako', 'template_w0deuo3', form.current, 'CSneeSppf005zaGlp')
      .then(() => {
        
        toast.success('Message Sent', {
          position: "top-left",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
        
        
      }, (error) => {
          console.log(error.text);
          setValidate(false)
      });

      
      
    } else {
      setValidate(false)
      setMessage({})
      console.log('test message')
    }

    
  };

  const messageHandle = (event) => {
    const {name, value} = event.target;
    setMessage({...message, [name]: value})
  }

  return (
    <div className="section" name='contact'>
        {
          validate && <ToastContainer />
        }
        <div className="container">
            <div className='flex flex-col justify-center lg:flex-row lg:justify-between '>

              {/* text */}
              <div className='text-white'>
                <motion.h2 
                  variants={fadeIn('right', 0.3)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{once: true, amount: 0.7}} 
                  className='mb-3 text-[22px] md:text-[30px] lg:text-[40px] uppercase font-secondary font-semibold '
                >
                  Find more <span className='text-primary'>About us</span>
                </motion.h2>
                <motion.p 
                  variants={fadeIn('right', 0.5)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{once: true, amount: 0.7}} 
                  className='mb-4 text-[17px] md:text-[20px] lg:text-[22px] font-medium font-secondary'
                >
                  Subscribe to our newsletter and contact us!
                </motion.p>
              </div>

              {/* form */}
              <motion.div
                variants={fadeIn('left', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: true, amount: 0.7}} 
              >
                <form 
                  ref={form}
                  onSubmit={sendEmail}
                  action=""
                  autoComplete='off'
                  className='flex flex-col gap-6 w-full lg:w-[520px] bg-[#18181b] p-6 rounded'
                >
                  <div className='flex flex-col lg:flex-row lg:justify-between gap-5'>
                    <input type="text" hidden />
                    <div className='w-[100%]'>
                      <input 
                        type="text" 
                        name='user_name'
                        placeholder='Your Name' 
                        className='bg-transparent border-b border-gray-500 py-4  text-gray-500 font-semibold font-secondary text-[14px] outline-none w-full'
                        onChange={messageHandle}
                      />
                    </div>
                    <div className='w-[100%]'>
                      <input 
                        type="text" 
                        name='subject'
                        placeholder='Subject' 
                        className='bg-transparent border-b border-gray-500 py-4 text-gray-500 font-semibold font-secondary text-[14px] outline-none w-full'
                        onChange={messageHandle}
                      />
                    </div>
                  </div>

                  <input 
                    type="email" 
                    name='user_email'
                    placeholder='Email'
                    className='bg-transparent border-b border-gray-500 py-4  text-gray-500 font-semibold font-secondary text-[14px] outline-none w-full'
                    onChange={messageHandle}
                    
                  />

                  <textarea
                   id="" 
                   rows="3"
                   name='message'
                   placeholder='Message'
                   className='bg-transparent border-b border-gray-500 py-4  text-gray-500 font-semibold font-secondary text-[14px] outline-none w-full resize-none'
                   onChange={messageHandle}
                  >

                  </textarea>

                  <div className='w-full'>
                    <button className='btn btn-lg font-secondary w-full'>Send</button>
                  </div>

                </form>
              </motion.div>

            </div>
        </div>
        
    </div>
    
  )
}

export default Contact

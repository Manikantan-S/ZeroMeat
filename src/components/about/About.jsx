import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { Button } from 'react-scroll';

const About = () => {
  return (
    <div className='section' name='about'>
      <div className="container">
        <div className='flex flex-col gap-y-4 lg:flex-row justify-between'>

          {/* image */}
          <motion.div 
            variants={fadeIn('right', '0.3')}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: true, amount: 0.7}} 
            className='w-full md:w-[380px] lg:w-[500px] text-center'
          >
            <img 
              src="Hamburger.svg.png" 
              alt="" 
              className='max-w-full'
            />
          </motion.div>

          {/* text */}
          <motion.div 
            variants={fadeIn('left', '0.5')}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: true, amount: 0.7}} 
            className='text-white'
          >
            <h2 className='mb-3 text-[22px] md:text-[30px] lg:text-[40px] uppercase font-secondary font-semibold'>About <span className='text-primary'>Us</span></h2>
            <p className='mb-4 text-[17px] md:text-[20px] lg:text-[24px] font-secondary'>We are a plant based meat company</p>
            <p className='max-w-md md:max-w-lg lg:max-w-xl mb-3 text-[14px] text-slate-300 font-medium font-secondary tracking-wider'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, quae beatae praesentium aut illum explicabo similique natus cumque repudiandae, vitae laboriosam aliquam minima libero obcaecati quasi magni nihil voluptatibus recusandae.
            </p>
            <p className='max-w-md md:max-w-lg lg:max-w-xl mb-3 text-[14px] text-slate-300 font-medium font-secondary tracking-wider'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates deleniti reiciendis odit dicta eveniet, cum voluptatibus vitae debitis.
            </p>

            <div>
              <Button 
                to="contact"
                smooth={true}
                delay={500}
                className='btn btn-sm tracking-wider font-secondary'
              >
                Contact
              </Button>

            </div>

          </motion.div>

          

        </div>
      </div>
    </div>
  )
}

export default About

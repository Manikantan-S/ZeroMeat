import Image1 from '../../../public/fast.png';
import Image2 from '../../../public/sustainable.svg';
import Image3 from '../../../public/muscle.svg';
import Image4 from '../../../public/leaf.svg';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Services = () => {


  return (
    <div className='section' name='services'>
      <div className="container">
        <div className='max-w-[99%]'>

          {/* text */}
          <div className='text-white text-center mb-10'>
            <motion.h2 
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: true, amount: 0.7}} 
              className='mb-3 text-[22px] md:text-[30px] lg:text-[40px] uppercase font-secondary font-semibold'
            >
              Our <span className='text-primary'>Features</span>
            </motion.h2>
            <motion.p 
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: true, amount: 0.7}} 
              className='mb-4 text-[17px] md:text-[20px] lg:text-[22px] font-medium font-secondary'
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </motion.p>
          </div>

          {/* services */}
          <div className='flex flex-col lg:flex-row lg:justify-center lg:items-center gap-7 text-white py-8'>

            <motion.div 
              variants={fadeIn('right', 1.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: true, amount: 0.7}} 
              className='p-5 py-10 lg:w-[360px] bg-[#18181b] rounded-lg flex gap-6 border-t-2 border-t-red-500'
            >
              <img src={Image1} alt="" className='w-[40px] h-[40px]' />
              <div>
                <h3 className='text-[20px] font-medium mb-2 font-secondary'>Ready To Cook</h3>
                <p className='text-[14px] font-secondary text-slate-300'>
                Experience the convenience of culinary creativity with our plant-based meat – ready to cook, ready to delight
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeIn('up', 0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: true, amount: 0.7}} 
              className='flex flex-col gap-7'
            >

              <div className='p-5 py-10 lg:w-[360px] bg-[#18181b] rounded-lg flex gap-6 border-t-2 border-t-indigo-500'>
                <img src={Image2} alt="" className='w-[40px] h-[40px]' />
                <div>
                  <h3 className='text-[20px] font-medium mb-2 font-secondary'>Sustainable</h3>
                  <p className='text-[14px] font-secondary text-slate-300'>
                    Environmentally friendly,Cost friendly
                  </p>
                </div>
              </div>

              <div className='p-5 py-10 lg:w-[360px] bg-[#18181b] rounded-lg flex gap-6 border-t-2 border-t-yellow-500'>
                <img src={Image3} alt="" className='w-[40px] h-[40px]' />
                <div>
                  <h3 className='text-[20px] font-medium mb-2 font-secondary'>Protilicious</h3>
                  <p className='text-[14px] font-secondary text-slate-300'>
                  Delicious, plant-based meat alternatives for a sustainable and flavorful diet
                  </p>
                </div>
              </div>

            </motion.div>

            <motion.div 
              variants={fadeIn('left', 1.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: true, amount: 0.7}} 
              className='p-5 py-10 lg:w-[360px] bg-[#18181b] rounded-lg flex gap-6 border-t-2 border-t-pink-500'
            >
              <img src={Image4} alt="" className='w-[40px] h-[40px]' />
              <div>
                <h3 className='text-[20px] font-medium mb-2 font-secondary'>0% Preservatives</h3>
                <p className='text-[14px] font-secondary text-slate-300'>
                Indulge in untamed flavor – our plant-based meat, 0% preservatives, 100% taste.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Services

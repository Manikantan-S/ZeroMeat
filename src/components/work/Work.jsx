import { motion } from 'framer-motion';
import { fadeIn } from '../../variants.js';
import { FaLocationArrow } from 'react-icons/fa'; // Import FaLocationArrow from react-icons/fa

const Work = () => {
  const menuItems = [
    { title: 'Burger', teq: 'Delicious burger', url: '#' },
    { title: 'Pizza', teq: 'Tasty pizza', url: '#' },
    { title: 'Patty', teq: 'Crunchy patty', url: '#' },
    { title: 'Indian', teq: 'Authentic Indian cuisine', url: '#' },
    { title: 'Chinese', teq: 'Savory Chinese dishes', url: '#' },
  ];

  return (
    <div className='section' name='work'>
      <div className="container">
        <div>
          <div className='text-white text-center mb-10'>
            <motion.h2
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true, amount: 0.3 }}
              className='mb-3 text-[22px] md:text-[30px] lg:text-[40px] uppercase font-secondary font-semibold'
            >
              Our <span className='text-primary'>Products</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true, amount: 0.5 }}
              className='mb-4 text-[17px] md:text-[20px] lg:text-[22px] font-medium font-secondary'
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className='grid grid-cols-1 gap-y-6 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-4 '
          >
            {menuItems.map((menuItem, index) => (
              <div key={index} className='bg-[#18181b] rounded-xl relative group overflow-hidden '>
                <div className='text-white text-center'>
                  <h3 className='text-[25px] font-secondary font-semibold'>
                    {menuItem.title}
                  </h3>
                  <p className='text-[14px] text-slate-300 font-secondary'>
                    {menuItem.teq}
                  </p>
                </div>
                <div className='absolute -bottom-full group-hover:bottom-6 w-full flex justify-between gap-6 items-center mt-6 z-40 duration-1000 px-8'>
                  <div>
                    <h3 className='text-[25px] font-secondary font-semibold'>
                      {menuItem.title}
                    </h3>
                    <p className='text-[14px] text-slate-300 font-secondary'>
                      {menuItem.teq}
                    </p>
                  </div>
                  <div>
                    <a
                      href={menuItem.url}
                      target='_blank'
                      rel='noreferrer'
                      className='w-[38px] h-[38px] bg-primary rounded-full flex justify-center items-center' // Replace "flex-justify-center" with "justify-center"
                    >
                      <FaLocationArrow size={23} fontWeight='bold' /> {/* Use FaLocationArrow instead of CiLocationArrow1 */}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;

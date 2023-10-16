import { BsTelegram } from 'react-icons/bs';
import { AiFillLinkedin, AiOutlineWhatsApp, AiOutlineTwitter } from 'react-icons/ai';
import { SlSocialTwitter } from 'react-icons/sl';

const icons = [
  {
    id: 1,
    url: '',
    icon: <BsTelegram size={25} />
  },
  {
    id: 2,
    url: 'https://www.linkedin.com/company/zero-meat/',
    icon: <AiFillLinkedin size={25} />
  },
  {
    id: 3,
    url: '',
    icon: <AiOutlineWhatsApp size={25} />
  },
  {
    id: 4,
    url: '',
    icon: <AiOutlineTwitter size={25} />
  }
];
const Footer = () => {

  return (
    <div className="bg-[#18181b] max-w-full py-6">
        <div className="container">
            <div className="flex flex-col text-center gap-y-6 lg:flex-row justify-between text-white">
                <div className='flex items-center justify-center gap-4'>
                {
                  icons.map(icon => (
                    <a
                      key={icon.id}
                      href={icon.url}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {icon.icon}
                    </a>
                  ))
                } 
                </div>
                <span className="text-[18px] text-slate-300 font-light font-secondary">Made with <span className="text-red-500">&#10084;</span> By <span className=" font-bold">ZeroMeat team</span> © 2023</span>
            </div>
        </div>
    </div>
  )
}

export default Footer

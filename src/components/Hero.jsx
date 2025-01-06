import HeroBg from '@/assets/patternhero.webp'
import Button from './ui/Button';
import Marquee from './ui/marquee';
import { motion } from 'motion/react';
import { useState } from 'react';
import LineError from './ui/LineError';
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';

const Hero = () => {

    const [isGenError, setisGenError] = useState(false);
    const [GenName, setGenName] = useState(null);
    const navigate = useNavigate()

    const HandelgenaretionChange = (e) => {
        const GenName = e.target.value

        if(GenName.length > 30){
            return setisGenError(`maximum recommended length for a name is typically 40 characters.`)
        }
        else{
            setisGenError(false)
            setGenName(GenName)
        }
    }

    const Handelgenaration = () => {
        if(!GenName?.length > 0){
            setisGenError('Must need to give a name')
            return ''
        }
        return navigate(`../create?name=${GenName}`)
    }

    return (
        <>
            <section className="bg-cover flex justify-center bg-center" style={{backgroundImage: `url('${HeroBg}')`}}>
                <div className='w-full max-w-[1440px] py-52'>
                    <div className='w-full  flex flex-col items-center md:text-center space-y-7 px-5'>
                        <h2 className='text-3xl sm:text-4xl md:text-5xl font-semibold'>
                            Generate Online Artificial <br className='br'/>Intelligence <span className='text-primary-1'>Logo</span>
                        </h2>
                        <p className='text-xs sm:text-sm md:text-base text-primary-3'>Create your unique AI-inspired logo effortlessly with our online generator. Perfect for tech<br className='br'/> startups, AI projects, and innovators, design a logo that stands out in seconds!</p>
                        <div className='w-full flex items-center flex-col'>
                            <div className='bg-white w-full rounded-xl text-primary-3 gap-5 items-center p-2 py-[3px] md:w-6/12 flex inputClassHero border'>
                                <input
                                    onChange={HandelgenaretionChange}
                                    placeholder='Give your logo name' 
                                    className='py-4 ml-3 w-full text-sm placeholder:text-neutral-500 placeholder:text-sm'
                                type="text" />
                                <button onClick={Handelgenaration}>
                                    <Button option={1} className={`text-sm cursor-pointer`}>
                                        Genaret
                                        <span className='group-hover:scale-110 transition-all group-hover:translate-x-1'>✨</span>
                                    </Button>
                                </button>
                            </div>
                            <LineError className={`mt-3`} error={isGenError} />
                        </div>
                    </div>
                    <div className=' w-full py-10 border-x-4 border-primary-1/40 flex items-center'>
                        <Marquee className="[--duration:30s] !w-full">
                            {MarqueeImages && MarqueeImages.map((img, index) => (
                                <motion.div 
                                    whileInView={{
                                        opacity: 1
                                    }}
                                    initial={{
                                        opacity: 0
                                    }}
                                    key={index} className='bg-slate-300 cursor-pointer border border-primary-1/20 rounded-lg bg-cover bg-center w-32 h-32 md:w-[150px] md:h-[150px]' style={{backgroundImage: `url('${img}')`}}>

                                </motion.div>
                            ))}
                        </Marquee>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero


const MarqueeImages = [
    "https://ideogram.ai/assets/progressive-image/balanced/response/uE8i9rswQwyv_2ODCAv6tw",
    "https://ideogram.ai/assets/progressive-image/balanced/response/Ok_o3gCQTyK_PlqGI6FV6g",
    "https://ideogram.ai/assets/progressive-image/balanced/response/1psmjFwuQNSZlBSHARyBKg",
    "https://ideogram.ai/assets/progressive-image/balanced/response/owPcp8d4SBe5q9Ywft2a1Q",
    "https://ideogram.ai/assets/progressive-image/balanced/response/rfqKRaBfTA6FXlG2Elbszw",
    "https://ideogram.ai/assets/progressive-image/balanced/response/IfMrrxITRtWEZdX8g9OxSA",
    "https://ideogram.ai/assets/progressive-image/balanced/response/ZoDosWoOSlCl7VuDs0HBOg",
    "https://ideogram.ai/assets/progressive-image/balanced/response/0Cw2Y1RMQkOfsdpVKmZekA",
    "https://ideogram.ai/assets/progressive-image/balanced/response/BI0aVsijQfGRfQTco-3H_Q"
]

// Generate design ideas for a logo with the following details:

// Logo Name: Stack Mastery
// Vision: Mastery over JavaScript
// Color: Yellow (with darker shades for mane and outline)
// Style: Modern Mascot
// Provide the output in JSON format with each design idea containing a 'Design Idea' description (3-4 words) and a corresponding 'prompt'. The prompt should be detailed and provide clear instructions for AI to create the design
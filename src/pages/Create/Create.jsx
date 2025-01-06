import DotPattern from "@/components/ui/dot-pattern";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const Create = () => {

    const [steps, setsteps] = useState(1);

    return (
        <>
            <section className="flex justify-center">
                <div className="w-full h-screen flex flex-col items-center justify-center max-w-[1440px] px-5 py-40">
                    <AnimatePresence>
                        {steps === 1 && (
                            <motion.div className="w-full border p-7 md:p-10 bg-white z-20 rounded-xl md:w-9/12 xl:w-6/12 space-y-3">
                                <h2 className="text-3xl font-bold">Logo <span className="text-primary-1">Name</span></h2>
                                <p className='text-xs sm:text-sm md:text-base text-primary-3'>Create your unique AI-inspired logo effortlessly with our online generator. Perfect for tech<br className='br'/> startups, AI projects, and innovators, design a logo that stands out in seconds!</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <DotPattern
                        className={
                        "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] fill-primary-1"}
                    />
                </div>
            </section>
        </>
    );
}

export default Create
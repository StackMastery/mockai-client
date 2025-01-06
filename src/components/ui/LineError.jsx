import { MdError } from "react-icons/md";
import { AnimatePresence, motion } from 'motion/react';

const LineError = ({error, className}) => {
    return (
        <>
            <AnimatePresence>
                {error && (
                    <motion.span 
                        initial={{opacity: 0, height: 0}}
                        animate={{opacity: 1, height: 'auto'}}
                        exit={{opacity: 0, height: 0}}
                        className={`text-red-500 flex items-center gap-2 ${className}`}>
                        <MdError />
                        {error}
                    </motion.span>
                )}
            </AnimatePresence>
        </>
    );
}

export default LineError
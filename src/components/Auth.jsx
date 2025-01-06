import { AnimatePresence, motion } from "motion/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthImage from '@/assets/auth.png'
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { IoMdClose } from "react-icons/io"; 
import { FaGithub } from "react-icons/fa";
import { useContext, useState } from "react";
import { auth } from "@/firebase.config";
import toast from "react-hot-toast";
import firebaseErrorMessages from "@/firebase.errors";
import { AuthContext } from "@/context/Auth.Context";

const Auth = () => {

    const { search } = useLocation()
    const [isAuthenticating, setisAuthenticating] = useState(false)
    const navigate = useNavigate()
    const { isLoading ,authInfo , setauthInfo } = useContext(AuthContext)

    const GoogleProvider = new GoogleAuthProvider()
    const GithubProvider = new GithubAuthProvider()

    const HandelAuthSucces = ({user}) => {
        navigate(-1)
        toast.success('Authentication Succesfull')
        setauthInfo(user)
    }

    const HandelGoogle = () => {
        signInWithPopup(auth, GoogleProvider)
            .then((res) =>  {
                return HandelAuthSucces({user: res?.user})
            })
            .catch((err) => {
                if(err.code !== firebaseErrorMessages[err.code]){
                    toast.error(firebaseErrorMessages[err.code])
                }
            })
    }

    const HandelGithub = () => {
        signInWithPopup(auth, GithubProvider)
            .then((res) => {
                return HandelAuthSucces({user: res?.user})
            })
            .catch((err) => {
                if(err.code !== firebaseErrorMessages[err.code]){
                    toast.error(firebaseErrorMessages[err.code])
                }
            })
    } 

    if(isLoading){
        return ''
    }

    if(!authInfo && search === '?authpopup'){
        return (
            <AnimatePresence>
                <section 
                    className="flex justify-center w-full fixed top-0">
                    <div 
                        className="h-screen py-80 w-full items-center flex justify-center backdrop-blur-sm bg-black/20 px-5">
                        <motion.div 
                            initial={{scale: 0.5, opacity: 0}}
                            animate={{scale: 1, opacity: 1}}
                            className="bg-white flex w-full md:w-9/12 xl:w-[800px] rounded-xl flex-col md:flex-row">
                            <div className="w-full p-10 md:w-7/12">
                                <div className="w-full flex absolute -mt-20 -ml-10">
                                    <Link to={-1}>
                                        <span className="bg-black/10 rounded-full p-1 flex">
                                            <IoMdClose size={20}/>
                                        </span>
                                    </Link>
                                </div>
                                <div className="space-y-3">
                                    <h2 className="text-2xl font-semibold">Login or signup in seconds</h2>
                                    <p className="text-neutral-700 text-[14px]">Use your email or another service to continue with Canva (it’s free)!</p>
                                </div>
                                <div className="pt-5 flex flex-col gap-4">
                                    <AuthButton 
                                        onClick={HandelGoogle}
                                        disabled={isAuthenticating}>
                                        <FcGoogle size={21}/>
                                        Continue with Google
                                    </AuthButton>
                                    <AuthButton 
                                        onClick={HandelGithub}
                                        disabled={isAuthenticating}>
                                        <FaGithub size={21}/>
                                        Continue with Github
                                    </AuthButton>
                                </div>
                                <p className="pt-5 text-xs text-neutral-600">By continuing, you agree to MockAi <Link className="text-primary-1">Terms of Use.</Link> Read our <Link className="text-primary-1">Privacy Policy.</Link></p>
                            </div>
                            <div className="w-full md:w-5/12 bg-cover bg-slate-200 bg-gradient-to-r bg-center bg-no-repeat rounded-r-xl" style={{backgroundImage: `url('${AuthImage}')`}}>
                                
                            </div>
                        </motion.div>
                    </div>
                </section>
            </AnimatePresence>
        )
    }

}

export default Auth


const AuthButton = ({onClick ,className , children, ...props }) => {
    return (
        <>
            <button 
            {...props}
            onClick={onClick}
            className={`w-full text-sm flex gap-5 items-center px-5 text-neutral-700 py-2 border rounded-lg ring-offset-2 transition-all ring-neutral-300 focus-within:ring-1 focus-within:ring-primary-1/50 hover:ring-1 ${className}`}>
                {children}
            </button>
        </>
    );
}

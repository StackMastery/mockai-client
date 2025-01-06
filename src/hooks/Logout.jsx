import { auth } from "@/firebase.config"
import { signOut } from "firebase/auth"
import toast from "react-hot-toast"

const Logout = () => {
    signOut(auth)
        .then(() => {
            toast.success('Logout Succes')
        })
        .catch(() => {
            toast.error('Logout unsuccesfull')
        })
}

export default Logout
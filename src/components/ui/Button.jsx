const Button = ({option, className, children}) => {
    if(option === 1){
        return (
            <div className={`bg-primary-1 gap-2 text-white group px-5 h-fit py-2 rounded-xl font-semibold flex items-center  border border-primary-1 ring-offset-2 hover:ring-1 ring-primary-1/80 transition-all ${className}`}>
                {children}
            </div>
        )
    }
}

export default Button
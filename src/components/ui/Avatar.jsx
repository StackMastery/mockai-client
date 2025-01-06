import React from "react";

const Avatar = ({name, avatar, user}) => {
    return (
        <>
            <div className="w-9 h-9 bg-slate-300 rounded-full ring-2 hover:ring-4 ring-primary-1/70 flex items-center justify-center font-semibold text-primary-1/70 cursor-pointer">
                {name?.slice(0,1).toUpperCase() || 'N'}
                <span style={{backgroundImage: `url('${avatar}')`}} className="flex bg-cover bg-center absolute h-9 w-9 rounded-full"></span>
            </div>
        </>
    );
}

export default React.memo(Avatar)
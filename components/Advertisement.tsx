import React from "react";

interface props{
    element: string;
}

const Advertisement : React.FC<{}> = ({})=>{
        return(
            <div>
                <img src="/assets/school.jpg" className="w-full"/>
            </div>
        )
}

export default Advertisement;
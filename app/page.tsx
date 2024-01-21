import { Box } from "@mui/material";
import Image from "next/image";
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

export default function Home() {
  return (
    <div>
      <div className="bg-gray-600 grid grid-cols-12 py-3 px-4">
        <div className="col-span-6 ">
          <div className="text-xs font-bold text-white">Primary school</div>
          <div className="text-xs text-white">International accredited</div>
        </div>
        <div className="col-span-6 grid ">
          <div className="grid grid-flow-col">
            <div className="grid justify-end items-center">
              <CheckCircleOutlinedIcon style={{color:"white",fontSize:'1rem'}} className="text-centers" />
            </div>
            <div className="text-white text-xs grid items-center font-semibold pl-1">
              Our calender
              
            </div>
          </div>
          <div className="text-slate-400 text-center pt-0.5" style={{fontSize:"11px"}}>see important dates</div>
         
        </div>

        
       
      </div>
    </div>
  );
}

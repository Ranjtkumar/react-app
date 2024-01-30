import { Box } from "@mui/material";
import Image from "next/image";
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import Advertisement from "@/components/Advertisement";

export default function Home() {
  return (
    <div>
      <div className="w-full bg-slate-600 p-3">
          <div className="flex justify-between">
            <div className="flex gap-3">
                
                  <img src="/assets/logo1.jpg" className="bg-slate-600 h-12" />
                  <div className="flex flex-col text-white justify-center gap-1">
                    <div className="text-xs font-bold">Primary school</div>
                    <div className="text-xs font-light">International accredited</div>
                  </div>
                
            </div>

            <div className="flex gap-8 items-center">
              <div className="flex flex-col gap-1">
                <div className="flex gap-1">
                  <CheckCircleOutlinedIcon style={{color:"white",fontSize:"1rem"}}/>
               
                  <div className="text-white text-xs font-bold text-white">Our Calender</div>
                </div>
                <div className="text-xs font-light text-slate-300">see important date</div>
                  
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex gap-1">
                  <CheckCircleOutlinedIcon style={{color:"white",fontSize:"1rem"}}/>
               
                  <div className="text-white text-xs font-bold text-white">Ed Alumini</div>
                </div>
                <div className="text-xs font-light text-slate-300">Advisor council</div>
                  
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex gap-2">
                  <CheckCircleOutlinedIcon style={{color:"white",fontSize:"1rem"}}/>
               
                  <div className="text-white text-xs font-bold text-white">Welcome To Ed</div>
                </div>
                <div className="text-xs font-light text-slate-300">Parents,Teachers,Pupil</div>
                  
              </div>
               
               <div className="bg-yellow-400 text-xs px-3 py-2 text-white font-bold rounded-sm">CONTACT</div>

            </div>
          </div>

         

          
      </div>

      <Advertisement   />
      
    </div>
  );
}

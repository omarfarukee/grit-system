import { TextField } from "@mui/material";



export default function RateCalender() {

    
  return (
    <div className="flex justify-center mt-10">
        <div className="border w-[40%] p-5 flex flex-col rounded-xl shadow-2xl">
             <h1 className='text-3xl mb-2'>Rate Calendar</h1>  
            <TextField id="outlined-basic" label="Picup date range" variant="outlined" defaultValue="06/23/2024 – 08/23/2024" />
        </div>
     
    </div>
  )
}

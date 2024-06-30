/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { TextField } from '@mui/material';
import { useQuery } from 'react-query';
import { IRoomCategory } from '../../interfaces/AllInterfaces';


const fetchChargesSummary = async (): Promise<IRoomCategory[]> => {
    const res = await fetch(`https://api.bytebeds.com/api/v1/property/1/room/rate-calendar/assessment?start_date=2024-05-01&end_date=2024-05-15`);
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await res.json();
    return data;
}

const RateCalendar: React.FC = () => {
    const { data: allRoomCategories = [],} = useQuery<IRoomCategory[]>({
        queryKey: ['allChargesSummary'],
        queryFn: fetchChargesSummary
    });

console.log(allRoomCategories?.data?.map(cat => cat.name) )

    return (
        <div>
            <div className="flex justify-center mt-10">
                <div className="border w-[40%] p-5 flex flex-col rounded-xl shadow-2xl">
                    <h1 className='text-3xl mb-2'>Rate Calendar</h1>
                    <TextField id="outlined-basic" label="Pickup date range" variant="outlined" defaultValue="06/23/2024 – 08/23/2024" />
                </div>
            </div>
        </div>
    );
}

export default RateCalendar;

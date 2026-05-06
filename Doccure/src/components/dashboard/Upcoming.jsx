import React from 'react'

const Upcoming = () => {
  return (
    <div>
        <div className='bg-blue-700 text-white p-12 rounded-2xl'>
            <h2 className='text-lg font-semibold'>Upcoming Appointment</h2>
            <div className='flex justify-between border-b border-amber-50 pb-4'>
                <div className='pt-2 '>
                    <h1>Patient name<br/> <span>location</span></h1>
                </div>
                <div>
                    <h1>General Visit <br/> <span>Today 10:45AM</span></h1>
                </div>
            </div>
            <div className='flex pt-6 gap-x-4'>
            <div>
            <button className='px-3 py-2 font-medium text-black bg-amber-50 rounded-full'>Chat Now</button>
            </div>
             <div>
             <button className='px-3 py-2 font-medium text-black bg-amber-50 rounded-full'>Start Appointment</button>
            </div>
            </div>

        </div>
    </div>
  )
}

export default Upcoming
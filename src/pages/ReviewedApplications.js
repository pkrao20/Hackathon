import React from 'react'


const games = [
  {
    "company": "MMM",
    "Genere": "Action"
  },
  {
    "company": "KKK",
    "Genere": "Adventure"
  },
  {
    "company": "OOO",
    "Genere": "Fight"
  },
  {
    "company": "AAA",
    "Genere": "Action"
  },
  {
    "company": "BBB",
    "Genere": "Adventure"
  },
  {
    "company": "DDD",
    "Genere": "Fight"
  }

];

const ReviewedApplications = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center  mt-[80px]'>
      <h1 className='font-bold text-3xl my-8 text-purple-700'> Reviewed Applications-- </h1>

      <div className='grid grid-cols-1 gap-8'>
        {
          games.map((game, index) => (
            <div key={index} className='flex flex-col justify-between border-2 border-red-500 h-[150px] w-[300px] rounded-[10%]'>

              <div className='flex flex-col gap-1'>
                <h1 className='m-3 my-1 font-bold text-3xl text-blue-800 f '>Reivew of</h1>
                <h1 className='m-3 my-1 font-bold text-3xl  text-blue-800 f '>{game.company} application </h1>
              </div>
              <div className='border-2 border-dashed border-gray-600 mb-4 mx-4'>
                
              </div>
            </div>
            
           
          ))
        }
      </div>
    </div>
  )
}







export default ReviewedApplications
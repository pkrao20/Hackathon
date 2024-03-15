import React from 'react'


const games = [
  {
    "company": "Gameloft",
    "Genere": "Action"
  },
  {
    "company": "Unity",
    "Genere": "Adventure"
  },
  {
    "company": "Supercell",
    "Genere": "Fight"
  },
  {
    "company": "Gameloft",
    "Genere": "Action"
  },
  {
    "company": "Unity",
    "Genere": "Adventure"
  },
  {
    "company": "Supercell",
    "Genere": "Fight"
  }

];

const ApprovedApplications = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <h1 className='font-bold text-3xl my-8 text-purple-700'> Approved Applications-- </h1>

      <div className='grid grid-cols-1 gap-8'>
        {
          games.map((game, index) => (
            <div key={index} className='flex flex-col justify-between border-2 border-red-500 h-[200px] w-[300px] rounded-[10%]'>

              <div className='flex flex-col gap-1'>
                <h1 className='m-3 my-1 font-bold text-3xl text-blue-800 f '>From- </h1>
                <h1 className='m-3 my-1 font-bold text-3xl  text-blue-800 f '>{game.company} company </h1>
              </div>


              <div className='w-full flex justify-center'>
                <button
                  className='text-white font-bold text-md bg-red-700 rounded-2xl w-fit h-fit px-4 py-2 m-4'
                // onClick={() => window.open('https://amazon.in', '_blank')}
                >
                  Play Now
                </button>
              </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}






export default ApprovedApplications;
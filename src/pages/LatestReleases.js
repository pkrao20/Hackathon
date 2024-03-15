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

const LatestReleases = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <h1 className='font-bold text-3xl my-8 text-purple-700'> Latest Releases-- </h1>

      <div className='grid grid-cols-1 gap-8'>
        {
          games.map((game, index) => (
            <div key={index} className='flex flex-col justify-between border-2 border-red-500 h-[200px] w-[300px] rounded-[10%]'>
              <h1 className='m-3 font-semibold text-lg'> {game.company} </h1>
              <h1 className='m-3 font-semibold text-lg'> Genre: {game.Genere} </h1>

              <div className='w-full flex justify-end'>
                <button
                  className='text-black font-bold text-md bg-green-700 rounded-2xl w-fit h-fit px-4 py-2 m-4'
                // onClick={() => window.open('https://amazon.in', '_blank')}
                >
                  Apply now
                </button>
              </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}




export default LatestReleases;
import React from 'react';

const games = [
    'Clash of Clans', 'Clash Royal', 'Temple Run',
    'Sniper game', 'Asphalt-9', 'Moto-G'
   
];

const InstantPlay = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center  mt-[80px]'>
        <h1 className='font-bold text-3xl my-8 text-purple-700'> INSTANT PLAY -- </h1>

        <div className='grid grid-cols-1 gap-8'>
            {
                games.map((game, index) => (
                    <div key={index} className='flex flex-col justify-between border-2 border-red-500 h-[150px] w-[300px] rounded-[10%]'>
                        <h1 className='m-3 font-semibold text-lg'> {game}: </h1>

                        <div className='w-full flex justify-end'>
                            <button 
                                className='text-black font-bold text-md bg-green-700 rounded-2xl w-fit h-fit px-4 py-2 m-4'
                                // onClick={() => window.open('https://amazon.in', '_blank')}
                            >
                                Try now
                            </button>
                        </div>
                        
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default InstantPlay;
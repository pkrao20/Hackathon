import React from 'react'
import { TextField } from '@mui/material'
import { Button } from '@mui/material';

const Profile = () => {

  return (
    <div className='w-full mt-[50px] flex flex-col items-center'>

      <h1 className='text-2xl font-bold mb-12'>Profile Details</h1>

      <div className='mb-8'>
        <h1 className='text-black text-xl font-bold mb-2 '>Name</h1>
        <div className='border-2 border-black p-2 px-6 rounded-xl w-[250px]'>
          XXXXXX
        </div>
      </div>
      <div className='mb-8'>
        <h1 className='text-black text-xl font-bold mb-2 '>Mob No</h1>
        <div className='border-2 border-black p-2 px-6 rounded-xl w-[250px]'>
          XXXXXX
        </div>
      </div>
      <div className='mb-8'>
        <h1 className='text-black text-xl font-bold mb-2 '>Email</h1>
        <div className='border-2 border-black p-2 px-6 rounded-xl w-[250px]'>
          XXXXXX
        </div>
      </div>
      <div className='mb-8'>
        <h1 className='text-black text-xl font-bold mb-2 '>Expertise Applications</h1>
        <div className='border-2 border-black p-2 px-6 rounded-xl w-[250px]'>
          XXXXXX
        </div>
      </div>

      <Button
        variant='contained'
        style={{
          textTransform: 'none',
          fontSize: '15px',
          marginTop: '15px',
          fontWeight:700,
          backgroundColor:'brown'

        }}
        
      >
        Edit Profile
      </Button>

    </div>
  );
}

export default Profile;
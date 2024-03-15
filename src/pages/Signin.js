import React from 'react';
import { useState } from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';


const Signin = () => {

    const [mode, SetMode] = useState('signin');


  return (
    <div className='w-full mt-[125px] flex flex-col items-center'>
        
        <ButtonGroup
            disableElevation
            aria-label="Disabled button group"
            className='mb-8'
        >
            <Button
                variant={mode === 'signin' ? 'contained' : 'outlined'}
                onClick={() => {
                    SetMode('signin');
                }}
                style={{
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '17px'
                }}
            >
                Signin
            </Button>

            <Button
                variant={mode === 'signup' ? 'contained' : 'outlined'}
                onClick={() => {
                    SetMode('signup');
                }}
                style={{
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '17px'
                }}
            >
                Signup
            </Button>

        </ButtonGroup>

        <div className=''>

            {
                mode === 'signin' ? 
                
                <>
                
                    <form 
                        className='flex flex-col gap-4 w-[350px]'
                    >
                        <label className='font-semibold text-sm'>
                            <div className='flex gap-[3px]'> 
                                <p> Username/Email </p> 
                                <p className='text-red-500 items-start'> * </p> 
                            </div>
                        </label>
                        <TextField 
                            size='small' 
                            id="filled-basic" 
                            label="Username/Email" 
                            variant="filled" 
                        />

                        <label className='font-semibold text-sm'>
                            <div className='flex gap-[3px]'> 
                                <p> Password </p> 
                                <p className='text-red-500 items-start'> * </p> 
                            </div>
                        </label>
                        <TextField 
                            size='small' 
                            id="filled-basic" 
                            label="Password" 
                            variant="filled" 
                            type='password'
                        />

                        <Button 
                            variant='contained'
                            style={{
                                textTransform: 'none',
                                fontSize: '15px',
                                marginTop: '15px'
                            }}
                        > 
                            Signin
                        </Button>

                    </form>

                </>

                :


                <>

                    <form className='flex flex-col gap-4 w-[350px]'>
                            
                    <label className='font-semibold text-sm'>
                        <div className='flex gap-[3px]'> 
                            <p> Username </p> 
                            <p className='text-red-500 items-start'> * </p> 
                        </div>
                    </label>
                    <TextField 
                        size='small' 
                        id="filled-basic" 
                        label="Username" 
                        variant="filled" 
                    />

                    <label className='font-semibold text-sm'>
                        <div className='flex gap-[3px]'> 
                            <p> Email </p> 
                            <p className='text-red-500 items-start'> * </p> 
                        </div>
                    </label>
                    <TextField 
                        size='small' 
                        id="filled-basic" 
                        label="Email" 
                        variant="filled" 
                        type='email'
                    />

                    <label className='font-semibold text-sm'>
                        <div className='flex gap-[3px]'> 
                            <p> Password </p> 
                            <p className='text-red-500 items-start'> * </p> 
                        </div>
                    </label>
                    <TextField 
                        size='small' 
                        id="filled-basic" 
                        label="Password" 
                        variant="filled" 
                        type='password'
                    />

                    <label className='font-semibold text-sm'>
                        <div className='flex gap-[3px]'> 
                            <p> Confirm password </p> 
                            <p className='text-red-500 items-start'> * </p> 
                        </div>
                    </label>        
                    <TextField 
                        size='small' 
                        id="filled-basic" 
                        label="Confirm password" 
                        variant="filled" 
                        type='password'
                    />

                    <Button 
                        variant='contained'
                        style={{
                            textTransform: 'none',
                            fontSize: '15px',
                            marginTop: '15px'
                        }}
                    > 
                        Signup
                    </Button>

                    </form>
                
                </>

            }

        </div>

    </div>
  )
}

export default Signin
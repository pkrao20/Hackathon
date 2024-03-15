
import * as React from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Navbar = () => {
    return (
        <nav className='fixed top-0 left-0 w-full h-[65px] flex justify-center bg-blue-200'>
            <div className='max-w-[1800px] h-full w-full flex items-center justify-between'>
                <Link to='/' className='ml-8'>
                    <h1 className='font-bold text-2xl'>
                        Pre-Ex
                    </h1>
                </Link>
                <Button
                    style={{
                        textTransform: 'none',
                        fontSize: '17px',
                        fontWeight: 600,
                        marginRight: '32px',
                        borderRadius: '5px',
                        paddingTop: '8px',
                        paddingBottom: '8px',
                        paddingLeft: '16px',
                        paddingRight: '16px'
                    }}
                    onClick={() => {
                        window.location.href = `/auth/signin`;
                    }}
                    variant='contained'
                >
                    <div className='flex gap-3 items-center'>

                        <AccountCircleIcon />
                        Signin
                    </div>
                </Button>



            </div>
        </nav>
    );
}

export default Navbar;
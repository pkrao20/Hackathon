import React from 'react';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import CheckIcon from '@mui/icons-material/Check';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

const arr = [
    {
        icon: <AllInclusiveIcon />,
        url: '/instant-play'
    },
    {
        icon: <FlashOnIcon />,
        url: '/latest-releases'
    },
    {
        icon: <LockOpenIcon />,
        url: '/approved-applications'
    },
    {
        icon: <CheckIcon />,
        url: '/reviewed-applications'
    },
    {
        icon: <PersonIcon />,
        url: '/profile'
    },
];

const BottomBar = () => {
  return (
    <div className='fixed bottom-0 left-0 bg-gray-500 w-full flex justify-center mt-12'>
        <div className='w-[250px] py-2 flex flex-row gap-8 items-center border-t-4 border-gray-500 rounded-xl'>
            {
                arr.map((ar) => (
                    <div className=''>
                        <Link to={ar.url} className=''>
                            {ar.icon}
                        </Link>
                    </div>
                ))
            }
            <div>hello</div>
        </div>
    </div>
  );
}

export default BottomBar;
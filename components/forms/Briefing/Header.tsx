import React from 'react';

interface Props {
    info: {
        name: String,
        description: String
    }
}

const Header: React.FC<Props> = ({ info }) => {
    return (
        <div className='w-full h-30 bg-violit-main px-5 py-5 rounded-md'>
            <h1 className='text-white text-2xl font-semibold'>{info.name}</h1>
            <h3 className='text-grey-light text-sm mt-1'>{info.description}</h3>
        </div>
    )
}

export default Header
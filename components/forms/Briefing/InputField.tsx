import React from 'react'

interface Props {
    placeholder: String,
    label?: String,
    expanding: Boolean,
    handleChange: Function
}

const Input: React.FC<Props> = ({ placeholder, label, expanding, handleChange }) => {
    return (
        <div className={`flex flex-col-reverse px-2 my-3 ${expanding ? 'col-span-2' : 'col-span-1'} flex-1`}>
            <input type='text' placeholder={`${placeholder}`} id="input" className={`mr-auto w-full py-2 px-3 rounded border-grey-dark border-[1px] mr-1 ml-1 outline-none focus:border-violit-main my-0`} onChange={e => {handleChange(e)}} />
            {label && <label htmlFor='input' className='ml-2 mb-2'>{label}</label>}
        </div>
    )
}

export default Input
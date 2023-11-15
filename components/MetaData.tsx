import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import YourFormDataInterface from './DataTypes/ClientAccessFormDataInterface';
import meta from '../public/images/meta.png';

interface MetaDataProps {
    formData: YourFormDataInterface;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MetaData: React.FC<MetaDataProps> = ({ formData, handleChange }) => {
    return (
        <>
            <div className='MetaData mb-10 mt-4'>
                <div className='flex gap-2 items-center mb-4'>
                    <div>
                        <Image src={meta} alt="" width={40} className='h-auto' />
                    </div>
                    <div className='text-1xl md:text-2xl text-black'> MetaData </div>
                </div>
                <p className='text-md text-gray-400 mb-2'>To grant access to Ads Manager, please could you add us to your Meta Business Manager as a partner? Here's a quick summary of how to provide access: Login to Meta Business Manager Head to 'Business Settings' Under 'Users', click 'Partners' Add our Vouch Global Business Manager ID: 297977954364891 Let me know once that's sorted and we'll go in and gain access to the relevant accounts from there.</p>
                <Link href="" className='text-blue-600'>Here is a video guide</Link>
                <div className='radio-buttons flex items-center gap-2 mb-7 mt-4'>
                    <label className={`inline-flex items-center ${formData.metaStatus === 'Completed' ? 'text-green-600' : ''}`}>
                        <div
                            className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center mr-2 ${formData.metaStatus === 'Completed' ? 'border-green-600' : 'bg-white border-green-600'}`}
                            onClick={() => handleChange({ target: { name: 'metaStatus', value: 'Completed' } } as React.ChangeEvent<HTMLInputElement>)}
                        >
                            {formData.metaStatus === 'Completed' && (
                                <span className="text-green-600">&#10003;</span>
                            )}
                        </div>
                        <span className="text-sm text-green-600">Completed</span>
                    </label>
                    <label className={`inline-flex items-center ${formData.metaStatus === 'Stuck' ? 'text-red-600' : ''}`}>
                        <div
                            className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center mr-2 ${formData.metaStatus === 'Stuck' ? 'border-red-600' : 'bg-white border-red-600'}`}
                            onClick={() => handleChange({ target: { name: 'metaStatus', value: 'Stuck' } } as React.ChangeEvent<HTMLInputElement>)}
                        >
                            {formData.metaStatus === 'Stuck' && (
                                <span className="text-red-600">&#10003;</span>
                            )}
                        </div>
                        <span className="text-sm text-red-600">Stuck, Need Help</span>
                    </label>
                </div>
            </div>
        </>
    );
};

export default MetaData;


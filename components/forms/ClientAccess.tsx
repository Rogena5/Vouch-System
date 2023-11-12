'use client'
import React, { useState, useCallback } from 'react';
import ClientAccessFormDataInterface from '../DataTypes/ClientAccessFormDataInterface';
import MetaData from '../MetaData';
import GoogleAds from '../GoogleAds';
import GoogleTag from '../GoogleTag';
import Tiktok from '../Tiktok';
import GoogleAnalytics from '../GoogleAnalytics';
import Tracking from '../Tracking';
import AdditionalInfo from '../AdditionalInfo';
import MarketingPreferences from '../MarketingPreferences';

const ClientAccess: React.FC = () => {
    const initialFormData: ClientAccessFormDataInterface = {
        updateEmails: null,
        marketingEmails: null,
        additionalInfoClientAccess: '',
        tiktokStatus: null,
        metaStatus: null,
        googleAdsStatus: null,
        googleAnalytics: null,
        googleTag: null,
        tracking: null,
    };

    const [formData, setFormData] = useState<ClientAccessFormDataInterface>(initialFormData);

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
            const { name, value, type } = e.target;

            if (type === 'checkbox') {
                const isChecked = (e as React.ChangeEvent<HTMLInputElement>).target.checked;
                setFormData((prevData) => ({
                    ...prevData,
                    [name]: isChecked,

                }));
            } else {
                setFormData((prevData) => ({
                    ...prevData,
                    [name]: value,
                }));
            }
        },
        []
        
    );


    const handleFormSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            console.log('Form Data:', formData);
            // const response = await axios.post('https://fakeapi.com/endpoint', formData);
        } catch (error) {
            console.error('Error:', error);
        }
        setFormData(initialFormData);
    }, [formData, initialFormData]);

    return (
        <div className='container mx-auto px-20'>
            <form onSubmit={handleFormSubmit}>
                <MetaData formData={formData} handleChange={handleChange} />
                <GoogleAds formData={formData} handleChange={handleChange} />
                <GoogleTag formData={formData} handleChange={handleChange} />
                <Tiktok formData={formData} handleChange={handleChange} />
                <GoogleAnalytics formData={formData} handleChange={handleChange} />
                <Tracking formData={formData} handleChange={handleChange} />
                <AdditionalInfo formData={formData} handleChange={handleChange} />
                <MarketingPreferences formData={formData} handleChange={handleChange} />
                <div className="flex justify-center mb-7">
                    <button type="submit" className="bg-violet-500 text-white px-7 py-2 rounded-md">Submit</button>
                </div>
            </form>
           
        </div>
    );
}

export default ClientAccess;

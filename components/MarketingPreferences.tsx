import React from 'react';
import YourFormDataInterface from './DataTypes/ClientAccessFormDataInterface';

interface MarketingPreferencesProps {
    formData: YourFormDataInterface;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MarketingPreferences: React.FC<MarketingPreferencesProps> = ({ formData, handleChange }) => {
    return (
        <div className='mb-4'>
            <hr />
            <div className='mt-4 mb-7 radio-buttons flex flex-col md:flex-row items-center gap-4'>
                <label className={`inline-flex items-center mb-2 md:mb-0 ${formData.updateEmails === 'check' ? 'text-green-600' : ''}`}>
                    <div
                        className={`w-5 h-5 border rounded-md flex items-center justify-center mr-2 ${formData.updateEmails === 'check' ? 'bg-green-600' : 'bg-white border-gray-400'}`}
                        onClick={() => handleChange({ target: { name: 'updateEmails', value: formData.updateEmails === 'check' ? 'noCheck' : 'check' } } as React.ChangeEvent<HTMLInputElement>)}
                    >
                        {formData.updateEmails === 'check' && (
                            <span className="text-white">&#10003;</span>
                        )}
                    </div>
                    <span className="text-sm text-green-600">Main Point of Contact - Send me workflow update emails</span>
                </label>

                <label className={`inline-flex items-center ${formData.marketingEmails === 'check' ? 'text-green-600' : ''}`}>
                    <div
                        className={`w-5 h-5 border rounded-md flex items-center justify-center mr-2 ${formData.marketingEmails === 'check' ? 'bg-green-600' : 'bg-white border-gray-400'}`}
                        onClick={() => handleChange({ target: { name: 'marketingEmails', value: formData.marketingEmails === 'check' ? 'noCheck' : 'check' } } as React.ChangeEvent<HTMLInputElement>)}
                    >
                        {formData.marketingEmails === 'check' && (
                            <span className="text-white">&#10003;</span>
                        )}
                    </div>
                    <span className="text-sm text-green-600">Send me marketing emails from Vouch</span>
                </label>
            </div>
            <hr/>
        </div>
    );
}

export default MarketingPreferences;


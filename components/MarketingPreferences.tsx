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
                        className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center mr-2 ${formData.updateEmails === 'check' ? 'border-green-600' : 'bg-white border-green-600'}`}
                        onClick={() => handleChange({ target: { name: 'updateEmails', value: formData.updateEmails === 'check' ? 'noCheck' : 'check' } } as React.ChangeEvent<HTMLInputElement>)}
                    >
                        {formData.updateEmails === 'check' && (
                            <span className="text-green-600">&#10003;</span>
                        )}
                    </div>
                    <span className="text-sm text-green-600">Main Point of Contact - Send me workflow update emails</span>
                </label>

                <label className={`inline-flex items-center ${formData.marketingEmails === 'check' ? 'text-green-600' : ''}`}>
                    <div
                        className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center mr-2 ${formData.marketingEmails === 'check' ? 'border-green-600' : 'bg-white border-green-600'}`}
                        onClick={() => handleChange({ target: { name: 'marketingEmails', value: formData.marketingEmails === 'check' ? 'noCheck' : 'check' } } as React.ChangeEvent<HTMLInputElement>)}
                    >
                        {formData.marketingEmails === 'check' && (
                            <span className="text-green-600">&#10003;</span>
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


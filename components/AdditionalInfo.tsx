import React from 'react';
import YourFormDataInterface from './DataTypes/ClientAccessFormDataInterface';

interface AdditionalInfoProps {
    formData: YourFormDataInterface;
    handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const AdditionalInfo: React.FC<AdditionalInfoProps> = ({ formData, handleChange }) => {
    return (
        <div>
            <hr />
            <textarea
                name="additionalInfoClientAccess"
                value={formData.additionalInfoClientAccess}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange(e)}
                className="mt-7 mb-4 text-black border-2 rounded-lg border-inherit md:w-4/12 w-full h-40 p-2 hover:border-violet-400 text-sm md:text-base overflow-hidden"
                placeholder='Please include any other additional information that we may need to know regarding invoicing and billing (such as key dates, availability etc).'
            ></textarea>
            <hr />
        </div>
    );
}

export default AdditionalInfo;

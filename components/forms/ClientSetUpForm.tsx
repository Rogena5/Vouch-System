'use client'
import { useCallback, useState } from 'react';
import ClientDetailsForm from '../ClientDetailsForm';
import ContactDetailsForm from '../ContactDetailsForm';
import AccountContactDetailsForm from '../AccountContactDetailsForm';

const ClientSetUpForm: React.FC = () => {
    const initialFormData: clientSetupFormDataInterface = {
        name: '',
        email: '',
        companyName: '',
        companyRegistrationNumber: '',
        vatRegistrationNumber: '',
        companyAddress: '',
        billingAddress: '',
        businessCommenced: '',
        mainPointOfContact: '',
        position: '',
        emailContact: '',
        TelephoneNo: '',
        landelineNo: '',
        officeAddress: '',
        mainPointOfContactDetails: '',
        positionDetails: '',
        emailContactDetails: '',
        TelephoneNoDetails: '',
        landelineNoDetails: '',
        officeAddressDetails: '',
        additionalInfo: '',
        agreeWorkflow: null,
        agreeEmails: null,
    };
    
    const [formData, setFormData] = useState<clientSetupFormDataInterface>(initialFormData);
    const [emailError, setEmailError] = useState<string>('');
    const [telephoneError, setTelephoneError] = useState<string>('');
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value, type } = e.target;
  
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
      }));
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const TelRegex = /^\+?[0-9]*$/;

        if (!emailRegex.test(value)) {
          setEmailError('Invalid email, make it like "rogena@gmail.com"');
        } else {
          setEmailError('');
        }

       if(!TelRegex.test(value)){
          setTelephoneError('invalid telphone number');
       }else{
          setTelephoneError('')
       };
           
      };

      const isFormValid = useCallback(() => {
        // Perform additional validation if needed
        return !emailError && !telephoneError;
      }, [emailError]);
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isFormValid()) {
          try {
            console.log('Form Data:', formData);
            //const response = await axios.post('https://fakeapi.com/endpoint', formData);
          } catch (error) {
            console.error('Error:', error);
          }
          setFormData(initialFormData);
        } else {
          console.log('Form is invalid. Please fix errors before submitting.');
        }  
      };

    return (
        <div className='container mx-auto px-20'>
            <form onSubmit={handleSubmit}>
                <ClientDetailsForm formData={formData} handleChange={handleChange} handleBlur={handleBlur} emailError={emailError}/>
                <ContactDetailsForm formData={formData} handleChange={handleChange} handleBlur={handleBlur} emailError={emailError}  telephoneNoError={telephoneError}/>
                <AccountContactDetailsForm formData={formData} handleChange={handleChange} handleBlur={handleBlur} emailError={emailError} telephoneNoError={telephoneError} />
                <div className='mt-4 mb-7 radio-buttons flex flex-col gap-2'>
                <label className={`inline-flex items-center ${formData.agreeWorkflow === 'check' ? 'text-green-600' : ''}`}>
                    <div
                        className={`w-5 h-5 border rounded-md flex items-center justify-center mr-2 ${formData.agreeWorkflow === 'check' ? 'bg-green-600' : 'bg-white border-gray-400'}`}
                        onClick={() => handleChange({ target: { name: 'agreeWorkflow', value: formData.agreeWorkflow === 'check' ? 'noCheck' : 'check' } } as React.ChangeEvent<HTMLInputElement>)}
                    >
                        {formData.agreeWorkflow === 'check' && (
                            <span className="text-white">&#10003;</span>
                        )}
                    </div>
                    <span className="text-sm text-green-600">Main Point of Contact - Send me workflow update emails</span>
                </label>

                <label className={`inline-flex items-center ${formData.agreeEmails === 'check' ? 'text-green-600' : ''}`}>
                    <div
                        className={`w-5 h-5 border rounded-md flex items-center justify-center mr-2 ${formData.agreeEmails === 'check' ? 'bg-green-600' : 'bg-white border-gray-400'}`}
                        onClick={() => handleChange({ target: { name: 'agreeEmails', value: formData.agreeEmails === 'check' ? 'noCheck' : 'check' } } as React.ChangeEvent<HTMLInputElement>)}
                    >
                        {formData.agreeEmails === 'check' && (
                            <span className="text-white">&#10003;</span>
                        )}
                    </div>
                    <span className="text-sm text-green-600">Send me marketing emails from Vouch</span>
                </label>
            </div>
            
                <div className="flex justify-center mb-7">
                    <button type="submit" className="bg-violet-500 text-white px-7 py-2 rounded-md">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default ClientSetUpForm;

import React, { useState } from 'react';
interface ContactDetailsFormProps {
  formData: clientSetupFormDataInterface;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  emailError: string;
  telephoneNoError: string; 
}

const ContactDetailsForm: React.FC<ContactDetailsFormProps> = ({ formData, handleChange, handleBlur, emailError, telephoneNoError }) => {
  return (
    <div>
      <h3 className='header-clientForm mb-7 text-2xl md:text-4xl text-black'> Main Point of contact</h3>
      <div className='second-form grid md:grid-cols-3 grid-cols-2 gap-4 mb-7'>
        <div>
          <input type="text" name="mainPointOfContact" placeholder='main Point Of Contact (name)' className="text-black border-2 rounded-lg border-inherit w-full p-2 hover:border-violet-400 text-sm md:text-base" value={formData.mainPointOfContact} onChange={handleChange} required />
        </div>
        <div>
          <input type="text" name="position" placeholder='Position' className="text-black border-2 rounded-lg border-inherit w-full p-2 hover:border-violet-400 text-sm md:text-base" value={formData.position} onChange={handleChange} required />
        </div>
        <div>
          <input type="email" name="emailContact" placeholder='email' className="text-black border-2 rounded-lg border-inherit w-full p-2 hover:border-violet-400 text-sm md:text-base"
            value={formData.emailContact} onChange={handleChange}
            onBlur={handleBlur}
            required />
        {emailError && <div style={{ color: 'red', marginTop: '1px' }}>{emailError}</div>}
        </div>
        <div>
          <input type="tel" name="TelephoneNo" placeholder='Telephone No' className="text-black border-2 rounded-lg border-inherit w-full p-2 hover:border-violet-400 text-sm md:text-base"
            value={formData.TelephoneNo} onChange={handleChange}
            onBlur={handleBlur} 
            required
          />
          {telephoneNoError && <div style={{ color: 'red', marginTop: '1px' }}>{telephoneNoError}</div>}
        </div>
        <div>
          <input type="number" name="landelineNo" placeholder='landeline No' className="text-black border-2 rounded-lg border-inherit w-full p-2 hover:border-violet-400 text-sm md:text-base" value={formData.landelineNo} onChange={handleChange} />
        </div>
        <div>
          <input type="text" name="officeAddress" placeholder='office Address' className="text-black border-2 rounded-lg border-inherit w-full p-2 hover:border-violet-400 text-sm md:text-base" value={formData.officeAddress} onChange={handleChange} required />
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsForm;

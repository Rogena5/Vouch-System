import React from 'react';
interface ClientDetailsFormProps {
  formData: clientSetupFormDataInterface;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  emailError: string;
}

const ClientDetailsForm: React.FC<ClientDetailsFormProps> = ({ formData, handleChange, handleBlur, emailError}) => {
  return (
    <div>
      {/* Header Client Setup Form*/}
      <div className='header-clientForm mb-7'>
        <h3 className='text-2xl md:text-4xl text-black'>Client Setup Form</h3>
        <p className='text-md text-gray-400'>Please complete the form below so we can get to work</p>
      </div>
      {/*client details form input fields */}
      <div className='first-form grid md:grid-cols-3 grid-cols-2 gap-4 mb-7'>
        <div>
          <input type="text" name="name" placeholder='Your Name' className="text-black border-2 rounded-lg border-inherit w-full p-2 focus:border-violet-500 outline-none text-sm md:text-base" value={formData.name} onChange={handleChange} required />
        </div>

        <div>
          <input type="email" name="email" placeholder='Email' className="text-black border-2 rounded-lg border-inherit w-full p-2 focus:border-violet-500 outline-none text-sm md:text-base" value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required />
          {emailError && <div style={{ color: 'red', marginTop: '1px' }}>{emailError}</div>}
        </div>

        <div>
          <input type="text" name="companyName" placeholder='company name' className="text-black border-2 rounded-lg border-inherit w-full p-2 focus:border-violet-500 outline-none text-sm md:text-base" value={formData.companyName} onChange={handleChange} required />
        </div>

        <div>
          <input type="number" name="companyRegistrationNumber" placeholder='company Registration No' className="text-black border-2 rounded-lg border-inherit w-full p-2 focus:border-violet-500 outline-none text-sm md:text-base" value={formData.companyRegistrationNumber} onChange={handleChange} required />
        </div>

        <div>
          <input type="number" name="vatRegistrationNumber" placeholder='vat Registration No' className="text-black border-2 rounded-lg border-inherit w-full p-2 focus:border-violet-500 outline-none text-sm md:text-base" value={formData.vatRegistrationNumber} onChange={handleChange} required />
        </div>

        <div>
          <input type="text" name="companyAddress" placeholder='company Address' className="text-black border-2 rounded-lg border-inherit w-full p-2 focus:border-violet-500 outline-none text-sm md:text-base" value={formData.companyAddress} onChange={handleChange} required />
        </div>

        <div>
          <input type="text" name="billingAddress" placeholder='billing Address' className="text-black border-2 rounded-lg border-inherit w-full p-2 focus:border-violet-500 outline-none text-sm md:text-base" value={formData.billingAddress} onChange={handleChange} required />
        </div>

        <div>
          <input type="date" name="businessCommenced" placeholder='business Commenced(Date)' className="text-black border-2 rounded-lg border-inherit w-full p-2 focus:border-violet-500 outline-none text-gray-400 text-sm md:text-base" value={formData.businessCommenced} onChange={handleChange} required />
        </div>
      </div>
    </div>
  );
};

export default ClientDetailsForm;

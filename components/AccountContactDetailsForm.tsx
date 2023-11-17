import React from 'react';
interface AccountContactDetailsFormProps {
    formData: clientSetupFormDataInterface;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    emailError: string;
    telephoneNoError: string; 
}

const AccountContactDetailsForm: React.FC<AccountContactDetailsFormProps> = ({ formData, handleChange, handleBlur, emailError, telephoneNoError }) => {
    return (
        <div>
            {/* THIRD FORM  */}
            {/*start => headerAccount contact Details*/}
            <div className='header-clientForm mb-7'>
                <h3 className='text-2xl md:text-4xl text-black'>Account contact Details</h3>
                <p className='text-md text-gray-400'>below requires the information for your invoicing and billing department</p>
            </div>
            {/* end => headerAccount*/}
            <div className='second-form grid md:grid-cols-3 grid-cols-2 gap-4 mb-7'>
                <div>
                    <input type="text" name="mainPointOfContactDetails" placeholder='main Point Of Contact(name)' className="text-black border-2 rounded-lg border-inherit w-full p-2 focus:border-violet-500 outline-none text-sm md:text-base" value={formData.mainPointOfContactDetails} onChange={handleChange} required />
                </div>

                <div>
                    <input type="text" name="positionDetails" placeholder='Position' className="text-black border-2 rounded-lg border-inherit w-full p-2 focus:border-violet-500 outline-none text-sm md:text-base" value={formData.positionDetails} onChange={handleChange} required />
                </div>

                <div>
                    <input type="email" name="emailContactDetails" placeholder='email' className="text-black border-2 rounded-lg border-inherit w-full p-2 focus:border-violet-500 outline-none text-sm md:text-base"
                        value={formData.emailContactDetails} onChange={handleChange}
                        onBlur={handleBlur}
                        required />
                    {emailError && <div style={{ color: 'red', marginTop: '1px' }}>{emailError}</div>}
                </div>

                <div>
                    <input type="tel" name="TelephoneNoDetails" placeholder='Telephone No' className="text-black border-2 rounded-lg border-inherit w-full p-2 focus:border-violet-500 outline-none text-sm md:text-base"
                        value={formData.TelephoneNoDetails} onChange={handleChange}
                        onBlur={handleBlur} 
                        required
                      />
                      {/* Display telephone number error message */}
                      {telephoneNoError && <div style={{ color: 'red', marginTop: '1px' }}>{telephoneNoError}</div>}
                </div>

                <div>
                    <input type="number" name="landelineNoDetails" placeholder='landeline No'
                        className="text-black border-2 rounded-lg border-inherit w-full p-2 focus:border-violet-500 outline-none text-sm md:text-base"
                        value={formData.landelineNoDetails} onChange={handleChange} />
                </div>

                <div>
                    <input type="text" name="officeAddressDetails" placeholder='office Address'
                        className="text-black border-2 rounded-lg border-inherit w-full p-2 focus:border-violet-500 outline-none ttext-sm md:text-base"
                        value={formData.officeAddressDetails} onChange={handleChange} required />
                </div>
                <div>
                    <textarea
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        style={{ overflow: "hidden" }}
                        onChange={handleChange}
                        className="text-black border-2 rounded-lg border-inherit w-full h-40 p-2 focus:border-violet-500 outline-none text-sm md:text-base"
                        placeholder="Please include any other additional information that we may need to know regarding invoicing and billing (such as key dates, availability etc)."
                    ></textarea>
                </div>

            </div>
        </div>
    );
};

export default AccountContactDetailsForm;

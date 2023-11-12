'use client'
import React, { useState, useCallback } from 'react';

const OnBoardNewClient = () => {
    const [emailError, setEmailError] = useState<string>('');
    const initialFormData = {
        nameOnBoard: '',
        email: '',
        sectorsOne: [
            { label: 'hospitality', value: 'hospitality' },
            { label: 'tourism', value: 'tourism' },
            { label: 'hotel managemant', value: 'hotel managemant' }
        ],
        sectorsTwo: [
            { label: 'newBrand', value: 'newBrand' },
            { label: 'establishedActitvity', value: 'establishedActitvity' },
        ],
        acountLeadOptions: [
            { label: 'Alex Sewel', value: 'Alex Sewel' },
            { label: 'Ahmed', value: 'Ahmed' },
        ],
        additionalTeamOptions: [
            { label: 'Jennifer Parker', value: 'ennifer Parker' },
            { label: 'Rogena', value: 'Rogena' },
        ],
        SecondAdditionalTeamOtions: [
            { label: 'Chloe Hoffmann', value: 'Chloe Hoffmann' },
            { label: 'Parker', value: 'Parker' },
        ],
        thirdAdditionalTeamOptions: [
            { label: 'Steve Robinson', value: 'Steve Robinson' },
            { label: 'Mark gan', value: 'Mark gan' },
        ],
        selectedSectorOne: 'hospitality',
        selectedSectorTwo: 'newBrand',
        acountLead: 'Alex Sewel',
        additionalTeam: 'ennifer Parker',
        SecondAdditionalTeam: 'Chloe Hoffmann',
        thirdAdditionalTeam: 'Steve Robinson',
    };

    const [checkboxes, setCheckboxes] = useState<{
        [key: string]: boolean;
    }>({
        paidmedia: false,
        organicSocial: false,
        websiteDevelopment: false,
        brandigDesign: false,
        SEO: false,
        VideoContent: false,
        CRO: false,
        UIUX: false,
        Insight: false,
        ProgrammaticDisplay: false,
        AmazonPPC: false,
        InfluencerMarketing: false,
        AdCreative: false,
        CopyWriting: false,
    });

    const handleCheckboxToggle = useCallback((checkboxName: keyof typeof checkboxes) => {
        setCheckboxes((prevCheckboxes) => ({
            ...prevCheckboxes,
            [checkboxName]: !prevCheckboxes[checkboxName],
        }));
    }, [checkboxes]);

    const [formData, setFormData] = useState(initialFormData);

    const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmailError(emailRegex.test(value) ? '' : 'Please enter a valid email like "rogena@gmail.com"');
    };

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
        }));
    }, []);

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (emailError) {
            return;
        }
        try {
            const { nameOnBoard, acountLead } = formData;
            const message = `Hi ${nameOnBoard}, 
                Please complete the setup form.
                This is a 2-step process that includes the required completion of:
                1. Setup and Company Information
                2. Activity Briefs & any relevant access we will need.
                Please keep an additional eye out for the Booking Form and SLA being sent out to you shortly.
                Best Regards, 
                ${acountLead}
                PS. Call the office on 0203 151 9224 if you have any issues with this part of the onboarding process.`;

            console.log('Sending message:', message, 'Form Data:', formData, checkboxes);
            // const response = await axios.post('https://fakeapi.com/endpoint', formData, message);
        } catch (error) {
            console.error('Error:', error);
        }

        // Reset checkboxes after submission
        setCheckboxes({
            paidmedia: false,
            organicSocial: false,
            websiteDevelopment: false,
            brandigDesign: false,
            SEO: false,
            VideoContent: false,
            CRO: false,
            UIUX: false,
            Insight: false,
            ProgrammaticDisplay: false,
            AmazonPPC: false,
            InfluencerMarketing: false,
            AdCreative: false,
            CopyWriting: false,
        });

        setFormData(initialFormData);
        setEmailError('');
    }, [formData, initialFormData, emailError, checkboxes]);

    return (
        <div className='container mx-auto px-20'>
            <form onSubmit={handleSubmit}>
                <div className='header-clientForm mb-7'>
                    <h3 className='text-2xl md:text-4xl text-black'>Onboard New Client</h3>
                    <p className='text-md text-gray-400'>invite a new client to be onboarded yo vouch global</p>
                </div>
                <div className='first-form grid md:grid-cols-3 grid-cols-2 gap-4 mb-7'>
                    <div>
                        <input
                            type="text"
                            name="nameOnBoard"
                            placeholder='Your Name'
                            className="text-black border-2 rounded-lg border-inherit w-full p-2 hover:border-violet-400"
                            value={formData.nameOnBoard}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder='Email'
                            className="text-black border-2 rounded-lg border-inherit w-full p-2 hover:border-violet-400"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleEmailBlur}
                            required />
                        {emailError && <div style={{ color: 'red', marginTop: '1px' }}>{emailError}</div>}

                    </div>

                    <div className='flex flex-col gap-y-2'>

                        <select
                            name="selectedSectorOne"
                            value={formData.selectedSectorOne}
                            onChange={handleChange}
                            className="text-black border-2 rounded-lg border-inherit w-full p-2 hover:border-violet-400"
                        >
                            <option value="hospitality">hospitality</option>
                            {formData.sectorsOne.map((SectorOption, index) => (
                                <option key={index} value={SectorOption.value}>
                                    {SectorOption.label}
                                </option>
                            ))}
                        </select>
                        <select
                            name="selectedSectorTwo"
                            value={formData.selectedSectorTwo}
                            onChange={handleChange}
                            className="text-black border-2 rounded-lg border-inherit w-full p-2 hover:border-violet-400"
                        >
                            <option value="New Brand or Established Activity">New Brand or Established Activity</option>
                            {formData.sectorsTwo.map((emailOption, index) => (
                                <option key={index} value={emailOption.value}>
                                    {emailOption.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                {/* _____________________________________________ SECTION 2 __________________________*/}
                <div className='mb-7'><p className='text-md text-gray-400 mb-4'>Vouch Acount Lead</p>
                    <div className='flex flex-col gap-y-2'>

                        <select
                            name="acountLead"
                            value={formData.acountLead}
                            onChange={handleChange}
                            className="text-black border-2 rounded-lg border-inherit  p-2 w-4/12 hover:border-violet-400"
                        >
                            <option value="Alex Sewel">Alex Sewel</option>
                            {formData.acountLeadOptions.map((emailOption, index) => (
                                <option key={index} value={emailOption.value}>
                                    {emailOption.label}
                                </option>
                            ))}
                        </select>

                    </div></div>
                {/* ________________________________________________________________________________ */}
                <p className='text-md text-gray-400 mb-4'>Additional team on account</p>
                <div className='third-form grid md:grid-cols-3 grid-cols-2 gap-4 mb-7'>

                    <select
                        name="additionalTeam"
                        value={formData.additionalTeam}
                        onChange={handleChange}
                        className="text-black border-2 rounded-lg border-inherit  p-2 w-full hover:border-violet-400"
                    >
                        <option value="Jennifer Parkerr">Jennifer Parkerr</option>
                        {formData.additionalTeamOptions.map((emailOption, index) => (
                            <option key={index} value={emailOption.value}>
                                {emailOption.label}
                            </option>
                        ))}
                    </select>
                    <select
                        name="SecondAdditionalTeam"
                        value={formData.SecondAdditionalTeam}
                        onChange={handleChange}
                        className="text-black border-2 rounded-lg border-inherit w-full  p-2 hover:border-violet-400"
                    >
                        <option value="Chloe Hoffmann">Chloe Hoffmann</option>
                        {formData.SecondAdditionalTeamOtions.map((emailOption, index) => (
                            <option key={index} value={emailOption.value}>
                                {emailOption.label}
                            </option>
                        ))}
                    </select>
                    <select
                        name="thirdAdditionalTeam"
                        value={formData.thirdAdditionalTeam}
                        onChange={handleChange}
                        className="text-black border-2 rounded-lg border-inherit w-full  p-2  hover:border-violet-400"
                    >
                        <option value="Steve Robinson">Steve Robinson</option>
                        {formData.thirdAdditionalTeamOptions.map((emailOption, index) => (
                            <option key={index} value={emailOption.value}>
                                {emailOption.label}
                            </option>
                        ))}
                    </select>

                </div>
                {/* ________________ checkboxes / SECTION 3 _________________ */}
                <div className="mb-4">
                    {/* header */}
                    <div className='header-clientForm mb-7'>
                        <h3 className='text-2xl md:text-4xl text-black'>Core services</h3>
                        <p className='text-md text-gray-400'>This will send the client the right onboarding briefs for completion, once they have submitted their company details.</p>
                    </div>
                </div>

                {/*  */}
                <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mb-8'>
                    {Object.keys(checkboxes).map((name, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <div
                                className={`w-5 h-5 border rounded-md flex items-center justify-center mr-2 ${checkboxes[name as keyof typeof checkboxes] ? 'bg-violet-600' : 'bg-white border-gray-400'
                                    }`}
                                onClick={() => handleCheckboxToggle(name as keyof typeof checkboxes)}
                            >
                                {checkboxes[name as keyof typeof checkboxes] && <span className="text-white">&#10003;</span>}
                            </div>
                            <label className={`block text-sm md:text-base font-semibold text-violet-400`}>
                                {name}
                            </label>
                        </div>
                    ))}
                </div>
                {/* ___________ */}
                <div className='text-black border-2 rounded-lg border-inherit w-full p-2 hover:border-violet-400 mb-7'>
                    Hi {formData.nameOnBoard},
                    Please complete the setup form.
                    This is a 2-step process that includes the required completion of:
                    1. Setup and Company Information
                    2. Activity Briefs & any relevant access we will need.
                    Please keep an additional eye out for the Booking Form and SLA being sent out to you shortly.
                    <div> Best Regards,</div> <div>{formData.acountLead}</div>
                    PS. Call the office on 0203 151 9224 if you have any issues with this part of the onboarding process.
                </div>
                <div className="flex justify-center mb-7">
                    <button type="submit" className="bg-violet-500 text-white px-7 py-2 rounded-md">
                        Send
                    </button>
                </div>
            </form>
            {/* Rest of the form */}
        </div>
    );
};

export default OnBoardNewClient;
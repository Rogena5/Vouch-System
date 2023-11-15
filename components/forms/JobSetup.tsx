'use client'
import React, { useState, useEffect, useCallback } from 'react';
import { BsArrowBarUp } from 'react-icons/bs';
import axios from 'axios';
import Link from 'next/link';

interface JobSetFormData {
    name: string;
    email: string;
    companyName: string;
    vat: string;
    registeredAddress: string;
    businessCommenced: string;
    agreeWorkflow: 'check' | 'noCheck';
    agreeEmails: 'check' | 'noCheck';
    [key: string]: string | 'check' | 'noCheck';
}

function JobSetup() {
    const [formData, setFormData] = useState<JobSetFormData>({
        name: 'Rogena',
        email: 'rogenaramze10@gmail.com',
        companyName: 'puff',
        vat: '1234ro',
        registeredAddress: 'yu9',
        businessCommenced: 'vouage',
        agreeWorkflow: 'noCheck',
        agreeEmails: 'noCheck',
    });

    const [selectedFile1, setSelectedFile1] = useState<File | null>(null);
    const [selectedFile2, setSelectedFile2] = useState<File | null>(null);

    const handleFileChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setSelectedFile1(file);
        }
    };

    const handleFileChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setSelectedFile2(file);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value as 'check' | 'noCheck' }));
    };

    useEffect(() => {
        axios.get('https://fakeApis/com')
            .then((response) => {
                const data = response.data;
                setFormData({
                    name: data.name,
                    email: data.email,
                    companyName: data.company.name,
                    vat: 'FakeVAT123',
                    registeredAddress: '123 Fake Street',
                    businessCommenced: '2022-01-01',
                    agreeWorkflow: 'noCheck',
                    agreeEmails: 'noCheck',
                });
            })
            .catch((error) => {
                console.error('Error fetching fake data:', error);
            });
    }, []);

    const handleFormSubmit = () => {
        const formDataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
            formDataToSend.append(key, formData[key]);
        });
        formDataToSend.append('file1', selectedFile1 || '');
        formDataToSend.append('file2', selectedFile2 || '');
        console.log(formDataToSend)

        // axios.post('http://localhost:3000/jobSetup', formDataToSend)
        //     .then((response) => {
        //         const data = response.data;
        //         console.log('Data successfully posted:', data);
        //     })
        //     .catch((error) => {
        //         console.error('Error posting data:', error);
        //     });
    };

    return (
        <div className='container mx-auto  px-4 sm:px-6 lg:px-8'>
            {/* _________________________ first form ___________________ */}
            <div className='first-box bg-gradient-to-r from-purple-50 to-indigo-100 p-10 border border-violet-50 rounded-xl mb-7'>
                <div className='header-JobSetup mb-7'>
                    <h3 className='text-xl md:text-3xl text-black'>Mark Joseph </h3>
                    <h4 className='text-sm md:text-md text-black font-semibold'>Job Setup</h4>
                    <p className='text-sm md:text-md text-gray-400'>Please complete the form below so we can get to work.</p>
                </div>
                <hr />
                {/* data */}
                <div className='form-jobSetup grid md:grid-cols-3 grid-cols-1 gap-4 mb-7 mt-4'>
                    <div className='name '>
                        <p className='text-sm md:text-md  text-gray-400'>Name</p>
                        <h3 className='text-sm md:text-md text-black font-semibold'>{formData.name}</h3>
                    </div>
                    <div>
                        <p className='text-sm md:text-md  text-gray-400'>Email Address</p>
                        <h3 className='text-sm md:text-md text-black font-semibold'>{formData.email}</h3>
                    </div>
                    <div>
                        <p className='text-sm md:text-md  text-gray-400'>Company Name</p>
                        <h3 className='text-sm md:text-md text-black font-semibold'>{formData.companyName}</h3>
                    </div>
                    <div>
                        <p className='text-sm md:text-md  text-gray-400'>VAT Registration</p>
                        <h3 className='text-sm md:text-md text-black font-semibold'>{formData.vat}</h3>
                    </div>
                    <div>
                        <p className='text-sm md:text-md text-gray-400'>Registered Address</p>
                        <h3 className='text-sm md:text-md text-black font-semibold'>{formData.registeredAddress}</h3>
                    </div>
                    <div>
                        <p className='text-sm md:text-md  text-gray-400'>Business Commenced</p>
                        <h3 className='text-sm md:text-md text-black font-semibold'>{formData.businessCommenced}</h3>
                    </div>
                </div>
            </div>
            {/* ____________________________ Second Form _________________________ */}
            <div className='second-box bg-white border border-indigo-100  border border-violet-100 rounded-xl mb-7'>
                <div className='header-JobSetup mb-7 bg-violet-500 rounded-2xl p-10 text-white text-md md:text-xl font-semibold'>
                    Main Point Of Contact
                </div>
                {/* data */}
                <div className='form-jobSetup grid md:grid-cols-3 grid-cols-1 gap-4 mb-7 mt-4 px-10'>
                    <div className='name '>
                        <p className='text-sm md:text-md  text-gray-400'>Name</p>
                        <h3 className='text-sm md:text-md text-black font-semibold'>{formData.name}</h3>
                    </div>
                    <div>
                        <p className='text-sm md:text-md  text-gray-400'>Email Address</p>
                        <h3 className='text-sm md:text-md text-black font-semibold'>{formData.email}</h3>
                    </div>
                    <div>
                        <p className='text-sm md:text-md  text-gray-400'>Company Name</p>
                        <h3 className='text-sm md:text-md text-black font-semibold'>{formData.companyName}</h3>
                    </div>
                    <div>
                        <p className='text-sm md:text-md  text-gray-400'>VAT Registration</p>
                        <h3 className='text-sm md:text-md text-black font-semibold'>{formData.vat}</h3>
                    </div>
                    <div>
                        <p className='text-sm md:text-md text-gray-400'>Registered Address</p>
                        <h3 className='text-sm md:text-md text-black font-semibold'>{formData.registeredAddress}</h3>
                    </div>
                    <div>
                        <p className='text-sm md:text-md  text-gray-400'>Business Commenced</p>
                        <h3 className='text-sm md:text-md text-black font-semibold'>{formData.businessCommenced}</h3>
                    </div>
                </div>
            </div>
            {/* ____________________________ third form __________________________ */}
            <div className='second-box bg-white border border-indigo-100  border border-violet-100 rounded-xl mb-7'>
                <div className='header-JobSetup mb-7 bg-violet-500 rounded-2xl p-10 text-white text-md md:text-xl font-semibold'>
                    Finance Contact Details
                </div>

                {/* data */}
                <div className='form-jobSetup grid md:grid-cols-3 grid-cols-1 gap-4 mb-7 mt-4 px-10'>
                    <div className='name '>
                        <p className='text-sm md:text-md  text-gray-400'>Name</p>
                        <h3 className='text-sm md:text-md text-black font-semibold'>{formData.name}</h3>
                    </div>
                    <div>
                        <p className='text-sm md:text-md  text-gray-400'>Email Address</p>
                        <h3 className='text-sm md:text-md text-black font-semibold'>{formData.email}</h3>
                    </div>
                    <div>
                        <p className='text-sm md:text-md  text-gray-400'>Company Name</p>
                        <h3 className='text-sm md:text-md text-black font-semibold'>{formData.companyName}</h3>
                    </div>
                    <div>
                        <p className='text-sm md:text-md  text-gray-400'>VAT Registration</p>
                        <h3 className='text-sm md:text-md text-black font-semibold'>{formData.vat}</h3>
                    </div>
                    <div>
                        <p className='text-sm md:text-md text-gray-400'>Registered Address</p>
                        <h3 className='text-sm md:text-md text-black font-semibold'>{formData.registeredAddress}</h3>
                    </div>
                    <div>
                        <p className='text-sm md:text-md  text-gray-400'>Business Commenced</p>
                        <h3 className='text-sm md:text-md text-black font-semibold'>{formData.businessCommenced}</h3>
                    </div>
                </div>
            </div>
            {/* ______________________________ fourth form ________________________ */}
            <div className='second-box bg-white border border-indigo-100  border border-violet-100 rounded-xl mb-7'>
                <div className='header-JobSetup mb-7 bg-violet-500 rounded-2xl p-10 text-white text-md md:text-xl font-semibold'>
                    Activity Kick Off
                </div>
                {/* data */}
                <div className='form-jobSetup grid md:grid-cols-3 grid-cols-1 gap-4 mb-7 mt-4 px-10'>
                    <div className='name '>
                        <p className='text-sm md:text-md  text-gray-400'>Account Manager</p>
                        <h3 className='text-sm md:text-md text-black font-semibold'>{formData.name}</h3>
                    </div>
                    <div>
                        <p className='text-sm md:text-md  text-gray-400'>New or Established Brand</p>
                        <h3 className='text-sm md:text-md text-black font-semibold'>{formData.email}</h3>
                    </div>
                    <div>
                        <p className='text-sm md:text-md  text-gray-400'>Sector</p>
                        <h3 className='text-sm md:text-md text-black font-semibold'>{formData.companyName}</h3>
                    </div>
                    <div>
                        <p className='text-sm md:text-md  text-gray-400'>Account Team</p>
                        <h3 className='text-sm md:text-md text-black font-semibold'>{formData.vat}</h3>
                    </div>
                    <div>
                        <p className='text-sm md:text-md text-gray-400'>Confirmed Services</p>
                        <h3 className='text-sm md:text-md text-black font-semibold'>{formData.registeredAddress}</h3>
                    </div>
                    <div>
                        <p className='text-sm md:text-md  text-gray-400'>Business Commenced</p>
                        <h3 className='text-sm md:text-md text-black font-semibold'>{formData.businessCommenced}</h3>
                    </div>
                </div>
                {/* ___________ upload files ______________ */}
                <div className='px-4 sm:px-6 lg:px-8 mb-4 flex flex-wrap gap-4'>
                    <div className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4'>
                        <input
                            type='file'
                            accept='.pdf, .doc, .docx'
                            onChange={handleFileChange1}
                            className='hidden'
                            id='ContractUploadFile'
                        />
                        <label
                            htmlFor='ContractUploadFile'
                            className='w-full cursor-pointer flex items-center text-sm md:text-md text-gray-400 font-semibold border border-indigo-300 p-2 rounded-md'
                        >
                            <BsArrowBarUp className='mr-2' /> Contract Upload
                        </label>
                        {selectedFile1 && (
                            <p className='text-sm md:text-md text-black font-semibold'>
                                Selected File: {selectedFile1.name}
                            </p>
                        )}
                    </div>

                    <div className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4'>
                        <input
                            type='file'
                            accept='.pdf, .doc, .docx'
                            onChange={handleFileChange2}
                            className='hidden'
                            id='AnotherFileUpload'
                        />
                        <label
                            htmlFor='AnotherFileUpload'
                            className='w-full cursor-pointer flex items-center text-sm md:text-md text-gray-400 font-semibold border border-indigo-300 p-2 rounded-md'
                        >
                            <BsArrowBarUp className='mr-2' /> Another File Upload
                        </label>
                        {selectedFile2 && (
                            <p className='text-sm md:text-md text-black font-semibold'>
                                Selected File: {selectedFile2.name}
                            </p>
                        )}
                    </div>
                </div>

                {/* ___________ Links ______________ */}
                <div className='px-10 text-blue-700'>
                    <div> <Link href="/briefing-answers" className='underline'>All Briefing Answers</Link></div>
                    <div>  <Link href="/brand-guidelines" className='underline'>All Brand Guidelines Documentation</Link></div>
                </div>
                {/* _______________ check boxes ________________ */}
                <div className='mt-4 mb-7 radio-buttons flex flex-col gap-2 mx-10'>
                    <label className={`inline-flex items-center ${formData.agreeWorkflow === 'check' ? 'text-green-600' : ''}`}>
                        <div
                            className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center mr-2 ${formData.agreeWorkflow === 'check' ? 'border-green-600' : 'bg-white border-green-600'}`}
                            onClick={() => handleChange({ target: { name: 'agreeWorkflow', value: formData.agreeWorkflow === 'check' ? 'noCheck' : 'check' } } as React.ChangeEvent<HTMLInputElement>)}
                        >
                            {formData.agreeWorkflow === 'check' && (
                                <span className="text-green-600">&#10003;</span>
                            )}
                        </div>
                        <span className="text-sm text-green-600">Main Point of Contact - Send me workflow update emails</span>
                    </label>
                    <label className={`inline-flex items-center ${formData.agreeEmails === 'check' ? 'text-green-600' : ''}`}>
                        <div
                            className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center mr-2 ${formData.agreeEmails === 'check' ? 'border-green-600' : 'bg-white border-green-600'}`}
                            onClick={() => handleChange({ target: { name: 'agreeEmails', value: formData.agreeEmails === 'check' ? 'noCheck' : 'check' } } as React.ChangeEvent<HTMLInputElement>)}
                        >
                            {formData.agreeEmails === 'check' && (
                                <span className="text-green-600">&#10003;</span>
                            )}
                        </div>
                        <span className="text-sm text-green-600">Send me marketing emails from Vouch</span>
                    </label>
                </div>
                {/* _______________________ */}
                <div className="flex justify-center mb-7">
                    <button type="submit" className="bg-violet-500 text-white px-7 py-2 rounded-md" onClick={handleFormSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default JobSetup
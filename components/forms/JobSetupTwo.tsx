'use client'
import { useState } from 'react'
interface JobSetFormDataTwo {
  agreeWorkflow: 'check' | 'noCheck';
  agreeEmails: 'check' | 'noCheck';
  awareness: 'check' | 'noCheck';
  sales: 'check' | 'noCheck';
  booking: 'check' | 'noCheck';
  leads: 'check' | 'noCheck';
  jobOne: 'check' | 'noCheck';
  jobTwo: 'check' | 'noCheck';
  [key: string]: string | 'check' | 'noCheck';
}

function jobSetupTwo() {
  const [formData, setFormData] = useState<JobSetFormDataTwo>({
    agreeWorkflow: 'noCheck',
    agreeEmails: 'noCheck',
    awareness: 'noCheck',
    sales: 'noCheck',
    booking: 'noCheck',
    leads: 'noCheck',
    jobOne: 'noCheck',
    jobTwo: 'noCheck',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value as 'check' | 'noCheck' }));
  };

  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 pb-7'>
      {/* ___________________ first form __________________________ */}
      <div className='first-box bg-gradient-to-r from-purple-50 to-indigo-100 p-10 border border-violet-50 rounded-xl mb-7'>
        <div className='header-JobSetup mb-7'>
          <h3 className='text-xl md:text-3xl text-black'>Mark Joseph </h3>
          <h4 className='text-sm md:text-md text-black font-semibold'>Job Setup</h4>
          <p className='text-sm md:text-md text-gray-400'>Please complete the form below so we can get to work.</p>
        </div>
        <hr />
        {/*___________ data __________*/}
        <div className='form-jobSetup grid md:grid-cols-3 grid-cols-1 gap-4 mb-7 mt-4'>
          <div className='name'>
            <p className='text-sm md:text-md  text-gray-400'>Name</p>
            <h3 className='text-sm md:text-md text-black font-semibold'>Mark Joseph</h3>
          </div>
          <div>
            <p className='text-sm md:text-md  text-gray-400'>Email Address</p>
            <h3 className='text-sm md:text-md text-black font-semibold'>mark@vouchglobal.com</h3>
          </div>
          <div>
            <p className='text-sm md:text-md  text-gray-400'>Position</p>
            <h3 className='text-sm md:text-md text-black font-semibold'>Marketing Director</h3>
          </div>
          <div>
            <p className='text-sm md:text-md  text-gray-400'>Phone Number</p>
            <h3 className='text-sm md:text-md text-black font-semibold'>07904124614</h3>
          </div>
          <div>
            <p className='text-sm md:text-md text-gray-400'>Office Address</p>
            <h3 className='text-sm md:text-md text-black font-semibold'>208A Brick Lane / London
              United Kingdom / E1 6SA</h3>
          </div>
          <div>
            <p className='text-sm md:text-md text-gray-400'>Other Key People On Account</p>
            <h3 className='text-sm md:text-md text-black font-semibold'>Kieran McPhee
            </h3>
          </div>
          <div>
            <p className='text-sm md:text-md  text-gray-400'>Phone Number</p>
            <h3 className='text-sm md:text-md text-black font-semibold'>07904124614</h3>
          </div>
        </div>
        <div>
          <p className='text-sm md:text-md  text-gray-400'>Confirmed Services</p>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mb-7'>
            <h3 className='text-sm md:text-md text-black font-semibold'>Paid Media</h3>
            <h3 className='text-sm md:text-md text-black font-semibold'>Ad Creative</h3>
            <h3 className='text-sm md:text-md text-black font-semibold'>Amazon PPC</h3></div>
        </div>
        {/* ______________checkboxes ________________ */}
        <div className='mt-4 mb-7 radio-buttons flex flex-col gap-2'>
          <p className='text-sm md:text-md text-gray-400'>Confirmed Paid Media Channels</p>
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
        {/* ___________ */}
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mb-7 mt-4'>
          <div className='header-JobSetup mb-7'>
            <p className='text-sm md:text-md  text-gray-400'>New or Established Brand</p>
            <h3 className='text-sm md:text-md text-black font-semibold'>Established Brand</h3>
          </div>
          <div className='header-JobSetup mb-7'>
            <p className='text-sm md:text-md  text-gray-400'>Sector</p>
            <h3 className='text-sm md:text-md text-black font-semibold'>Hospitality</h3>
          </div>
        </div>
        <div className="flex justify-center mb-7">
          <button type="submit" className="bg-violet-500 text-white px-4 md:px-6 lg:px-8 py-2 md:py-3 rounded-md w-full md:w-auto">
            Customise & Share Client Launch Plan
          </button>
        </div>
      </div>
      {/* ______________________ second form _______________ */}
      <div className='second-box bg-white border border-indigo-100  border border-violet-100 rounded-xl mb-7'>
        <div className='header-JobSetup mb-7 bg-violet-500 rounded-2xl p-10 text-white text-md md:text-xl font-semibold'>
          Budget Setup
        </div>
        {/* data */}
        <div className='mb-4'>
          <p className='text-md md:text-lg font-semibold text-gray-400 text-center'>Vouch Fees (Monthly or Project)</p>
        </div>
        <div className='content-inputs px-10 flex flex-colms justify-center items-center '>
          <div className='second-form grid md:grid-cols-2 grid-cols-1 gap-4 mb-7'>
            <div>
              <input type="text"
                name="mainPointOfContactDetails"
                placeholder='Management Fee £'
                className="text-black border-2 rounded-lg border-inherit w-full p-2 hover:border-violet-400 text-sm md:text-base"
                value={formData.mainPointOfContactDetails} onChange={handleChange}
                required />
            </div>
            <div>
              <input type="text"
                name="mainPointOfContactDetails"
                placeholder='% of Media Spend'
                className="text-black border-2 rounded-lg border-inherit w-full p-2 hover:border-violet-400 text-sm md:text-base"
                value={formData.mainPointOfContactDetails} onChange={handleChange}
                required />
            </div>
            <div>
              <input type="text"
                name="mainPointOfContactDetails"
                placeholder='Project Cost £'
                className="text-black border-2 rounded-lg border-inherit w-full p-2 hover:border-violet-400 text-sm md:text-base"
                value={formData.mainPointOfContactDetails} onChange={handleChange}
                required />
            </div>
            <div>
              <input type="text"
                name="mainPointOfContactDetails"
                placeholder='ROAS Target (If Known)'
                className="text-black border-2 rounded-lg border-inherit w-full p-2 hover:border-violet-400 text-sm md:text-base"
                value={formData.mainPointOfContactDetails} onChange={handleChange}
                required />
            </div>
          </div>
        </div>
        <hr />
        <div className='mb-4 mt-4'>
          <p className='text-md md:text-lg font-semibold text-gray-400 text-center'>Vouch Fees (Monthly or Project)</p>
        </div>
        <div className='content-inputs px-4 md:px-10 flex flex-col justify-center items-center'>
          <div className='grid md:grid-cols-6 grid-cols-3 gap-2 mb-7 mt-4 md:px-6 lg:px-12 xl:px-24'>
            <button className="text-black border-2 rounded-lg border-inherit w-full px-4 md:px-7 py-2 text-sm md:text-base">J</button>
            <button className="text-black border-2 rounded-lg border-inherit w-full px-2 md:px-2 py-2 text-sm md:text-base">F</button>
            <button className="text-black border-2 rounded-lg border-inherit w-full px-2 md:px-2 py-2 text-sm md:text-base">M</button>
            <button className="text-black border-2 rounded-lg border-inherit w-full px-2 md:px-2 py-2 text-sm md:text-base">M</button>
            <button className="text-black border-2 rounded-lg border-inherit w-full px-2 md:px-2 py-2 text-sm md:text-base">M</button>
            <button className="text-black border-2 rounded-lg border-inherit w-full px-2 md:px-2 py-2 text-sm md:text-base">M</button>
            <button className="text-black border-2 rounded-lg border-inherit w-full px-2 md:px-2 py-2 text-sm md:text-base">M</button>
            <button className="text-black border-2 rounded-lg border-inherit w-full px-2 md:px-2 py-2 text-sm md:text-base">M</button>
            <button className="text-black border-2 rounded-lg border-inherit w-full px-2 md:px-2 py-2 text-sm md:text-base">M</button>
            <button className="text-black border-2 rounded-lg border-inherit w-full px-2 md:px-2 py-2 text-sm md:text-base">M</button>
            <button className="text-black border-2 rounded-lg border-inherit w-full px-2 md:px-2 py-2 text-sm md:text-base">M</button>
            <button className="text-black border-2 rounded-lg border-inherit w-full px-2 md:px-2 py-2 text-sm md:text-base">M</button>
          </div>
        </div>
        <hr />
        {/* checkboxes */}
        <div className='mb-4 mt-4'>
          <p className='text-md md:text-lg font-semibold text-gray-400 text-center'>Campaign Goal Setup</p>
        </div>
        <div className='mt-4 mb-7 radio-buttons flex justify-center itens-center gap-2'>
          <label className={`inline-flex items-center ${formData.awareness === 'check' ? 'text-green-600' : ''}`}>
            <div
              className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center mr-2 ${formData.awareness === 'check' ? 'border-green-600' : 'bg-white border-green-600'}`}
              onClick={() => handleChange({ target: { name: 'awareness', value: formData.awareness === 'check' ? 'noCheck' : 'check' } } as React.ChangeEvent<HTMLInputElement>)}
            >
              {formData.awareness === 'check' && (
                <span className="text-green-600">&#10003;</span>
              )}
            </div>
            <span className="text-sm text-green-600">Awareness</span>
          </label>
          {/* _________ */}
          <label className={`inline-flex items-center ${formData.sales === 'check' ? 'text-green-600' : ''}`}>
            <div
              className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center mr-2 ${formData.sales === 'check' ? 'border-green-600' : 'bg-white border-green-600'}`}
              onClick={() => handleChange({ target: { name: 'sales', value: formData.sales === 'check' ? 'noCheck' : 'check' } } as React.ChangeEvent<HTMLInputElement>)}
            >
              {formData.sales === 'check' && (
                <span className="text-green-600">&#10003;</span>
              )}
            </div>
            <span className="text-sm text-green-600">Sales</span>
          </label>
          {/* _______________ */}
          <label className={`inline-flex items-center ${formData.booking === 'check' ? 'text-green-600' : ''}`}>
            <div
              className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center mr-2 ${formData.booking === 'check' ? 'border-green-600' : 'bg-white border-green-600'}`}
              onClick={() => handleChange({ target: { name: 'booking', value: formData.booking === 'check' ? 'noCheck' : 'check' } } as React.ChangeEvent<HTMLInputElement>)}
            >
              {formData.booking === 'check' && (
                <span className="text-green-600">&#10003;</span>
              )}
            </div>
            <span className="text-sm text-green-600">Booking</span>
          </label>
          {/* ___________ */}
          <label className={`inline-flex items-center ${formData.leads === 'check' ? 'text-green-600' : ''}`}>
            <div
              className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center mr-2 ${formData.leads === 'check' ? 'border-green-600' : 'bg-white border-green-600'}`}
              onClick={() => handleChange({ target: { name: 'leads', value: formData.leads === 'check' ? 'noCheck' : 'check' } } as React.ChangeEvent<HTMLInputElement>)}
            >
              {formData.leads === 'check' && (
                <span className="text-green-600">&#10003;</span>
              )}
            </div>
            <span className="text-sm text-green-600">Leads</span>
          </label>
        </div>
      </div>
      {/* _____________________________________ third form _______________ */}
      <div className='second-box bg-white border border-indigo-100 border-violet-100 rounded-xl mb-7'>
        <div className='header-JobSetup mb-7 bg-violet-500 rounded-2xl p-10 text-white text-md md:text-xl font-semibold'>
          Job Setup For Timesheets
        </div>
        {/* content */}
        <div className="flex justify-center">
          <div className='w-full md:w-2/3'>
            <div className="overflow-x-auto">
              <table className="table-auto w-full my-4 border">
                <tbody>
                  <tr className="border-b border-gray-200 ">
                    <td className="py-2 px-2 md:px-4 text-left">Job Number</td>
                    <td className="py-2 px-2 md:px-4 text-left">Job</td>
                    <td className="py-2 px-2 md:px-4 text-left">Billable?</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-2 md:px-4 text-left">1</td>
                    <td className="py-2 px-2 md:px-4 text-left">FB/Instagram Ad Management</td>
                    <td className="py-2 px-2 md:px-4 text-left">
                      <label className={`inline-flex items-center ${formData.jobOne === 'check' ? 'text-green-600' : ''}`}>
                        <div
                          className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center mr-2 ${formData.jobOne === 'check' ? 'border-green-600' : 'bg-white border-green-600'}`}
                          onClick={() => handleChange({ target: { name: 'jobOne', value: formData.jobOne === 'check' ? 'noCheck' : 'check' } } as React.ChangeEvent<HTMLInputElement>)}
                        >
                          {formData.jobOne === 'check' && (
                            <span className="text-green-600">&#10003;</span>
                          )}
                        </div>
                      </label>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-2 md:px-4 text-left">2</td>
                    <td className="py-2 px-2 md:px-4 text-left">External Meeting</td>
                    <td className="py-2 px-2 md:px-4 text-left">
                      <label className={`inline-flex items-center ${formData.jobTwo === 'check' ? 'text-green-600' : 'bg-white border-green-600'}`}>
                        <div
                          className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center mr-2 ${formData.jobTwo === 'check' ? 'border-green-600' : 'bg-white border-green-600'}`}
                          onClick={() => handleChange({ target: { name: 'jobTwo', value: formData.jobTwo === 'check' ? 'noCheck' : 'check' } } as React.ChangeEvent<HTMLInputElement>)}
                        >
                          {formData.jobTwo === 'check' && (
                            <span className="text-green-600">&#10003;</span>
                          )}
                        </div>

                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* ___________--------- */}
      <div className='flex justify-center items-center gap-4'>
        <button className='bg-green-600 text-white px-7 py-2 rounded-md'>Save</button>
        <button className='bg-violet-600 text-white px-7 py-2 rounded-md'>Publish</button>
      </div>
    </div>



  )
}

export default jobSetupTwo


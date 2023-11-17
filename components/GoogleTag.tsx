import Image from 'next/image';
import Link from 'next/link';
import YourFormDataInterface from './DataTypes/ClientAccessFormDataInterface';
import googleTag from '../public/images/pngegg (1) 1.png'
interface GoogleTagProps {
    formData: YourFormDataInterface;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const GoogleTag: React.FC<GoogleTagProps> = ({ formData, handleChange }) => {
    return (
       <>
        <div className='GoogleTag mb-10 mt-4 '>
                <div className='flex gap-2 items-center mb-4'>
               <div> <Image src={googleTag} alt="googleTag" width={40} className='h-auto' /></div>
               <div className='text-1xl md:text-2xl text-black'>Google Tag Manager</div>
           </div>
           <p className='text-sm md:text-md text-gray-400 mb-2'>We require access to GTM so we can check the set up of the events and conversion tracking once the new website is up and running.
               To grant access, please could you login to your Google Tag Manager account and follow these steps:
               Click Admin
               Select User Management.
               Select Add new users.
               Add digital@vouchglobal.com as a user.
               Set Account Permissions and click Invite.</p>
           <Link href="" className='text-blue-600'>Here is a video guide</Link>
           <div className='radio-buttons flex items-center gap-2 mb-7 mt-4'>
                <label className={`inline-flex items-center ${formData.googleTag === 'Completed' ? 'text-green-600' : ''}`}>
                    <div
                        className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center mr-2 ${formData.googleTag === 'Completed' ? 'border-green-600' : 'bg-white border-green-600'}`}
                        onClick={() => handleChange({ target: { name: 'googleTag', value: 'Completed' } } as React.ChangeEvent<HTMLInputElement>)}
                    >
                        {formData.googleTag === 'Completed' && (
                            <span className="text-green-600">&#10003;</span>
                        )}
                    </div>
                    <span className="text-sm text-green-600">Completed</span>
                </label>
                <label className={`inline-flex items-center ${formData.googleTag === 'Stuck' ? 'text-red-600' : ''}`}>
                    <div
                        className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center mr-2 ${formData.googleTag === 'Stuck' ? 'border-red-600' : 'bg-white border-red-600'}`}
                        onClick={() => handleChange({ target: { name: 'googleTag', value: 'Stuck' } } as React.ChangeEvent<HTMLInputElement>)}
                    >
                        {formData.googleTag === 'Stuck' && (
                            <span className="text-red-600">&#10003;</span>
                        )}
                    </div>
                    <span className="text-sm text-red-600">Stuck, Need Help</span>
                </label>
            </div>
       </div>
      
      </>
    );
}

export default GoogleTag;

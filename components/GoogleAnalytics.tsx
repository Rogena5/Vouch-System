import Image from 'next/image';
import Link from 'next/link';
import googleAnalytics from '../public/images/google analytics.png'
import YourFormDataInterface from './DataTypes/ClientAccessFormDataInterface';

interface GoogleAnalyticsProps {
    formData: YourFormDataInterface;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ formData, handleChange }) => {
    return (
       <><div className='GoogleAnalytics mb-4 mt-4'>
       <div className='flex gap-2 items-center'>
               <div> <Image src={googleAnalytics} alt="" width={40} className='h-auto' /></div>
               <div className='text-1xl md:text-2xl text-black'>Google Analytics</div>
           </div>
           <p className='text-md text-gray-400 mb-2'>We require access to GA4 so we can check the set up of the events and track website traffic. We also occasionally use GA4 audience segments to support audience targeting on Google Ads.
               To grant access, please could you login to your GA4 account and follow these steps:
               Click the Admin settings button
               Select Property Access Management
               Select Add new users OR '+'.
               Add digital@vouchglobal.com as a user.
               Set Account Permissions and click Invite.</p>
           <Link href="" className='text-blue-600'>Here is a video guide</Link>
       </div>
       <div className='radio-buttons flex items-center gap-2 mb-7'>
                <label className={`inline-flex items-center ${formData.googleAnalytics === 'Completed' ? 'text-green-600' : ''}`}>
                    <div
                        className={`w-5 h-5 border rounded-md flex items-center justify-center mr-2 ${formData.googleAnalytics === 'Completed' ? 'bg-green-600' : 'bg-white border-gray-400'}`}
                        onClick={() => handleChange({ target: { name: 'googleAnalytics', value: 'Completed' } } as React.ChangeEvent<HTMLInputElement>)}
                    >
                        {formData.googleAnalytics === 'Completed' && (
                            <span className="text-white">&#10003;</span>
                        )}
                    </div>
                    <span className="text-sm text-green-600">Completed</span>
                </label>
                <label className={`inline-flex items-center ${formData.googleAnalytics === 'Stuck' ? 'text-red-600' : ''}`}>
                    <div
                        className={`w-5 h-5 border rounded-md flex items-center justify-center mr-2 ${formData.googleAnalytics === 'Stuck' ? 'bg-red-600' : 'bg-white border-gray-400'}`}
                        onClick={() => handleChange({ target: { name: 'googleAnalytics', value: 'Stuck' } } as React.ChangeEvent<HTMLInputElement>)}
                    >
                        {formData.googleAnalytics === 'Stuck' && (
                            <span className="text-white">&#10003;</span>
                        )}
                    </div>
                    <span className="text-sm text-red-600">Stuck, Need Help</span>
                </label>
            </div>
       </>
    );
}

export default GoogleAnalytics;

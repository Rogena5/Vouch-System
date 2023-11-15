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
        <><div className='GoogleAnalytics mb-10 mt-4'>
            <div className='flex gap-2 items-center mb-4'>
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
            <div className='radio-buttons flex items-center gap-2 mb-7 mt-4'>
                <label className={`inline-flex items-center ${formData.tiktokStatus === 'Completed' ? 'text-green-600' : ''}`}>
                    <div
                        className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center mr-2 ${formData.tiktokStatus === 'Completed' ? 'border-green-600' : 'bg-white border-green-600'}`}
                        onClick={() => handleChange({ target: { name: 'tiktokStatus', value: 'Completed' } } as React.ChangeEvent<HTMLInputElement>)}
                    >
                        {formData.tiktokStatus === 'Completed' && (
                            <span className="text-green-600">&#10003;</span>
                        )}
                    </div>
                    <span className="text-sm text-green-600">Completed</span>
                </label>
                <label className={`inline-flex items-center ${formData.tiktokStatus === 'Stuck' ? 'text-red-600' : ''}`}>
                    <div
                        className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center mr-2 ${formData.tiktokStatus === 'Stuck' ? 'border-red-400' : 'bg-white border-red-400'}`}
                        onClick={() => handleChange({ target: { name: 'tiktokStatus', value: 'Stuck' } } as React.ChangeEvent<HTMLInputElement>)}
                    >
                        {formData.tiktokStatus === 'Stuck' && (
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

export default GoogleAnalytics;

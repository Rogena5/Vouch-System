import Image from 'next/image';
import Link from 'next/link';
import YourFormDataInterface from './DataTypes/ClientAccessFormDataInterface';
import googleAds from '../public/images/pngegg (1) 1.png'
interface GoogleAdsProps {
    formData: YourFormDataInterface;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const GoogleAds: React.FC<GoogleAdsProps> = ({ formData, handleChange }) => {
    return (
      <> <div className='GoogleAds mb-4 mt-4'>
      <div className='flex gap-2 items-center'>
          <div> <Image src={googleAds} alt="" width={40} className='h-auto' /></div>
          <div className='text-1xl md:text-2xl text-black'> Google Ads </div>
      </div>

      <p className='text-md text-gray-400 mb-2'>To provide access to Google Ads, please login to your Google Ads account and invite us as a user by following the steps below:
          Head to Tools and Settings
          Click Account Access and Security
          Add our account digital@vouchglobal.com as a user.</p>
      <Link href="" className='text-blue-600'>Here is a video guide</Link>
  </div>
 
  <div className='radio-buttons flex items-center gap-2 mb-7'>
                <label className={`inline-flex items-center ${formData.googleAdsStatus === 'Completed' ? 'text-green-600' : ''}`}>
                    <div
                        className={`w-5 h-5 border rounded-md flex items-center justify-center mr-2 ${formData.googleAdsStatus === 'Completed' ? 'bg-green-600' : 'bg-white border-gray-400'}`}
                        onClick={() => handleChange({ target: { name: 'googleAdsStatus', value: 'Completed' } } as React.ChangeEvent<HTMLInputElement>)}
                    >
                        {formData.googleAdsStatus === 'Completed' && (
                            <span className="text-white">&#10003;</span>
                        )}
                    </div>
                    <span className="text-sm text-green-600">Completed</span>
                </label>
                <label className={`inline-flex items-center ${formData.googleAdsStatus === 'Stuck' ? 'text-red-600' : ''}`}>
                    <div
                        className={`w-5 h-5 border rounded-md flex items-center justify-center mr-2 ${formData.googleAdsStatus === 'Stuck' ? 'bg-red-600' : 'bg-white border-gray-400'}`}
                        onClick={() => handleChange({ target: { name: 'googleAdsStatus', value: 'Stuck' } } as React.ChangeEvent<HTMLInputElement>)}
                    >
                        {formData.googleAdsStatus === 'Stuck' && (
                            <span className="text-white">&#10003;</span>
                        )}
                    </div>
                    <span className="text-sm text-red-600">Stuck, Need Help</span>
                </label>
            </div>
  </>
    );
}

export default GoogleAds;

import Link from 'next/link';
import YourFormDataInterface from './DataTypes/ClientAccessFormDataInterface';

interface TrackingProps {
    formData: YourFormDataInterface;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Tracking: React.FC<TrackingProps> = ({ formData, handleChange }) => {
    return (
        <><div className='Tracking mb-10 mt-4 '>
            <h3 className='text-1xl md:text-2xl text-black mb-4'>Tracking</h3>
            <p className='text-sm md:text-md text-gray-400 mb-2'>If you do not have Google Tag Manager on the website and the availble login credentials, are you happy to provide us with login access to the website?</p>
            <Link href="" className='text-blue-600'>Here is a video guide</Link>
            <div className='radio-buttons flex items-center gap-2 mb-7 mt-4'>
                <label className={`inline-flex items-center ${formData.tracking === 'Completed' ? 'text-green-600' : ''}`}>
                    <div
                        className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center mr-2 ${formData.tracking === 'Completed' ? 'border-green-600' : 'bg-white border-green-600'}`}
                        onClick={() => handleChange({ target: { name: 'tracking', value: 'Completed' } } as React.ChangeEvent<HTMLInputElement>)}
                    >
                        {formData.tracking === 'Completed' && (
                            <span className="text-green-600">&#10003;</span>
                        )}
                    </div>
                    <span className="text-sm text-green-600">Completed</span>
                </label>
                <label className={`inline-flex items-center ${formData.tracking === 'Stuck' ? 'text-red-600' : ''}`}>
                    <div
                        className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center mr-2 ${formData.tracking === 'Stuck' ? 'border-red-600' : 'bg-white border-red-600'}`}
                        onClick={() => handleChange({ target: { name: 'tracking', value: 'Stuck' } } as React.ChangeEvent<HTMLInputElement>)}
                    >
                        {formData.tracking === 'Stuck' && (
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

export default Tracking;

'use client'

import React, { useState } from 'react';
import Header from '@/components/forms/Briefing/Header';
import Body from '@/components/forms/Briefing/Body';

interface Input {
    placeholder: String,
    label?: String,
    value: String,
    expand: Boolean
}

interface Section {
    name: String,
    description: String,
    inputs: Input[]
}

interface BriefingForm {
    name: String,
    sections: Section[]
}


const BriefingForms: React.FC = () => {
    const [headerInfo, setHeaderInfo] = useState({
        name: 'Paid Media',
        description: 'Please give as much detail in each section to help us answer your brief'
    })

    return (
        <div className='w-1/2 mx-auto mt-12 border-solid border border-[#DEBCF1] rounded-md mb-3'>
            <Header info={headerInfo} />
            <Body setHeaderInfo={setHeaderInfo} />
        </div>
    )
}

export default BriefingForms
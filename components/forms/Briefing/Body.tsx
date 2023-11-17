'use client'

import React, { useState, ReactNode } from 'react'
import Input from './InputField'

interface Props {
    setHeaderInfo: Function
}

const Body: React.FC<Props> = ({setHeaderInfo}) => {
    const [forms, setForms] = useState([
        {
            name: 'Paid Media',
            description: 'Please give as much detail in each section to help us answer your brief',
            sections: [
                {
                    name: '',
                    description: '',
                    inputs: [
                        {
                            placeholder: 'Email',
                            label: '',
                            value: '',
                            expand: false
                        },
                        {
                            placeholder: 'Brand Name',
                            label: '',
                            value: '',
                            expand: false
                        },
                        {
                            placeholder: 'Brand Website',
                            label: 'Please include your brand website and if we will be directing traffic to any different sites sites for our Paid activity, such as a campaign microsites.',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Company Background/Overview',
                            label: 'General info about your company - who you are, founders, what you do, brief history, products/services and other useful info. Describe your company to us and why you started it.',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Brand Values',
                            label: 'Top 5 - 10 keywords that represent the brand. Such as: modern, urban, corporate/professional, youthful, fun.',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Brand Proposition to your Customers',
                            label: 'The promise. What are your desired effects and benefits to your customers?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Brand Goals and Objectives',
                            label: 'What is your overall brand goals/objectives this year?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Paid Media Goals and Objectives',
                            label: 'What would you like Vouch Global to achieve for you through Paid Media activity? What are your KPIs? What does success look like through Paid Media? Sales? Lead Generation? Follower Growth? Engagement?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Tone of Voice',
                            label: 'What is your brand tone of voice (TOV)? For example, friendly, professional, fun?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Customer Value',
                            label: 'What is the average order value of a new customer?',
                            value: '',
                            expand: true
                        },

                    ]
                },
                {
                    name: 'Audience',
                    description: 'This section is about your audience and who you would like to target through Paid Media activity. Details used below will help us define our target audiences in order to meet your objectives above.',
                    inputs: [
                        {
                            placeholder: 'Audience Identity',
                            label: 'What do they look like? Where do they live? Single? Married? Kids? Student? Please describe your customers below.',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Audience Age',
                            label: 'How old is your target audience and what is the split between genders? Ie 70% Female, 30% Male etc',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Interests and Hobbies',
                            label: "What type of books, TV/Netflix shows, Music Artists do your customers read and rave about? Do they enjoy certain online content such as 'vlogs/shopping hauls'?",
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Audience Targeting',
                            label: 'Are we targeting a specific identity with your product/service?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Information Consumption',
                            label: 'Where do your customers go for information online? Social, news websites, blogs and vlogs etc',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Public Identity',
                            label: 'Who in the public eye would be represent you as a brand? Please detail names below and include any useful social links too if possible.',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Brand Preferences',
                            label: 'Which brands do your customers engage with already? Please include any useful social links for us to look into.',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Competitor Brands',
                            label: 'Who are your main brand competitors within your market? Please include any useful social links for us to look into.',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Competitor Brands',
                            label: 'How are you different from your competitors mentioned above? What is your unique offering to your customers?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your answer',
                            label: 'What do you want your customers to feel from your brand',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your answer',
                            label: 'What do you want your customers to think about your brand?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your answer',
                            label: 'How do you want your customers to act with your brand?',
                            value: '',
                            expand: true
                        },

                    ]
                },
                {
                    name: 'Activity Information',
                    description: 'This section includes budgets, launch timings and point of contact info. ',
                    inputs: [
                        {
                            placeholder: 'Budget',
                            label: 'What is your monthly Paid Media Budget Spend?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Timeframe',
                            label: 'When would you like to launch your activity? Please be specific. Please bear in mind we require 10 days following receipt of your onboarding form to set up all activity.',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Point of Contact',
                            label: "Who will be Vouch's main point of contact for all Paid Media activity?",
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Activity Dates',
                            label: 'Are there any key activity dates we need to be aware of? Such as: Campaign launches, new collection launches, brand birthday etc',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Activity Dates - Budget',
                            label: 'Will there be any additional budget for these key activities or must is be covered in the overall budget allowance? Please be specific where possible.',
                            value: '',
                            expand: true
                        }

                    ]
                }
                ,
                {
                    name: 'Online Platform Management',
                    description: 'This section includes questions and forms regarding access to key online data platforms such as Facebook Ads Manager.',
                    inputs: [
                        {
                            placeholder: 'Access To Analytics & Paid Media Accounts For Review',
                            label: 'This link contains a useful guide on how to allow Vouch access to your Social and Paid Search Accounts: https://bit.ly/3s2vs2L',
                            value: false,
                            expand: true
                        },
                        {
                            placeholder: 'Channel Selection',
                            label: 'Which marketing platform do you want to utilise?',
                            value: [],
                            expand: true
                        },
                        {
                            placeholder: 'Channel Goals and Objectives',
                            label: "What are each of your channels goals and objectives? Such as: Increase Follower Growth, Click Thru's, Lead Generation, Purchases etc",
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Tagging for Tracking Purposes',
                            label: 'What is your current tagging solution? Such as Google Tag Manager, Tealium. If unsure, please contact your Account Manager.',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Third Party Tools and Applications',
                            label: 'Do you use any third party tools that monitor conversion rate optimisation or user behaviours? For example: Hotjar, Google Optimise.',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Location Targeting',
                            label: 'Which countries, counties or cities would you like us to target? How far around these areas can we target (in km)?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Email Database Lists',
                            label: 'Do you have a list of 1,000 or more subscribers or buyers? If so, please export a list of their email addresses in .csv format from your autoresponder or shopping cart. Once complete, please send to your Account Manager',
                            value: false,
                            expand: true
                        },

                    ]
                }
                ,
                {
                    name: 'Brand Experience',
                    description: "Below contains additional questions regarding your consumers' behaviour so we know how best to target them and continue their smooth customer journey with you.",
                    inputs: [
                        {
                            placeholder: 'Brand USP',
                            label: 'What is your ONE main USP - the one thing that separates you from your competitions and that your customers should know about you',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Channel Selection',
                            label: 'Which marketing platform do you want to utilise?',
                            value: [],
                            expand: true
                        },
                        {
                            placeholder: 'Brand Experience',
                            label: "What experience/feeling do you want your customers to have when they purchase from you? How do you make it memorable for them and want them to come back to you?",
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Pain Points',
                            label: 'What are the top 3 pain points your ideal customers are currently experiencing? (For example, inferior competitor products, lack of knowledge, limited experience, poor customer journey, bad experience elsewhere etc)',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Customer Groups',
                            label: 'If you were talking to your ideal customers in a big group, with various people in it, how would you address them so that they knew you were talking to them?  (For example, “For Fitness Enthusiasts or for coaches, speakers, and authors”)',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Exclusive Offers',
                            label: "Do you have any exclusive offers for your customers? Such as 'Free Delivery', 'Free reward when you sign up' etc. Please differentiate between new and existing customer offers.",
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Customer Retention',
                            label: "Do you have any loyalty / customer retention programmes? Is there anything existing / repeat customers can claim that new customers can't? If the answer is no, are there any options that immediately come to mind which could be introduced?",
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Additional Information',
                            label: "Please detail any other useful information that may help us when beginning our activity with you.",
                            value: '',
                            expand: true
                        },

                    ]
                }
            ]
        },
        {
            name: 'Creative Project Brief',
            description: 'Please give as much detail in each section to help us answer your brief',
            sections: [
                {
                    name: '',
                    description: '',
                    inputs: [
                        {
                            placeholder: 'Your Answer',
                            label: 'What is the name of your project?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: '',
                            label: 'Who needs to work about this project?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Project Overview*',
                            label: 'What is the overview of the project?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: '',
                            label: 'Creative Review Date',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: '',
                            label: 'Go Live Date',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: '',
                            label: 'Output Required',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Output description',
                            label: 'Add details about the required output',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: '',
                            label: 'Drop any references that help visualise the look and feel for this creative.',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Tone of Voice',
                            label: 'What is your brand tone of voice (TOV)? For example, friendly, professional, fun?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Enter Budget / Amount',
                            label: 'What is the project budget?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Additional information',
                            label: 'Any more info?',
                            value: '',
                            expand: true
                        },

                    ]
                },
            ]
        },
        {
            name: 'Vouch Brand Identity Brief',
            description: 'Please give as much detail in each section to help us answer your brief',
            sections: [
                {
                    name: '',
                    description: '',
                    inputs: [
                        {
                            placeholder: 'Your Answer',
                            label: 'What is the story behind the brand?*',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: "What is the brand's core offering?",
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: "What are the brand's strengths?",
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: "What are the brand's weaknesses",
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'What are the brand’s differentiators?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'What is the brand positioning?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'What is the brand’s vision?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'What is the brand’s mission?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'What are the brand’s values?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Feel free to add images and links to help',
                            label: 'How would you describe the brand’s image?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Add in any inspirational brands you like',
                            label: 'How would you describe the brand’s personality?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Add any inspirational brands you like',
                            label: 'How would you describe the brand’s voice?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'Describe the brand in 10 individual words',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'Who is the brand’s target audience?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'What are the target audience’s drivers and motivations?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'Who are the brand’s main competitors and peers in the market?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'Are the brand’s competitors doing anything we should be aware of?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'What is your vision for the future of the brand?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'What is the desired positioning for the brand in the market?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'What are the brand’s key business challenges currently?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'What are the brand’s key commercial objectives in the short, mid and long term?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'Please indicate all the branding deliverables you need.',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'What do the brand guidelines need to include?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'Do you have any existing Brand Guidelines?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'Is there anything else you like to add?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'What is the approximate budget?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'What is the delivery deadline?',
                            value: '',
                            expand: true
                        },

                    ]
                },
            ]
        },
        {
            name: 'Website Briefing Form',
            description: 'Please give as much detail in each section to help us answer your brief',
            sections: [
                {
                    name: 'Current Website',
                    description: '',
                    inputs: [
                        {
                            placeholder: 'Your Email',
                            label: 'Email',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: "What is the purpose of your current website?",
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: "Are there any aspects of your current website that you love?",
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: "Are there any aspects of your current website that you hate?",
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'Is there anything on the current website that needs to be removed entirely?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'Is there anything on the current website that must absolutely stay?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'Do you offer different products or services per location?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'What is your business’s unique value proposition (UVP)?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'What are the services you want to highlight on your website?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'Why do visitors currently go to your website?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'Is your website easy to navigate and is it easy to find information?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'Are your current website visitors being converted into sales?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'Are your competitors’ websites more functional and have they recently been redesigned?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'Does the content on your website deliver the right message?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'Is your website a good representation of your business?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'Does your current website instill trust and confidence?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'Is it easy to update your website?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'Are the visitors who come to your website being tracked and analysed?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'Does your current website make it easy for website visitors to contact you?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'What tools and apps do you use to run your business?',
                            value: '',
                            expand: true
                        },                        
                    ]
                },
                {
                    name: 'Website Design',
                    description: '',
                    inputs: [
                        {
                            placeholder: 'Your Answer',
                            label: 'Why do you want a new website?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: "Do you have a proposed sitemap prepared?",
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: "In an ideal world, what do you want your website to become?",
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: "What are your specific goals for your new website that will help indicate if your investment is profitable?",
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'How quickly do you want to achieve these goals?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'Is there anything that you would like to have included in the new website that you lack currently?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'At the end of this project, how do you qualify it as a success?',
                            value: '',
                            expand: true
                        },                      
                    ]
                },
                {
                    name: 'Competitive Analysis',
                    description: '',
                    inputs: [
                        {
                            placeholder: 'Your Answer',
                            label: 'What makes them stand apart from others?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: "What elements of their online activity would you like to model in your redesign?",
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: "Who are your top seven competitors?",
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: "What do you currently like about your competitors’ websites?",
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'What do you hate about your competitors’ websites? ',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'What are some sites that you like the style of, features, and functionality of?',
                            value: '',
                            expand: true
                        },                  
                    ]
                },
                {
                    name: 'Functionality',
                    description: '',
                    inputs: [
                        {
                            placeholder: 'Your Answer',
                            label: 'How often will you be updating the content on your site?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: "What functional requirements are needed within the new website?",
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: "Is there any specific feature that is needed for your website?",
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: "Do you want users to be able to comment on blog posts and other types of content?",
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'Do you need to integrate chat features? If so, what will these need to do?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'Will you need an internal search engine for your site?',
                            value: '',
                            expand: true
                        },                  
                        {
                            placeholder: 'Your Answer',
                            label: 'Do you plan to post audio/video files to the site?',
                            value: '',
                            expand: true
                        },                  
                        {
                            placeholder: 'Your Answer',
                            label: 'Do you have a video hosting service or will you be uploading videos to Vimeo or YouTube to embed videos on your site?',
                            value: '',
                            expand: true
                        },                  
                        {
                            placeholder: 'Your Answer',
                            label: 'Do you plan to sell anything through your website?',
                            value: '',
                            expand: true
                        },                  
                    ]
                },
                {
                    name: 'Development',
                    description: '',
                    inputs: [
                        {
                            placeholder: 'Your Answer',
                            label: 'Do you think your current website can communicate with your audience clearly?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: "Does your current website have all the necessary features that help your target audience?",
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: "Is the navigation on your current website easy? Do the users know what to click next?",
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: "Does it have enough white space for structure and digestible information?",
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'Are the colour schemes on your current website relevant to your branding?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'Is the copy effective or do you think you can do better?',
                            value: '',
                            expand: true
                        },                  
                        {
                            placeholder: 'Your Answer',
                            label: 'Does your current website have too many distractions?',
                            value: '',
                            expand: true
                        },                  
                        {
                            placeholder: 'Your Answer',
                            label: 'Is your CTA (call to action) evident?',
                            value: '',
                            expand: true
                        },                  
                        {
                            placeholder: 'Your Answer',
                            label: 'What do you wish to change on your new website?',
                            value: '',
                            expand: true
                        },                  
                        {
                            placeholder: 'Your Answer',
                            label: 'What features and functions would you like to add?',
                            value: '',
                            expand: true
                        },                  
                        {
                            placeholder: 'Your Answer',
                            label: 'What suggestions do you have to make your website stand out?',
                            value: '',
                            expand: true
                        },                  
                        {
                            placeholder: 'Your Answer',
                            label: 'What are elements on your current website that needs to be removed?',
                            value: '',
                            expand: true
                        },                  
                        {
                            placeholder: 'Your Answer',
                            label: 'What elements should be on the new website design?',
                            value: '',
                            expand: true
                        },                  
                    ]
                },
            ]
        },
        {
            name: 'Conversion Rate Opitmisation (CRO) Brief',
            description: 'Please give as much detail in each section to help us answer your brief',
            sections: [
                {
                    name: '',
                    description: '',
                    inputs: [
                        {
                            placeholder: 'Your Email',
                            label: 'Email',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: "What is the name of this project?",
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: "What are the existing URLS this brief refers to?",
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: "What is the current conversion rate of your website?",
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'If you drive paid traffic to your website, which page converts to a sale the best?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'What are the current challenges you are wanting to overcome from this brief?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'Which page(s) require multi variant A/B testing?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'Have you used hot jar before, if so...do you have any Hotjar data you can share with us?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'Have you done a/b testing before? If so, What solution did you use?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'If you have used firebase, can you share any insights?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'What is currently bringing the most users to your site and what page are they landing on?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'Where do you see the most drop off?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'What is your current bounce rate for the required page / category?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'What is the ideal bounce rate you would like to see?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'Is there a page with much better conversion rate throughout the site - if so what is it?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'Are there competitor UX journeys you like the look of?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'Are there competitor UX journeys you do not like the look of?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'What date would you like to review the learnings from the optimisation?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: 'Is there anything else you would like to add?',
                            value: '',
                            expand: true
                        },                   
                    ]
                },
            ]
        },
        {
            name: 'UX/UI Brief',
            description: 'Please give as much detail in each section to help us answer your brief',
            sections: [
                {
                    name: '',
                    description: '',
                    inputs: [
                        {
                            placeholder: 'Your Email',
                            label: 'Email',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: "What is the name of the project?",
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: '',
                            label: "Brand guidelines for this project",
                            value: '',
                            expand: true
                        },                  
                    ]
                },
                {
                    name: 'The project',
                    description: '',
                    inputs: [
                        {
                            placeholder: 'Your Answer',
                            label: 'Describe what the project is about, what’s its context and background',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: "Why is this project being carried out? What is the motivation? Is it a part of a wider customer journey?",
                            value: '',
                            expand: true
                        },                  
                    ]
                },
                {
                    name: 'Prior UX experiences',
                    description: '',
                    inputs: [
                        {
                            placeholder: 'Your Answer',
                            label: 'Who did you work with before? What was the experience like? Anything you particularly liked or disliked?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: "What is your biggest frustration UX-wise at the moment, what would you change immediately if you could?",
                            value: '',
                            expand: true
                        },                  
                        {
                            placeholder: 'Your Answer',
                            label: "What is your biggest like at the moment? What do you think is your killer feature/experience?",
                            value: '',
                            expand: true
                        },                  
                    ]
                },
                {
                    name: 'Business proposition and competition',
                    description: 'This might only be relevant if you are about to work with a new company/client.',
                    inputs: [
                        {
                            placeholder: 'Your Answer',
                            label: 'What is your vision and what is your brand aiming to represent?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: "What is your company/project elevator pitch? Value proposition?",
                            value: '',
                            expand: true
                        },                  
                        {
                            placeholder: 'Your Answer',
                            label: "Who are your biggest competitors? What’s good and bad about them? Where do you want to compete?",
                            value: '',
                            expand: true
                        },                  
                    ]
                },
                {
                    name: 'Objective',
                    description: 'Describe what is the ideal future you want to have once this project is finished.',
                    inputs: [
                        {
                            placeholder: 'Your Answer',
                            label: 'What is the outcome you’re looking to get out of this? How does this fit into your team’s and/or company’s wider goals?',
                            value: '',
                            expand: true
                        },
                        {
                            placeholder: 'Your Answer',
                            label: "What is the benefit for the business?",
                            value: '',
                            expand: true
                        },                  
                        {
                            placeholder: 'Your Answer',
                            label: "What is the benefit for the user?",
                            value: '',
                            expand: true
                        },                  
                    ]
                },
                {
                    name: 'Key results & Success criteria',
                    description: 'Think KPIs, OKRs, UX metrics, benchmarks, company targets',
                    inputs: [
                        {
                            placeholder: 'Your Answer',
                            label: 'How will you know the project was successful once it’s finished?',
                            value: '',
                            expand: true
                        },    
                    ]
                },
                {
                    name: 'Target audience',
                    description: 'Describe the target audience for this project',
                    inputs: [
                        {
                            placeholder: 'Your Answer',
                            label: 'Who is the target audience(s)? Who is buying vs who is using it? How much do we know about their needs?',
                            value: '',
                            expand: true
                        },    
                        {
                            placeholder: 'Your Answer',
                            label: 'Customer service / Customer relationship management – how does it work at the moment?',
                            value: '',
                            expand: true
                        },    
                    ]
                },
                {
                    name: 'Data',
                    description: '',
                    inputs: [
                        {
                            placeholder: 'Your Answer',
                            label: 'What data and documentation do we have?',
                            value: '',
                            expand: true
                        },    
                        {
                            placeholder: 'Your Answer',
                            label: 'What research has been conducted so far (what methods)? What has worked well and what didn’t? Why? What did you learn?',
                            value: '',
                            expand: true
                        },    
                        {
                            placeholder: 'Your Answer',
                            label: 'Analytics: current problems, most used paths, what devices and resolutions they used the most, etc., how many users, frequency of use, length of a session',
                            value: '',
                            expand: true
                        },    
                    ]
                },
                {
                    name: 'Scope',
                    description: '',
                    inputs: [
                        {
                            placeholder: 'Your Answer',
                            label: 'Describe what definitely needs to be worked on and why',
                            value: '',
                            expand: true
                        },    
                        {
                            placeholder: 'Your Answer',
                            label: 'Describe what the design team should not challenge. (e.g. hard technical constraints, change of CMS, major design overhauls during a platform migration project, etc.)',
                            value: '',
                            expand: true
                        },    
                    ]
                },
                {
                    name: 'Risks',
                    description: '',
                    inputs: [
                        {
                            placeholder: 'Your Answer',
                            label: 'What are the risks to the success of this project?',
                            value: '',
                            expand: true
                        },    
                        {
                            placeholder: 'Your Answer',
                            label: 'What could go wrong? And why?',
                            value: '',
                            expand: true
                        },    
                        {
                            placeholder: 'Your Answer',
                            label: 'What would happen if we don’t meet the deadline / or if this project is not carried out at all?',
                            value: '',
                            expand: true
                        },    
                        {
                            placeholder: 'Your Answer',
                            label: 'What could not be done if this project doesn’t go through?',
                            value: '',
                            expand: true
                        },    
                    ]
                },
                {
                    name: 'Deliverables',
                    description: '',
                    inputs: [
                        {
                            placeholder: 'Your Answer',
                            label: 'What deliverables are expected?',
                            value: '',
                            expand: true
                        },    
                        {
                            placeholder: 'Your Answer',
                            label: 'What will they be used for next?',
                            value: '',
                            expand: true
                        },    
                    ]
                },
                {
                    name: 'Timings',
                    description: '',
                    inputs: [
                        {
                            placeholder: 'Your Answer',
                            label: 'What are the currently known deadlines and milestones?',
                            value: '',
                            expand: true
                        },    
                        {
                            placeholder: 'Your Answer',
                            label: 'What is the expected project start date?',
                            value: '',
                            expand: true
                        },    
                        {
                            placeholder: 'Your Answer',
                            label: 'In case there is a delay, what would happen?',
                            value: '',
                            expand: true
                        },    
                    ]
                },
                {
                    name: 'The Team',
                    description: '',
                    inputs: [
                        {
                            placeholder: 'Your Answer',
                            label: 'Who is the ultimate decision-maker (sign-off)?',
                            value: '',
                            expand: true
                        },  
                    ]
                },
                {
                    name: 'Additional Notes',
                    description: '',
                    inputs: [
                        {
                            placeholder: 'Your Answer',
                            label: 'Anything else you would like to add?',
                            value: '',
                            expand: true
                        },  
                    ]
                },
            ]
        }
    ])

    const [currentForm, setCurrentForm] = useState(0)
    const [currentSection, setCurrentSection] = useState(0)

    const handleChange = (e: any) => {
        setForms(currentState => {
            const clone = [...currentState]
            const inputToUpdate = clone[currentForm].sections[currentSection].inputs.findIndex(el => el.placeholder === e.target.placeholder)
            clone[currentForm].sections[currentSection].inputs[inputToUpdate].value = e.target.value
            return clone
        })
        console.log(forms[1])
    }

    const moveToNextPage = () => {
        setCurrentSection(currentState => {
            return currentState +1
        })
    }
    const moveToPreviousPage = () => {
        setCurrentSection(currentState => {
            return currentState -1
        })
    }
    const nextForm = () => {
        setCurrentSection(0)
        setHeaderInfo({
            name: forms[currentForm +1].name,
            description: forms[currentForm +1].description
        })
        setCurrentForm(currentState => {
            console.log(currentState +1)
            return currentState +1
        })
    }
    const previousForm = () => {
        setHeaderInfo({
            name: forms[currentForm -1].name,
            description: forms[currentForm -1].description
        })
        setCurrentForm(currentState => {
            return currentState -1
        })
        setCurrentSection(forms[currentForm -1].sections.length -1)

    }

    const inputsArray = forms[currentForm].sections[currentSection].inputs.map(input => {
        return (<Input placeholder={input.placeholder} key={`${input.placeholder} ${input.label}`} handleChange={handleChange} expanding={input.expand} label={input.label} />)
    })

    const nextFormLink = () => {
        if(currentSection === forms[currentForm].sections.length -1 && forms[currentForm +1]) {
            return <p className='text-violit-main cursor-pointer w-fit ml-auto mr-4 mt-3 col-start-2' onClick={nextForm}>Next Form</p>
        } return <></>
    }

    const previousFormLink = () => {
        if(currentSection === 0 && forms[currentForm -1]) {
            return <p className='text-violit-main cursor-pointer w-fit ml-4 mt-3' onClick={previousForm}>Previous Form</p> 
        } return <></>
    }

    return (
        <form className='w-full grid grid-cols-2 px-3 py-5'>
            { inputsArray }
            { currentSection > 0 && <p className='text-violit-main cursor-pointer w-fit ml-4 mt-3' onClick={moveToPreviousPage}>Previous</p>}
            { previousFormLink() }
            { currentSection < forms[currentForm].sections.length -1 && <p className='text-violit-main cursor-pointer w-fit ml-auto mr-4 mt-3 col-start-2 ' onClick={moveToNextPage}>Next</p>}
            { nextFormLink() }
        </form>
    )
}

export default Body
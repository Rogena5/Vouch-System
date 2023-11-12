interface  ClientAccessFormDataInterface{
    updateEmails: 'check' | 'noCheck'| null;
    marketingEmails: 'check' | 'noCheck'| null;
    additionalInfoClientAccess: string;
    tiktokStatus: 'Completed' | 'Stuck'| null;
    metaStatus: 'Completed' | 'Stuck'| null;
    googleAdsStatus:'Completed' | 'Stuck'| null;
    googleAnalytics: 'Completed' | 'Stuck'| null;
    googleTag: 'Completed' | 'Stuck'| null;
    tracking: 'Completed' | 'Stuck' | null;
}

export default ClientAccessFormDataInterface;

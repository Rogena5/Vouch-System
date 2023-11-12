interface clientSetupFormDataInterface {
    name: string;
    email: string;
    companyName: string,
    companyRegistrationNumber: string,
    vatRegistrationNumber: string,
    companyAddress: string,
    billingAddress: string,
    businessCommenced: string,
    mainPointOfContact: string,
    position: string,
    emailContact: string,
    TelephoneNo: string,
    landelineNo: string,
    officeAddress: string,
    mainPointOfContactDetails: string,
    positionDetails: string,
    emailContactDetails: string,
    TelephoneNoDetails: string,
    landelineNoDetails: string,
    officeAddressDetails: string,
    additionalInfo: string,
    agreeWorkflow: 'check'| 'noCheck' | null;
    agreeEmails: 'check'| 'noCheck' | null;
}
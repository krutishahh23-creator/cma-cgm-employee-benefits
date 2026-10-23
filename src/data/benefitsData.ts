export interface ManagementLevelData {
  level: string;
  label: string;
  pluxeeMeal: string;
  internetAllowance: string;
  mobileAllowance: string;
  gmcCoverage: string;
  gpaCoverage: string;
  additionalOPD: string;
}

export const MANAGEMENT_LEVELS: ManagementLevelData[] = [
  {
    level: 'O',
    label: 'Level O',
    pluxeeMeal: '₹3,500/month',
    internetAllowance: '₹600/month',
    mobileAllowance: 'Not applicable',
    gmcCoverage: '₹3 lakh',
    gpaCoverage: '₹12 lakh',
    additionalOPD: 'Standard policy',
  },
  {
    level: 'SO',
    label: 'Level SO',
    pluxeeMeal: '₹3,500/month',
    internetAllowance: '₹600/month',
    mobileAllowance: 'Not applicable',
    gmcCoverage: '₹3 lakh',
    gpaCoverage: '₹12 lakh',
    additionalOPD: 'Standard policy',
  },
  {
    level: 'SP',
    label: 'Level SP',
    pluxeeMeal: '₹3,500/month',
    internetAllowance: '₹600/month',
    mobileAllowance: '₹1,000/month (eligible employees)',
    gmcCoverage: '₹3 lakh',
    gpaCoverage: '₹26 lakh',
    additionalOPD: 'Standard policy',
  },
  {
    level: 'M1',
    label: 'Level M1',
    pluxeeMeal: '₹3,500/month',
    internetAllowance: '₹600/month',
    mobileAllowance: '₹1,000/month (eligible employees)',
    gmcCoverage: '₹3 lakh',
    gpaCoverage: '₹26 lakh',
    additionalOPD: 'Standard policy',
  },
  {
    level: 'M2',
    label: 'Level M2',
    pluxeeMeal: '₹3,500/month',
    internetAllowance: '₹600/month',
    mobileAllowance: '₹1,000/month (eligible employees)',
    gmcCoverage: '₹5 lakh',
    gpaCoverage: '₹85 lakh',
    additionalOPD: 'Dental & eye-care OPD up to ₹15,000',
  },
  {
    level: 'M3',
    label: 'Level M3',
    pluxeeMeal: '₹4,900/month',
    internetAllowance: '₹600/month',
    mobileAllowance: '₹1,000/month (eligible employees)',
    gmcCoverage: '₹5 lakh',
    gpaCoverage: '₹1.28 crore',
    additionalOPD: 'Dental & eye-care OPD up to ₹15,000',
  },
  {
    level: 'M4',
    label: 'Level M4',
    pluxeeMeal: '₹8,200/month',
    internetAllowance: '₹600/month',
    mobileAllowance: '₹1,000/month (eligible employees)',
    gmcCoverage: '₹10 lakh',
    gpaCoverage: '₹3 crore',
    additionalOPD: 'Standard OPD up to ₹50,000',
  },
  {
    level: 'M5',
    label: 'Level M5',
    pluxeeMeal: '₹8,200/month',
    internetAllowance: '₹600/month',
    mobileAllowance: '₹1,000/month (eligible employees)',
    gmcCoverage: '₹10 lakh',
    gpaCoverage: '₹3 crore',
    additionalOPD: 'Standard OPD up to ₹50,000',
  },
  {
    level: 'E1',
    label: 'Level E1',
    pluxeeMeal: '₹8,200/month',
    internetAllowance: '₹600/month',
    mobileAllowance: '₹1,000/month (eligible employees)',
    gmcCoverage: '₹10 lakh',
    gpaCoverage: '₹3 crore',
    additionalOPD: 'Standard OPD up to ₹50,000',
  },
];

export const TPA_CONTACTS = {
  customerCare: {
    title: '24×7 Customer Care',
    email: 'crm@healthindiatpa.com',
    phone: '022-66131199',
    phoneFormatted: '02266131199',
  },
  cashlessClaims: {
    title: 'Cashless Claims',
    email: 'preauth@healthindiatpa.com',
    landlines: ['022-66867559', '022-66867554', '022-66867533'],
    mobile: '7777038256',
    displayLandline: '022-66867559 / 554 / 533',
  },
  spocs: [
    {
      name: 'Gautam Tambe',
      email: 'cma.cgm@healthindiatpa.com',
      phone: '8976964944',
      role: 'TPA Single Point of Contact',
    },
    {
      name: 'Umesh Kalgaonkar',
      email: 'umesh.k@healthindiatpa.com',
      phone: '7718897750',
      role: 'TPA Single Point of Contact',
    },
    {
      name: 'Vishal Ahire',
      email: 'vishal.ahire@healthindiatpa.com',
      phone: '7208931412',
      role: 'TPA Single Point of Contact',
    },
  ],
};

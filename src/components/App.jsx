import React from 'react';
import Profile from './Profile/Profile';
import Stats from './Upload/Upload';
import PricingPlan from './PricingPlan/PricingPlan/PricingPlan';
import pricingPlan1 from './PricingPlan/PricingItem/pricingPlan1.json';
import Transactionhistory from './Transaction/Transaction';
import transaction from './Transaction/transaction1.json';


const user = {
    name: 'Jacques Gluke',
    tag: '@jgluke',
    location: 'Ocho Rios, Jamaica',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
    stats: {
        followers: 5603,
        views: 4827,
        likes: 1308,
    },
};

const stats = [{
    id: 'id-1',
    label: '.docx',
    percentage: 22
},
{
    id: 'id-2',
    label: '.pdf',
    percentage: 4
},
{
    id: 'id-3',
    label: '.mp3',
    percentage: 17
},
{
    id: 'id-4',
    label: '.psd',
    percentage: 47
},
{
    id: 'id-5',
    label: '.pdf',
    percentage: 10
},
];

const App = () => (
    <>
        <Profile user={user} />
        <Stats stats={stats} />
        <PricingPlan items={pricingPlan1} />
        <Transactionhistory items={transaction} />
    </>
);

export default App;

type Portofolio = {
    id: number,
    name: string,
    imageSrc: string,
    headline: string,
    description: string,
    sector: string,
    playStoreLink: string | undefined,
    portofolioDescription: string,
    complexity: number,
}


export const portofolio: Portofolio[] = [
    {
        id: 1,
        name: 'Gojek',
        imageSrc: '/travel/gojek_30.webp',
        headline: 'Gojek: Indonesia’s First $10B Tech Start-Up',
        description: 'Banteng helped Gojek design & implement the largest same-day 24/7 delivery service, including real-time tracking.',
        sector: 'travel',
        playStoreLink: 'https://play.google.com/store/apps/details?id=com.gojek.app&hl=en_US',
        portofolioDescription: 'Ice House created an app for BTPN to allow small business owners to manage not only the point of sales, but also inventory and basic accounting. This all linked to the Jenius ecosystem',
        complexity: 30,
    },
    {
        id: 2,
        name: 'Blue Bird',
        imageSrc: '/travel/blue-bird_30.webp',
        headline: 'Blue Bird: No.1 Taxi Group in South East Asia',
        description: 'MyBB now supports multiple digital payments to access Indonesia’s largest fleet of taxis on demand or even rent later.',
        sector: 'travel',
        playStoreLink: 'https://play.google.com/store/apps/details?id=com.seatech.bluebird&hl=en_US',
        portofolioDescription: 'Ice House created an app for BTPN to allow small business owners to manage not only the point of sales, but also inventory and basic accounting. This all linked to the Jenius ecosystem',
        complexity: 40,
    },
    {
        id: 3,
        name: 'Prodia',
        imageSrc: '/health/Prodia_30.webp',
        headline: 'Prodia: No. 1 Clinical Laboratory and the National Referral lab',
        description: 'For the first time, patients can instantly chat with: a doctor, receive a referral, book & pay for their test and have their results delivered in the all new Prodia Mobile app',
        sector: 'health',
        playStoreLink: 'https://play.google.com/store/apps/details?id=com.prodia.mobileandroid&hl=en_US',
        portofolioDescription: 'Ice House created an app for BTPN to allow small business owners to manage not only the point of sales, but also inventory and basic accounting. This all linked to the Jenius ecosystem',
        complexity: 70,
    },
    {
        id: 4,
        name: 'Jenius',
        imageSrc: '/financial/Jenius-bisnis_2_50.webp',
        headline: 'Keuangan yang lebih tertata gak lagi jadi wacana.',
        description: 'Manage your (small) business from the convenience of your mobile phone',
        sector: 'financial',
        playStoreLink: 'https://play.google.com/store/search?q=Jenius&c=apps&hl=en_US',
        portofolioDescription: 'Ice House created an app for BTPN to allow small business owners to manage not only the point of sales, but also inventory and basic accounting. This all linked to the Jenius ecosystem',
        complexity: 90,
    },
    {
        id: 5,
        name: 'MyBca',
        imageSrc: '/financial/myBca_2_50.webp',
        headline: 'BCA',
        description: 'Simplify your banking experiences with one single User ID, called BCA ID. myBCA can be accessed through either application within smartphone or through desktop website',
        sector: 'financial',
        playStoreLink: 'https://play.google.com/store/search?q=MyBca&c=apps&hl=en_US',
        portofolioDescription: 'Ice House created an app for BTPN to allow small business owners to manage not only the point of sales, but also inventory and basic accounting. This all linked to the Jenius ecosystem',
        complexity: 70,
    }
]
import Image from "next/image";

export const agnieszkaSierbista = {
    personalData: {
        name: 'Agnieszka Sierbista',
        title: 'Junior Software Engineer',
        image: '/as.jpg',
        contacts: [
            {type: 'email', value: 'agnieszka.sierbista@gmail.com'},
            {type: 'phone', value: '+48 501 828 894'},
            {type: 'location', value: 'Warsaw'},
            {type: 'linkedin', value: 'https://pl.linkedin.com/in/asierbista'},
            {type: 'github', value: 'https://github.com/agnieszkasierbista'}
        ]
    },
    sections: [
        {
            type: 'tag-list',
            title: 'Skills',
            icon: 'rocket',
            items: ['React', 'Javascript', 'HTML', 'CSS/SCSS', 'TypeScript', 'NextJS', 'styled components']
        },
        // {
        //     type: 'text',
        //     title: 'Career Profile',
        //     content: `**When I was a child, I always wanted to be a developer.** \n\n #### I think I am now. \n\n Culpa proident ad officia minim Lorem sint excepteur irure culpa nisi aliquip nostrud.Laborum voluptate nostrud fugiat occaecat proident veniam excepteur pariatur amet ex sit.Anim aliquip do in commodo adipisicing.Nulla adipisicing nisi enim ullamco sunt veniam.Ullamco labore sunt Lorem veniam id et Lorem magna eiusmod aute. Aliquip minim est consectetur anim mollit aliqua ex elit do et nulla do. Cupidatat ad sunt cillum sint consectetur sunt cillum eiusmod ad esse aliqua. Aute anim elit amet in duis aute ipsum deserunt qui deserunt officia excepteur veniam. Et laboris nostrud est ipsum nulla fugiat deserunt magna velit irure. Ullamco duis ut magna ea tempor enim in ipsum.`,
        //     icon: 'usertie'
        // },
        {
            type: 'experiences-list',
            title: 'Experience',
            icon: 'archive',
            items: [
                {
                    title: 'Junior Software Engineer',
                    company: 'Grid Dynamics',
                    description: 'UI Developer with React/Next.js',
                    companyWebSite: 'https://www.griddynamics.com/',
                    companyMeta: 'Warsaw',
                    datesBetween: '2024.04 - Present'
                },
                {
                    title: 'Software Engineer Intern',
                    company: 'Grid Dynamics',
                    description: 'UI Developer with React/Next.js',
                    companyWebSite: 'https://www.griddynamics.com/',
                    companyMeta: 'Warsaw',
                    datesBetween: '2023.09 - 2024.04'
                },
                {
                    title: 'Junior React Developer',
                    company: 'good@IT',
                    companyMeta: 'remote',
                    description: 'First steps in IT.',
                    datesBetween: '2022.06 - 2023.08'
                },
                {
                    title: 'Senior Language Lead',
                    company: 'Lionbridge Poland',
                    description: 'Translation coordination',
                    companyWebSite: 'https://www.lionbridge.com/',
                    companyMeta: 'Warsaw',
                    datesBetween: '2018.12 - 2020.07',
                },
                {
                    title: 'Language Lead',
                    company: 'Lionbridge Poland',
                    description: 'Translation quality assurance',
                    companyWebSite: 'https://www.lionbridge.com/',
                    companyMeta: 'Warsaw',
                    datesBetween: '2015.01 - 2018.12'
                },
                {
                    title: 'Quality Checker',
                    company: 'Lionbridge Poland',
                    description: 'Automatic and manual checks of translated materials',
                    companyWebSite: 'https://www.lionbridge.com/',
                    companyMeta: 'Warsaw',
                    datesBetween: '2014.09 - 2015.01',
                },
            ]
        },
        {
            type: 'common-list',
            title: 'Education',
            icon: 'graduation',
            items: [
                {
                    title: 'Chinese Language and Culture',
                    authority: 'Beijing Normal University',
                    rightSide: '2013 - 2014'
                },
                {
                    title: 'Chinese Language and Culture',
                    authority: 'Capital Normal University',
                    rightSide: '2011 - 2012'
                },
                {
                    title: 'Chinese Studies (BA)',
                    authority: 'Warsaw University, Institute of Oriental Studies',
                    rightSide: '2013 - 2017'
                },
                {
                    title: 'Belarusian Philology (MA)',
                    authority: 'Warsaw University',
                    rightSide: '2017 - Present'
                }
            ]
        },
        {
            type: 'projects-list',
            title: 'Projects',
            icon: 'tasks',
            groups: [
                {
                    sectionHeader: 'React Apps',
                    description: ' developed with React and wrapped with cordova for using on mobile devices',
                    items: [
                        {
                            title: 'TogetherNotes',
                            description: 'App for sharing notes together with other users, protected by custom authentication'
                        },
                        {
                            title: 'Birthdays',
                            description: 'Simple hybrid application in the form of a calendar for recording birthdays'
                        },
                    ]
                }
            ]
        },
        {
            type: 'common-list',
            title: 'Certificates',
            description: '',
            icon: 'comments',
            items: [
                {
                    title: 'AWS Certified Cloud Practitioner',
                    authority: 'Amazon Web Services Training and Certification',
                    authorityWebSite: 'https://www.credly.com/badges/40787ec3-0ffe-4b38-acc8-58d6566ea145/public_url',
                    rightSide: <Image src='/aws-certified-cloud-practitioner.png' alt='AWS Certified Cloud Practitioner'
                                      height='65' width='65'/>
                },
                {
                    title: 'API Security Fundamentals',
                    authority: 'APIsec University',
                    authorityWebSite: 'https://www.credly.com/badges/a7350f06-a87a-4aa3-a3f6-1a1c3e40b96a/public_url',
                    rightSide: <Image src='/api-security-fundamentals.png' alt='API Security Fundamentals' height='65'
                                      width='65'/>
                },
            ]
        },
        {
            type: 'common-list',
            title: 'Languages',
            icon: 'language',
            items: [
                {
                    authority: 'Polish',
                    authorityMeta: 'Native'
                },
                {
                    authority: 'English',
                    authorityMeta: 'Professional'
                },
                {
                    authority: 'Chinese',
                    authorityMeta: 'HSK5'
                },
                {
                    authority: 'Belorussian',
                    authorityMeta: 'Intermediate'
                },
                {
                    authority: 'Russian',
                    authorityMeta: 'Passive'
                }
            ]
        },
        {
            type: 'tag-list',
            title: 'Hobbies & Interests',
            icon: 'cubes',
            items: ['Book Reading', 'DIY']
        }
    ]
}
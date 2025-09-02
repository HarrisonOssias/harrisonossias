import type { ExperienceItem } from './TYPES_exp'
import { ExperienceDropdown } from './exp_dropdown'

export const Resume = () => {
    const experiences: ExperienceItem[] = [
        {
            id: 'hyperion',
            title: 'Full Stack Software Engineer (Team Lead)',
            company: 'Hyperion Sensors Inc.',
            location: 'Toronto, ON',
            period: '04/2022 - Present',
            logo: '/Hyperion.jpg',
            technologies:
                'TypeScript, React (Next.js), Python (Django), Express.js, AWS, Tailwind CSS, Kubernetes, PostgreSQL, Apache Kafka, REST APIs, GraphQL',
            responsibilities: [
                'Led end-to-end development of flagship SaaS platform Helios as Principal Developer',
                'Oversaw 14 production environments supporting 6 major electricity distributors',
                'Designed backend REST APIs and GraphQL systems, modernizing legacy Apache Tomcat codebase',
                'Architected authentication flows integrating LDAP and Active Directory with Auth0 and AWS Cognito',
                'Transitioned data replication to Kafka Streams for efficient sensor data transmission',
            ],
            borderColor: 'border-orange-500',
            link: 'https://www.hyperionsensors.com/',
        },
        {
            id: 'blueocean',
            title: 'Contract Software & Firmware Engineer',
            company: 'Blue Ocean Technologies Inc.',
            location: 'Toronto, ON',
            period: '01/2025 - Present',
            logo: '/blue_ocean.png',
            technologies:
                'C/C++, Python, ARM Cortex-M7/M5, React, PostgreSQL, Tailwind CSS, Electron',
            responsibilities: [
                'Converted flagship OT application to Chromium-based (Electron) React application in 3 months',
                'Ported power management firmware from Teensy 3.5 to 4.0 microcontroller architecture',
                'Integrated communication protocols including Protocol Buffer APIs and serial interfaces',
            ],
            borderColor: 'border-blue-300',
            link: 'https://blueoceantechnologies.ca/',
        },
        {
            id: 'broadridge',
            title: 'Associate Software Engineer Co-op',
            company: 'Broadridge',
            location: 'Toronto, ON',
            period: '05/2021 - 12/2021',
            logo: '/Broadridge.jpg',
            technologies:
                'Java, React, TensorFlow, Spring Boot (REST), SQLite, LDAP, Jenkins, GitHub Actions',
            responsibilities: [
                'Developed client-release scheduling and system monitoring tool for AWS clusters',
                'Implemented highly normalized SQL schemas for data integrity',
            ],
            borderColor: 'border-blue-600',
            link: 'https://www.broadridge.com/',
        },
        {
            id: 'ibm',
            title: 'DevOps/SRE Cloud Developer Co-op',
            company: 'IBM',
            location: 'Ottawa/Toronto, ON',
            period: '05/2020 - 08/2020',
            logo: '/IBM.png',
            technologies:
                'PowerShell, Linux (Ubuntu, Fedora) Python (Flask), Ansible, Jenkins, IBM Cloud',
            responsibilities: [
                'Built updates to IBM Planning Analytics suite and deployed in Kubernetes',
                'Combined Python and PowerShell scripts for upkeep of performance monitors on environments for major clients, reducing downtime by 2.5%',
                'Deployed and managed over 60 production and development environments on Active Directory and various bare-metal Linux systems using Ansible Tower',
            ],
            borderColor: 'border-blue-800',
            link: 'https://www.ibm.com/ca-en',
        },
        {
            id: 'ey',
            title: 'Data Analyst Intern (tenthree | labs)',
            company: 'Ernst & Young (EY)',
            location: 'Toronto, ON',
            period: '01/2020 - 04/2020',
            logo: '/EY.png',
            technologies:
                'Alteryx, PostgreSQL, Microsoft SQL Server, Python, C++, HTML',
            responsibilities: [
                'Built support applications in C++ and Python to handle financial statement cleansing, validation, and year-to-year rollover for 39 multi-national corporation audits',
                'Deployed cleansing pipelines in Alteryx utilizing PostgreSQL and Microsoft SQL Server as data-lakes',
                'Developed custom frontend for audit team SharePoint to enhance auditor visibility',
            ],
            borderColor: 'border-yellow-500',
            link: 'https://www.ey.com/en_ca',
        },
        {
            id: 'wbooth',
            title: 'Software Technical Assistant',
            company: 'W.Booth Learning Factory',
            location: 'Hamilton, ON',
            period: '05/2019 - 12/2019',
            logo: '/McMaster.png',
            technologies:
                'JavaScript (Express.js, React.js), RabbitMQ (MQTT), REST APIs, PostgreSQL',
            responsibilities: [
                'Built REST APIs for monitoring real-time pipelines facilitating machine-to-machine communication between smart-conveyor belt systems',
                'Developed React.js based application for monitoring Learning Factory equipment diagnostics',
                'Led a team of student developers in constructing a React Native application for replacing iClickers in McMaster lectures',
            ],
            borderColor: 'border-accent',
            link: 'https://www.eng.mcmaster.ca/sept/news/the-industry-4-0-experience-inside-the-learning-factory/',
        },
    ]

    return (
        <div className="space-y-4 p-4 text-left">
            {experiences.map((experience) => (
                <ExperienceDropdown
                    key={experience.id}
                    experience={experience}
                />
            ))}
        </div>
    )
}

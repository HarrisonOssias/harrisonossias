/* Single source of truth for site content — mirrors public/Harrison_Ossias_Resume.pdf */

import blueOceanLogo from '../assets/logos/blue_ocean.webp'
import hyperionLogo from '../assets/logos/hyperion.webp'
import broadridgeLogo from '../assets/logos/broadridge.webp'
import ibmLogo from '../assets/logos/ibm.webp'
import eyLogo from '../assets/logos/ey.webp'
import uoftLogo from '../assets/logos/uoft.webp'
import mcmasterLogo from '../assets/logos/mcmaster.webp'

export interface Experience {
    id: string
    company: string
    role: string
    location: string
    period: string
    logo?: string
    link: string
    headline: string
    details: string[]
    skills: string[]
}

export interface Degree {
    degree: string
    focus: string
    school: string
    location: string
    period: string
    logo: string
    notes: string[]
    tags: string[]
}

export interface SkillGroup {
    title: string
    items: string[]
}

export const RESUME_PDF = '/Harrison_Ossias_Resume.pdf'

export const SOCIALS = {
    github: 'https://github.com/HarrisonOssias',
    linkedin: 'https://www.linkedin.com/in/harrison-ossias',
    instagram: 'https://www.instagram.com/harrisonossias/',
    source: 'https://github.com/HarrisonOssias/harrisonossias',
}

export interface Stat {
    value: string
    label: string
    highlight?: boolean
}

export const STATS: Stat[] = [
    { value: '6+ yrs', label: 'full-time software experience' },
    { value: 'MEng Robotics', label: 'University of Toronto' },
    {
        value: 'Edge → Cloud',
        label: 'embedded firmware to real-time AWS telemetry',
        highlight: true,
    },
]

export const FILTER_SKILLS = [
    'Rust',
    'Python',
    'C++',
    'TypeScript',
    'Kafka',
    'MQTT',
    'AWS',
    'Embedded',
    'Kubernetes',
    'React',
]

export const EXPERIENCE: Experience[] = [
    {
        id: 'able',
        company: 'Able Innovations Inc.',
        role: 'Full-Stack IoT & Telemetry Developer, Controls Team Lead',
        location: 'Toronto, ON',
        period: '10/2025 – Present',
        link: 'https://www.ableinnovations.com/',
        headline:
            'Shipped end-to-end robot telemetry (Rust/Python uplink over Zenoh → MQTT → AWS IoT Core, Flink on Confluent Kafka), cutting average latency from 30+ seconds to under 2 seconds with zero data loss.',
        details: [
            'Lead a team of 3 developers owning the edge-to-cloud software stack for a 21-site medical robot fleet',
            'Built a web app delivering real-time analytics and predictive alerting to operators and field technicians, saving ~$40K in servicing costs in its first year',
            'Designed two AWS deployment models — a multi-region fleet platform and isolated per-tenant clusters built to FDA requirements — and led engineering readiness for the company’s first FDA audit',
            'Built custom AI tooling on MCP servers with QA: an in-app assistant answering fleet analytics questions in plain English (~10 engineering hours saved weekly) and a bot that triages bug reports into prioritized Jira tickets',
            'Automated AWS IoT Core device onboarding: OTA updates, certificate provisioning, and device-serial management',
            'Maintain 5 production code bases with test suites validating hardware-to-cloud data flow across embedded (STM32, FreeRTOS), backend, and frontend',
        ],
        skills: [
            'Rust',
            'Python',
            'C++',
            'TypeScript',
            'Kafka',
            'MQTT',
            'AWS',
            'Embedded',
            'React',
        ],
    },
    {
        id: 'blueocean',
        company: 'Blue Ocean Technologies Inc.',
        role: 'Software & Firmware Engineer (Contract)',
        location: 'Toronto, ON',
        period: '01/2025 – 08/2025',
        logo: blueOceanLogo,
        link: 'https://blueoceantechnologies.ca/',
        headline:
            'Modernized a power-management product end to end, from its firmware to its desktop control software.',
        details: [
            'Ported the firmware from Teensy 3.5 (Cortex-M4) to Teensy 4.0 (Cortex-M7), reworking timing-critical code with no change in device behavior',
            'Rebuilt the flagship Qt app as a cross-platform React + Electron app with a Django and PostgreSQL backend in 3 months',
            'Integrated Protocol Buffer APIs and UART, SPI, and I2C interfaces between the app, sensors, and peripherals',
        ],
        skills: ['C++', 'Embedded', 'Python', 'TypeScript', 'React'],
    },
    {
        id: 'hyperion',
        company: 'Hyperion Sensors Inc.',
        role: 'Lead Full-Stack Software Engineer',
        location: 'Toronto, ON',
        period: '04/2022 – 04/2024',
        logo: hyperionLogo,
        link: 'https://www.hyperionsensors.com/',
        headline:
            'Led a team of 3 building an IoT telemetry SaaS platform for fiber-optic grid sensors, running in 14 production deployments for 6 Ontario electricity distributors.',
        details: [
            'Re-architected a legacy Tomcat monolith into Kubernetes microservices with MQTT and Kafka streaming, cutting data latency from over a minute to under a second',
            'Integrated enterprise sign-in with LDAP and Active Directory through Auth0 and AWS Cognito',
            'Developed C++ data-acquisition software for Linux field devices, with automated OTA updates across the fleet',
        ],
        skills: [
            'C++',
            'TypeScript',
            'Python',
            'Kafka',
            'MQTT',
            'AWS',
            'Kubernetes',
            'React',
        ],
    },
    {
        id: 'broadridge',
        company: 'Broadridge',
        role: 'Associate Software Engineer (Co-op)',
        location: 'Toronto, ON',
        period: '05/2021 – 12/2021',
        logo: broadridgeLogo,
        link: 'https://www.broadridge.com/',
        headline:
            'Built a client-release scheduling and system-monitoring tool for AWS clusters, integrated with team-wide CI/CD (Django, PostgreSQL, Next.js).',
        details: [
            'Designed normalized SQL schemas with GDPR-compliant data handling: data minimization, access controls, and retention policies',
            'Delivered hotfixes and client patches in an Agile team through daily stand-ups and code reviews',
        ],
        skills: ['Python', 'TypeScript', 'AWS', 'React'],
    },
    {
        id: 'ibm',
        company: 'IBM',
        role: 'DevOps/SRE Cloud Developer (Co-op)',
        location: 'Ottawa / Toronto, ON',
        period: '05/2020 – 12/2020',
        logo: ibmLogo,
        link: 'https://www.ibm.com/ca-en',
        headline:
            'On-call SRE and DevOps developer for IBM Planning Analytics on Demand across 25 clients, including IKEA, PepsiCo, and EY.',
        details: [
            'Automated performance monitoring with Python and PowerShell, reducing authentication-related downtime by ~2.5%',
            'Managed 60+ production and development environments across Active Directory and bare-metal Linux with Ansible Tower, enforcing GDPR-aligned access controls for EU clients',
        ],
        skills: ['Python', 'Kubernetes'],
    },
    {
        id: 'ey',
        company: 'Ernst & Young (EY)',
        role: 'Data Analyst, tenthree labs (Co-op)',
        location: 'Toronto, ON',
        period: '01/2020 – 04/2020',
        logo: eyLogo,
        link: 'https://www.ey.com/en_ca',
        headline:
            'Built C++ and Python support applications for financial-statement cleansing, validation, and year-to-year rollover across 39 corporate audits.',
        details: [
            'Deployed cleansing pipelines in Alteryx using PostgreSQL and Microsoft SQL Server as data stores',
        ],
        skills: ['C++', 'Python'],
    },
]

export const EDUCATION: Degree[] = [
    {
        degree: 'MEng, Mechanical & Industrial Engineering',
        focus: 'Robotics',
        school: 'University of Toronto',
        location: 'Toronto, ON',
        period: '01/2025 – 08/2026',
        logo: uoftLogo,
        notes: [
            'Specialized in robotic perception and physical AI systems',
            'Research in telepresence robotics and medical robot adoption across Canada',
        ],
        tags: ['ROS 2', 'Isaac Sim', 'PyTorch'],
    },
    {
        degree: 'BTech, Automation Engineering',
        focus: 'Smart Systems & IoT Engineering',
        school: 'McMaster University',
        location: 'Hamilton, ON',
        period: '09/2017 – 05/2022',
        logo: mcmasterLogo,
        notes: [],
        tags: ['Smart systems', 'IoT', 'Automation'],
    },
]

export const SKILLS: SkillGroup[] = [
    {
        title: 'Languages',
        items: ['Python', 'TypeScript/JavaScript', 'C++', 'Rust', 'Go', 'SQL'],
    },
    {
        title: 'Embedded & Robotics',
        items: [
            'STM32',
            'ARM Cortex-M4/M7',
            'NXP Kinetis / i.MX RT',
            'FreeRTOS',
            'Zephyr',
            'ROS 2',
            'Zenoh',
        ],
    },
    {
        title: 'Cloud & DevOps',
        items: [
            'AWS IoT Core',
            'EC2 / ECS / EKS',
            'Lambda',
            'RDS / S3',
            'IAM / Cognito',
            'GCP',
            'IBM Cloud',
            'Kubernetes',
            'Ansible Tower',
            'CI/CD',
            'OTA Updates',
            'Linux',
        ],
    },
    {
        title: 'Data & Streaming',
        items: [
            'Kafka (Streams, Confluent)',
            'Apache Flink',
            'PostgreSQL',
            'SQLite',
            'Redis',
        ],
    },
    {
        title: 'Protocols & APIs',
        items: [
            'MQTT',
            'gRPC',
            'Protocol Buffers',
            'GraphQL',
            'REST',
            'CAN',
            'UART',
            'SPI',
            'I2C',
        ],
    },
    {
        title: 'Web',
        items: [
            'React',
            'Next.js',
            'Node.js',
            'NestJS',
            'Express.js',
            'Django',
            'Electron',
        ],
    },
    { title: 'AI Tooling', items: ['Claude', 'Model Context Protocol (MCP)'] },
]

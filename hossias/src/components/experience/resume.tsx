import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

export const Resume = () => {
    return (
        <div className="mx-auto w-full max-w-4xl p-6">
            <TabGroup>
                <TabList className="mb-6 flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                    <Tab className="ring-opacity-60 ui-selected:bg-white ui-selected:shadow ui-not-selected:text-blue-100 ui-not-selected:hover:bg-white/[0.12] ui-not-selected:hover:text-white w-full rounded-lg py-2.5 text-sm leading-5 font-medium text-blue-700 ring-white ring-offset-2 ring-offset-blue-400 focus:ring-2 focus:outline-none">
                        Experience
                    </Tab>
                    <Tab className="ring-opacity-60 ui-selected:bg-white ui-selected:shadow ui-not-selected:text-blue-100 ui-not-selected:hover:bg-white/[0.12] ui-not-selected:hover:text-white w-full rounded-lg py-2.5 text-sm leading-5 font-medium text-blue-700 ring-white ring-offset-2 ring-offset-blue-400 focus:ring-2 focus:outline-none">
                        Education
                    </Tab>
                    <Tab className="ring-opacity-60 ui-selected:bg-white ui-selected:shadow ui-not-selected:text-blue-100 ui-not-selected:hover:bg-white/[0.12] ui-not-selected:hover:text-white w-full rounded-lg py-2.5 text-sm leading-5 font-medium text-blue-700 ring-white ring-offset-2 ring-offset-blue-400 focus:ring-2 focus:outline-none">
                        Skills
                    </Tab>
                </TabList>

                <TabPanels className="mt-2">
                    <TabPanel className="ring-opacity-60 rounded-xl bg-white p-3 ring-white ring-offset-2 ring-offset-blue-400 focus:ring-2 focus:outline-none">
                        <div className="space-y-6">
                            {/* Current Position */}
                            <div className="border-l-4 border-blue-500 pl-4">
                                <div className="mb-2 flex items-start justify-between">
                                    <h3 className="text-lg font-bold text-gray-900">
                                        Full Stack Software Engineer (Team Lead)
                                    </h3>
                                    <span className="text-sm text-gray-500">
                                        04/2022 - Present
                                    </span>
                                </div>
                                <p className="mb-2 text-base text-gray-700">
                                    Hyperion Sensors Inc. – Toronto, ON
                                </p>
                                <div className="mb-3">
                                    <span className="text-sm font-semibold text-blue-600">
                                        Key Technologies:{' '}
                                    </span>
                                    <span className="text-sm text-gray-600">
                                        TypeScript, React (Next.js), Python
                                        (Django), Express.js, AWS, Tailwind CSS,
                                        Kubernetes, PostgreSQL, Apache Kafka,
                                        REST APIs, GraphQL
                                    </span>
                                </div>
                                <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
                                    <li>
                                        Led end-to-end development of flagship
                                        SaaS platform Helios as Principal
                                        Developer
                                    </li>
                                    <li>
                                        Oversaw 14 production environments
                                        supporting 6 major electricity
                                        distributors
                                    </li>
                                    <li>
                                        Designed backend REST APIs and GraphQL
                                        systems, modernizing legacy Apache
                                        Tomcat codebase
                                    </li>
                                    <li>
                                        Architected authentication flows
                                        integrating LDAP and Active Directory
                                        with Auth0 and AWS Cognito
                                    </li>
                                    <li>
                                        Transitioned data replication to Kafka
                                        Streams for efficient sensor data
                                        transmission
                                    </li>
                                </ul>
                            </div>

                            {/* Contract Position */}
                            <div className="border-l-4 border-green-500 pl-4">
                                <div className="mb-2 flex items-start justify-between">
                                    <h3 className="text-lg font-bold text-gray-900">
                                        Contract Software & Firmware Engineer
                                    </h3>
                                    <span className="text-sm text-gray-500">
                                        01/2025 - Present
                                    </span>
                                </div>
                                <p className="mb-2 text-base text-gray-700">
                                    Blue Ocean Technologies Inc. – Toronto, ON
                                </p>
                                <div className="mb-3">
                                    <span className="text-sm font-semibold text-blue-600">
                                        Key Technologies:{' '}
                                    </span>
                                    <span className="text-sm text-gray-600">
                                        C/C++, Python, ARM Cortex-M7/M5, React,
                                        PostgreSQL, Tailwind CSS, Electron
                                    </span>
                                </div>
                                <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
                                    <li>
                                        Converted flagship OT application to
                                        Chromium-based (Electron) React
                                        application in 3 months
                                    </li>
                                    <li>
                                        Ported power management firmware from
                                        Teensy 3.5 to 4.0 microcontroller
                                        architecture
                                    </li>
                                    <li>
                                        Integrated communication protocols
                                        including Protocol Buffer APIs and
                                        serial interfaces
                                    </li>
                                </ul>
                            </div>

                            {/* Previous Positions */}
                            <div className="border-l-4 border-purple-500 pl-4">
                                <div className="mb-2 flex items-start justify-between">
                                    <h3 className="text-lg font-bold text-gray-900">
                                        Associate Software Engineer Co-op
                                    </h3>
                                    <span className="text-sm text-gray-500">
                                        05/2021 - 12/2021
                                    </span>
                                </div>
                                <p className="mb-2 text-base text-gray-700">
                                    Broadridge – Toronto, ON
                                </p>
                                <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
                                    <li>
                                        Developed client-release scheduling and
                                        system monitoring tool for AWS clusters
                                    </li>
                                    <li>
                                        Implemented highly normalized SQL
                                        schemas for data integrity
                                    </li>
                                </ul>
                            </div>

                            <div className="border-l-4 border-orange-500 pl-4">
                                <div className="mb-2 flex items-start justify-between">
                                    <h3 className="text-lg font-bold text-gray-900">
                                        DevOps/SRE Cloud Developer Co-op
                                    </h3>
                                    <span className="text-sm text-gray-500">
                                        05/2020 - 08/2020
                                    </span>
                                </div>
                                <p className="mb-2 text-base text-gray-700">
                                    IBM – Ottawa/Toronto, ON
                                </p>
                                <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
                                    <li>
                                        Built updates to IBM Planning Analytics
                                        suite and deployed in Kubernetes
                                    </li>
                                    <li>
                                        Managed 60+ production and development
                                        environments using Ansible Tower
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel className="ring-opacity-60 rounded-xl bg-white p-3 ring-white ring-offset-2 ring-offset-blue-400 focus:ring-2 focus:outline-none">
                        <div className="space-y-6">
                            <div className="border-l-4 border-blue-500 pl-4">
                                <div className="mb-2 flex items-start justify-between">
                                    <h3 className="text-lg font-bold text-gray-900">
                                        M.Eng: Mechanical & Industrial
                                        Engineering
                                    </h3>
                                    <span className="text-sm text-gray-500">
                                        04/2026 (expected)
                                    </span>
                                </div>
                                <p className="mb-2 text-base text-gray-700">
                                    University of Toronto – Toronto, Ontario
                                </p>
                                <p className="mb-2 text-sm text-gray-600">
                                    AI Applications in Robotics
                                </p>
                                <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
                                    <li>
                                        Part-time M.Eng student with emphasis in{' '}
                                        <strong>Robotics</strong>
                                    </li>
                                    <li>
                                        Capstone: The Adoption of Medical
                                        Robotics and AI in Canadian & European
                                        Healthcare
                                    </li>
                                </ul>
                            </div>

                            <div className="border-l-4 border-green-500 pl-4">
                                <div className="mb-2 flex items-start justify-between">
                                    <h3 className="text-lg font-bold text-gray-900">
                                        B.Tech: Automation Engineering
                                    </h3>
                                    <span className="text-sm text-gray-500">
                                        05/2022
                                    </span>
                                </div>
                                <p className="mb-2 text-base text-gray-700">
                                    McMaster University – Hamilton, Ontario
                                </p>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel className="ring-opacity-60 rounded-xl bg-white p-3 ring-white ring-offset-2 ring-offset-blue-400 focus:ring-2 focus:outline-none">
                        <div className="grid gap-6 md:grid-cols-2">
                            <div>
                                <h3 className="mb-3 text-lg font-bold text-gray-900">
                                    Programming Languages
                                </h3>
                                <div className="space-y-2">
                                    <div className="flex flex-wrap gap-2">
                                        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                                            TypeScript (JavaScript)
                                        </span>
                                        <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">
                                            Python
                                        </span>
                                        <span className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800">
                                            C++
                                        </span>
                                        <span className="rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-800">
                                            SQL
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        MySQL, PostgreSQL, SQLite, NoSQL
                                        (MongoDB)
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h3 className="mb-3 text-lg font-bold text-gray-900">
                                    APIs & UI Development
                                </h3>
                                <div className="space-y-2">
                                    <div className="flex flex-wrap gap-2">
                                        <span className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-800">
                                            REST
                                        </span>
                                        <span className="rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-800">
                                            GraphQL
                                        </span>
                                        <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-800">
                                            gRPC
                                        </span>
                                        <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm text-cyan-800">
                                            React
                                        </span>
                                        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800">
                                            Next.js [SSR]
                                        </span>
                                        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                                            Tailwind CSS
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="mb-3 text-lg font-bold text-gray-900">
                                    Cloud Platforms
                                </h3>
                                <div className="space-y-2">
                                    <div className="flex flex-wrap gap-2">
                                        <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-800">
                                            AWS
                                        </span>
                                        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                                            IBM Cloud
                                        </span>
                                        <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">
                                            GCP
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        EC2, Cognito, EKS, LightSail, RDS, S3,
                                        Bare-metal, Hybrid Cloud, Compute
                                        Engine, Cloud Build, Firestore
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h3 className="mb-3 text-lg font-bold text-gray-900">
                                    DevOps & Tools
                                </h3>
                                <div className="space-y-2">
                                    <div className="flex flex-wrap gap-2">
                                        <span className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800">
                                            Kubernetes
                                        </span>
                                        <span className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-800">
                                            Docker
                                        </span>
                                        <span className="rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-800">
                                            Apache Kafka
                                        </span>
                                        <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">
                                            Linux
                                        </span>
                                        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                                            Git
                                        </span>
                                        <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-800">
                                            CI/CD
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>
    )
}

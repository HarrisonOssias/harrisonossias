export const Education = () => {
    return (
        <div className="p-2 text-left sm:p-4">
            <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-2 sm:pl-4">
                    <div className="mb-3 flex items-center space-x-2 sm:space-x-3">
                        <img
                            src="/UofT.png"
                            alt="University of Toronto logo"
                            className="h-20 w-20 rounded-lg bg-white object-contain p-1 shadow-sm sm:h-30 sm:w-30 2xl:h-40 2xl:w-40"
                        />
                        <div className="flex-1">
                            <div className="flex items-start justify-between">
                                <h3 className="text-success/80 text-base font-bold sm:text-lg">
                                    M.Eng: Mechanical & Industrial Engineering
                                </h3>
                                <span className="text-success/80 text-xs sm:text-sm xl:text-base">
                                    04/2026 (expected)
                                </span>
                            </div>
                            <p className="text-secondary/70 text-sm font-medium sm:text-base">
                                University of Toronto – Toronto, Ontario
                            </p>
                            <p className="text-secondary/60 text-xs sm:text-sm xl:text-base">
                                AI Applications in Robotics
                            </p>
                            <ul className="text-secondary/40 list-disecondary/60 ml-4 list-inside list-disc text-sm font-medium sm:ml-5 sm:text-base">
                                <li>
                                    Part-time M.Eng student with emphasis in{' '}
                                    <strong>Robotics</strong>
                                </li>
                                <li>
                                    <span className="font-bold">Thesis:</span>{' '}
                                    The Adoption of Medical Robotics and AI in
                                    Canadian & European Healthcare
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-l-4 border-green-500 pl-2 sm:pl-4">
                    <div className="mb-3 flex items-center space-x-2 sm:space-x-3">
                        <img
                            src="/McMaster.png"
                            alt="McMaster University logo"
                            className="h-20 w-20 rounded-lg bg-white object-contain p-1 shadow-sm sm:h-30 sm:w-30 2xl:h-40 2xl:w-40"
                        />
                        <div className="flex-1">
                            <div className="flex items-start justify-between">
                                <h3 className="text-success/80 text-base font-bold sm:text-lg">
                                    B.Tech: Automation Engineering
                                </h3>
                                <span className="text-success/80 text-xs sm:text-sm xl:text-base">
                                    05/2022
                                </span>
                            </div>
                            <p className="text-secondary/70 text-sm font-medium sm:text-base">
                                McMaster University – Hamilton, Ontario
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

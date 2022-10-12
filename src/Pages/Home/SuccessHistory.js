import React from 'react';

const SuccessHistory = () => {
    return (
        <div>
            <div>
                <section class="bg-white">
                    <div class="max-w-screen-xl px-4 py-12 mx-auto md:py-16 sm:px-6 lg:px-8">
                        <div class="max-w-3xl mx-auto text-center">
                            <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
                            Our Success
                            </h2>
                        </div>

                        <div class="mt-8 sm:mt-12">
                            <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                <div
                                    class="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg"
                                >
                                    <dt class="order-last text-lg font-medium text-gray-500">
                                    Total Recruitment
                                    </dt>

                                    <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
                                        260+
                                    </dd>
                                </div>

                                <div
                                    class="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg"
                                >
                                    <dt class="order-last text-lg font-medium text-gray-500">
                                    Processing
                                    </dt>

                                    <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">59</dd>
                                </div>

                                <div
                                    class="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg"
                                >
                                    <dt class="order-last text-lg font-medium text-gray-500">
                                    complete
                                    </dt>

                                    <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">201</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default SuccessHistory;
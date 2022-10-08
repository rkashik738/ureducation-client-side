import React from 'react';

const Banner = () => {
    return (
        <div>
            <div>
                <aside class="overflow-hidden bg-whaite-50 sm:grid sm:grid-cols-2">
                    <div class="p-8 md:p-12 lg:px-16 lg:py-24">
                        <div class="max-w-xl mx-auto text-center sm:text-left">
                            <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit
                            </h2>

                            <p class="hidden text-gray-500 md:mt-4 md:block">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
                                tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et
                                fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt
                                duis.
                            </p>

                            <div class="mt-4 md:mt-8">
                                <a
                                    href="#"
                                    class="inline-block px-12 py-3 text-sm font-medium text-white transition rounded bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                                >
                                    Get Started Today
                                </a>
                            </div>
                        </div>
                    </div>

                    <img
                        alt="Student"
                        src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        class="object-cover w-full h-56 sm:h-full"
                    />
                </aside>


            </div>
        </div>
    );
};

export default Banner;
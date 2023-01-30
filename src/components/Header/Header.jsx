import { useState } from 'react'
import { Dialog } from "@headlessui/react";
import { NavLink } from 'react-router-dom';
import 'boxicons';

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigation = [
        { sn: "01", name: "Home", to: "/" },
        { sn: "02", name: "Projects", to: "/projects" },
        { sn: "03", name: "Contact", to: "/" },
    ];

    return (
        <>
            <div className="isolate bg-white">
                <div className="px-6 lg:px-8  ">
                    <nav className="flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16 text-gray-900 dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
                        <div className="ml-[-0.60rem]">
                            <button className="mobile-menu_burger__wvd0z visible md:hidden" aria-label="Toggle menu" type="button" onClick={() => setMobileMenuOpen(true)} >
                                <box-icon name='bar-chart-alt-2' type='solid' rotate='90' ></box-icon>
                            </button>
                            <ul className='flex'>
                                {navigation.map((item, i) => (
                                    <li key={i}>
                                        <NavLink to={item.to} className="font-normal text-gray-600 dark:text-gray-400 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:underline transition-all">
                                            <span className="capsize">{item.name}</span>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <button aria-label="Toggle Dark Mode" type="button" className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all">
                            <span className="sr-only">theme</span>
                            <box-icon name='moon'></box-icon>
                            {/* {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />} */}
                        </button>
                    </nav>


                    <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <Dialog.Panel className="fixed inset-0 z-20 overflow-y-auto backdrop-blur px-6 py-6 lg:hidden">
                            <div className="mt-6 flow-root transition-all">
                                <div className="my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        <div className="fixed top-10 right-10 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:highlight-white/5">
                                            <ul className="space-y-6">
                                                {navigation.map((item, i) => (
                                                    <li key={i}>
                                                        <NavLink to={item.to} className="font-normal text-gray-600 dark:text-gray-400 p-1 sm:px-3 sm:py-2 rounded-lg hover:underline transition-all" onClick={() => setMobileMenuOpen(false)}>
                                                            <span className="capsize">{item.name}</span>
                                                        </NavLink>
                                                    </li>
                                                ))}
                                            </ul>
                                            <button type="button" className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300" onClick={() => setMobileMenuOpen(false)}>
                                                <div className="flex">
                                                    <span className="sr-only">Close menu</span>
                                                    <box-icon type='logo' name='xing'></box-icon>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Dialog>
                </div>
            </div>
        </>
    )
}

export default Header;
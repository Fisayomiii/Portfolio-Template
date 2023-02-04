import React from "react";

function Footer() {
    return (
        <>
            <div className="px-8 lg:px-8">
                <footer className="flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16 text-gray-900 dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
                    <div className="ml-[-0.60rem]">
                        <ul className="flex">
                            <li title="Github">
                                <a href="/" className="font-normal text-gray-900 dark:text-gray-400 p-1 sm:px-3 sm:py-2 rounded-lg transition-all">
                                    <span className="capsize">GH</span>
                                </a>
                            </li>
                            <li title="Twitter">
                                <a href="/" className="font-normal text-gray-900 dark:text-gray-400 p-1 sm:px-3 sm:py-2 rounded-lg transition-all">
                                    <span className="capsize">TW</span>
                                </a>
                            </li>
                            <li title="Linkedin">
                                <a href="/" className="font-normal text-gray-900 dark:text-gray-400 p-1 sm:px-3 sm:py-2 rounded-lg transition-all">
                                    <span className="capsize">LI</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-9 h-9 text-gray-900 dark:text-gray-400 transition-all">
                        <span>©2023</span>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer;
import React from "react"
import Portfolio from "./Portfolio"

function Projects() {
    return (
        <>
            <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16 pt-6 p-5">
                <div>
                    <h1 className="font-extrabold text-2xl md:text-2xl mb-1 text-black dark:text-white">
                        Projects
                    </h1>
                    <p className="tracking-wide text-gray-600 dark:text-gray-400 mb-16">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae error eum facere officia nam! Numquam, molestiae ea. Laboriosam, facere tempora cum dicta quia eligendi perspiciatis veniam. Numquam velit accusantium rerum?
                    </p>
                </div>
                <Portfolio/>
            </div>
        </>
    )
}

export default Projects
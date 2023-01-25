import React from 'react'
import Skills from '../Skills/Skills'

function About() {
    return (
        <>
            <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16 pt-6 p-5">
                <div className="flex flex-col-reverse sm:flex-row items-start">
                    <div className="flex flex-col pr-8">
                        <h1 className="font-extrabold text-3xl md:text-4xl  mb-1 text-black dark:text-white">
                           Fisayomi
                        </h1>
                        <h2 className="tracking-wide text-gray-700 dark:text-gray-200 mb-4">
                            Frontend{' '}
                            <span className="font-semibold">Developer</span>
                        </h2>
                        <p className="tracking-wide text-gray-600 dark:text-gray-400 mb-16">
                            Hey, I'm a Senior Software Engineer at Company. I enjoy working with Next.js and crafting beautiful front-end experiences.
                        </p>
                    </div>
                    <div className="w-[80px] sm:w-[206px] relative mb-8 sm:mb-0 mr-auto">
                        <img src="https://media.istockphoto.com/id/1391785465/photo/3d-illustration-of-a-thinking-african-american-man-david-with-big-question-mark-in-speech.jpg?s=612x612&w=0&k=20&c=Epyh_UGCaN6UoJt_CDrVEKW9ZNSSdiOGpCpV5UtNtl0=" alt="profile image" className="rounded-full grayscale hover:grayscale-0" />
                    </div>
                </div>

                <div>
                    <h1 className="font-bold text-2xl md:text-2xl  mb-1 text-black dark:text-white">
                        About Me
                    </h1>
                    <p className="tracking-wide text-gray-600 dark:text-gray-400 mb-16">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos architecto consequuntur sunt, exercitationem quia quaerat veniam vero possimus repellendus, recusandae neque? Velit ex culpa distinctio accusantium aliquid, ab odio aspernatur. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis molestias atque, distinctio assumenda est rerum error velit amet explicabo vero eaque inventore, iste illo soluta laboriosam facere animi minus eos!
                    </p>
                </div>
                <Skills/>
            </div>
        </>
    )
}

export default About
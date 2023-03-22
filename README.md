# Portfolio-Template
⚡️ A minimal portfolio template for Developers

## [Demo](https://viteportfoliotemplate.vercel.app/) 🔗

<div align="center">
  <img src="https://res.cloudinary.com/fisayomithesedays/image/upload/v1675776611/samples/Img%20links/Screenshot_147_wmzshy.png" alt="preview img" width="100%" />
  <br>
</div>

<br/>

---

## Features

- ### **Easy to Setup 💯** 
- ### **Free to Use ( OpenSource ) 🥳** 
- ### **No Additional Frameworks 🤘** 
- ### **No Additional Libraries 🙌** 
- ### **Multi Page 💎** 
- ### **Fully Responsive 🚀** 
- ### **Super Fast and Optimized for SEO ⚡** 


## Technologies used 🛠️

- **Vite React** 🚀
- **TailwindCSS** 🚀
---

<br/>

## How To Use 🔧

From your command line, first clone:

```bash
# Clone this repository
$ git clone https://github.com/Fisayomiii/Portfolio-Template.git

# Go into the repository
$ cd Portfolio-Template

# Remove current origin repository
$ git remote remove origin
```

<br/>

Then you can install the dependencies

Using NPM:

```bash
# Install dependencies
$ npm install
```

## Header

Go to `/header.jsx` and fill your information, there are 6 sections:

### Header of Homepage

- On `button > span`, Add the First letter of your Name.

```jsx
<!-- **** Header of Homepage **** -->
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
        <button aria-label="Toggle Dark Mode" type="button" className="w-9 h-9 bg-gray-200 rounded-full dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all">
            <span className="text-md font-extrabold">F</span>
        </button>
    </nav>
<!-- END Header -->
```

### About Section of Homepage

- On `div > div > div > h1`, put your custom title.
- On `div > div > div > h1 > h2`, put your custom role.
- On `div > div > div > h1 > h2 > p`, put a short description about yourself.
- On `div > img`, Add your own Image.

```jsx
<!-- **** About Section of Homepage **** -->
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
                            Hey, I'm a Frontend Developer at Company. I enjoy working with React Js and crafting beautiful front-end experiences.
                        </p>
                    </div>
                    <div className="w-[80px] sm:w-[206px] relative mb-8 sm:mb-0 mr-auto">
                        <img src="https://avatars.githubusercontent.com/u/101179443?v=4" alt="avatar" title="avatar" className="rounded-full grayscale hover:grayscale-0" />
                    </div>
                </div>

                <div>
                    <h1 className="font-bold text-2xl md:text-2xl mb-1 text-black dark:text-white">
                        About Me
                    </h1>
                    <p className="tracking-wide text-gray-600 dark:text-gray-400 mb-16">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos architecto consequuntur sunt, exercitationem quia quaerat veniam vero possimus repellendus, recusandae neque? Velit ex culpa distinctio accusantium aliquid, ab odio aspernatur. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis molestias atque, distinctio assumenda est rerum error velit amet explicabo vero eaque inventore, iste illo soluta laboriosam facere animi minus eos!
                    </p>
                </div>
                <Skills />
            </div>
<!-- /END About Section -->
```

### Skills Section
Go to `/Skills.jsx` and fill your information:

- On `div > h1 > p`, put a short description about your skills.
- On `const skills`, type in your skills one by one.
- On `const devtools`, type in your tools one by one.

```jsx
<!-- **** About Section of Homepage **** -->
function Skills() {
    const skills = ['TypeScript', 'React', 'Angular', 'HTML', 'CSS', 'Vite'];

    const devtools = ['Bootstrap ', 'Tailwind', 'Github', 'Codepen', 'Terminal', 'Vercel', 'Netlify'];
    
    return (
        <>
            <div>
                <h1 className="font-bold text-2xl md:text-2xl  mb-1 text-black dark:text-white">
                    Skills
                </h1>
                <p className="tracking-wide text-gray-600 dark:text-gray-400 mb-16">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente voluptates provident in assumenda quisquam repudiandae, labore doloremque corporis exercitationem placeat nesciunt dolore sit suscipit reiciendis aliquam qui. Earum, eligendi modi.
                </p>
                <div className='mt'>
                    <p>Here are a few technologies i work with:
                        <ul className="skills-list">
                            {skills.map((skill, i) => <li key={i} className="relative mb-5 pl-6">{skill}</li>)}
                        </ul>
                    </p><br />
                    <p>Here are few of my Dev tools:
                        <ul className="skills-list">
                            {devtools.map((tools, i) => <li key={i} className="relative mb-5 pl-6">{tools}</li>)}
                        </ul>
                    </p>
                </div>

            </div>
        </>
    )
}
<!-- END About Section -->
```

### Projects
Go to `/Projects.jsx` and fill your information:

- On `div > div > h1 > p`, put a short description about the section.

```jsx
<!-- **** Projects Section **** -->
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
```

### Portfolio
Go to `/Portfolio.jsx` and fill your information:

- On `div > div > div > div >`, put in your project title.
- On `div > div > div > div > div`, put in your project description.
- On `div > div > div > div > div > div > div > div > span > a`, in href put in your project demo link.
- On `div > div > div > div > div > div > div > div > span > a div > span > a`, in the second href put in your project repository link.
- On `div > div > div > div > div > div > div > div > span > a div > span > a > img`, put in your project Image.

```jsx
<!-- **** Portfolio Section **** -->
            <div className="block items-center justify-center">
                <div className="overflow-hidden aspect-video bg-red-400 cursor-pointer rounded-xl relative group mb-10" >
                    <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end" >
                        <div className="transform-gpu p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out" >
                            <div className="font-bold">Movie Streaming app</div>
                            <div className="opacity-60 text-sm ">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores repudiandae adipisci, nostrum asperiores perferendis pariatur temporibus nobis repellendus, error veniam eveniet, quam laborum enim quae reiciendis sapiente. Repellendus, eveniet sed.
                            </div>
                            <div className="flex gap-2">
                                <div>
                                    <span className="inline-flex text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-sky-900">
                                        <a href="https://example.com" target="_blank" rel="noreferrer" className="no-no-underline">Demo</a>
                                    </span>
                                </div>
                                <div>
                                    <span className="inline-flex text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-sky-900">
                                        <a href="https://example.com" target="_blank" rel="noreferrer" className="no-no-underline">Repo</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img alt="portfolio image" className="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out" src="https://source.unsplash.com/random/1280x720" />
                </div>
            </div>
```

### Contact Section
Go to `/Contact.jsx` and fill your information:

- `form` Currently, there are 3 fields but you can add more fields as per your need but just make sure to change the name of **label** and **input/textarea** inside it.

If you like to know how to submit forms so you can receive the form details in your email then i recommend using **email.js** as it's easier to set up and free to use. If you are using **Netlify** to host the site then Netlify has an inbuilt form receiver which you can use instead of **email.js**.

```jsx
<!-- **** Contact Section **** -->
             <section className="bg-white dark:bg-gray-900">
                <div className="py-8 lg:py-13 px-16 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Me</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a question or proposal, or just want to say hello? Go ahead. You're Free :)</p>
                    <form action="#" className="space-y-8 p-12 pt-1 ">
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input type="email" id="email" className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Name" required />
                        </div>
                        <div>
                            <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                            <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="What do you have to say?" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-sky-600 sm:w-fit hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 dark:bg-primary-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">Send message</button>
                    </form>
                </div>
            </section>
<!-- END Contact Section -->
```


### Footer Section
Go to `/Footer.jsx` and fill your information:

- On `div > span` put in a copywriting year.
- On Anchor tag inside `ul > li`, fill the href attribute with a link related to your social media account.

```jsx
<!-- **** Footer Section **** -->
                 <footer className="flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16 text-gray-900 dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
                    <div className="ml-[-0.60rem]">
                        <ul className="flex">
                            <li title="Github">
                                <a href="/" className="font-normal text-gray-900 dark:text-gray-400 p-1 sm:px-3 sm:py-2 rounded-lg transition-all">
                                    <box-icon name="github" type="logo" color="#8e8e8e" ></box-icon>
                                </a>
                            </li>
                            <li title="Twitter">
                                <a href="/" clzassName="font-normal text-gray-900 dark:text-gray-400 p-1 sm:px-3 sm:py-2 rounded-lg transition-all">
                                    <box-icon type="logo" name="twitter" color="#8e8e8e"></box-icon>
                                </a>
                            </li>
                            <li title="Linkedin">
                                <a href="/" className="font-normal text-gray-900 dark:text-gray-400 p-1 sm:px-3 sm:py-2 rounded-lg transition-all">
                                    <box-icon type="logo" name="linkedin" color="#8e8e8e"></box-icon>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-9 h-9 text-gray-900 dark:text-gray-400 transition-all">
                        <span>©2023</span>
                    </div>
                </footer>
<!-- END Footer Section -->
```

<br/>

## Give a Star ⭐

If you like this project then give it a **Github** star by pressing the **Star** button ⭐

<br>


## Author 👨‍💻

- **Fisayomi** - **[Twitter](https://twitter.com/999tweets_her)**, **[Github](https://github.com/Fisayomiii)**, **[Portfolio](https://oluwafisayomi.netlify.app)**  

<br>

#### Note: 
I'm currently looking for good **Job Opportunities** both **Remote ( Worldwide )**. So, if you have a good opportunity that matches my skills experience then you can contact me on my **[Twitter](https://twitter.com/999tweets_her)** or my email id **wrld26993@gmail.com** 🙌



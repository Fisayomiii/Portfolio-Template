import React from 'react';

function Portfolio() {
    return (
        <>
            <div className="flex justify-center items-center">
                <div className="max-w-2xl mx-auto grid gap-2 grid-cols-4 grid-rows-5 px-6">
                    <div className="block relative bg-red-100 w-full h-24">
                        <img className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1611234408198-43c5578c15c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400" />
                    </div>

                    <div className="block relative bg-red-100 row-span-2">
                        <img className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1613414875735-5e2b64586d8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400" />
                    </div>

                    <div className="block relative bg-red-100 col-span-2 row-span-2">
                        <img className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1613478304462-112984d55816?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400" />
                    </div>

                    <div className="block relative bg-red-100 row-span-2" href="https://images.unsplash.com/photo-1613422033747-b9454246ea0f?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85" >
                        <img className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1613422033747-b9454246ea0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400" />
                    </div>

                    <div className="block relative bg-red-100" href="https://images.unsplash.com/photo-1613670607871-7dbe134f9c17?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85" >
                        <img className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1613670607871-7dbe134f9c17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400" />
                    </div>


                    <div className="block relative bg-red-100 w-36 h-24" href="https://images.unsplash.com/photo-1611234408198-43c5578c15c7?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85" >
                        <img className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1611234408198-43c5578c15c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400" />
                    </div>

                    <div className="block relative bg-red-100 row-span-2" href="https://images.unsplash.com/photo-1613414875735-5e2b64586d8f?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85" >
                        <img className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1613414875735-5e2b64586d8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400" />
                    </div>

                    <div className="block relative bg-red-100 col-span-2 row-span-2" href="https://images.unsplash.com/photo-1613478304462-112984d55816?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85" >
                        <img className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1613478304462-112984d55816?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400" />
                    </div>

                    <div className="block relative bg-red-100 row-span-2" href="https://images.unsplash.com/photo-1613422033747-b9454246ea0f?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85" >
                        <img className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1613422033747-b9454246ea0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400" />
                    </div>

                    <div className="block relative bg-red-100" href="https://images.unsplash.com/photo-1613670607871-7dbe134f9c17?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85" >
                        <img className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1613670607871-7dbe134f9c17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio
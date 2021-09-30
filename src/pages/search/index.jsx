import React from "react";

export default function Search() {

    return (
        <div className="bg-blue-600">
            <div className="mx-5 py-5 text-left">
                <h1 className="font-bold text-4xl text-white">Search</h1>
            </div>
            <div className="my-5 mx-5 flex">
                <input type="text" autoComplete="false" autoCorrect="false" className="text-white bg-transparent rounded-sm w-max flex-grow px-2 py-1 outline-none border-b-2 border-transparent focus:border-white transition-all ease-in-out duration-300 placeholder-gray-300" placeholder="Find your destination..." />
            </div>
            <div className="bg-white rounded-t-2xl py-5 px-5 pb-12">
                <div className="flex flex-col text-left">
                    <h2 className="font-bold text-2xl">Recommendations for you</h2>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}
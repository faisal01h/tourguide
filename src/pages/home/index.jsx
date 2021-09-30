import React from "react";
import { BsCheckCircle, BsInfoCircle, BsXCircle } from "react-icons/bs";

export default function Home() {

    return(
        <div className="text-left bg-blue-900 min-h-screen overflow-y-auto lg:pb-0" style={{scrollSnapType: 'y mandatory'}}>
            <div className="h-64 flex items-center text-left px-5 lg:px-20 text-white fixed lg:relative">
                <h1 className="text-4xl font-bold">Have a good night, Faisal!</h1>
            </div>
            <div className="" style={{scrollSnapAlign: 'center'}}></div>
            <div className="rounded-t-2xl bg-white px-5 lg:mx-20 lg:px-10 py-5 lg:py-10 flex flex-col space-y-5 top-64 lg:top-0 relative" style={{scrollSnapAlign: 'center'}}>
                <div className="w-8 h-1.5 bg-gray-300 rounded-full self-center">
                </div>
                <div className="rounded bg-red-500 text-white p-2 flex items-center space-x-2 shadow">
                    <BsXCircle className="flex-shrink-0" />
                    <p>Indonesia bans international tourist.</p>
                </div>
                <div className="rounded bg-yellow-400 text-white p-2 flex items-center space-x-2 shadow">
                    <BsInfoCircle className="flex-shrink-0" />
                    <p>Mount Sinabung erruption recorded at June 15th 18:20 local time.</p>
                </div>
                <div className="rounded bg-green-500 text-white p-2 flex items-center space-x-2 shadow">
                    <BsCheckCircle className="flex-shrink-0" />
                    <p>COVID-19 restriction is lax.</p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold">Explore Indonesia</h2>
                    <div className="flex flex-row space-x-2 overflow-x-auto h-32">

                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold">Emergency services</h2>
                    <div>
                        Police: 110 <br />
                        Ambulance: 112 <br />
                        Fire: 112
                    </div>
                </div>
            </div>
        </div>
    )
}
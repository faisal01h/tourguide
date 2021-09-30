import React from "react";

export default function Information() {

    return (
        <div className="text-left">
            <div className="bg-blue-600 text-white">
                <div className="mx-5 py-5 text-left">
                    <h1 className="font-bold text-4xl text-white">Tumpak Sewu</h1>
                </div>
                <div className="mb-5 mx-5 flex">
                    <p>Kab. Lumajang, Prov. Jawa Timur</p>
                </div>
                <div className="bg-white rounded-t-2xl py-5 px-5 pb-12 text-black flex flex-col space-y-5">
                    <div className="flex flex-col text-left">
                        <h2 className="font-bold text-2xl">Cultural informations</h2>
                        <div>
                            Majority religion: Islam <br />
                            Majority ethnicity: Javanese
                        </div>
                    </div>
                    <div className="flex flex-col text-left">
                        <h2 className="font-bold text-2xl">What's considered impolite?</h2>
                        <div>
                            -
                        </div>
                    </div>

                    <div className="flex flex-col text-left">
                        <h2 className="font-bold text-2xl">What's considered polite?</h2>
                        <div>
                            -
                        </div>
                    </div>

                    <div className="flex flex-col text-left">
                        <h2 className="font-bold text-2xl">Addictive substance acceptance</h2>
                        <div>
                            Sugar: Widely accepted <br />
                            Caffeine: Widely accepted <br />
                            Alcohol: <span className="text-yellow-600">Legal, but frowned upon</span> <br />
                            Marijuana: <span className="text-red-600">Illegal</span> <br />
                            Drugs: <span className="text-red-600">Illegal</span>
                        </div>
                    </div>

                    <div className="flex flex-col text-left">
                        <h2 className="font-bold text-2xl">Food acceptance</h2>
                        <div>
                            Pork: <span className="text-yellow-600">Legal, but frowned upon</span> <br />
                            Domesticated pets: <span className="text-red-600">Illegal</span> <br />
                            Crab: Widely accepted
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
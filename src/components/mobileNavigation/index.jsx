import React, { useEffect, useState } from "react";
import { BsHouse, BsInfoCircle, BsSearch, BsThreeDots } from 'react-icons/all'
import { Link } from "react-router-dom";

export default function MobileNavigation() {

    const [ openDrawer, setOpenDrawer ] = useState('home');
    const [ homeDrawerStyle, setHomeDrawerStyle ] = useState('');
    const [ searchDrawerStyle, setSearchDrawerStyle ] = useState('');
    const [ informationDrawerStyle, setInformationDrawerStyle ] = useState('');
    const [ settingsDrawerStyle, setSettingsDrawerStyle ] = useState('');

    function setDrawer(str) {
        setOpenDrawer(str);
    }

    useEffect(() => {
        openDrawer == 'home' ? setHomeDrawerStyle('bg-blue-600 text-white rounded-xl') : setHomeDrawerStyle('');
        openDrawer == 'search' ? setSearchDrawerStyle('bg-blue-600 text-white rounded-xl') : setSearchDrawerStyle('');
        openDrawer == 'information' ? setInformationDrawerStyle('bg-blue-600 text-white rounded-xl') : setInformationDrawerStyle('');
        openDrawer == 'settings' ? setSettingsDrawerStyle('bg-blue-600 text-white rounded-xl') : setSettingsDrawerStyle('');
    }, [openDrawer]);

    return (
        <div>
            <div className="lg:hidden h-16"></div>
            <div className="lg:hidden fixed bottom-0 h-16 w-screen bg-white" style={{boxShadow: '7px 7px 7px 7px rgba(0,0,0,.15)'}}>
                <div className="flex justify-around items-center py-5">
                    <Link className={"flex flex-col items-center px-4 py-1 "+homeDrawerStyle} to="/" onClick={e=>{setDrawer('home')}}>
                        <BsHouse />
                    </Link>
                    <Link className={"flex flex-col items-center px-4 py-1 "+searchDrawerStyle} to="/search" onClick={e=>{setDrawer('search')}}>
                        <BsSearch />
                    </Link>
                    <Link className={"flex flex-col items-center px-4 py-1 "+informationDrawerStyle} to="/information" onClick={e=>{setDrawer('information')}}>
                        <BsInfoCircle />
                    </Link>
                    <Link className={"flex flex-col items-center px-4 py-1 "+settingsDrawerStyle} to="/settings" onClick={e=>{setDrawer('settings')}}>
                        <BsThreeDots />
                    </Link>
                </div>
            </div>
        </div>
    )
}
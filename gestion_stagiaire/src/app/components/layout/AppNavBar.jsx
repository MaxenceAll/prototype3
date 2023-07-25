import {
    AdjustmentsVerticalIcon,
    ArrowLeftOnRectangleIcon,
    BellIcon,
    UserIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import DefaultAvatar from '../../assets/images/default-avatar.png';
import { logout } from '../../store/accountSlice';
import DarkmodeSlider from '../settings/DarkmodeSlider';
import { URL_PROFILE } from './../../constants/url/urlFront';
import NavDropDown from './../lib/container/NavDropDown';
import Searchbar from './../lib/container/table/Searchbar';

/**
 * AppNavBar component: navbar for the dashboard
 *
 * @author Peter Mollet
 */
const AppNavBar = () => {
    return (
        <nav className="absolute z-40 flex h-16 w-full items-center space-x-4 bg-white px-5 shadow dark:bg-gray-800">
            <div className="hidden flex-1 md:flex">
                <Searchbar onSearch={(values) => console.log(values)} />
            </div>

            <div className="flex-1 md:flex-none" />

            <DarkmodeSlider />

            <NotificationIcon />

            <ProfileIcon />
        </nav>
    );
};

export default AppNavBar;

const NotificationIcon = () => {
    const [hasNotification] = useState(true);

    return (
        <Link to="!#" className="relative text-gray-500 hover:text-gray-800">
            {hasNotification && (
                <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-600" />
            )}
            <BellIcon className="h-6 w-6" />
        </Link>
    );
};

const ProfileIcon = () => {
    const dispatch = useDispatch();
    const items = [
        {
            name: 'Profile',
            icon: UserIcon,
            to: URL_PROFILE,
        },
        {
            name: 'Settings',
            icon: AdjustmentsVerticalIcon,
            to: '/settings',
        },
        {
            name: 'Logout',
            icon: ArrowLeftOnRectangleIcon,
            onClick: () => dispatch(logout()),
        },
    ];

    return (
        <NavDropDown items={items}>
            <img className="h-8 w-8 rounded-full" src={DefaultAvatar} alt="" />
            <span className="ml-3 mr-1 font-medium">John Doe</span>
            <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
        </NavDropDown>
    );
};

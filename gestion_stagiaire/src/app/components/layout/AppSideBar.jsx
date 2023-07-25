import {
    ChartBarIcon,
    ChatBubbleLeftEllipsisIcon,
    ChevronLeftIcon,
    IdentificationIcon,
    UsersIcon,
} from '@heroicons/react/24/outline';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import {
    URL_APP,
    URL_INTERNS,
    URL_PROFILE,
    URL_TEAMS,
} from '../../constants/url/urlFront';

const MENUS = [
    { title: 'Dashboard', icon: ChartBarIcon, path: URL_APP },
    { title: 'Teams', icon: ChatBubbleLeftEllipsisIcon, gap: true, path: URL_TEAMS },
    { title: 'Stagiaires', icon: UsersIcon, path: URL_INTERNS },
    { title: 'Profil', icon: IdentificationIcon, path: URL_PROFILE },
];

/**
 * SideBar component: sidebar for the app page.
 *
 * @param {Boolean} open: if the sidebar is open or not.
 * @param {Function} setOpen: function to set the open state.
 * @author Peter Mollet
 */
const AppSidebar = ({ open, setOpen }) => {
    return (
        <aside
            className={`fixed left-0 top-0 z-50 h-screen w-20 bg-primary-dark pl-5 duration-300
            ${open ? 'md:w-72' : 'md:w-20'}`}
        >
            <ChevronLeftIcon
                className={`absolute -right-3 top-7 z-50 hidden w-7 cursor-pointer
                    rounded-full border-2 border-primary-dark bg-white duration-200
                    md:inline-flex
                    ${!open && 'rotate-180'}
                `}
                onClick={() => setOpen(!open)}
            />

            <div
                className={`absolute top-0 flex w-10 items-center bg-primary-dark py-5 duration-300
                ${open ? 'md:w-64' : 'md:w-10'}`}
            >
                <Link to={URL_APP} className="flex items-center gap-x-4">
                    <img
                        src={logo}
                        alt=""
                        className={`w-10 duration-500 
                        ${open && 'rotate-[360deg'}`}
                    />
                    <h1
                        className={`origin-left scale-0 text-xl font-medium text-white duration-300
                        ${open ? 'md:scale-100' : 'md:scale-0'}`}
                    >
                        INSY2S
                    </h1>
                </Link>
            </div>

            <ul
                className="mt-20 flex h-full flex-col overflow-x-hidden pb-28 pr-6 scrollbar-thin
                scrollbar-track-primary-light scrollbar-thumb-primary-dark scrollbar-track-rounded-md scrollbar-thumb-rounded-md"
            >
                {MENUS.map((menu, index) => {
                    const Icon = menu.icon;
                    return (
                        <li key={index} className={menu.gap ? 'mt-5' : 'mt-2'}>
                            <NavLink
                                to={menu.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-x-4 rounded-md p-2 text-sm 
                                    text-gray-100 hover:bg-primary-light 
                                    ${isActive && 'bg-primary-light'}`
                                }
                                end
                            >
                                <Icon className="w-5" />
                                <span
                                    className={`hidden origin-left
                                    ${open ? 'md:inline-flex' : 'md:hidden'}`}
                                >
                                    {menu.title}
                                </span>
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
};

export default AppSidebar;

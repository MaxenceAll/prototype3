import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import withAuth from './../../common/withAuth';
import AppNavBar from './AppNavBar';
import AppSidebar from './AppSideBar';

/**
 * LayoutApp component: layout for the dashboard application, with a navbar and a sidebar.
 *
 * @author Peter Mollet
 */
const LayoutApp = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="min-h-full overflow-hidden">
            <AppSidebar open={open} setOpen={setOpen} />
            <main
                className={`-z-50 ml-[5rem] h-full overflow-hidden duration-300 ease-in-out
                ${open ? 'md:ml-[18rem]' : 'md:ml-[5rem]'}`}
            >
                <div className="relative">
                    <AppNavBar />
                    <div
                        className="flex h-screen flex-col overflow-y-auto
                        scrollbar-thin scrollbar-track-primary-light scrollbar-thumb-primary-dark"
                    >
                        <div className="mt-16 p-5">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default withAuth(LayoutApp);

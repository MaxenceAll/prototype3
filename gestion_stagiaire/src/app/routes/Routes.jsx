import { lazy, Suspense } from 'react';
import { Route, Routes as RouteContainer } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import Loader from '../components/lib/utils/Loader';


import * as URL from '../constants/url/urlFront';


const Home = lazy(() => import('../pages/no-auth/Home'));
const Login = lazy(() => import('../pages/no-auth/Login'));

const Managers = lazy(() => import   ('../pages/auth/Managers'));
const Interns = lazy(() => import ('../pages/auth/Interns'));
const Teams = lazy(() => import ('../pages/auth/Teams'));
const Reviews = lazy(() => import ('../pages/auth/Reviews'));
const Daylies = lazy(() => import ('../pages/auth/Daylies'));
const Testor = lazy(() => import ('../pages/tests/testor'));

const ErrorPage = lazy(() => import('../pages/no-auth/ErrorPage'));
const NotFoundPage = lazy(() => import('../pages/no-auth/NotFoundPage'));

const Routes = () => {
    return (
        <RouteContainer>
            <Route path= {URL.URL_HOME} element={<MainLayout />} errorElement={<ErrorPage />}>
                <Route index element={<SuspenseComponent component={Home} />} />
                <Route path={URL.URL_LOGIN} element={<SuspenseComponent component={Login} />} />
                <Route path={URL.URL_MANAGERS} element={<SuspenseComponent component={Managers} />} />
                <Route path={URL.URL_INTERN} element={<SuspenseComponent component={Interns} />} />
                <Route path={URL.URL_TEAMS} element={<SuspenseComponent component={Teams} />} />
                <Route path={URL.URL_REVIEWS} element={<SuspenseComponent component={Reviews} />} />
                <Route path={URL.URL_DAYLIES} element={<SuspenseComponent component={Daylies} />} />
                <Route path={URL.URL_TEST} element={<SuspenseComponent component={Testor} />} />
            </Route>
            <Route path="*" element={<SuspenseComponent component={NotFoundPage} />} />
        </RouteContainer>
    );
};

export default Routes;

const SuspenseComponent = ({ component: Component, ...rest }) => (
    <Suspense fallback={<Loader />}>
        <Component {...rest} />
    </Suspense>
);
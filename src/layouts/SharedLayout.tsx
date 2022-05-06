import { Outlet } from 'react-router-dom';
import TheHeader from "../components/TheHeader/TheHeader";

function SharedLayout(): JSX.Element {
    return (
        <>
            <TheHeader />
            <section className='section'>
                <Outlet />
            </section>
        </>
    )
}
export default SharedLayout;

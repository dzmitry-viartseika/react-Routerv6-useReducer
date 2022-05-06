import { Link } from 'react-router-dom';

function TheHeader(): JSX.Element {
    return (
        <nav className='navbar'>
            <Link to='/'>Home</Link>
            <Link to='/users'>Users</Link>
            <Link to='/posts'>Posts</Link>
        </nav>
    )
}
export default TheHeader;

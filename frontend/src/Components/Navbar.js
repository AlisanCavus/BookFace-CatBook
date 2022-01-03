import {Link} from 'react-router-dom'


function Navbar() {
    return (
        <div>
            <ul>
                <li> <Link to="/"> Home </Link></li>
                <li> <Link to="/Login"> Login </Link></li>
                <li> <Link to="/Profile"> Profile </Link></li>
            </ul>
        </div>
    )
}

export default Navbar

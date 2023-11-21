
import { Navbar } from 'flowbite-react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useGetTeamsQuery } from '../../redux/features/team/teamApi';
export default function NavigationBar() {
    // const dispatch = useDispatch();
    const { data } = useGetTeamsQuery();
    // console.log(data?.data);

    return (
        <Navbar
            fluid
            rounded
        >
            <Navbar.Brand href="/">
                <div className="logo max-h-20">
                    {/* <img
                    alt="Books Logo"
                    className="mr-0  h-20 "
                    src={logo}
                /> */}
                </div>
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ">
                    Heliverse
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Navbar.Toggle />
            </div>

            <Navbar.Collapse>
                <NavLink
                    to="/" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    <p>
                        Home
                    </p>
                </NavLink>
                <NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                } to={'/team-details'}>
                    Team details
                </NavLink>
            </Navbar.Collapse>
        </Navbar >
    );
}



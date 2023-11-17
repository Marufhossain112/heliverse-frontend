
import { Navbar, TextInput } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/features/user/userSlice';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
export default function NavigationBar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const [publicationYearValue, setPubli] = useState('');
    const isLoggedIn = useSelector((state) => state.persistedReducer.isLoggedIn);
    // const isFilterGenrePublication = useAppSelector((state) => state.searchAndFilter.isFilterGenrePublication);
    const handleLogOut = () => {
        localStorage.removeItem("userToken");
        dispatch(logout());
        toast.success('Log out successfully');
    };


    // useFilterBooksByGenrePublicationYearQuery()
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
                    Insta Clone
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
          
                {<>
                    {isLoggedIn ? (
                        <> <NavLink to={'/create'} className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>Create</NavLink>
                            <NavLink to={'/signin'} onClick={handleLogOut}>Sign Out</NavLink></>
                    ) : (
                        <NavLink to="/signin">Sign in</NavLink>
                    )}
                </>}

                <NavLink to="/signup" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>
                    Sign Up
                </NavLink>
            </Navbar.Collapse>
        </Navbar >
    );
}




import { Navbar, TextInput } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
export default function NavigationBar() {
    const dispatch = useDispatch();
    return (
        <Navbar
            fluid
            rounded
        >
            <Navbar.Brand href="/">
                <div className="logo max-h-20">
                </div>
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ">
                    Heliverse
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Navbar.Toggle />
            </div>
        </Navbar >
    );
}



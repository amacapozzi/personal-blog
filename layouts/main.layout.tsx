import Navbar from "components/Navbar";

export default function MainLayout({ children }): JSX.Element {
    return (
        <header>
            <Navbar/>
            {children}
        </header>
    )
}

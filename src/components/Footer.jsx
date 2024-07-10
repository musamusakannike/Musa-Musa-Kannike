import { useEffect, useState } from "react";

function Footer() {
    const [navLinks, setNavLinks] = useState([])

    useEffect(() => {
        fetch('navlinks.json')
        .then(res => res.json())
        .then(data => setNavLinks(data))
    }, [])

    return ( 
        <footer className="container-fluid text-center pt-4">
            <h2 className="display-5 fw-bolder color-orange">Musa Musa Kannike</h2>

            <nav>
                <ul className="my-2 list-unstyled d-flex justify-content-center" style={{flexWrap: 'wrap'}}>
                    {navLinks.map((navLink, index) => (
                        <li key={index}><a href={navLink.destination} className="mx-1 text-decoration-none text-dark">{navLink.title}</a></li>
                    ))}
                </ul>
            </nav>
            <div className="text-center mt-5">
                <p>&copy; Copyright Musa Musa Kannike </p>
            </div>
        </footer>
     );
}

export default Footer;
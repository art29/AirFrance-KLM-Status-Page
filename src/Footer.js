const Footer = () => {
    return (
        <div className="container">
            <footer className="py-5">
                <div className="d-flex justify-content-between py-4 my-4 border-top">
                    <div>
                        <p>&copy; {new Date().getFullYear()} Arthur Fétiveau. Licensed under GNU General Public License v3.0.
                            <br/>
                            For source code, you can check out the <a href="https://github.com/art29/airfrance-klm-status-page">GitHub</a>!
                        </p>
                    </div>
                    <ul className="list-unstyled d-flex">
                        <li>For any questions, you can contact me at flightstatus[@]afetiveau[dot]com</li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
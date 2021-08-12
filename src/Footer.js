const Footer = () => {
    return (
        <div className="container">
            <footer className="py-5">
                <div className="d-flex justify-content-between py-4 my-4 border-top">
                    <p>&copy; {new Date().getFullYear()} Arthur Fétiveau. All logos and data coming from other companies are owned by their official owner.</p>
                    <ul className="list-unstyled d-flex">
                        <li>For any questions, you can contact me at flightstatus[@]afetiveau[dot]com</li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer
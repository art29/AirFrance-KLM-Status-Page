import React from "react";

const About = () => {
    return (
        <div className="px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold">About AirFrance/KLM Status Page</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">To link both of my passions (aviation and coding), I decided to create this
                    website to be able to access more information about Air France and KLM flights. This website gives information more information about the flights than the status pages made by the company themselves (You can see the parking position for the aircraft, sometimes the registration of the aircraft or the reason for a delay and more!)</p>
                <p className="lead mb-4">The website uses the <a target="_blank" href="https://docs.airfranceklm.com/">AF/KLM API</a> for the data, JS/React to display the information and GitHub Pages to host the site. The code is hosted on GitHub so you can make improvements to website or even create your own version of it! The only thing that you will need to get is the AF/KLM API KEY that you can get from their website.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <a type="button" href="https://github.com/art29/airfrance-klm-status-page"
                       className="btn btn-primary btn-lg px-4 gap-3" target="_blank">GitHub</a>
                </div>
            </div>
        </div>
    );
};

export default About;
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>About Us</h5>
                        <p>We are passionate about movies and providing you with the best search experience.</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <address>
                            <p>123 Movie Lane,</p>
                            <p>Los Angeles, CA 90001</p>
                            <p>Email: info@moviesearch.com</p>
                        </address>
                    </div>
                </div>
                <hr />
                <p className="text-muted text-center">&copy; 2024 MovieSearch. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

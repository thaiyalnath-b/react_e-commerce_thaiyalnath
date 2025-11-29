import React from 'react'
import "./Footer.css";

function Footer() {
    return (
        <footer>
            {/* Footer */}
            <div className="container-fluid">
                {/* Website Links */}
                <div className="row">
                    <div className="col ms-5 ps-5">
                        <p
                            style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                fontFamily: "'Times New Roman', Times, serif",
                            }}
                        ><span className='me-2'>
                                <img src="/sollu.ico" alt="" width="30px" />
                            </span>
                            Shop in a Flash, Save in a Dash.
                        </p>
                    </div>

                    <div className="col">
                        <span>SHOP</span>
                        <a href="#">New Arrivals</a>
                        <a href="#">Collections</a>
                        <a href="#">Accessories</a>
                        <a href="#">Shoes</a>
                    </div>

                    <div className="col">
                        <span>SUPPORT</span>
                        <a href="#">Contact Us</a>
                        <a href="#">Account</a>
                        <a href="#">Shipping and Delivery</a>
                        <a href="#">Returns</a>
                    </div>

                    <div className="col">
                        <span>INFO</span>
                        <a href="#">About</a>
                        <a href="#">Career</a>
                        <a href="#">Sustainability</a>
                        <a href="#">Investor Relations</a>
                        <a href="#">Press</a>
                    </div>

                </div>
            </div>

            <div>
                <hr />
            </div>

            {/* Other Links */}
            <div className="link">
                <a href="https://www.facebook.com/"><i className="bi bi-facebook" /></a>
                <a href="https://x.com/"><i className="bi bi-twitter" /></a>
                <a href="https://www.whatsapp.com/"><i className="bi bi-whatsapp" /></a>
                <a href="https://www.instagram.com/"><i className="bi bi-instagram" /></a>
                <a href="https://www.youtube.com/"><i className="bi bi-youtube" /></a>
            </div>

            {/* Copyright */}
            <div className="cpy">
                <span className="rights">Terms &amp; Condition</span>
                <span className="rights">© 2025 FlashCart. All rights reserved.</span>
                <span className="rights">Privacy Policy</span>
            </div>
        </footer>

    )
}

export default Footer
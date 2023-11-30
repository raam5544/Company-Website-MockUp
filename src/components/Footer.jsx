import React from 'react'
import '../App.css'


function Footer() {
    return (
        <div id='footerParent'>
            <div id='footer1Div'>
                <div className='footer1Div1Ele'>
                    <img id='footImg' src='https://assets.lego.com/logos/v4.5.0/brand-lego.svg' />
                    <div id='footerLoc'>United States</div>
                    <h4>Gift Cards</h4>
                    <p className='h4child'>LEGO Catalogs</p>
                    <p className='h4child'>Find a Lego Store</p>
                </div>
                <div className='footer1Div1Ele'>
                    <h4>ABOUT US</h4>
                    <p>About the LEGO Group</p>
                    <p>LEGO News</p>
                    <p>Sustainability</p>
                    <p>Supply Chain<br></br>Transparency Statement</p>
                    <p>LEGO Product<br></br>Certification</p>
                    <p>LEGO Jobs</p>
                    <p>LEGO Compliance Line</p>
                </div>
                <div className='footer1Div1Ele'>
                    <h4>SUPPORT</h4>
                    <p>Contact Us</p>
                    <p>Find Building<br></br>Instructions</p>
                    <p>Replacement of Parts</p>
                    <p>Shipping and Returns</p>
                    <p>Payment Methods</p>
                    <p>terms & Conditions</p>
                    <p>Product Recalls</p>
                </div>
                <div className='footer1Div1Ele'>
                    <h4>ATTRACTIONS</h4>
                    <p>LEGO House</p>
                    <p>LEGOLAND Parks</p>
                    <p>LEGOLAND Discovery<br></br>Centers</p>
                </div>
                <div className='footer1Div1Ele'>
                    <h4>MORE FROM US</h4>
                    <p>LEGO Life</p>
                    <p>LEGO Education</p>
                    <p>LEGO Ideas</p>
                    <p>LEGO Foundation</p>
                    <p>Affiliate Program</p>
                    <p>Student Offers</p>
                    <p>Parent Offers</p>
                    <p>LEGO Braille Bricks</p>
                </div>
            </div>
            <div id='footer1Div2ele'>
                <div>
                    <div>SUBSCRIBE TO LEGO® SHOP EMAILS</div>
                    <div>
                        <input id='footerInput'></input>
                        <button id='footerButt'>></button>
                    </div>
                </div>
                <div id='followUsDiv'>
                    <div>FOLLOW US</div>
                    <div id='footerFolLogosCont'>
                        <img className='footFolLogo' src="https://www.lego.com/service/_build/_next/static/images/facebook-895fba5a20c4facacb9655dade1d256c.svg" alt="" />
                        <img className='footFolLogo' src="https://www.lego.com/service/_build/_next/static/images/twitter-4bee8e762dd6042960b804964fd64103.svg" alt="" />
                        <img className='footFolLogo' src="https://www.lego.com/service/_build/_next/static/images/instagram-e47f0d4b15ff76083b415be91e96f43b.svg" alt="" />
                        <img className='footFolLogo' src="https://www.lego.com/service/_build/_next/static/images/youtube-c51b2c62583921aae813fdc55df5f9d2.svg" alt="" />
                    </div>
                </div>
            </div>
            <div id='footer2Div'>
                <div id='footer2Div1ele'>
                    <a>Privacy Policy</a>
                    <a>Cookies</a>
                    <a>Legal Notice</a>
                    <a>Term of Use</a>
                    <a>Digital Well Being</a>
                    <a>Accessibility</a>
                    <a>Cookie Settings</a>
                    <a>Privacy Settings for residents of CA, VA, CT and CO</a>
                </div>
                <div id='footerPara'>LEGO System A/S, DK-7190 Billund, Denmark. Must be 18 years or older to purchase online. LEGO and the LEGO logo are trademarks of the LEGO Group. ©2023 The LEGO Group. All rights reserved. Use of this site signifies<br></br>your agreement to the terms of use.</div>
            </div>
        </div>
    )
}

export default Footer
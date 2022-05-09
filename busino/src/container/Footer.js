import React from 'react';
import Footer from '../components/footer/FooterIndex'

export function FooterContainer() {
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Title>Service</Footer.Title>
                    <Footer.Link href="#">Market Research</Footer.Link>
                    <Footer.Link href="#">SEO Optimization</Footer.Link>
                    <Footer.Link href="#">Amazing Strategy</Footer.Link>
                    <Footer.Link href="#">Financial Planning</Footer.Link>
                    <Footer.Link href="#">Project Analysis</Footer.Link>
                    <Footer.Link href="#">PR & Marketing</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Information</Footer.Title>
                    <Footer.Link href="#">About us</Footer.Link>
                    <Footer.Link href="#">Portfolio</Footer.Link>
                    <Footer.Link href="#">Login/Register</Footer.Link>
                    <Footer.Link href="#">Terms & Conditions</Footer.Link>
                    <Footer.Link href="#">Our Blog</Footer.Link>
                    <Footer.Link href="#">Promotions</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Service</Footer.Title>
                    <Footer.Link > 256 Central Park,East Town Soth valley, New York</Footer.Link>
                    <Footer.Link href="#">+12345 687 856</Footer.Link>
                    <Footer.Link href="#">+98745 612 324</Footer.Link>
                    <Footer.Link href="#">www.example.com</Footer.Link>
                    <Footer.Link href="#">info@example.com</Footer.Link>
                </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>

        </Footer>
    );
}

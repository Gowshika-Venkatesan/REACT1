import React from 'react';
import Footer from '../components/footer/FooterIndex'
import './Footer.css'
import { Form, Input,  Button } from 'antd';

export function FooterContainer() {
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    /* eslint-disable no-template-curly-in-string */

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',

        },

    };
    /* eslint-enable no-template-curly-in-string */
        const onFinish = (values) => {
            console.log(values);
        };
        return (
            <Footer>
                <Footer.Wrapper>
                    <Footer.Row>
                       <div className="content">
                           <img className="img" src="./logo.png" alt="logo"/>
                          <div className="content1">Best is the most porro quisqudolor em are<br/> quis quam est, qui
                            doquia dolor sit amcons
                          </div><div className="log1">
                            Subscribe our newsletter and get latest<br/> update about our offers, promotions
                          </div>

                        <div >
                          <Form {...layout} name="nest-messages" onFinish={onFinish}
                              validateMessages={validateMessages}>
                            <Form.Item
                                name={['email']}
                                rules={[
                                    {
                                        type: 'email',
                                    },
                                ]}
                            >
                                <Input
                                    className="form1"
                                    placeholder="Enter your Email"/>
                            </Form.Item>
                            <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
                                <Button className="button" type="primary" href='/' htmlType="submit">
                                    Subscribe
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                    <div className="icon">
                        <a href='/' > <i  className="fa-brands fa-facebook-f"></i></a>
                        <a href='/' ><i className="fa-brands fa-twitter"></i></a>
                        <a href='/' ><i className="fa-brands fa-instagram"></i></a>
                        <a href='/' > <i className="fa-brands fa-google-plus-g"></i></a>
                      </div>
                       </div>
                        <Footer.Column>
                        </Footer.Column>
                        <Footer.Column>
                                <Footer.Title>Service</Footer.Title>
                            <a href="#"><Footer.Link href="#">Market Research</Footer.Link></a>
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
                                <Footer.Link> 256 Central Park,East Town South valley, New York</Footer.Link>
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


import React, { Component } from 'react'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Jumbotron,
    Button,
    Media,
    Container,
    Row,
    Col,
} from 'reactstrap'
import ContactForm from './ContactUs'
import tucsonImage from '../images/tucson.jpg'
import tucsonSunsetImage from '../images/tucsonSunset.png'
import aLittleMurderInTucson from '../images/aLittleMurderInTucson.jpg'
import terrorInTucson from '../images/terrorInTucson.jpg'
import missingForeverInTucson from '../images/missingForeverInTucson.jpg'
import detective from '../font/Detective.ttf'

let imgStyle = {
    maxHeight: '256px',
    maxWidth: '256px',
}

class BrandBar extends Component {
    constructor(props) {
        super(props)

        this.toggle = this.toggle.bind(this)
        this.state = {
            isOpen: false,
            navCollapsed: true,
            showNavbar: false,
        }
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }
    render() {
        const { navCollapsed } = this.state
        return (
            <div style={{ backgroundColor: '#030303' }}>
                <Navbar
                    sticky
                    mx-auto
                    style={{ backgroundColor: '#030303' }}
                    dark
                    expand="lg"
                >
                    <NavbarBrand className="mx-auto" href="/">
                        The Official Website of John Maley
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar dark>
                            <NavItem dark>
                                <NavLink href="#about">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#books">Books</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/books/">Contact</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/books/">Tucson</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>

                <Jumbotron
                    style={{
                        backgroundImage: `url(${tucsonImage})`,
                        backgroundSize: 'cover',
                        width: '100%',
                    }}
                >
                    <h1 className="lead">
                        Welcome to the website of John Maley, author of the Jake
                        Hunter Novels
                    </h1>
                    <p className="lead"></p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </Jumbotron>

                <Container id="books">
                    <h2 className="test">Novels</h2>
                    <Row>
                        <Col>
                            <Media>
                                <Media
                                    left
                                    top
                                    href="https://www.amazon.com/gp/product/B0793TKWPS/ref=dbs_a_def_rwt_bibl_vppi_i0"
                                >
                                    <Media
                                        style={imgStyle}
                                        object
                                        src={aLittleMurderInTucson}
                                        data-src="holder.js/64x64"
                                        alt="Generic placeholder image"
                                    />
                                </Media>
                                <Media body>
                                    <Media heading>
                                        A Little Murder In Tucson
                                    </Media>
                                    Jake Hunter has a case of a lifetime. Two
                                    beautiful women missing. The arms of one are
                                    found. The investigation takes many twists
                                    and turns leading to a startling conclusion.
                                    An exciting story from an author who has
                                    lived related events.
                                </Media>
                            </Media>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <Row>
                        <Col xs="auto">
                            <Media>
                                <Media className="mt-1">
                                    <Media
                                        left
                                        middle
                                        href="https://www.amazon.com/gp/product/1948738457/ref=dbs_a_def_rwt_bibl_vppi_i1"
                                    >
                                        <Media
                                            style={imgStyle}
                                            object
                                            src={missingForeverInTucson}
                                            data-src="holder.js/64x64"
                                            alt="Generic placeholder image"
                                        />
                                    </Media>
                                    <Media body>
                                        <Media heading>
                                            Missing Forever in Tucson
                                        </Media>
                                        Nothing is worse than failure. Jake
                                        Hunter, private investigator, was hired
                                        to find a missing girl twenty years ago.
                                        Jake’s failure to find the girl has
                                        haunted him ever since. Now here he is
                                        again on the case, and this time he has
                                        a brilliant partner, Kathy. They are on
                                        the hunt of a lifetime. They cant give
                                        up the search because giving up means
                                        death. The big question is, Can they
                                        unravel the mystery and still survive?
                                    </Media>
                                </Media>
                            </Media>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <Row>
                        <Col>
                            <Media>
                                <Media className="mt-1">
                                    <Media
                                        left
                                        bottom
                                        href="https://www.amazon.com/gp/product/1948738449/ref=dbs_a_def_rwt_bibl_vppi_i2"
                                    >
                                        <Media
                                            style={imgStyle}
                                            object
                                            src={terrorInTucson}
                                            data-src="holder.js/64x64"
                                            alt="Generic placeholder image"
                                        />
                                    </Media>
                                    <Media body>
                                        <Media heading>Terror in Tucson</Media>
                                        Author John Maley is now on his third
                                        installment so you better continue to
                                        spot on clues that were left out as you
                                        unravel the truth underneath.
                                    </Media>
                                </Media>
                            </Media>
                        </Col>
                    </Row>
                </Container>
                <br />
                <br />
                <br />
                <Container id="about">
                    <h2 className="test">About the Author</h2>
                    <Row>
                        <Col>
                            <p>
                                John Maley has been a soldier, a peace officer,
                                a corrections officer, a probation officer, and
                                he has worked as a private investigator in
                                Colorado, Hawaii, and Arizona. John has four
                                college degrees. He has a wife and two children.
                                His oldest son is a doctor and his youngest son
                                is a First Lieutenant in the United States Army.
                                John's wife, Teresa, is a Lieutenant Colonel in
                                the Army Reserve and a Nurse Manager at the
                                Southern Arizona VA Health Care System. John has
                                taught high school and college, teaching history
                                and criminal justice. He currently lives in
                                Tucson, Arizona.{' '}
                            </p>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <ContactForm />
                </Container>
            </div>
        )
    }
}
export default BrandBar

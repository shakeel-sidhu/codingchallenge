import React from 'react'
import styles from './Header.module.css'
import Vector from '../../assests/images/Vector.png'
import headLogo from '../../assests/images/logo.png'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Card from '../../UI/Card/Card'

const Header = () => {
    return (
        <>
            <header className={styles.HeaderText}>
                <Card>
                    <div className={styles.HeaderMain}>
                        <Navbar expand="lg" bg='#000' variant='transparent' >
                            <Container className={styles.HeaderContainer}>
                                <Navbar.Brand className={styles.navbrand}>

                                    <LinkContainer to="/">
                                        <Nav.Link><img src={headLogo} /></Nav.Link>
                                    </LinkContainer>

                                </Navbar.Brand>
                                <Navbar.Toggle className="tog" aria-controls="basic-navbar-nav" >
                                    <img src={Vector} />
                                </Navbar.Toggle>

                                <Navbar.Collapse id="basic-navbar-nav" className={styles.NavbarColapse} >


                                    <Nav className="me-auto">

                                        <div className={styles['nav-link']}>
                                            <LinkContainer to="/">
                                                <Nav.Link>Movies</Nav.Link>

                                            </LinkContainer>
                                        </div>
                                        <div className={styles['nav-link']}>
                                            <LinkContainer to="/">
                                                <Nav.Link>TV Shows</Nav.Link>
                                            </LinkContainer>
                                        </div>
                                        <div className={styles['nav-link']}>
                                            <LinkContainer to="/">
                                                <Nav.Link>Urdu</Nav.Link>

                                            </LinkContainer>
                                        </div>
                                        
                                            <div className={styles['nav-link']}>
                                                <LinkContainer to="/">
                                                    <Nav.Link href="">YUPPFLIX</Nav.Link>

                                                </LinkContainer>
                                            </div>
                                            <div className={styles['nav-link']}>
                                                <LinkContainer to="/">
                                                    <Nav.Link>Kids</Nav.Link>

                                                </LinkContainer>
                                            </div>

                                      


                                    </Nav>
                                    <div className={styles.HeadBtn}>
                                    <div className={styles['head-nav-contact-1']}>
                                    <LinkContainer to="/">
                                        <Nav.Link>
                                            Log in
                                        </Nav.Link>
                                        </LinkContainer>
                                    </div>
                                    <div className={styles['head-nav-contact']}>
                                    <LinkContainer to="/">
                                        <Nav.Link>
                                            Sign up
                                        </Nav.Link>
                                        </LinkContainer>
                                    </div>
                                    </div>
                                </Navbar.Collapse>


                            </Container>
                        </Navbar>

                    </div>
                </Card>
            </header>
        </>
    )

}
export default Header
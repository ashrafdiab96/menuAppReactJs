import React, { useState } from 'react'
import { Container, Navbar, Form, Nav, Row } from 'react-bootstrap';

const NavBar = ({ filterBySearch }) => {
    const [searchVal, setSearchVal] = useState('');
    
    const onSearch = () => {
        filterBySearch(searchVal);
        setSearchVal('');
    };

    return (
        <Row className='w-100 m-auto'>
             <Navbar bg="dark" expand="lg" variant='dark'>
                <Container>
                    <Navbar.Brand href="#">
                        <div className='brand-color'>مطعم</div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="text"
                            placeholder="بحث"
                            className="mx-2"
                            onChange={e => setSearchVal(e.target.value)}
                            value={searchVal}
                        />
                        <button type='button' onClick={onSearch} className='btn-search'>أبحث</button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Row>
    );
}

export default NavBar;

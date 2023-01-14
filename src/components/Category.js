import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Roll from 'react-reveal/Roll';

const Category = ({ allCategories, filterByCategory }) => {
    const onFilter = (cat) => {
        filterByCategory(cat);
    }

    return (
        <Row className='my-2 mb-5'>
            <Col md={12} className='d-flex justify-content-center'>
                <Roll>
                    {
                        allCategories.length ? (
                            allCategories.map((cat) => {
                                return (
                                    <div key={Math.random()}>
                                        <button
                                            onClick={() => {onFilter(cat)}}
                                            className='btn mx-2'
                                            key={Math.random()}
                                        >
                                            {cat}
                                        </button>
                                    </div>
                                );
                            })
                        ) : <h2 className='text-center p-5'>لا توجد بيانات</h2>
                    }
                </Roll>
            </Col>
        </Row>
    );
}

export default Category;

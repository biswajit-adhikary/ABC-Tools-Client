import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import Tool from '../Tool/Tool';
import './Tools.css';

const Tools = () => {
    const { data: tools, isLoading } = useQuery('toolsData', () =>
        fetch('http://localhost:5000/tools').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading />
    }

    return (
        <section className='tools-area'>
            <Container>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <div className="section-heading text-center mb-5">
                            <h3>Tools We Made</h3>
                            <p>We made the tools specially for construction companies and they are very happy and 100% satisfied to use it.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {
                        tools.map(tool => <Tool
                            key={tool._id}
                            tool={tool}
                        ></Tool>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Tools;
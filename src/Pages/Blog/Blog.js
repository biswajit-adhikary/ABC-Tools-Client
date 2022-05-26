import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Blog.css';
import blogOne from '../../Images/one.jpg';
import blogTwo from '../../Images/two.jpg';
import blogThree from '../../Images/three.jpg';
import blogFour from '../../Images/four.jpg';
import blogFive from '../../Images/five.jpg';
import blogSix from '../../Images/six.jpg';

const Blog = () => {
    return (
        <section className='blog-area'>
            <Container>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <div className="section-heading text-center mb-5">
                            <h3>Our Blogs</h3>
                            <p>Read Our latest blog and learn more about ABS Tools and our new tools and technologies in the industry.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <div className="single-blog">
                            <img src={blogOne} alt="" />
                            <div className="blog-text p-3">
                                <h2>How will you improve the performance of a React Application?</h2>
                                <p>There are many ways to improve react app performance. Using immutable data structure is the best way to improve react application performance.  Dependency optimization is a very good way to improve react app performance. Use fragments for HTML element rappers is a very good way. We should avoid index number for key map. Also need to avoid props in initial state. </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="single-blog">
                            <img src={blogTwo} alt="" />
                            <div className="blog-text p-3">
                                <h2>What are the different ways to manage a state in a React application?</h2>
                                <p>There are 4 way to manage react app state. They are Local state, Global state, Server state, URL state. Local state is a UI State. It manage use useState hook. Global state also UI state. Using global state we can manage multiple components easily. For external server date we use Server State. Data that exists on our URLs called URL state.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="single-blog">
                            <img src={blogThree} alt="" />
                            <div className="blog-text p-3">
                                <h2>How does prototypical inheritance work?</h2>
                                <p>Prototypal Inheritance is ES6 a feature in javascript. Prototypical inheritance use for add methods and properties in objects. It makes easy to sharing a function, data value etc. JavaScript is a prototype-capable languages and prototypical inheritance make this language more powerful. It will save your hours of coding.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="single-blog">
                            <img src={blogFour} alt="" />
                            <div className="blog-text p-3">
                                <h2>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                                <p>In React we should not update the state directly. The main reason we don't use products = [...] instead because it will lost controls of the state for all components. If we set it directly , it will replace the updates you made every state. It will not change the state, but update it directly. It will return the present value only.</p>
                            </div>
                        </div>
                    </Col>
                    {/* <Col lg={4}>
                        <div className="single-blog">
                            <img src={blogFive} alt="" />
                            <div className="blog-text p-3">
                                <h2>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore libero nostrum expedita totam maiores, veritatis non omnis porro cumque sit vel numquam nobis. Ut laboriosam qui eligendi odit! Veniam consequatur ipsa porro iusto dolorum vero fugit ex nam aperiam, similique repellat esse perferendis delectus, dolores et culpa totam, animi obcaecati nostrum quibusdam voluptate qui beatae eum dolor? Commodi iusto veniam officiis fugiat aperiam error minus!</p>
                            </div>
                        </div>
                    </Col> */}
                    <Col lg={4}>
                        <div className="single-blog">
                            <img src={blogSix} alt="" />
                            <div className="blog-text p-3">
                                <h2>What is a unit test? Why should write unit tests?</h2>
                                <p>Unit testing is a application development process. It's very important for getting best output from your application. This testing process is a very complex process and need to work different ways. If we don't do the unit testing correctly, this is very bad for the application. Unit testing can performed manually or automated.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Blog;
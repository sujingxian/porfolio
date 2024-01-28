import { Col, Row, Layout, Menu, Typography, Button, Divider } from 'antd';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {LinkedinFilled} from '@ant-design/icons';
import Home from './App';
import Resume from './Resume';
import Projects from './Projects';
// import Contact from './Contact';
import './App.css';

function Header() {
    const { Header, Content, Footer } = Layout;
    return (
        <Router>
            <Layout>
                <Header
                    style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    height: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#f3f3f3',
                    }}
                >
                    <div className="custom-logo" />
                    <Typography.Title
                        level={1}
                        style={{
                            margin: '20px',
                        }}
                        className='roboto-slab'
                    >
                        Jingxian  Su
                    </Typography.Title>
                    <Typography.Text
                        style={{ marginTop: '20px', marginLeft:'-10px' }}
                    >
                        Frontend Developer
                    </Typography.Text>
                    <div style={{ marginLeft: 'auto' }}>
                        <Menu
                            className="ant-menu-horizontal"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            style={{
                                background: 'transparent',
                                marginTop: '20px'
                            }}
                        >
                            <Menu.Item key="1">
                                <Link to="/">Home</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/resume">Resume</Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to="/projects">Projects</Link>
                            </Menu.Item>
                            {/* <Menu.Item key="4">
                                <Link to="/contact">Contact</Link>
                            </Menu.Item> */}
                        </Menu>
                    </div>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/projects" element={<Projects />} />
                    </Routes>
                </Content>
                <Footer
                    style={{
                    textAlign: 'center',
                    }}>
                    <Divider />
                    <Row>
                        <Col span={6} >
                        <Typography.Title level={4}>
                            Phone
                        </Typography.Title>
                        <Typography.Text>
                            0452380720
                        </Typography.Text>
                        </Col>
                        <Col span={6} >
                        <Typography.Title level={4}>
                            Email
                        </Typography.Title>
                        <Typography.Text>
                            sujingxian758@gmail.com
                        </Typography.Text>
                        </Col>
                        <Col span={6} >
                        <Typography.Title level={4}>
                            Follow Me
                        </Typography.Title>
                        <Button type="link" block>
                            <LinkedinFilled style={{ fontSize: '24px', color: 'black' }}/>
                        </Button>
                        </Col>
                        <Col span={6} >
                        <div style={{ marginTop: '40px'}}>
                            <Typography.Text>
                            ©{new Date().getFullYear()} Created by Jingxian Su
                            </Typography.Text>
                        </div>
                        </Col>
                    </Row>
                </Footer>
            </Layout>
        </Router>
    );
}

export default Header;
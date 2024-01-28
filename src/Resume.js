import React from 'react';
import { Col, Row, Typography, Divider } from 'antd';
import './Resume.css';

function Resume() {
    return(
        <div style={{ marginLeft: '200px', marginRight: '200px' }}>
            <Row>
                <Typography.Title className="large-title">
                    Resume
                </Typography.Title>
            </Row>
            <Row>
                <Col span={10}>
                    <Typography.Title className='medium-title' style={{ marginTop: '30px' }}>
                        Work
                        Experience
                    </Typography.Title>
                </Col>
                <Col span={4}>
                    <Row>
                        <Typography.Title className='small-time' style={{ marginTop: '30px' }}>
                            2023 - 2023
                        </Typography.Title>
                    </Row>
                    <Row>
                        <Typography.Title className='small-time' style={{ marginTop: '340px' }}>
                            2023 - Current
                        </Typography.Title>
                    </Row>
                </Col>
                <Col span={10} >
                    <Row>
                        <Typography.Title className='small-title' style={{ marginTop: '30px' }}>
                            IT Analyst Intern - MyState Bank
                        </Typography.Title>
                    </Row>
                    <Row>
                        <Typography.Title className='small-text' style={{ marginTop: '30px' }}>
                            ·Assist the broader Business Applications team with implementation of new application software and changes to existing application software with a focus on automated processing and systems integration including testing of such.
                        </Typography.Title>
                    </Row>
                    <Row>
                        <Typography.Title className='small-text'>
                            ·Troubleshooting application errors using log analysis.
                        </Typography.Title>
                    </Row>
                    <Row>
                        <Typography.Title className='small-text'>
                            ·Writing and modifying scripts in Linux system. 
                        </Typography.Title>
                    </Row>
                    <Row>
                        <Typography.Title className='small-text'>
                            ·Installed, deployed, and developed Splunk universal forwarder and created a real-time data visualization dashboard.
                        </Typography.Title>
                    </Row>
                    <Row>
                        <Typography.Title className='small-title' style={{ marginTop: '45px' }}>
                            Frontend Developer - University of Tasmania
                        </Typography.Title>
                    </Row>
                    <Row>
                        <Typography.Title className='small-text' style={{ marginTop: '30px' }}>
                            ·Responsible for the deployment of web applications, ensuring seamless integration with backend services.
                        </Typography.Title>
                    </Row>
                    <Row>
                        <Typography.Title className='small-text'>
                            ·Skilled in using version control tools (such as Git) and continuous integration/continuous deployment (CI/CD) pipelines to streamline and automate the deployment process.
                        </Typography.Title>
                    </Row>
                    <Row>
                        <Typography.Title className='small-text'>
                            ·Developed and maintained high-quality, scalable, and reusable code for various web applications.
                        </Typography.Title>
                    </Row>
                    <Row>
                        <Typography.Title className='small-text'>
                            ·Employed a variety of debugging tools (such as Chrome DevTools) to ensure efficient and effective problem resolution.
                        </Typography.Title>
                    </Row>
                    <Row>
                        <Typography.Title className='small-text'>
                            ·Regularly communicated with project managers and designing team to ensure alignment with project goals and timelines.
                        </Typography.Title>
                    </Row>
                </Col>
            </Row>
            <Divider />
            <Row>
                <Col span={10}>
                    <Typography.Title className='medium-title' style={{ marginTop: '30px' }}>
                        Education
                    </Typography.Title>
                </Col>
                <Col span={4}>
                    <Row>
                        <Typography.Title className='small-time' style={{ marginTop: '30px' }}>
                            2022 - 2023
                        </Typography.Title>
                    </Row>
                    <Row>
                        <Typography.Title className='small-time' style={{ marginTop: '30px' }}>
                            2019 - 2022
                        </Typography.Title>
                    </Row>
                    <Row>
                        <Typography.Title className='small-time' style={{ marginTop: '70px' }}>
                            2013 - 2017
                        </Typography.Title>
                    </Row>
                </Col>
                <Col span={10}>
                    <Row>
                        <Typography.Title className='small-title' style={{ marginTop: '30px' }}>
                            Navitas Professional Year Program
                        </Typography.Title>
                    </Row>
                    <Row>
                        <Typography.Title className='small-title' style={{ marginTop: '30px' }}>
                            University of Tasmania 
                        </Typography.Title>
                    </Row>
                    <Row>
                        <Typography.Title className='small-text'>
                            Master Of Information Technology and System 
                        </Typography.Title>
                    </Row>
                    <Row>
                        <Typography.Title className='small-title' style={{ marginTop: '30px' }}>
                            Hunan Institue of Science and Technology University 
                        </Typography.Title>
                    </Row>
                    <Row>
                        <Typography.Title className='small-text'>
                            Bachelor of Accounting
                        </Typography.Title>
                    </Row>
                </Col>
            </Row>
            <Divider />
            <Row>
                <Col span={14}>
                    <Typography.Title className='medium-title' style={{ marginTop: '30px' }}>
                        Skills & Experts
                    </Typography.Title>
                </Col>
                <Col span={10}>
                    <Col>
                        <Typography.Title className='small-text' style={{ marginTop: '30px' }}>
                            ·C#, C++, Javascript, Python, HTML, CSS, Script Language
                        </Typography.Title>
                        <Typography.Title className='small-text'>
                            ·Linux & Unix
                        </Typography.Title>
                        <Typography.Title className='small-text'>
                            ·Splunk
                        </Typography.Title>
                        <Typography.Title className='small-text'>
                            ·Figma
                        </Typography.Title>
                        <Divider />
                        <Typography.Title className='small-text' style={{ marginTop: '30px' }}>
                            ·Critical Thinking
                        </Typography.Title>
                        <Typography.Title className='small-text'>
                            ·Problem Solving
                        </Typography.Title>
                        <Typography.Title className='small-text'>
                            ·Team Collaboration
                        </Typography.Title>
                        <Typography.Title className='small-text'>
                            ·Emotional Intelligence
                        </Typography.Title>
                        <Typography.Title className='small-text'>
                            ·Continues Learning
                        </Typography.Title>
                    </Col>
                </Col>
            </Row>
        </div>
        
    );
}
export default Resume;
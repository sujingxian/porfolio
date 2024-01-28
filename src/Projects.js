import { Col, Row, Typography, Button } from 'antd';
import './Projects.css';

function Projects() {
    return(
        <div style={{ marginLeft: '200px', marginRight: '200px' }}>
            <Row>
                <Typography.Title className="large-title">
                    Projects
                </Typography.Title>
            </Row>
            <Row>
                <Typography.Title className="medium-title" style={{ marginTop: '30px' }}>
                    Quoll(Enose) Website
                </Typography.Title>
            </Row>
            <Row>
                <Col span={12}>
                    <Typography.Title className="small-text">
                        Developed a specialized website for aggregating and analyzing agricultural data, utilizing an array of sensors for diverse land uses. The platform efficiently processes sensor data to generate actionable charts, aiding in crop management. Also implemented a comprehensive system for the maintenance and management of measurement tools and equipment.
                    </Typography.Title>
                    <Button type="link" href="http://10.36.241.218/" target="_blank" size="large">
                        Link To Website (Server need VPN to access)
                    </Button>
                </Col>
                <Col span={12}>
                    <img src="/4.0.JPG" alt="project1" style={{ maxWidth: '100%', Height: 'auto', marginLeft: '30px' }}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Typography.Title className="medium-title" style={{ marginTop: '30px' }}>
                        Qatar
                    </Typography.Title>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <Typography.Title className="small-text">
                        Developed a web-based logistics information platform for corporate use, featuring comprehensive tracking and management of container data, transportation details, emissions, and current locations. The site enables AI-enhanced predictive analysis by allowing the upload and training of existing model data, facilitating advanced forecasting for logistics operations.
                    </Typography.Title>
                    <Button type="link" href="https://54.206.63.67/" target="_blank" size="large">
                        Link To Website
                    </Button>
                </Col>
                <Col span={12}>
                    <img src="/5.0.JPG" alt="project2" style={{ maxWidth: '100%', Height: 'auto', marginLeft: '30px' }}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Typography.Title className="medium-title" style={{ marginTop: '30px' }}>
                        AR Card Elves
                    </Typography.Title>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <Typography.Title className="small-text">
                    Created 'AR Card Elves', an innovative mobile game that revitalizes the tradition of card collecting through advanced AR technology. This action-packed, casual game transforms tabletop QR code cards into interactive 3D characters on smartphones, blending the simplicity of classic card games with the immersive experience of modern mobile gaming. The application not only retains the essence of social interaction found in card collecting but also enhances it with engaging, state-of-the-art visual effects.
                    </Typography.Title>
                </Col>
                <Col span={12}>
                    <img src="/3.1.png" alt="project3" style={{ maxWidth: '100%', Height: 'auto', marginLeft: '30px' }}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Typography.Title className="medium-title" style={{ marginTop: '30px' }}>
                        Computer Graphics and Animation
                    </Typography.Title>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <Typography.Title className="small-text">
                        Designed and developed a 30-second animated short film incorporating both traditional animation techniques and modern shader programming. Pioneered a unique textured object, using custom-created images to enhance visual appeal, with the flexibility to exclude it from the final cut to maintain aesthetic integrity. Innovated a new shader derived from a Phong pixel shader, modified for toon-shading to create distinct visual effects, integrating three separate effects to simulate advanced illumination within the animation.
                    </Typography.Title>
                </Col>
                <Col span={12}>
                    <img src="/2.0.jpg" alt="project2" style={{ maxWidth: '100%', Height: 'auto', marginLeft: '30px' }}/>
                </Col>
            </Row>
        </div>
    );
}

export default Projects;

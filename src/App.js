import { Col, Row, Layout, Typography, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import './App.css';

function App() {
  const { Content } = Layout;
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resumeDoc.pdf';
    link.setAttribute('download', 'resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Layout>
      <Content style={{ backgroundColor: '#f3f3f3', padding: '20px' }}>
        <Row justify="center">
          <Col span={12}>
            <img src="/IMG_1097.JPG" alt="Profile"
              style={{
                marginLeft: '20%',
                maxWidth: '70%',
                marginTop: '5%',
                marginBottom: '5%',
                height: 'auto',
                borderRadius: '50%'
              }} 
            />
          </Col>
          <Col span={12}>
              <Typography.Title className="large-title" style={{ marginLeft: '30px' }}>
                Hello
              </Typography.Title>
              <Typography.Title level={2} style={{ marginLeft: '40px' }}>
                About Me
              </Typography.Title>
              <div style={{ marginLeft: '40px', marginRight: '20%' }}>
                <Typography.Text>
                Driven by an insatiable thirst for continuous learning and self-improvement, I excel in navigating complex challenges with a methodical and analytical approach. My robust work ethic is not just about meeting expectations but consistently surpassing them. This fervor translates into a relentless pursuit of excellence, marked by my eagerness to embrace and conquer new challenges. My unwavering commitment extends beyond achieving outstanding results; it encompasses a dedication to personal growth, adaptability, and making a constructive impact within any team or project environment. My presence is not just an addition to a team; it's a catalyst for evolution and success.
                </Typography.Text>
              </div>
              <div className="button-container" style={{ marginLeft:'20px'}}>
                <Button className="resume-button" style={{ margin: '20px' }} onClick={handleDownload} >
                  Resume
                  <DownloadOutlined />
                </Button>
                <Button className="project-button" style={{ margin: '20px' }} href="https://github.com/sujingxian" target="_blank">
                  Github<br/>(public)
                </Button>
                <Button className="contact-button" style={{ margin: '20px' }} href="https://github.com/jingxianSU" target="_blank">
                  Github<br />(private)
                </Button>
              </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;

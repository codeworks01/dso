import { Card, Col, Divider, Row, Switch } from 'antd';

// TODO move from demo into own folder structure
import FlexibleContent from './FlexJenkinsX';
import Tabs from './Tabs';
import { useState } from 'react';

const Jenkins = () => {
    const [install, setInstall] = useState(false);
    return (
      <Row gutter={16} id="components-button-demo">
        <Col lg={12} md={24}>
          <Card bodyStyle={{ padding: 0 }}>
            <Divider orientation="left">
              <small>Pipeline</small>
            </Divider>
            <div className="p-4">
              <FlexibleContent />
            </div>
            <Card title="JenkinsX" bordered={false}>
              <p>The Jenkins X Pipelines project provides k8s-style resources for declaring CI/CD-style pipelines.</p>
              <p>Jenkins X Pipelines are Cloud Native:</p>
              <ul>
                <li>Run on Kubernetes</li>
                <li>Have Kubernetes clusters as a first class type</li>
                <li>Use containers as their building blocks</li>
              </ul>
              <Divider orientation="left">
              <small>Install & Configure</small>
            </Divider>
              <p>
               Off&nbsp;
                <Switch
                  checked={!!install}
                  onChange={checked => setInstall(checked)}
                  className="mx-1"
                />
                &nbsp;On
              </p>
            </Card>
          </Card>
        </Col>
        <Col lg={12} md={24}>
          <Card bodyStyle={{ padding: 0 }}>
            <Divider orientation="left">
              <small>Project</small>
            </Divider>
            <div className="p-4">
              <Tabs />
            </div>

          </Card>
        </Col>
      </Row>
    );
}

export default Jenkins;

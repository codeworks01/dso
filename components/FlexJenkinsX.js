import { Card } from 'antd';

const { Meta } = Card;

const Component = () => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={
      <img
        alt="Jenkins X"
        src="../static/images/jenkins-x.png"
      />
    }
  >
    <Meta title="Jenkins X Pipelines" description="https://jenkins.io/projects/jenkins-x/" />
  </Card>
);

export default Component;

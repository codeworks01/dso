import { Card } from 'antd';

const { Meta } = Card;

const Component = () => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={
      <img
        alt="Jenkins"
        src="../static/images/jenkins.png"
      />
    }
  >
    <Meta title="Pipelines" description="https://jenkins.io/" />
  </Card>
);

export default Component;

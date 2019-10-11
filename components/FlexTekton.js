import { Card } from 'antd';

const { Meta } = Card;

const Component = () => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={
      <img
        alt="Tekton"
        src="https://tekton.dev/img/logos/tekton-horizontal-color.png"
      />
    }
  >
    <Meta title="Serverless Pipelines" description="https://tekton.dev/" />
  </Card>
);

export default Component;

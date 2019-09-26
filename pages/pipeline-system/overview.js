import { Card, Divider } from 'antd';

import Basic from '../../components/BasicTable';


class Demo extends React.Component {
  render() {
    return (
      <Card bodyStyle={{ padding: 0 }} id="components-button-demo">
        <Divider orientation="left">
          <small>Pods</small>
        </Divider>
        <div className="p-4">
          <Basic />
        </div>

      </Card>
    );
  }
}

export default Demo;


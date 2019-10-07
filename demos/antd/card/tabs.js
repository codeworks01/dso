import { Card } from 'antd';

const tabList = [
  {
    key: 'tab1',
    tab: 'tab1'
  },
  {
    key: 'tab2',
    tab: 'tab2'
  }
];

const contentList = {
  tab1: <p>content1</p>,
  tab2: <p>content2</p>
};

const tabListNoTitle = [
  {
    key: 'article',
    tab: 'article'
  },
  {
    key: 'app',
    tab: 'app'
  },
  {
    key: 'project',
    tab: 'project'
  }
];

const contentListNoTitle = {
  article: `<p>Developer docs
  This document is aimed at helping maintainers/developers of project understand the complexity.
  
  How are resources shared between tasks
  PipelineRun uses PVC to share resources between tasks. PVC volume is mounted on path /pvc by PipelineRun.
  
  If a resource in a task is declared as output then the TaskRun controller adds a step to copy each output resource to the directory path /pvc/task_name/resource_name.
  
  If an input resource includes from condition then the TaskRun controller adds a step to copy from PVC directory path: /pvc/previous_task/resource_name.
  
  Another alternatives is to use a GCS storage bucket to share the artifacts. This can be configured using a ConfigMap with the name config-artifact-bucket with the following attributes:
  
  location: the address of the bucket (for example gs://mybucket)
  bucket.service.account.secret.name: the name of the secret that will contain the credentials for the service account with access to the bucket
  bucket.service.account.secret.key: the key in the secret with the required service account json. The bucket is recommended to be configured with a retention policy after which files will be deleted.</p>`,
  app: <p>app content</p>,
  project: <p>project content</p>
};

class TabsCard extends React.Component {
  state = {
    key: 'tab1',
    noTitleKey: 'app'
  };

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  render() {
    return (
      <div>
        {/* <Card
          style={{ width: '100%' }}
          title="Card title"
          extra={<a href="#">More</a>}
          tabList={tabList}
          activeTabKey={this.state.key}
          onTabChange={key => {
            this.onTabChange(key, 'key');
          }}
        >
          {contentList[this.state.key]}
        </Card> */}
        <br />
        <br />
        <Card
          style={{ width: '100%' }}
          tabList={tabListNoTitle}
          activeTabKey={this.state.noTitleKey}
          onTabChange={key => {
            this.onTabChange(key, 'noTitleKey');
          }}
        >
          {contentListNoTitle[this.state.noTitleKey]}
        </Card>
      </div>
    );
  }
}

export default TabsCard;

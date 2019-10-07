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
  article: <div>
           <p>The main objective of Tekton Pipelines is to run your Task individually or as a part of a Pipeline. Every task runs as a Pod on your Kubernetes cluster with each step as its own container.</p>
            <ul>
              <li>
                A Task defines the work that needs to be executed, for example the following is a simple task that will echo hello world:     
              </li>
              <li>
                The steps are a series of commands to be sequentially executed by the task.
              </li>    
            </ul>  
           </div>,
  app:    <div>
            <ul>
              <li>
                A Task defines the work that needs to be executed, for example the following is a simple task that will echo hello world:     
              </li>
              <li>
                The steps are a series of commands to be sequentially executed by the task.
              </li>    
            </ul>  
            </div>,
  project: <div>
              <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, </p>
              <ul>
                <li>
                  A Task defines the work that needs to be executed, for example the following is a simple task that will echo hello world:     
                </li>
                <li>
                  The steps are a series of commands to be sequentially executed by the task.
                </li>    
              </ul>  
              </div>
};

class TabsCard extends React.Component {
  state = {
    key: 'tab1',
    noTitleKey: 'article'
  };

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  render() {
    return (
      <div>
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

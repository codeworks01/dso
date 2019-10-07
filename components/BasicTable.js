import { Table, Divider, Tag } from 'antd';
import {
  Underline,
  MinusCircle
} from 'react-feather';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status'
  },
  {
    title: 'Count',
    dataIndex: 'count',
    key: 'count'
  },
  {
    title: 'Description',
    dataIndex: 'desc',
    key: 'desc'
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => (
          <Tag color="blue" key={tag}>
            {tag}
          </Tag>
        ))}
      </span>
    )
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="javascript:;">{record.name} <Divider type="vertical" /> Restart</a>
        <Divider type="vertical" />
        <a href="javascript:;">Delete</a>
      </span>
    )
  }
];

const data = [
  {
    key: '1',
    name: 'Jenkins',
    count: 2,
    desc: 'a suite of plugins which supports implementing and integrating continuous delivery pipelines',
    tags: ['kube', 'developer']
  },
  {
    key: '2',
    name: 'Sonarcube',
    count: 1,
    desc: 'Catch bugs and vulnerabilities in your app, with thousands of automated Static Code Analysis rules.',
    tags: ['pipeline', 'code coverage']
  },
  {
    key: '3',
    name: 'Nexus',
    count: 1,
    desc: 'Single source of truth for all binaries and build artifacts.',
    tags: ['pipeline', 'repo', 'artifacts']
  },
  {
    key: '4',
    name: 'OpenSCAP',
    count: 1,
    desc: 'The OpenSCAP multiple tools for assessment, measurement, and enforcement of security baselines.',
    tags: ['pipeline', 'scanner']
  },
  {
    key: '5',
    name: 'Quay',
    count: 1,
    desc: 'Hosted private Docker repositories. Includes full user management and history.',
    tags: ['pipeline', 'docker', 'registry']
  },
  {
    key: '6',
    name: 'OpenControl',
    count: 1,
    desc: 'Generate and validate assessment and authorization packages.',
    tags: ['pipeline', 'ATO', 'documentation', 'automation']
  }
];

const Component = () => <Table columns={columns} dataSource={data} />;
export default Component;

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
const { Header, Sider, Content } = Layout;
const Sidebar = (props) => {
  const content = props.content;
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical bg-light" >
          <h3>Logo</h3>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
              children: [
                {
                  key: '2',
                  icon: <VideoCameraOutlined />,
                  label: 'nav 2'
                },
                {
                  key: '3',
                  icon: <UploadOutlined />,
                  label: 'nav 2'
                },
                {
                  key: '4',
                  icon: <UserOutlined />,
                  label: 'nav 2'
                }
              ]
            },
            {
              key: '5',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '6',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          className="text-danger"
          style={{
            margin: '24px 16px',
            padding: 24,
            // minHeight: 590,
            background: colorBgContainer,
          }}
        >
          {content}
        </Content>
      </Layout>
    </Layout>
  );
};
export default Sidebar;
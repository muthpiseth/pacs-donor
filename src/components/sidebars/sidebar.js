import {
  LineChartOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SwapOutlined,
  TeamOutlined,
  UnorderedListOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import '../../styles/sidebars/sidebar.css';
import { scan } from '../../assets/icons/icon';
import logoama from '../../assets/images/logoama.svg';
import LogoutButton from '../buttons/logoutButton';
import { Link } from 'react-router-dom';

const { Header, Sider, Content } = Layout;
const Sidebar = (props) => {
  const content = props.content;
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider 
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
        className="bg-white" 
        trigger={null} 
        collapsible 
        collapsed={collapsed} 
      >
        <div className="text-center p-1">
          <div>
            <img src={logoama} style={{ height: "5rem", width: "100%" }} alt="" />
          </div>
          <div>
            <button style={{ border: 0, background: "#0075FF", width: "100%", borderRadius: "0.5rem" }}>
              <div className="d-flex text-white justify-content-between align-items-center p-2">
                <span>Donor</span>
                <span className={collapsed ? "d-none" : ""}><SwapOutlined /></span>
              </div>
            </button>
          </div>
        </div>
        <Menu
          className="border"
          id="menu"
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <TeamOutlined />,
              label: <Link>Donor</Link>,
              children: [
                {
                  key: "2",
                  icon: <UnorderedListOutlined />,
                  label: <Link to="/dono-list">Donor List</Link>
                },
                {
                  key: "3",
                  icon: <img style={{ height: "1rem" }} src={scan} alt="" />,
                  label: <Link to="/donor-group">Donor Group</Link>
                },
                {
                  key: "4",
                  icon: <LineChartOutlined />,
                  label: <Link to="/donor-analysis">Donor Analysis</Link>
                }
              ]
            },
            {
              key: "5",
              icon: <VideoCameraOutlined />,
              label: <div>Payout</div>,
            },
            {
              key: "6",
              icon: <UploadOutlined />,
              label: <div>Rewards</div>,
            },
          ]}
        />
        <div 
          className="fixed-bottom mb-4"
          style={{
            width: collapsed ? "5rem" : "12.5rem"
          }}
        >
          <div className="text-center">
            <LogoutButton title={collapsed ? "" : "Logout"} />
          </div>
        </div>
      </Sider>
      <Layout
        className="striky-layout"
        style={{ marginLeft: collapsed ? "5rem" : "12.5rem" }}
      >
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <div className="d-flex align-items-center">
            <Button
              className="bg-white"
              size="small"
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "12px",
                width: 26,
                height: 26,
                left: "-1%",
                borderRadius: "100%",
                boxShadow: "1px 2px 20px rgba(0, 0, 0, 0.16)",
              }}
            />
            <div>Header</div>
          </div>
        </Header>
        <Content
          className="border"
          style={{
            padding: "1.5rem",
            minHeight: "35rem",
          }}
        >
          {content}
        </Content>
      </Layout>
    </Layout>
  );
};
export default Sidebar;
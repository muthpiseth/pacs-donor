import {
  LineChartOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ScanOutlined,
  SwapOutlined,
  TeamOutlined,
  UnorderedListOutlined,
  UploadOutlined,
  UsergroupAddOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/sidebars/sidebar.css';
import logoama from '../../assets/logos/logoama.svg';
import clock from '../../assets/images/clock.png';
import men from '../../assets/images/men.jpg';
import LogoutButton from '../buttons/logoutButton';
import Clock from 'react-live-clock';
import NavbarProfile from '../navbars/navbarProfile';
import DonorDropdown from '../../containers/dropdowns/donorDropdown';
import { search } from '../../assets/icons/icon';

const { Header, Sider, Content } = Layout;
const Sidebar = (props) => {
  const  maincontent = props.maincontent;
  const navigate = useNavigate();
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
        className="sider bg-white d-flex flex-column"
        trigger={null}
        collapsible 
        collapsed={collapsed}
      >
        <div>
          <div className="text-center p-1">
            <div>
              <img src={logoama} className="logo" alt="" />
            </div>
            <div>
              <DonorDropdown
                button={
                  <button className="donor-button">
                    <div className="d-flex text-white justify-content-between align-items-center p-2">
                      <span className="donor-button-text">Donor</span>
                      <span className={collapsed ? "d-none" : "donor-button-icon"}><SwapOutlined /></span>
                    </div>
                  </button>
                }
              />
            </div>
          </div>

          <Menu
            className="side-menu"
            id="menu"
            theme="light"
            mode="inline"
            triggerSubMenuAction="click"
            defaultSelectedKeys={["/"]}
            onClick={({ key }) => { 
              navigate(key)
            }}
            items={[
              {
                key: "donor",
                icon: <TeamOutlined />,
                label: <div className="h5-bold-size13">Donor</div>,
                children: [
                  {
                    key: "/",
                    icon: <UnorderedListOutlined />,
                    label: collapsed ? "Donor List" : <div className="h5-bold-size13">Donor List</div>,
                  },
                  {
                    key: "/group",
                    icon: <UsergroupAddOutlined />,
                    label: collapsed ? "Donor Group" : <div className="h5-bold-size13">Donor Group</div>
                  },
                  {
                    key: "/analysis",
                    icon: <LineChartOutlined />,
                    label: collapsed ? "Donor Analysis" : <div className="h5-bold-size13">Donor Analysis</div>
                  }
                ]
              },
              {
                key: "payout",
                icon: <VideoCameraOutlined />,
                label: <div className="h5-bold-size13">Payout</div>,
                children: []
              },
              {
                key: "rewards",
                icon: <UploadOutlined />,
                label: <div className="h5-bold-size13">Rewards</div>,
                children: []
              },
            ]}
          />
        </div>
        
        <div 
          className="py-2"
        >
          <div className="text-center">
            <LogoutButton title={collapsed ? "" : "Log out"} />
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
            background: colorBgContainer
          }}
        >
          <div 
            className="d-flex align-items-center"
            style={{ borderLeft: "1px solid #F2F3F9" }}
          >
            <Button
              className="bg-white"
              size="small"
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined style={{ fontSize: "0.7rem" }}/> : <MenuFoldOutlined style={{ fontSize: "0.7rem" }}/>}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "0.1rem",
                width: "1.5rem",
                height: "1.5rem",
                left: "-0.8rem",
                borderRadius: "100%",
                boxShadow: "0.06rem 0.12rem 1.25rem 0rem rgba(0, 0, 0, 0.10)",
              }}
            />
            <div className="d-flex justify-content-between w-100 align-items-center">
              <div className="d-flex align-items-center ms-lg-3 ms-md-0">
                <div>
                  <img src={search} alt="" />
                </div>
                <Button className="d-flex align-items-center search-button h3-bold-size18-grey" type="text">Search</Button>
              </div>
              <div className="d-flex align-items-center me-3">
                <div className="d-flex align-items-center">
                  <img style={{ height: "1.5rem" }} src={clock} alt="" />
                  <Clock
                    className="h4-bold-size16 ms-lg-3 ms-md-1"
                    format={'DD / MM / YYYY'}
                    ticking={true}
                  />
                  <Clock
                    className="h4-bold-size16 ms-lg-3 ms-md-1"
                    format={'h:mm'}
                    ticking={true}
                  />
                  <Clock
                    className="h5-bold-size13-grey ms-lg-1 ms-md-1"
                    format={'A'}
                    ticking={true}
                  />
                </div>
                <div className="ms-lg-5 ms-md-2">
                  <NavbarProfile 
                    className="d-flex flex-column justify-content-center align-items-start pofile-name"
                    nameID="name"
                    positionID="position"
                    icon={<ScanOutlined />}
                    name="Muth Piseth"
                    position="Reception"
                    picture={men}
                  />
                </div>
              </div>
            </div>
          </div>
        </Header>

        <Content
          style={{
            padding: "1.5rem",
            minHeight: "35rem",
          }}
        >
          <div>{maincontent}</div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Sidebar;
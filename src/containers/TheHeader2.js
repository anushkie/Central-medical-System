import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select } from "antd";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import FontSizeChanger from "react-font-size-changer";
import { Menu, Dropdown, Button } from "antd";

import {
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

// routes config
import routes from "../routes";

import { TheHeaderDropdown, TheHeaderDropdownMssg } from "./IndexDoctor";

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);
const { Search } = Input;

const onSearch = (value) => console.log(value);

const TheHeader2 = () => {
  const handleFontChange = (event) => {
    localStorage.setItem("font_size", event);
  };

  const { Option } = Select;

  const test = (value) => {};

  const menuBackground = (
    <Menu>
      <Menu.Item>
        <Button>
          <img style={{ height: "120%" }} src="imgs/blackB.jpg" />
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button>
          <img style={{ height: "120%" }} src="imgs/blueB.jpg" />
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button>
          <img style={{ height: "120%" }} src="imgs/grayB.jpg" />
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button>
          <img style={{ height: "120%" }} src="imgs/greenB.jpg" />
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button>
          <img style={{ height: "120%" }} src="imgs/redB.jpg" />
        </Button>
      </Menu.Item>
    </Menu>
  );

  const menuColorT = (
    <Menu>
      <Menu.Item>
        <Button>
          <img style={{ height: "120%" }} src="imgs/blackT.jpg" />
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button>
          <img style={{ height: "120%" }} src="imgs/blueT.jpg" />
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button>
          <img style={{ height: "120%" }} src="imgs/greenT.jpg" />
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button>
          <img style={{ height: "120%" }} src="imgs/redT.jpg" />
        </Button>
      </Menu.Item>
    </Menu>
  );

  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Française
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Italian
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Spanish
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <CHeader withSubheader style={{ top: "30px" }}>
      <CHeaderBrand className="mx-auto d-lg-none" to="/"></CHeaderBrand>
      <CHeaderNav className="d-md-down-none mr-auto">
        <Space direction="vertical">
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{ width: 200 }}
          />
        </Space>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/covid">Covid-19</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/rnd">Research and Develop</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/pharmacy">Pharmacy</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/pregnancy"> Pregnancy</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/aboutUs"> About Us</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/userLogin">Login</CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav>

      <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter
          className="border-0 c-subheader-nav m-0 px-0 px-md-3"
          routes={routes}
        />

        <div className="d-md-down-none mfe-2 c-subheader-nav">
          <FontSizeChanger
            targets={[".changeSize"]}
            onChange={(element, newValue, oldValue) => {
              console.log(element, newValue, oldValue);
            }}
            options={{
              stepSize: 2,
              range: 3,
            }}
          />

          <div className="select-container">
            <Select
              onChange={test}
              placeholder="Select Font"
              style={{ width: 100 }}
              onChange={(event) => handleFontChange(event)}
            >
              <Option value="0">Select</Option>
              <Option value="Arial">Arial</Option>
            </Select>
          </div>

          <Space direction="vertical">
            <Space wrap>
              <Dropdown overlay={menuColorT} placement="bottomCenter">
                <Button>
                  <img style={{ height: "120%" }} src="imgs/textT.jpg" />
                </Button>
              </Dropdown>
            </Space>
          </Space>
          <Space direction="vertical">
            <Space wrap>
              <Dropdown overlay={menuBackground} placement="bottomCenter">
                <Button>
                  <img style={{ height: "120%" }} src="imgs/back.jpg" />
                </Button>
              </Dropdown>
            </Space>
          </Space>

          <Space direction="vertical">
            <Space wrap>
              <Dropdown overlay={menu} placement="bottomCenter">
                <Button>
                  <img style={{ height: "120%" }} src="imgs/langs.jpg" />
                </Button>
              </Dropdown>
            </Space>
          </Space>
        </div>

        <CHeaderNav className="px-3">
          <TheHeaderDropdownMssg />
          <TheHeaderDropdown />
        </CHeaderNav>
      </CSubheader>
    </CHeader>
  );
};

export default TheHeader2;

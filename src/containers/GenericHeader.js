import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select } from "antd";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import FontSizeChanger from "react-font-size-changer";
import { Menu, Dropdown, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVirus } from "@fortawesome/free-solid-svg-icons";
import { faAtom } from "@fortawesome/free-solid-svg-icons";
import { faPills } from "@fortawesome/free-solid-svg-icons";
import { faBaby } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

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

import { TheHeaderDropdown, TheHeaderDropdownMssg } from "./index";

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);
const { Search } = Input;
const handleFontChange = (event) => {
  localStorage.setItem("font_size", event);
};
const onSearch = (value) => console.log(value);
const TheHeader = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

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

        <CHeaderNavItem className=" size px-3">
          <CHeaderNavLink to="/covid">
            <span className="  ">
              <FontAwesomeIcon icon={faVirus} /> Covid-19
            </span>
          </CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="size px-3">
          <CHeaderNavLink to="/rnd">
            <FontAwesomeIcon icon={faAtom} />
            Research and Develop
          </CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="size px-3">
          <CHeaderNavLink to="/pharmacy">
            <FontAwesomeIcon icon={faPills} />
            Pharmacy
          </CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="size px-3">
          <CHeaderNavLink to="/pregnancy">
            <FontAwesomeIcon icon={faBaby} />
            Pregnancy
          </CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="size px-3">
          <CHeaderNavLink to="/aboutUs">
            <FontAwesomeIcon icon={faAddressCard} />
            About Us
          </CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="size px-3">
          <CHeaderNavLink to="/login">
            <FontAwesomeIcon icon={faSignInAlt} />
            Login
          </CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav>

      <CSubheader className="px-3 accessibility-bar">
        {/* <CBreadcrumbRouter
          className="border-0 c-subheader-nav m-0 px-0 px-md-3"
          routes={routes}
        /> */}

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
              style={{ width: 150 }}
              onChange={(event) => handleFontChange(event)}
            >
              <Option value="Arial">Arial</Option>
              <Option value="Arial">Times New Roman</Option>
              <Option value="Arial">Comic Sans MS</Option>
              <Option value="Arial">Georgia</Option>
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
      </CSubheader>
    </CHeader>
  );
};

export default TheHeader;

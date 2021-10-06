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
import { useHistory } from "react-router-dom";
import { faBaby } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import RnD, { rndArial } from "./rndArial";
import RnDt from "./EndTimes";
import Comic from "./RndComic";
import Mono from "./RndGeorgia";
import Tred from "./Tred";
import Tgreen from "./Tgreen";
import Tblue from "./TBlue";
import Tbrown from "./Tbrown";
import DefaultRnd from "./DeafultRnd";
import Bgcolor from "./BackgroundGreen";
import FrenchPage from "./FrenchRnd";
import Italian from "./Italian";
import Spanish from "./Spanish";

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
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
} from "@coreui/react";
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
  const [button_number, updatecolour] = React.useState("black");
  const [bgcolor, updatebgColor] = React.useState("black");
  const [lang, updateLang] = React.useState("black");

  const HandleButtonChange = (value, from) => {
    if (from) {
      console.log(value);
      updatecolour(value);
    }
  };

  const HandleBgcolor = (value, from) => {
    if (from) {
      console.log(value);
      updatebgColor(value);
    }
  };

  const HandleLang = (value, from) => {
    if (from) {
      console.log(value);
      updateLang(value);
    }
  };
  const handleClick = ({ key }) => {
    console.log(key);
    //you can perform setState here
  };
  const [dept_num, updatedeptNumber] = React.useState("5");
  const history = useHistory();

  const handleLogin = () => {
    history.push("/login");
  };

  const handleEmergency = () => {
    history.push("/Emergency");
  };

  const selectDept = (value) => {
    updatedeptNumber(value);
  };

  const { Option } = Select;

  const test = (value) => {};

  const menuBackground = (
    <Menu>
      <Menu.Item>
        <Button onClick={() => HandleBgcolor("green", true)}>
          <img style={{ height: "120%" }} src="imgs/redB.jpg" />
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button>
          <img style={{ height: "120%" }} src="imgs/blueB.jpg" />
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button onClick={() => HandleBgcolor("white", true)}>
          <img style={{ height: "120%" }} src="imgs/whiteBg.jpg" />
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button>
          <img style={{ height: "120%" }} src="imgs/blackB.jpg" />
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button>
          <img style={{ height: "120%" }} src="imgs/GreenB.jpg" />
        </Button>
      </Menu.Item>
    </Menu>
  );

  const menu = (
    <Menu>
      <Menu.Item>
        <a onClick={() => HandleLang("french", true)}>Française</a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={() => HandleLang("italian", true)}>Italian</a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={() => HandleLang("spanish", true)}>Spanish</a>
      </Menu.Item>
    </Menu>
  );
  const menuColor = (
    <Menu>
      <Menu.Item>
        <Button onClick={() => HandleButtonChange("red", true)}>
          <img style={{ height: "120%" }} src="imgs/redT.jpg" />
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button onClick={() => HandleButtonChange("blue", true)}>
          <img style={{ height: "120%" }} src="imgs/blueT.jpg" />
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button onClick={() => HandleButtonChange("green", true)}>
          <img style={{ height: "120%" }} src="imgs/greenT.jpg" />
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button onClick={() => HandleButtonChange("brown", true)}>
          <img style={{ height: "120%" }} src="imgs/textT.jpg" />
        </Button>
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
              allowClear
              onChange={test}
              placeholder="Select Font"
              style={{ width: 150 }}
              onChange={(event) => selectDept(event)}
            >
              <Option value="1">Arial</Option>
              <Option value="2">Times New Roman</Option>
              <Option value="3">Comic Sans MS</Option>
              <Option value="4">Monospace</Option>
            </Select>
          </div>

          <Space direction="vertical">
            <Space wrap>
              <Dropdown overlay={menuColor} placement="bottomCenter">
                <Button>
                  <img style={{ height: "120%" }} src="imgs/blackT.jpg" />
                </Button>
              </Dropdown>
            </Space>
          </Space>
          <Space direction="vertical">
            <Space wrap>
              <Dropdown
                onClick={() => HandleBgcolor("green", true)}
                overlay={menuBackground}
                placement="bottomCenter"
              >
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

      {dept_num == "1" && <RnD />}

      {dept_num == "2" && <RnDt />}

      {dept_num == "3" && <Comic />}

      {dept_num == "4" && <Mono />}

      {button_number == "red" && <Tred />}
      {button_number == "blue" && <Tblue />}
      {button_number == "green" && <Tgreen />}
      {button_number == "brown" && <Tbrown />}

      {button_number == "green" && <h1>hello </h1>}

      {bgcolor == "green" && <Bgcolor />}
      {bgcolor == "white" && <DefaultRnd />}

      {lang == "french" && <FrenchPage />}
      {lang == "italian" && <Italian />}
      {lang == "spanish" && <Spanish />}
    </CHeader>
  );
};

export default TheHeader;

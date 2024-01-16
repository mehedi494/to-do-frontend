import {
  ContactsOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Menu, Row } from "antd";
import { Link } from "react-router-dom";

const Headers = () => {
  const items = [
    {
      key: "1",
      label: (
        <Link to="/add-contact">
          Add Contacts <UserAddOutlined />
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link to="/all-contact">
          All Contacts <ContactsOutlined />
        </Link>
      ),
    },
    {
      label: <Avatar shape="circle" size="default" icon={<UserOutlined />} />,
    },
  ];
  return (
    <Row
      justify="space-between"
      align="middle"
      style={{
        padding: "0 40px",
        backgroundColor: "#fff",
       maxWidth:"100%"
      }}>
      <div>
        <Link to="/"><span  style={{ color:'orangered', fontWeight: "bold" }}>Neutron</span></Link>
      </div>
      <Menu
        mode="horizontal"
        items={items}
        defaultSelectedKeys={["0"]}
        style={{ width: "50%", justifyContent: "flex-end" }}></Menu>
    </Row>
  );
};

export default Headers;

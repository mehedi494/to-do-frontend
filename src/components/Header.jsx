import {
  ContactsOutlined,
  UserAddOutlined
} from "@ant-design/icons";
import { Menu, Row } from "antd";
import { Link } from "react-router-dom";

const Headers = () => {
  const items = [
    {
      key: "1",
      label: (
        <Link to="/add-contact">
          Add todo <UserAddOutlined />
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link to="/">
          Tasks <ContactsOutlined />
        </Link>
      ),
    },
    // {
    //   label: <Avatar shape="circle" size="default" icon={<UserOutlined />} />,
    // },
  ];
  return (
    <Row
      justify="space-between"
      align="middle"
      style={{
        padding: "20px 40px",
        backgroundColor: "#fff",
       maxWidth:"100%"
      }}>
      <div>
        <Link to="/"><span  style={{fontSize:"20px", color:'orangered', fontWeight: "bold" }}>To-do app</span></Link>
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

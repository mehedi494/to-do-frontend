import {
  ContainerOutlined,
  DeleteOutlined,
  EditOutlined,
  HeartOutlined,
  HomeOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Avatar, Card, Col, Row } from "antd";

const AllContacts = () => {
  const items = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div
      style={{
        maxWidth: "100%",
        backgroundColor: "#f0f0f0",
        padding: "20px 40px",
        height: "100vh",
        msOverflowX: "hidden",
      }}>
      <Row gutter={[16, 16]}>
        {items.map((item) => (
          <Col key={item.index} xs={24} sm={12} md={12} lg={8} xl={6}>
            <Card
              style={{
                width: 300,
              }}
              actions={[
                <DeleteOutlined key="delete" />,
                <EditOutlined key="edit" />,
                <HeartOutlined key="fav" />,
              ]}>
              <Row justify="" align="middle" style={{ padding: "2px" }}>
                <Avatar style={{border:"1px orangered solid"}}
                  size="large"
                  src="https://xsgames.co/randomusers/avatar.php?g=pixel"
                />
                <div style={{ marginLeft: "20px" }}>
                  <h4 style={{ margin: "0" }}>
                    <UserOutlined /> Jhon deo
                  </h4>
                  <p style={{ margin: "0" }}>
                    <ContainerOutlined /> meheidfgfasy@gmail.com
                  </p>
                  <p style={{ margin: "0" }}>
                    <PhoneOutlined /> +880 1804733555
                  </p>
                  <p style={{ margin: "0" }}>
                    <HomeOutlined /> Address
                  </p>
                </div>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AllContacts;

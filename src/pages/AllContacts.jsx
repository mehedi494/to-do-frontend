import {
  ContainerOutlined,
  DeleteOutlined,
  EditOutlined,
  HeartOutlined,
  HomeOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Col, Row } from "antd";
import Card from "antd/es/card/Card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllContacts = () => {
  // const items = [1, 2, 3, 4, 5, 6, 7];

  const [contacts, setData] = useState([]);

  /*  const fetchtData = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/v1")
      const result =res.json();
      setData(result)
    } catch (error) {
      console.log(error);
    }
  }; */
  useEffect(() => {
    fetch("http://localhost:5000/api/v1")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(contacts);

  const handleDelete = async (id) => {
    console.log(id);
    try {
      const response = await fetch(`http://localhost:5000/api/v1/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseData = await response.json();
      console.log("POST request successful:", responseData);
    } catch (error) {
      console.error("Error during POST request:", error);
    }
  };
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
        {contacts.map((item) => (
          <Col key={item.index} xs={24} sm={12} md={12} lg={8} xl={6}>
            <Card
              style={{
                width: 300,
              }}
              actions={[
                <DeleteOutlined
                  onClick={() => handleDelete(item._id)}
                  key="delete"
                />,
                <Link key="edit" to={`/edit-contact/${item._id}`}>
                  <EditOutlined />
                </Link>,
                <HeartOutlined key="fav" />,
              ]}>
              <Row justify="" align="middle" style={{ padding: "2px" }}>
                <Avatar
                  style={{ border: "1px orangered solid" }}
                  size="large"
                  src={
                    item.img
                      ? item.img
                      : "https://xsgames.co/randomusers/avatar.php?g=pixel"
                  }
                />
                <div style={{ marginLeft: "20px" }}>
                  <h4 style={{ margin: "0" }}>
                    <UserOutlined /> {item.name}
                  </h4>
                  <p style={{ margin: "0" }}>
                    <ContainerOutlined /> {item.email}
                  </p>
                  <p style={{ margin: "0" }}>
                    <PhoneOutlined /> {item.phone}
                  </p>
                  <p style={{ margin: "0" }}>
                    <HomeOutlined />
                    {item.address}
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

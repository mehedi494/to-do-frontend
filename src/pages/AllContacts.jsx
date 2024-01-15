import {
  ContainerOutlined,
  DeleteOutlined,
  EditOutlined,
  HeartOutlined,
  HomeOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Col, Popconfirm, Row, Spin, message } from "antd";
import Card from "antd/es/card/Card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { config } from "../config";


const AllContacts = () => {
  // const items = [1, 2, 3, 4, 5, 6, 7];

  const [contacts, setData] = useState([]);

  const fetchData = () => {
    fetch(config.baseUrl)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  };
  const handleDelete = async (id) => {
    console.log(`${config.baseUrl}/${id}`);
    try {
      const response = await fetch(`${config.baseUrl}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseData = await response.json();
      console.log("POST request successful:", responseData);
      message.success("Deleted succefully")
      fetchData()
    } catch (error) {
      console.error("Error during POST request:", error);
    }
  };
  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(contacts);

 
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
        {contacts.length?contacts.map((item) => (
            <Col key={item.index} xs={24} sm={12} md={12} lg={8} xl={6}>
              <Card
                style={{
                  width: 300,
                }}
                actions={[
                  <Popconfirm key="popup"
                    title=" Delete this contact?"
                    onConfirm={() => handleDelete(item._id)}
                    okText="Yes"
                    cancelText="No"
                  >
                    <DeleteOutlined key="delete" />
                  </Popconfirm>,
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
          ))
        :<div style={{display:"flex", width:"100%", height:"100vh", justifyContent:"center",alignItems:"center"}}>
        <Spin size="large" />
      </div>}
      </Row>
    </div>
  );
};

export default AllContacts;

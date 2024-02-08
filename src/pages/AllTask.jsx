import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Col, Popconfirm, Row, Select, Spin, message } from "antd";
import Card from "antd/es/card/Card";
import { Option } from "antd/es/mentions";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { config } from "../config";

const AllTask = () => {
  let task = {};
  const [tasks, setData] = useState([]);

  const handlePriorityChange = (value, id) => {
    console.log(value, id);

  
    task.priority = value;
    const update = async () => {
      // console.log(`${config.baseUrl}/${id}`);
      try {
        const response = await fetch(`${config.baseUrl}/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(task),
        });

        const responseData = await response.json();
        setData(responseData);
        // console.log("POST request successful:", responseData);
        message.success("update succefully");
        fetchData();
      } catch (error) {
        console.error("Error during POST request:", error);
      }
    };
    update();
  };
  const handleCompleteChange = (value, id) => {
    task.isComplete = value;
    const update = async () => {
      // console.log(`${config.baseUrl}/${id}`);
      try {
        const response = await fetch(`${config.baseUrl}/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(task),
        });

        const responseData = await response.json();
        setData(responseData);
        // console.log("POST request successful:", responseData);
        message.success("update succefully");
        fetchData();
      } catch (error) {
        console.error("Error during POST request:", error);
      }
    };
    update();
  };

  const fetchData = () => {
    fetch(config.baseUrl)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        message.error(error), console.error("Error fetching data:", error);
      });
  };

  /* const handleUpadate = async (id) => {
    console.log(`${config.baseUrl}/${id}`);
    try {
      const response = await fetch(`${config.baseUrl}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });

      const responseData = await response.json();
      setData(responseData);
      console.log("POST request successful:", responseData);
      message.success("update succefully");
      fetchData();
    } catch (error) {
      console.error("Error during POST request:", error);
    }
  }; */
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
      message.success("Deleted succefully");
      fetchData();
    } catch (error) {
      console.error("Error during POST request:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(tasks);

  return (
    <>
      {!tasks ? (
        <div>Loading...</div>
      ) : (
        <div
          style={{
            maxWidth: "100%",
         
            padding: "20px 40px",
            height: "100vh",
            msOverflowX: "hidden",
          }}>
          <Row gutter={[1, 10]} style={{}}>
            {tasks.length ? (
              tasks.map((item) => (
                <Col key={item.index} xs={24} sm={12} md={12} lg={8} xl={8}>
                  <Card
                    style={{
                      width: 400,
                      margin: "0,auto",
                      height: 200,
                    }}
                    actions={[
                      <Popconfirm
                        key="popup"
                        title=" Delete to-do list"
                        onConfirm={() => handleDelete(item._id)}
                        okText="Yes"
                        cancelText="No">
                        <DeleteOutlined key="delete" />
                      </Popconfirm>,
                      <Link key="edit" to={`/edit-contact/${item._id}`}>
                        <EditOutlined />
                      </Link>,
                    ]}>
                    <div style={{ width: "" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}>
                        <div
                          style={{
                            backgroundColor: "#c0fdff",
                            padding: "0 4px",
                            borderRadius: "5px",
                          }}>
                          Priority:
                          <Select
                            style={{ margin: "5px " }}
                            key="medium"
                            // defaultValue="High"
                            onChange={(value) =>
                              handlePriorityChange(value, item._id)
                            }
                            value={item.priority}>
                            <Option key="high" value="high">
                              High
                            </Option>
                            <Option key="medium" value="medium">
                              Medium
                            </Option>
                            <Option key="low" value="low">
                              Low
                            </Option>
                          </Select>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "",
                            alignItems: "center",
                            padding: "0 5px",
                            borderRadius: "5px",
                            backgroundColor: "#caffbf",
                          }}>
                          Task:
                          <Select
                            onChange={(value) =>
                              handleCompleteChange(value, item._id)
                            }
                            value={item.isComplete}
                            style={{ margin: "5px " }}
                            key={item._id}>
                            <Option key="complete" value="complete">
                              Complete
                            </Option>
                            <Option key="incomplete" value="incomplete">
                              Incomplete
                            </Option>
                          </Select>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}></div>
                      <div
                        style={{
                          padding: "20px 0px 0 5px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                          marginLeft: "20px",
                        }}>
                        <h2 style={{ margin: "0" }}>{item.taskName}</h2>

                        <p style={{ margin: "0" }}>{item.description}</p>
                      </div>
                    </div>
                  </Card>
                </Col>
              ))
            ) : (
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  height: "100vh",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <Spin size="large" />
              </div>
            )}
          </Row>
        </div>
      )}
    </>
  );
};

export default AllTask;

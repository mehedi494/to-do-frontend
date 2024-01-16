import {
  ContainerOutlined,
  LinkOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Form, Input, Row, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { config } from "../config";
const AddContact = () => {
  // const baseUrl=import.meta.env.VITE_BASE_URL
  // const [contact, setContact] = useState({});
  const [error, setError] = useState("");

  const handlePostRequest = async (data) => {
    setError("");
    try {
      const response = await fetch(`${config.baseUrl}/add-contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any other headers as needed
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log(responseData);
      if (responseData.errors&&responseData.name) {
        console.log(responseData.name);
        message.error("something went wrong");
        setError("fill the required field");
      } else if (responseData.code === 11000) {
        setError("This Phone number already exist");
      } else {
        message.success("Contact added successfully");
        console.log("POST request successful:", responseData);
      }
    } catch (error) {
      setError(error);
      console.error("Error during POST request:", error);
    }
  };

  const { handleSubmit, control, reset } = useForm();
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 24,
      },
    },
  };

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
    // setContact(data)
    console.log(JSON.stringify(data));
    handlePostRequest(data);

    reset();
  };

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        overflow: "hidden",
        background: "#f0f0f0",
      }}>
      <Row
        justify="center"
        align="middle"
        gutter={20}
        style={{
          height: "100vh",
        }}>
        <Col xs={24} sm={12} md={8} lg={8}>
          <Card
            bordered={false}
            style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
            <Form
              layout="vertical"
              {...formItemLayout}
              onFinish={handleSubmit(onSubmit)}>
              {/* Using Controller to integrate Ant Design Input with React Hook Form */}
              <Form.Item
                label="Name"
                required
                rules={[{ required: true, message: "Name is required" }]}>
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      prefix={<UserOutlined />}
                      style={{ width: "100%" }}
                      {...field}
                    />
                  )}
                />
              </Form.Item>

              {/* Using Controller to integrate Ant Design Input with React Hook Form */}
              <Form.Item label="Email">
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      prefix={<ContainerOutlined />}
                      type="email"
                      {...field}
                    />
                  )}
                />
              </Form.Item>
              <Form.Item label="Phone" required>
                <Controller
                  name="phone"
                  control={control}
                  defaultValue=""
                  required
                  render={({ field }) => (
                    <Input prefix={<PhoneOutlined />} {...field} />
                  )}
                />
              </Form.Item>
              <Form.Item label="Image URL" required>
                <Controller
                  name="img"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Input type="" prefix={<LinkOutlined />} {...field} />
                  )}
                />
              </Form.Item>
              <Form.Item label="Address" required>
                <Controller
                  name="address"
                  control={control}
                  defaultValue=""
                  render={({ field }) => <TextArea {...field} />}
                />
              </Form.Item>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <Form.Item>
                <Button
                  /* onClick={() => handlePostRequest()} */
                  type="primary"
                  style={{ background: "orangered" }}
                  htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AddContact;

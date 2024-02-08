import {
 
  UserOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Form, Input, Row, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { config } from "../config";
const AddTask = () => {
  const [error, setError] = useState("");

  const handlePostRequest = async (data) => {
    setError("");
    try {
      const response = await fetch(`${config.baseUrl}/add-task`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any other headers as needed
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log(responseData);
      if (responseData.errors && responseData.name) {
        console.log(responseData.name);
        message.error("internal server error");
        setError("Task name is required");
      } /* else if (responseData.code === 11000) {
        setError("This Phone number already exist");
      } */ else {
        message.success("Task added successfully");
        // console.log("POST request successful:", responseData);
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
                label="Task Name"
                required
                rules={[{ required: true, message: "Name is required" }]}>
                <Controller
                  name="taskName"
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

              <Form.Item label="Description">
                <Controller
                  name="description"
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
                  style={{ background: "green",width: "100%"}}
                  htmlType="submit">
                  ADD TASK
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AddTask;

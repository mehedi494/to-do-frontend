import { Button, Form, Input } from "antd";

import { ContainerOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Card, Col, Row } from 'antd';
import { Controller, useForm } from "react-hook-form";
import TextArea from "antd/es/input/TextArea";
const AddContact = () => {
  const { handleSubmit, control,reset } = useForm();
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
    reset()
  };

  return (
    <div style={{margin:0,padding:0, overflow:"hidden"}}>
      <Row justify="center"  align="middle" gutter={20} style={{
        height: "100vh",
      }}>
    <Col  span={8}>
      <Card title={<h3>Add your <span style={{
        color:"orangered"
      }
      }>contact here..</span></h3>}  bordered={false} style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
      <Form layout="vertical" {...formItemLayout} onFinish={handleSubmit(onSubmit)}>
      {/* Using Controller to integrate Ant Design Input with React Hook Form */}
      <Form.Item label="Name" rules={[
         
        ]}>

        <Controller
        
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => <Input prefix={<UserOutlined/>} style={{width:"100%"}} {...field} />}
        />
      </Form.Item>

      {/* Using Controller to integrate Ant Design Input with React Hook Form */}
      <Form.Item label="Email">
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => <Input prefix={<ContainerOutlined />} type="email" {...field} />}
        />
      </Form.Item>
      <Form.Item label="Phone">
        <Controller
          name="phone"
          control={control}
          defaultValue=""
          render={({ field }) => <Input prefix={<PhoneOutlined />}  {...field} />}
        />
      </Form.Item>
      <Form.Item label="Address">
        <Controller
          name="address"
          control={control}
          defaultValue=""
          render={({ field }) => <TextArea  {...field} />}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" style={{background:"orangered"}} htmlType="submit">
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
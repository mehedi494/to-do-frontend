import { Button, Form, Input, message } from "antd";

import { ContainerOutlined, LinkOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Card, Col, Row } from 'antd';
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';

const EditContact = () => {

  // const [data,setData]=useState("")
  const [contact,setContact]=useState("")

  const { id } = useParams();
  
  useEffect(() => {
    fetch(`${config.baseUrl}/${id}`)
    .then(response => response.json())
    .then(data => setContact(data))
    .catch(error => console.error('Error:', error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
// console.log(contact);
  const handleUpdateRequest = async (data) => {
  try {
    const response = await fetch(`${config.baseUrl}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers as needed
      },
      body: JSON.stringify(data),
    });


    const responseData = await response.json();
    message.success('Contact updated successfully');
    console.log('POST request successful:', responseData);
  } catch (error) {
    console.error('Error during POST request:', error);
  }
};


  const { handleSubmit, control } = useForm();
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
    // console.log(data);
    
    handleUpdateRequest(data)
    
    // reset()
  };

  return (
    <div style={{margin:0,padding:0, overflow:"hidden", background:"#f0f0f0"}}>
      {
        contact&&<Row justify="center"  align="middle" gutter={20} style={{
          height: "100vh",
        }}>
      <Col  xs={24} sm={12} md={8} lg={8}>
        <Card   bordered={false} style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <Form layout="vertical" {...formItemLayout} onFinish={handleSubmit(onSubmit)}>
        {/* Using Controller to integrate Ant Design Input with React Hook Form */}
        <Form.Item label="Name" rules={[
           
          ]}>
  
          <Controller
          
            name="name"
            control={control}
            defaultValue={contact.name}
            render={({ field }) => <Input  prefix={<UserOutlined/>} style={{width:"100%"}} {...field} />}
          />
        </Form.Item>
  
        {/* Using Controller to integrate Ant Design Input with React Hook Form */}
        <Form.Item label="Email">
          <Controller
            name="email"
            control={control}
            defaultValue={contact.email}
            render={({ field }) => <Input  prefix={<ContainerOutlined />} type="email" {...field} />}
          />
        </Form.Item>
        <Form.Item label="Phone">
          <Controller
            name="phone"
            control={control}
            defaultValue={contact.phone}
            render={({ field }) => <Input  prefix={<PhoneOutlined />}  {...field} />}
          />
        </Form.Item>
        <Form.Item label="Image URL ">
          <Controller
            name="img"
            control={control}
            defaultValue={contact.img}
            render={({ field }) => <Input dprefix={<LinkOutlined />}  {...field} />}
          />
        </Form.Item>
        <Form.Item label="Address">
          <Controller
            name="address"
            control={control}
            defaultValue={contact.address}
            render={({ field }) => <TextArea   {...field} />}
          />
        </Form.Item>
  
        <Form.Item>
          <Button  type="primary" style={{background:"orangered"}} htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
        </Card>
      </Col>
     
    </Row>
      }
    </div>
   
  );
};


export default EditContact;
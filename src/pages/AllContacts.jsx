import { ContainerOutlined, DeleteOutlined, EditOutlined, HeartOutlined, HomeOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';

import { Avatar, Card, Col, Row } from 'antd';



const AllContacts = () => {
  const items=[1,2,3,4,5,6,7]
  return (
    <div style={{maxWidth:"100%", padding:"0 40px",background:"#f0f0f0",height:"100vh",msOverflowX:'hidden'}}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={6}>
      {
items.map((item)=>
<Card key={item.index}
  style={{
    width: 300,
  }}
  
  actions={[
    <DeleteOutlined key="delete" />,
    <EditOutlined key="edit" />,
    <HeartOutlined key="fav" />
    
  ]}
>
  <Row justify="start" align='middle' style={{padding:"2px"}}>
  <Avatar size="large" src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
  <div style={{ marginLeft:"20px"}} >
    <h4 style={{ margin:"0"}}><UserOutlined/> Jhon deo</h4>
    <p style={{ margin:"0"}}><ContainerOutlined/> meheidfgfasy@gmail.com</p>
    <p style={{ margin:"0"}}><PhoneOutlined/> +880 1804733555</p>
    <p style={{ margin:"0"}}><HomeOutlined /> Address</p>
  </div>
  </Row>
  
</Card>)
      }
      </Col>
      
    </Row>
    </div>
  );
};

export default AllContacts;
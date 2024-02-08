import {
  
  DeleteOutlined,
  EditOutlined,

} from "@ant-design/icons";
import { Button, Col, Popconfirm, Row, Select, Spin, message } from "antd";
import Card from "antd/es/card/Card";
import { Option } from "antd/es/mentions";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { config } from "../config";


const AllContacts = () => {
  // const items = [1, 2, 3, 4, 5, 6, 7];
let task={}
  const [priorityValue, setPriorityValue] = useState({});
  const [completeValue, setSelectCompleteValue] = useState({});
  const [contacts, setData] = useState([]);

  const handlePriorityChange = (value) => {
    setPriorityValue(value);
  };
  const handleCompleteChange = (value) => {
    setSelectCompleteValue(value);
  };
  task.priority= priorityValue
  task.isComplete= completeValue
console.log(task);

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
  // console.log(contacts);

 
  return (
    <div
      style={{
        maxWidth: "100%",
        backgroundColor: "#f0f0f0",
        padding: "20px 40px",
        height: "100vh",
        msOverflowX: "hidden",
      }}>
      <Row gutter={[1, 10]} style={{}}>
        {contacts.length?contacts.map((item) => (
            <Col key={item.index} xs={24} sm={12} md={12} lg={8} xl={8} >
              <Card
                style={{
                  width: 400,
                  margin:"0,auto",
                  height: 200
                 
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
                <Button key={`button`}>update</Button>/* ,
                 <HeartFilled key="fav"/>, */
                ]}>
                <div  style={{ width:"" }}>
                  <div style={{display:"flex",justifyContent:"space-between", }}>
                    <div style={{backgroundColor:"#c0fdff",padding:"0 4px",borderRadius:"5px"}} >Priority:
                  <Select style={{margin:"5px "}} key="medium" defaultValue="High"
                   onChange={handlePriorityChange}
                  //  value={handlePriorityChange}
                  >
                  <Option key="high" value="high">High</Option>
                  <Option key="medium" value="high">Medium</Option>
                  <Option key="low" value="low">Low</Option>
                  
                  
                </Select></div>
                    <div style={{display:"flex",justifyContent:"",alignItems:"center",padding:"0 5px",borderRadius:"5px", backgroundColor:"#caffbf"}}>Task:  <Select onChange={handleCompleteChange} 
                    // value={handleCompleteChange}
                    style={{margin:"5px "}} key="medium" defaultValue="incomplete">
                  <Option key="complete" value="complete">Complete</Option>
                  <Option key="incomplete" value="incomplete">Incomplete</Option>
                  
                  
                  
                </Select></div>
                  </div>
                <div style={{display:"flex",justifyContent:"center" , }}>
               {/*  <img
                    style={{width:"50%", borderRadius:"50%",  }}
                    size="large"
                    src={
                      item.img
                        ? item.img
                        : "https://xsgames.co/randomusers/avatar.php?g=pixel"
                    }
                  /> */}
                </div>
                  <div style={{padding:"20px 0px 0 5px",display:"flex",justifyContent:"center", alignItems:"center", flexDirection:"column", marginLeft: "20px", }}>
                    <h2 style={{ margin: "0" }}>
                      Task Name
                    </h2>

                    <p style={{ margin: "0" }}>
                       Task description
                    </p>
                    
                  </div>
                </div>
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

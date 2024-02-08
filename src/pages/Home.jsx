import AllTask from "./AllTask";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        backgroundColor: "#f0f0f0",
      }}>
      {/* <h1>Welcome To <span style={{color:'orangered'}}> Neutron LandingPage</span></h1> */}
      <AllTask></AllTask>
    </div>
  );
};

export default Home;

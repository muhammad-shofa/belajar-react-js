/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import Card from "../components/Card";
import HeaderDasboard from "../components/HeaderDashboard";
import Users from "./UsersDashboard";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [usersCount, setUsersCount] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:5000/users-count")
      .then((response) => {
        console.log("Data fetched:", response.data); // Debugging
        setUsersCount(response.data.count);
      })
      .catch((error) => console.error("Error fetching user count:", error));
  }, []);

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="w-full text-lg [background:linear-gradient(240deg,#361f8e_0%,#7752FE_100%);]">
      {/* Navbar */}
      <Navbar />
      {/* Content & sidebar */}
      <div className="flex py-4">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        {/* <div className="ml-[270px]"> */}
        <Content
          titlePage={"Dashboard"}
          headerDashboard={<HeaderDasboard />}
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        >
          <div className="flex flex-wrap gap-5 justify-evenly">
            <Card>
              <img
                src="banner-materials.png"
                alt="Background Card"
                className="rounded-md max-h-[150px]"
              />
              <h2>{usersCount} Users</h2>
            </Card>
            <Card>
              <img
                src="banner-materials.png"
                alt="Background Card"
                className="rounded-md max-h-[150px]"
              />
              <h1 className="mt-3">37 Class</h1>
            </Card>
            <Card>
              <img
                src="banner-materials.png"
                alt="Background Card"
                className="rounded-md max-h-[150px]"
              />
              <h1 className="mt-3">348 Materials</h1>
            </Card>
            <Card>
              <img
                src="banner-materials.png"
                alt="Background Card"
                className="rounded-md max-h-[150px]"
              />
              <h1 className="mt-3">800 Quiz</h1>
            </Card>
          </div>
        </Content>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Dashboard;

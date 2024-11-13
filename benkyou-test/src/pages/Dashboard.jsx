/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import Card from "../components/Card";
import HeaderDasboard from "../components/HeaderDashboard";

function Dashboard() {
  return (
    <div className="w-full text-lg [background:linear-gradient(240deg,#361f8e_0%,#7752FE_100%);]">
      {/* Navbar */}
      <Navbar />
      {/* Content & sidebar */}
      <div className="flex py-4">
        <Sidebar />
        {/* <div className="ml-[270px]"> */}
          <Content titlePage={"Dashboard"} headerDashboard={<HeaderDasboard />}>
            <div className="flex flex-wrap gap-5 justify-evenly">
              <Card>
                <img
                  src="banner-materials.png"
                  alt="Background Card"
                  className="rounded-md max-h-[150px]"
                />
                <h1 className="mt-3">1292 Users</h1>
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

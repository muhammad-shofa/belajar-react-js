import Header from "./components/Header";
import Content from "./components/Content";
import TeknologiYangDipelajari from "./components/TeknologiYangDipelajari";
import Footer1 from "./components/Footer1";
import SukaSuka from "./components/SukaSuka";

function App() {
  return (
    <>
      <Header pengajar="Pak Sandhika Galih WPU🚀" />
      <Content
        programmer="Muhammad Shofa"
        komboTeknologi="React + Vite"
      />
      <TeknologiYangDipelajari />
      <SukaSuka />
      <Footer1 nama="mshofadev" />
    </>
  );
}

export default App;

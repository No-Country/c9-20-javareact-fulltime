import { Outlet, useResolvedPath } from "react-router-dom";
import CardList from "./../../components/CardList";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import MiCuenta from "./components/MiCuenta/MiCuenta";
import MyAccount from "./components/MyAccount";
import Promotions from "./components/Promotions";
const Home = () => {
  const { pathname } = useResolvedPath();
  return (
    <>
      <CardList />
      {pathname === "/" ? (
        <>
          <Banner />
          <Promotions />
          <Contact />
          <MiCuenta />
          <MyAccount />
        </>
      ) : (
        <>
          <Outlet />
        </>
      )}
    </>
  );
};

export default Home;

import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import routes from "./routes";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageTitle from "../../components/PageTitle";

function HomeLayouts() {
  const location = useLocation();

  const currentRoute =
    routes.find((r) => r.layout === "/" && r.path === location.pathname) || {};

  const getRoutes = (routes) =>
    routes.map((prop, key) => {
      if (prop.layout === "/") {
        return <Route key={key} path={prop.path} element={<prop.component />} />;
      }
      return null;
    });

  // ✅ Update browser <title> when route changes
  useEffect(() => {
    if (currentRoute.name) {
      document.title = `${currentRoute.name} | Heart-to-Heart`;
    } else {
      document.title = "Heart-to-Heart";
    }
  }, [currentRoute]);

  return (
    <div>
      <Navbar />
      <PageTitle title={currentRoute.name} />
      <Routes>{getRoutes(routes)}</Routes>
      <Footer />
    </div>
  );
}

export default HomeLayouts;

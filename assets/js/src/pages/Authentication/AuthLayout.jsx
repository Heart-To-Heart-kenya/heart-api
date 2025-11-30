import { Routes, Route, useLocation } from "react-router-dom"; 
import { useEffect } from "react";
import routes from "./routes";
import PageTitle from "../../components/PageTitle";

function AuthLayouts() {
  const location = useLocation();

  const currentRoute =
    routes.find(
      (r) => r.layout === "/auth" && `/auth${r.path}` === location.pathname
    ) || {};

  const getRoutes = (routes) =>
    routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return <Route key={key} path={prop.path} element={<prop.component />} />;
      }
      return null;
    });

  useEffect(() => {
    if (currentRoute.name) {
      document.title = `${currentRoute.name} | Heart-to-Heart`;
    } else {
      document.title = "Heart-to-Heart";
    }
  }, [currentRoute]);

  return (
    <div>
      <PageTitle title={currentRoute.name} />
      <Routes>{getRoutes(routes)}</Routes>
    </div>
  );
}

export default AuthLayouts;

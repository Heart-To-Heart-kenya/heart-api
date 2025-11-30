import NotFoundPageRoute from "../../common/RouteNotFound";
import About from "./Basic/About";
import Faq from "./Basic/Faqs";
import Favorites from "./Basic/Favorites";
import Home from "./Basic/Home";
import ItemDetails from "./Basic/ItemDetails";
import OurStory from "./Basic/OurStory";
import Partners from "./Basic/Partners";
import Policy from "./Basic/Policy";
import Profile from "./Basic/Profile";
import Terms from "./Basic/Terms";

const homeRoutes = [
  { name: "Home", layout: "/", path: "/", component: Home },
  { name: "Favorite", layout: "/", path: "/favorite", component: Favorites },
  { name: "Items Details", layout: "/", path: "/item-details/:id", component: ItemDetails },
  { name: "About", layout: "/", path: "/about", component: About },
  { name: "Our Story", layout: "/", path: "/our-story", component: OurStory },
  { name: "Partners", layout: "/", path: "/partners", component: Partners },
  { name: "FAQs", layout: "/", path: "/faqs", component: Faq },
  { name: "Terms & Conditions", layout: "/", path: "/terms", component: Terms },
  { name: "Privacy Policy", layout: "/", path: "/policy", component: Policy },
    { name: "Profile", layout: "/", path: "/profile/:id", component: Profile },
  { ...NotFoundPageRoute, layout: "/" },
];

export default homeRoutes;

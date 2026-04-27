import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { SkillsPage } from "./pages/SkillsPage";
import { InternshipsPage } from "./pages/InternshipsPage";
import { ContactPage } from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "skills", Component: SkillsPage },
      { path: "internships", Component: InternshipsPage },
      { path: "contact", Component: ContactPage },
    ],
  },
], {
  // This tells the router that your site is in a subfolder
  basename: "/thomaster.github.io/"
});

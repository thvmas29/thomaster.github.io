import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { SkillsPage } from "./pages/SkillsPage";
import { InternshipsPage } from "./pages/InternshipsPage";
import { ContactPage } from "./pages/ContactPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { TechWatchPage } from "./pages/TechWatchPage";
import { LegalWatchPage } from "./pages/LegalWatchPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "skills", Component: SkillsPage },
      { path: "internships", Component: InternshipsPage },
      { path: "projets", Component: ProjectsPage },
      { path: "projets/:projectId", Component: ProjectDetailPage },
      { path: "veille-technologique", Component: TechWatchPage },
      { path: "veille-juridique", Component: LegalWatchPage },
      { path: "contact", Component: ContactPage },
    ],
  },
], {
  // This is the essential part that fixes the "No routes matched" error
  basename: "/thomaster.github.io/"
});

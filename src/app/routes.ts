import { createBrowserRouter } from "react-router-dom";
import { Root } from "./components/Root";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { SkillsPage } from "./pages/SkillsPage";
import { InternshipsPage } from "./pages/InternshipsPage";
import { ContactPage } from "./pages/ContactPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { BlogAppDocPage } from "./pages/BlogAppDocPage";
import { VeillesPage } from "./pages/VeillesPage";
import { TechWatchPage } from "./pages/TechWatchPage";
import { LegalWatchPage } from "./pages/LegalWatchPage";

// On définit les routes normalement
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
      { path: "projets/blog-app-cakephp/documentation", Component: BlogAppDocPage },
      { path: "veilles", Component: VeillesPage },
      { path: "veille-technologique", Component: TechWatchPage },
      { path: "veille-juridique", Component: LegalWatchPage },
      { path: "contact", Component: ContactPage },
    ],
  },
], {
  /* IMPORTANT : C'est ici que l'on règle l'erreur 404 sur GitHub Pages.
     Le basename doit correspondre exactement au nom de ton dépôt.
  */
  basename: "/thomaster.github.io"
});

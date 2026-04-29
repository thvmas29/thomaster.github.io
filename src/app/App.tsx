import { createBrowserRouter } from "react-router-dom";
import { Root } from "./components/Root";
import { HomePage } from "./pages/HomePage";
// ... (garde tes autres imports de pages ici)

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
  // C'est CA qui enlève le message "No routes matched location"
  basename: "/thomaster.github.io"
});

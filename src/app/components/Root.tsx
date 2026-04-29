import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Root() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

import { Outlet } from "react-router-dom";
import { NavigationBar } from "./NavigationBar";

export function MainLayout() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationBar />
      <div className="h-16" />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

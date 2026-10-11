import { useState } from "react";
import {
  IoBagHandleOutline,
  IoCubeOutline,
  IoGridOutline,
  IoNotificationsOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import profileIcon from "../assets/icon/icon_profile.png";
import zokaLogo from "../assets/icon/zoka-logo-primary.png";
import AdminDashboard from "../components/AdminDashboard";
import AdminOrders from "../components/AdminOrders";
import ManageProducts from "../components/ManageProducts";

const adminSections = [
  {id: "products", label: "Products", icon: IoCubeOutline},
  {id: "orders", label: "Orders", icon: IoBagHandleOutline},
  {id: "dashboard", label: "Dashboard", icon: IoGridOutline},
];

const AdminPage = () => {
  const [activeSection, setActiveSection] = useState("products");

  const renderSection = () => {
    if (activeSection === "orders") {
      return <AdminOrders />;
    }

    if (activeSection === "dashboard") {
      return <AdminDashboard />;
    }

    return <ManageProducts />;
  };

  return (
    <section className="min-h-screen bg-slate-50">
      <header className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-5 sm:px-8">
        <Link to="/" aria-label="Go to Zoka home">
          <img
            src={zokaLogo}
            alt="Zoka — Coffee for a brighter day"
            className="h-10 w-auto"
          />
        </Link>

        <nav className="flex items-center gap-5">
          <button
            type="button"
            aria-label="Notifications"
            className="text-2xl text-slate-400 transition hover:text-[#0344DC]"
          >
            <IoNotificationsOutline />
          </button>
          <img className="h-9" src={profileIcon} alt="Administrator profile" />
        </nav>
      </header>

      <main className="px-0 pb-24 pt-20 lg:ml-[220px] lg:px-4 lg:pb-8">
        {renderSection()}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 z-40 h-16 border-t border-slate-200 bg-white lg:bottom-0 lg:left-0 lg:top-16 lg:h-[calc(100vh-4rem)] lg:w-[220px] lg:border-r lg:border-t-0">
        <ul className="flex h-full items-center justify-around lg:flex-col lg:items-start lg:justify-start lg:gap-3 lg:px-4 lg:py-6">
          {adminSections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;

            return (
              <li key={section.id} className="w-full">
                <button
                  type="button"
                  onClick={() => setActiveSection(section.id)}
                  aria-pressed={isActive}
                  className={`flex w-full flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-xs font-semibold transition lg:flex-row lg:justify-start lg:gap-3 lg:px-4 lg:py-3 lg:text-sm ${
                    isActive
                      ? "bg-[#E9F0FF] text-[#0344DC]"
                      : "text-slate-500 hover:bg-[#EEF4FF] hover:text-[#0344DC]"
                  }`}
                >
                  <Icon className="text-xl" />
                  <span>{section.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};

export default AdminPage;

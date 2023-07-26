import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { useClickOutside } from "primereact/hooks";
import { Toast } from "primereact/toast";
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import avatar from "../resources/sampleAvatar.png";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar.jsx";
import CreateAppointment from "./sidebarPages/Appointments/CreateAppointment";
import ManageAppointment from "./sidebarPages/Appointments/ManageAppointment";
import Billing from "./sidebarPages/Billing/Billing";
import CreateClients from "./sidebarPages/Clients/CreateClient";
import ManageClients from "./sidebarPages/Clients/ManageClient";
import Dashboard from "./sidebarPages/Dashboard";
import CreateInventory from "./sidebarPages/Inventory/CreateInventory";
import ManageInventory from "./sidebarPages/Inventory/ManageInventory";
import InvoiceHistory from "./sidebarPages/Invoice/InvoiceHistory.jsx";
import OrderMenu from "./sidebarPages/Orders/OrderMenu.jsx";
import CreatePatient from "./sidebarPages/Patients/CreatePatient";
import ManagePatient from "./sidebarPages/Patients/ManagePatient";
import CreateVeterinarian from "./sidebarPages/Veterinarians/CreateVeterinarian";
import ManageVeterinarians from "./sidebarPages/Veterinarians/ManageVeterinarian";

function Main() {
  const [sidebar, setSidebar] = useState(
    sessionStorage.getItem("sidebar") === "true" || window.innerWidth > 993
  );
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [setting, setSetting] = useState(false);
  const [dot, setDot] = useState(false);
  const [user, setUser] = useState({});
  const sidebarRef = useRef(null);
  const settingRef = useRef(null);
  const dotRef = useRef(null);
  const toast = useRef(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!username || !token) {
      navigate("/");
    } else {
      // const user = jwtDecode(token);
      setUser(username);
    }
    path();
  }, [username, token, navigate]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 993) {
        setSidebar(true);
      } else {
        setSidebar(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    sessionStorage.setItem("sidebar", sidebar);
  }, [sidebar]);

  useEffect(() => {}, [user]);

  const path = () => {
    if (pathname === "/tender-paws" || pathname === "/tender-paws/") {
      navigate(-1);
    }
  };

  useClickOutside(sidebarRef, () => {
    if (window.innerWidth < 992) setSidebar(false);
  });

  useClickOutside(dotRef, () => {
    setDot(false);
  });

  useClickOutside(settingRef, () => {
    setSetting(false);
  });

  const handleSignOut = () => {
    confirmDialog({
      message: "Are you sure you want to logout?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      position: "top",
      accept,
      reject,
    });
  };

  const accept = () => {
    localStorage.clear();
    navigate("/");
  };

  const reject = () => {
    toast.current.show({
      severity: "warn",
      summary: "Rejected",
      detail: "You have rejected",
      life: 2000,
    });
  };

  return (
    <div>
      <Toast ref={toast} />
      <div className="block-content">
        <div className="h-screen overflow-hidden">
          <div className="min-h-screen flex relative lg:static surface-ground hidden">
            <Sidebar
              sidebarRef={sidebarRef}
              settingRef={settingRef}
              sidebar={sidebar}
              setSidebar={setSidebar}
              setting={setting}
              handleSignOut={handleSignOut}
              setSetting={setSetting}
              avatar={avatar}
            />

            <div className="flex flex-column relative flex-auto">
              <Navbar
                dotRef={dotRef}
                setSidebar={setSidebar}
                sidebar={sidebar}
                setDot={setDot}
                dot={dot}
              />
              <div
                className="p-3 flex flex-column flex-auto overflow-auto"
                style={{ height: "calc(100vh - 60px)" }}
              >
                {pathname === "/tender-paws/dashboard" && <Dashboard />}
                {pathname === "/tender-paws/create-appointment" && (
                  <CreateAppointment />
                )}
                {pathname === "/tender-paws/manage-appointment" && (
                  <ManageAppointment />
                )}
                {pathname === "/tender-paws/create-patient" && (
                  <CreatePatient />
                )}
                {pathname === "/tender-paws/manage-patient" && (
                  <ManagePatient />
                )}
                {pathname === "/tender-paws/create-client" && <CreateClients />}
                {pathname === "/tender-paws/manage-client" && <ManageClients />}
                {pathname === "/tender-paws/create-veterinarian" && (
                  <CreateVeterinarian />
                )}
                {pathname === "/tender-paws/manage-veterinarian" && (
                  <ManageVeterinarians />
                )}
                {pathname === "/tender-paws/create-inventory" && (
                  <CreateInventory />
                )}
                {pathname === "/tender-paws/manage-inventory" && (
                  <ManageInventory />
                )}
                {pathname === "/tender-paws/order" && <OrderMenu />}
                {pathname === "/tender-paws/billing" && <Billing />}
                {pathname === "/tender-paws/invoice-history" && (
                  <InvoiceHistory />
                )}
              </div>
            </div>
            <ConfirmDialog />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

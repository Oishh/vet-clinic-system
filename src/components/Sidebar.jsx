import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../resources/blue-bubbles-icon.jpg";
import SidebarItem from "./common/SidebarItem";

function Sidebar({
  sidebarRef,
  settingRef,
  sidebar,
  setting,
  setSetting,
  handleSignOut,
  // user,
  avatar,
}) {
  const { pathname } = useLocation();
  const [appointmentComponent, setAppoinmentComponent] = useState(false);
  const [patientComponent, setPatientComponent] = useState(false);
  const [clientComponent, setClientComponent] = useState(false);
  const [veterinarianComponent, setVeterinarianComponent] = useState(false);
  const [inventoryComponent, setInventoryComponent] = useState(false);
  const [orderComponent, setOrderComponent] = useState(false);
  const [invoiceHistoryComponent, setInvoiceHistoryComponent] = useState(false);
  const [billingComponent, setBillingComponent] = useState(false);
  const [settingComponent, setSettingComponent] = useState(false);

  useEffect(() => {
    if (
      pathname === "/tender-paws/create-appointment" ||
      pathname === "/tender-paws/manage-appointment"
    ) {
      setAppoinmentComponent(true);
    } else if (
      pathname === "/tender-paws/create-patient" ||
      pathname === "/tender-paws/manage-patient"
    ) {
      setPatientComponent(true);
    } else if (
      pathname === "/tender-paws/create-client" ||
      pathname === "/tender-paws/manage-client"
    ) {
      setClientComponent(true);
    } else if (pathname === "/tender-paws/veterinarians") {
      setVeterinarianComponent(true);
    } else if (
      pathname === "/tender-paws/create-inventory" ||
      pathname === "/tender-paws/manage-inventory"
    ) {
      setInventoryComponent(true);
    } else if (
      pathname === "/tender-paws/create-veterinarian" ||
      pathname === "/tender-paws/manage-veterinarian"
    ) {
      setVeterinarianComponent(true);
    } else if (pathname === "/tender-paws/order") {
      setOrderComponent(true);
    } else if (pathname === "/tender-paws/invoice-history") {
      setInvoiceHistoryComponent(true);
    } else if (pathname === "/tender-paws/billing") {
      setBillingComponent(true);
    } else if (
      pathname === "/tender-paws/create-client" ||
      pathname === "/tender-paws/manage-client"
    ) {
      setClientComponent(true);
    } else if (pathname === "/tender-paws/settings") {
      setSettingComponent(true);
    }
  }, []);

  const closeDropdown = () => {
    if (appointmentComponent) {
      setAppoinmentComponent(!appointmentComponent);
    } else if (patientComponent) {
      setPatientComponent(!patientComponent);
    } else if (clientComponent) {
      setClientComponent(!clientComponent);
    } else if (veterinarianComponent) {
      setVeterinarianComponent(!veterinarianComponent);
    } else if (inventoryComponent) {
      setInventoryComponent(!inventoryComponent);
    } else if (veterinarianComponent) {
      setVeterinarianComponent(!veterinarianComponent);
    } else if (orderComponent) {
      setOrderComponent(!orderComponent);
    } else if (invoiceHistoryComponent) {
      setInvoiceHistoryComponent(!invoiceHistoryComponent);
    } else if (billingComponent) {
      setBillingComponent(!billingComponent);
    } else if (settingComponent) {
      setSettingComponent(!settingComponent);
    }
  };

  return (
    <div className="min-h-screen flex relative lg:static surface-ground">
      <div
        ref={sidebarRef}
        id="app-sidebar-1"
        className={`bg-bluegray-800 h-screen ${
          sidebar ? "" : "hidden"
        } flex-shrink-0 absolute lg:static left-0 top-0 z-1 select-none`}
        style={{ width: "280px" }}
      >
        <div className="flex flex-column h-full">
          <div
            className="flex align-items-center px-3 bg-bluegray-900 flex-shrink-0"
            style={{ height: "60px" }}
          >
            <img
              src={Logo}
              alt="Logo"
              height="50"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <div className="text-2xl font-medium text-400 ml-3">
              Blue Bubbles
            </div>
          </div>
          <div className="overflow-y-auto mt-3">
            <ul className="list-none p-3 m-0">
              <SidebarItem
                title="Dashboard"
                link="/tender-paws/dashboard"
                pathname={pathname}
                icon="fas fa-home"
                onClick={closeDropdown}
              />

              <li>
                <a
                  onClick={() => {
                    setAppoinmentComponent(!appointmentComponent);
                    closeDropdown();
                  }}
                  className={`${
                    (!appointmentComponent &&
                      pathname === "/tender-paws/create-appointment") ||
                    (!appointmentComponent &&
                      pathname === "/tender-paws/manage-appointment")
                      ? "bg-white text-bluegray-800"
                      : "hover:bg-bluegray-900 hover:text-bluegray-50"
                  } p-ripple  flex align-items-center cursor-pointer p-3  border-round text-bluegray-100 transition-duration-150 transition-colors w-full`}
                >
                  <i className="fas fa-calendar mr-2"></i>
                  <span className="font-medium">Appointment</span>
                  <div className="ml-auto">
                    <i
                      className={`${
                        appointmentComponent
                          ? "pi pi-chevron-up"
                          : "pi pi-chevron-down"
                      } ml-2`}
                    ></i>
                  </div>
                  <span
                    role="presentation"
                    className="p-ink"
                    style={{
                      height: "254px",
                      width: "254px",
                      top: "-97px",
                      left: "108px",
                    }}
                  ></span>
                </a>
                <ul
                  className={`list-none py-0 pl-3 pr-0 m-0 overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out ${
                    appointmentComponent ? "" : "hidden"
                  }`}
                >
                  <SidebarItem
                    border="border-left-1 surface-border"
                    title="Create Appointment"
                    link="/tender-paws/create-appointment"
                    pathname={pathname}
                    icon="fas fa-calendar-plus"
                  />
                  <SidebarItem
                    border="border-left-1 surface-border"
                    title="Manage Appointment"
                    link="/tender-paws/manage-appointment"
                    pathname={pathname}
                    icon="fas fa-edit"
                  />
                </ul>
              </li>

              <li>
                <a
                  onClick={() => {
                    setPatientComponent(!patientComponent);
                    closeDropdown();
                  }}
                  className={`${
                    (!patientComponent &&
                      pathname === "/tender-paws/create-patient") ||
                    (!patientComponent &&
                      pathname === "/tender-paws/manage-patient")
                      ? "bg-white text-bluegray-800"
                      : "hover:bg-bluegray-900 hover:text-bluegray-50"
                  } p-ripple  flex align-items-center cursor-pointer p-3  border-round text-bluegray-100 transition-duration-150 transition-colors w-full`}
                >
                  <i className="fas fa-paw mr-2"></i>
                  <span className="font-medium">Patient</span>
                  <div className="ml-auto">
                    <i
                      className={`${
                        patientComponent
                          ? "pi pi-chevron-up"
                          : "pi pi-chevron-down"
                      } ml-2`}
                    ></i>
                  </div>
                  <span
                    role="presentation"
                    className="p-ink"
                    style={{
                      height: "254px",
                      width: "254px",
                      top: "-97px",
                      left: "108px",
                    }}
                  ></span>
                </a>
                <ul
                  className={`list-none py-0 pl-3 pr-0 m-0 overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out ${
                    patientComponent ? "" : "hidden"
                  }`}
                >
                  <SidebarItem
                    border="border-left-1 surface-border"
                    title="Create Patient"
                    link="/tender-paws/create-patient"
                    pathname={pathname}
                    icon="fas fa-plus"
                  />
                  <SidebarItem
                    border="border-left-1 surface-border"
                    title="Manage Patient"
                    link="/tender-paws/manage-patient"
                    pathname={pathname}
                    icon="fas fa-edit"
                  />
                </ul>
              </li>

              <li>
                <a
                  onClick={() => {
                    setClientComponent(!clientComponent);
                    closeDropdown();
                  }}
                  className={`${
                    (!clientComponent &&
                      pathname === "/tender-paws/create-client") ||
                    (!clientComponent &&
                      pathname === "/tender-paws/manage-client")
                      ? "bg-white text-bluegray-800"
                      : "hover:bg-bluegray-900 hover:text-bluegray-50"
                  } p-ripple  flex align-items-center cursor-pointer p-3  border-round text-bluegray-100 transition-duration-150 transition-colors w-full`}
                >
                  <i className="fas fa-user  mr-2"></i>
                  <span className="font-medium">Client</span>
                  <div className="ml-auto">
                    <i
                      className={`${
                        clientComponent
                          ? "pi pi-chevron-up"
                          : "pi pi-chevron-down"
                      } ml-2`}
                    ></i>
                  </div>
                  <span
                    role="presentation"
                    className="p-ink"
                    style={{
                      height: "254px",
                      width: "254px",
                      top: "-97px",
                      left: "108px",
                    }}
                  ></span>
                </a>
                <ul
                  className={`list-none py-0 pl-3 pr-0 m-0 overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out ${
                    clientComponent ? "" : "hidden"
                  }`}
                >
                  <SidebarItem
                    border="border-left-1 surface-border"
                    title="Create Client"
                    link="/tender-paws/create-client"
                    pathname={pathname}
                    icon="fas fa-user-plus"
                  />
                  <SidebarItem
                    border="border-left-1 surface-border"
                    title="Manage Client"
                    link="/tender-paws/manage-client"
                    pathname={pathname}
                    icon="fas fa-user-edit"
                  />
                </ul>
              </li>

              <li>
                <a
                  onClick={() => {
                    setVeterinarianComponent(!veterinarianComponent);
                    closeDropdown();
                  }}
                  className={`${
                    (!veterinarianComponent &&
                      pathname === "/tender-paws/create-veterinarian") ||
                    (!veterinarianComponent &&
                      pathname === "/tender-paws/manage-veterinarian")
                      ? "bg-white text-bluegray-800"
                      : "hover:bg-bluegray-900 hover:text-bluegray-50"
                  } p-ripple  flex align-items-center cursor-pointer p-3  border-round text-bluegray-100 transition-duration-150 transition-colors w-full`}
                >
                  <i className="fa fa-stethoscope mr-2"></i>
                  <span className="font-medium">Veterinarian</span>
                  <div className="ml-auto">
                    <i
                      className={`${
                        veterinarianComponent
                          ? "pi pi-chevron-up"
                          : "pi pi-chevron-down"
                      } ml-2`}
                    ></i>
                  </div>
                  <span
                    role="presentation"
                    className="p-ink"
                    style={{
                      height: "254px",
                      width: "254px",
                      top: "-97px",
                      left: "108px",
                    }}
                  ></span>
                </a>
                <ul
                  className={`list-none py-0 pl-3 pr-0 m-0 overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out ${
                    veterinarianComponent ? "" : "hidden"
                  }`}
                >
                  <SidebarItem
                    border="border-left-1 surface-border"
                    title="Create Veterinarian"
                    link="/tender-paws/create-veterinarian"
                    pathname={pathname}
                    icon="fa fa-box"
                  />
                  <SidebarItem
                    border="border-left-1 surface-border"
                    title="Manage Veterinarian"
                    link="/tender-paws/manage-veterinarian"
                    pathname={pathname}
                    icon="fa fa-boxes"
                  />
                </ul>
              </li>

              <li>
                <a
                  onClick={() => {
                    setInventoryComponent(!inventoryComponent);
                    closeDropdown();
                  }}
                  className={`${
                    (!inventoryComponent &&
                      pathname === "/tender-paws/create-inventory") ||
                    (!inventoryComponent &&
                      pathname === "/tender-paws/manage-inventory")
                      ? "bg-white text-bluegray-800"
                      : "hover:bg-bluegray-900 hover:text-bluegray-50"
                  } p-ripple  flex align-items-center cursor-pointer p-3  border-round text-bluegray-100 transition-duration-150 transition-colors w-full`}
                >
                  <i className="fa fa-warehouse mr-2"></i>
                  <span className="font-medium">Inventory</span>
                  <div className="ml-auto">
                    <i
                      className={`${
                        inventoryComponent
                          ? "pi pi-chevron-up"
                          : "pi pi-chevron-down"
                      } ml-2`}
                    ></i>
                  </div>
                  <span
                    role="presentation"
                    className="p-ink"
                    style={{
                      height: "254px",
                      width: "254px",
                      top: "-97px",
                      left: "108px",
                    }}
                  ></span>
                </a>
                <ul
                  className={`list-none py-0 pl-3 pr-0 m-0 overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out ${
                    inventoryComponent ? "" : "hidden"
                  }`}
                >
                  <SidebarItem
                    border="border-left-1 surface-border"
                    title="Create Inventory"
                    link="/tender-paws/create-inventory"
                    pathname={pathname}
                    icon="fa fa-box"
                  />
                  <SidebarItem
                    border="border-left-1 surface-border"
                    title="Manage Inventory"
                    link="/tender-paws/manage-inventory"
                    pathname={pathname}
                    icon="fa fa-boxes"
                  />
                </ul>
              </li>

              <SidebarItem
                title="Order"
                link="/tender-paws/order"
                pathname={pathname}
                icon="fas fa-clipboard"
                onClick={closeDropdown}
              />

              <SidebarItem
                title="Billing"
                link="/tender-paws/billing"
                pathname={pathname}
                icon="fa fa-dollar-sign"
                onClick={closeDropdown}
              />

              <SidebarItem
                title="Invoice History"
                link="/tender-paws/invoice-history"
                pathname={pathname}
                icon="fa fa-receipt"
                onClick={closeDropdown}
              />
            </ul>
          </div>

          {/* SETTINGS AREA */}

          <div ref={settingRef} className="mt-auto mx-3">
            <hr className="mb-3 border-top-1 border-bluegray-600" />
            <ul className={`list-none p-2 m-0 ${setting ? "" : "hidden"}`}>
              <li>
                <a
                  onClick={handleSignOut}
                  className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50 transition-duration-150 transition-colors w-full"
                >
                  <i className="pi pi-sign-out mr-2"></i>
                  <span className="font-medium">Sign Out</span>
                  <span role="presentation" className="p-ink"></span>
                </a>
              </li>
            </ul>
            <a
              onClick={() => {
                setSetting(!setting);
                closeDropdown();
              }}
              className="p-ripple my-3 px-3 py-2 flex align-items-center hover:bg-bluegray-900 border-round cursor-pointer text-bluegray-100 hover:text-bluegray-50 transition-duration-150 transition-colors w-full"
            >
              <img
                src={avatar}
                className="mr-2"
                alt="avatar-f-1"
                style={{ width: "28px", height: "28px" }}
              />
              <span className="font-medium">
                {localStorage.getItem("username")}
              </span>
              <i
                className={`${
                  setting ? "pi pi-chevron-down" : "pi pi-chevron-up"
                } ml-auto`}
              ></i>
              <span
                role="presentation"
                className="p-ink"
                style={{
                  height: "248px",
                  width: "248px",
                  top: "-111.003px",
                  left: "63px",
                }}
              ></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

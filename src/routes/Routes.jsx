import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./../components/Login";
import Main from "./../components/Main";
import NotFound from "./../components/sidebarPages/NotFound";

export default function RoutePages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tender-paws" element={<Main />} />
        <Route path="/tender-paws/login" element={<Login />} />
        <Route path="/tender-paws/dashboard" element={<Main />} />
        <Route path="/tender-paws/create-appointment" element={<Main />} />
        <Route path="/tender-paws/manage-appointment" element={<Main />} />
        <Route path="/tender-paws/create-patient" element={<Main />} />
        <Route path="/tender-paws/manage-patient" element={<Main />} />
        <Route path="/tender-paws/create-client" element={<Main />} />
        <Route path="/tender-paws/manage-client" element={<Main />} />
        <Route path="/tender-paws/veterinarians" element={<Main />} />
        <Route path="/tender-paws/create-veterinarian" element={<Main />} />
        <Route path="/tender-paws/manage-veterinarian" element={<Main />} />
        <Route path="/tender-paws/create-inventory" element={<Main />} />
        <Route path="/tender-paws/manage-inventory" element={<Main />} />
        <Route path="/tender-paws/order" element={<Main />} />
        <Route path="/tender-paws/billing" element={<Main />} />
        <Route path="/tender-paws/invoice-history" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

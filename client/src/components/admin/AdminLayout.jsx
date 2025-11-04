import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const AdminLayout = ({ children }) => {
  useEffect(() => {
    // Dynamically add admin CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/admin/css/sb-admin-2.min.css"; // minified CSS
    link.id = "admin-css";
    document.head.appendChild(link);

    // Optional: FontAwesome bhi load karna ho to
    const faLink = document.createElement("link");
    faLink.rel = "stylesheet";
    faLink.href = "/admin/vendor/fontawesome-free/css/all.min.css";
    faLink.id = "fa-css";
    document.head.appendChild(faLink);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(link);
      document.head.removeChild(faLink);
    };
  }, []);

  return (
    <div id="page-top">
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminLayout;

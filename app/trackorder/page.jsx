import Breadcrumb from "@/components/Breadcrumb";
import TrackOrderPage from "@/components/Trackorder/Form";
import React from "react";

const page = () => {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Acompanhar Encomenda" }, // No href means current page
        ]}
      />
      <TrackOrderPage />
    </div>
  );
};

export default page;

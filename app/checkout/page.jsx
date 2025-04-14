import Breadcrumb from "@/components/Breadcrumb";
import CheckoutPage from "@/components/checkout/CheckoutPage";
import React from "react";

const page = () => {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Carinho", href: "/" },
          { label: "Finalizar Compra" }, // No href means current page
        ]}
      />
      <CheckoutPage />
    </div>
  );
};

export default page;

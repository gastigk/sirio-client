"use client";

import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { usePathname } from "next/navigation";

import { animationCreate } from "@/utils/utils";
import HeaderOne from "../layout/headers/header";
import HeaderTwo from "./headers/header-two";
import HeaderThree from "./headers/header-three";
import FooterOne from "./footers/footer";
import FooterThree from "./footers/footer-three";
import { ChildrenType } from "@/interFace/interFace";
import BacktoTop from "@/components/common/backToTop/BacktoTop";
import OrderTrackModal from "@/components/profile/studentProfile/OrderTrackModal";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

const Wrapper = ({ children }: ChildrenType) => {

  const pathName = usePathname();
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 200);
  }, []);

  return (
    <div>
      <BacktoTop />
      {(() => {
        switch (pathName) {
          case "/":
            return <HeaderOne />;
          case "/home-two":
            return <HeaderTwo />;
          case "/home-three":
            return <HeaderThree />;
          default:
            return <HeaderThree />;
        }
      })()}
      {children}
      <OrderTrackModal />
      {(() => {
        switch (pathName) {
          case "/":
            return <FooterOne />;
          default:
            return <FooterThree />;
        }
      })()}
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
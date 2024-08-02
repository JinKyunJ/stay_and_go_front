//나의숙소 예약관리 페이지
import React from "react";
import SubLayout from "../components/layout/SubLayout";
import MainFooter from "../components/layout/MainFooter";
import { motion } from "framer-motion";
import MyAccommodationReserve from "../components/myAccReserve/MyAccReserve";

const MyAccReservePage = () => {

  return (
    <>
    <motion.div
      initial={{ opacity: 0, transform: 'translateX(100%)'}}
      animate={{ opacity: 1, transform: 'translateX(0)'}}
      transition={{ duration: 0.3 }}>
      <SubLayout pageTitle="나의 숙소 예약 관리">
        <MyAccommodationReserve />
      </SubLayout>
    </motion.div>
    <MainFooter />
    </>
  );
};

export default MyAccReservePage;

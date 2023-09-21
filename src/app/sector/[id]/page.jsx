"use client";

import SectorSection from "@/components/SectorSection";
import { secteurs } from "@/utils/Constants";
import React from "react";
// ==================================================================================================

export async function generateStaticParams() {
  return secteurs.map((s) => ({ params: { id: s.id } }));
}

const Sector = ({ params }) => {
  console.log("====================================");
  console.log(params);
  console.log("====================================");
  return <SectorSection id={params.id} />;
};

export default Sector;

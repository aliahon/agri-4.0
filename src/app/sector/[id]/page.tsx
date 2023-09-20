import SectorSection from "@/components/SectorSection";
import { secteurs } from "@/utils/Constants";
import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
// ==================================================================================================
interface SectorProps {
  params: {
    id: string;
  };
}

export async function getStaticPaths() {
  const paths = secteurs.map((secteur) => ({
    params: { id: secteur.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: SectorProps) {
  const secteur = secteurs.find((secteur) => secteur.id === params.id);
  return {
    props: {
      id: secteur?.id,
    },
  };
}

const Sector = ({ id }: { id: string }) => {
  return <SectorSection id={id} />;
};

export default Sector;

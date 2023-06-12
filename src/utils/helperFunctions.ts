import { secteurs, solutionsArr } from "./Constants";

export const getSolutionsBySectorId = (sectorId: number) => {
  return solutionsArr.filter((solution) => solution.sectorId === sectorId);
};

export const getSectorById = (sectorId: number) => {
  return secteurs.find((sector) => sector.id === sectorId);
};

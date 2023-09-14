import { secteurs, smartCitiesSolutions, solutionsDetails } from "./Constants";
import { SolutionsDetailsProps } from "./types";

export const getSolutionDetails = (
  solutionId: string,
  sector: string
): SolutionsDetailsProps => {
  // @ts-ignore
  return solutionsDetails.find((solution) => solution.id === solutionId);
};

export const getSCSolutionDetails = (
  solutionId: string,
  sector: string
): SolutionsDetailsProps => {
  // @ts-ignore
  return smartCitiesSolutions.find((solution) => solution.id === solutionId);
};

export const getSectorById = (sectorId: string) => {
  return secteurs?.find((sector) => sector?.id === sectorId) || {};
};

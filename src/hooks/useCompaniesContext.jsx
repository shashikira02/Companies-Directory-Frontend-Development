import { useContext } from "react";
import { CompaniesContext } from "../contexts/companies/CompaniesContext";

export const useCompaniesContext = () => {
  const context = useContext(CompaniesContext);
  if (!context) {
    throw new Error("useCompaniesContext must be used within CompaniesProvider");
  }
  return context;
};

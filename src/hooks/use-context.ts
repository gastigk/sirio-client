import { AppContext } from "@/context/AppProvider";
import { AppContextType } from "@/interFace/interFace";
import { useContext } from "react";

const useGlobalContext = () => {
  return useContext(AppContext) as AppContextType;
};

export default useGlobalContext;
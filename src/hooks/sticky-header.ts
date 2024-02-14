import { useContext, useEffect } from "react";

import { AppContext } from "@/context/AppProvider";
import { AppContextType } from "@/interFace/interFace";

const useScrollDirection = (element: HTMLElement | null) => {
  const { scrollDirection, setScrollDirection } = useContext(
    AppContext
  ) as AppContextType;

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > prevScrollY) {
        setScrollDirection?.("down");
      } else {
        setScrollDirection?.("up");
      }
      prevScrollY = scrollTop;
    };

    const handleClick = () => {
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      if (element) {
        element.addEventListener("click", handleClick);
      }
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
        if (element) {
          element.removeEventListener("click", handleClick);
        }
      }
    };
  }, [element, setScrollDirection]);

  return scrollDirection;
};

export default useScrollDirection;

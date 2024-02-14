export const animationCreate = () => {
  if (typeof window === "undefined") {
    console.error("window is not defined");
    return;
  }

  if (!(window as any).WOW) {
    (window as any).WOW = require("wowjs");
  }

  new (window as any).WOW.WOW({ live: false }).init();
};
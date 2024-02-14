
import { ToastContainer } from "react-toastify";

import AppProvider from "@/context/AppProvider";
import ReduxProvider from "@/redux/provider";
import { ChildrenType } from "@/interFace/interFace";
import SEO from './SEO';
import "./globals.css";
import "../style/index.scss";

export default function RootLayout({ children }: ChildrenType) {
  return (
    <>
      <html lang="es">
      <SEO pageTitle="Casa Sirio"
        font={'https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700;900&display=swap'} />
        <body suppressHydrationWarning={true}>
          <ReduxProvider>
            <AppProvider>{children}</AppProvider>
            <ToastContainer
              position="top-left"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </ReduxProvider>
        </body>
      </html>
    </>
  );
}

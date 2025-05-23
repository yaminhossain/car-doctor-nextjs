import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
// react rating css styles
import "@smastrom/react-rating/style.css";
import Footer from "@/components/Footer/Footer";
import AuthProvider from "@/providers/AuthProvider";
import { ToastContainer } from "react-toastify";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "400"],
});

export const metadata = {
  title: "Home | Car doctor",
  description: "Best car servicing center in town",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <AuthProvider>
          <Navbar></Navbar>
        </AuthProvider>
        <main className="max-w-7xl mx-auto pt-20">{children}</main>
        <ToastContainer></ToastContainer>
        <Footer></Footer>
      </body>
    </html>
  );
}

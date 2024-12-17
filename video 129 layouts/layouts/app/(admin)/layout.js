//this is the layoout of only admin root

import localFont from "next/font/local";


export const metadata = {
  title: "admin -facebook clone",
  description: "dmin page : a facebook clone",
};

export default function AdminLayout({ children }) {
  return (
    <>
    <span>admin navbar</span>
        {children}
    </>
  );
}

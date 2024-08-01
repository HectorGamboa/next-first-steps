import {NavBar} from "@/components";

export default function GeneralsLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
      <NavBar/>
      <main className=" flex flex-col items-center  p-24">
      <span>Hello Root Layout Generals</span>
      {children}
      </main>
    </>
  );
}   
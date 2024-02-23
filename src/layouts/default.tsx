import Navbar from "@/components/navbar";

const DefaultLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <main>
      <Navbar />

      {children}
    </main>
  );
};


export default DefaultLayout;
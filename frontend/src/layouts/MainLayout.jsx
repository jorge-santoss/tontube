import Header from "../components/Header";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col h-full">
      <Header />
      {children}
    </div>
  );
}

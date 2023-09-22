import Content from "@/components/Content";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Sidebar />
        <Content />
      </div>
    </>
  );
}

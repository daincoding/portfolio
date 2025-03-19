import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div>  
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <About />
      </div>
    </div>
  );
}

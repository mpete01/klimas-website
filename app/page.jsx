import Header from "./components/Header";
import BodyComponent from "./components/BodyComponent";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header/>
      <BodyComponent />
      <Footer />
    </div>
  );
}

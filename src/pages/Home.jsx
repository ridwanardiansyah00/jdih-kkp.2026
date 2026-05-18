import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import RegulationSection from "../components/RegulationSection";
import StatsSection from "../components/StatsSection";
import ThematicSection from "../components/ThematicSection";
import NewsSection from "../components/NewsSection";
import InfografisSection from "../components/InfografisSection";
import GrafikSection from "../components/GrafikSection";
import IKMSubscriptionSection from "../components/IKMSubscriptionSection";
import VisitorStatsSection from "../components/VisitorStatsSection";
import OtherJDIHSection from "../components/OtherJDIHSection";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import PublicInteractiveSection from "../components/PublicInteractiveSection";
import FloatingLeftButtons from "../components/FloatingLeftButtons";

function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
      <Hero />
      </main>
      <RegulationSection />
      <StatsSection />
      <ThematicSection />
      <NewsSection />
      <InfografisSection />
      <GrafikSection />
      <IKMSubscriptionSection />
      <VisitorStatsSection />
      <OtherJDIHSection />
      <PublicInteractiveSection />
      <Footer />
      <ScrollToTopButton />
      <FloatingLeftButtons />
    </>
  )
}

export default Home
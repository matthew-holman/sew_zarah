import HeroSection from "@/components/HeroSection";
import ProcessOverview from "@/components/ProcessOverview";
import Services from "@/components/Services";
import ExpectationSetting from "@/components/ExpectationSetting";
import WhyRepair from "@/components/WhyRepair";
import AboutMe from "@/components/AboutMe";
import ContactAndPhotoSubmission from "@/components/ContactAndPhotoSubmission";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

export default function HomePage() {
  return (
    <main id="top" className="flex flex-col overflow-x-hidden">
      {/* 1. Hero / Above the fold */}
      <Section id="home" className="bg-jade-900 scroll-mt-24" spacing="default">
        <HeroSection />
      </Section>

      {/* 2. How it works / Process */}
      <Section
        id="how-it-works"
        className="bg-jade-800 scroll-mt-24"
        spacing="loose"
      >
        <ProcessOverview />
      </Section>

      {/* 3. Services */}
      <Section
        id="services"
        className="bg-jade-700 scroll-mt-24"
        spacing="loose"
      >
        <Services />
      </Section>

      {/* 4. Expectation setting */}
      <Section
        id="pricing"
        className="bg-jade-700 scroll-mt-24"
        spacing="loose"
      >
        <ExpectationSetting />
      </Section>

      {/* 5. Why repair instead of buying new */}
      <Section
        id="why-repair"
        className="bg-jade-700 scroll-mt-24"
        spacing="loose"
      >
        <WhyRepair />
      </Section>

      {/* 6. About me */}
      <Section
        id="about-me"
        className="bg-jade-800 scroll-mt-24"
        spacing="loose"
      >
        <AboutMe />
      </Section>

      {/* 7. Contact & photo submission (primary CTA) */}
      <Section
        id="contact"
        className="bg-jade-900 scroll-mt-24"
        spacing="loose"
      >
        <ContactAndPhotoSubmission />
      </Section>

      {/* 8. Footer */}
      <Section
        className="bg-jade-950 scroll-mt-24"
        spacing="footer"
        pattern={false}
      >
        <Footer />
      </Section>
    </main>
  );
}

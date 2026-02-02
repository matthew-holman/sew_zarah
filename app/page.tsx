import HeroSection from "@/components/HeroSection";
import ProcessOverview from "@/components/ProcessOverview";
import ExpectationSetting from "@/components/ExpectationSetting";
import ContactAndPhotoSubmission from "@/components/ContactAndPhotoSubmission";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

export default function HomePage() {
  return (
    <main id="top" className="flex flex-col overflow-x-hidden">
      {/* 1. Hero / Above the fold */}
      <Section
        id="who-we-are"
        className="bg-jade-900 scroll-mt-24"
        spacing="loose"
      >
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

      {/* 3. Expectation setting */}
      <Section
        id="expectations"
        className="bg-jade-700 scroll-mt-24"
        spacing="loose"
      >
        <ExpectationSetting />
      </Section>

      {/* 4. Contact & photo submission (primary CTA) */}
      <Section
        id="contact"
        className="bg-jade-600 scroll-mt-24"
        spacing="loose"
      >
        <ContactAndPhotoSubmission />
      </Section>

      {/* 5. Footer */}
      <Section className="bg-jade-500 scroll-mt-24" spacing="loose">
        <Footer />
      </Section>
    </main>
  );
}

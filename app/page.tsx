import HeroSection from "@/components/HeroSection";
import ProcessOverview from "@/components/ProcessOverview";
import ExpectationSetting from "@/components/ExpectationSetting";
import ContactAndPhotoSubmission from "@/components/ContactAndPhotoSubmission";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* 1. Hero / Above the fold */}
      <Section className="bg-jade-900" spacing="loose">
        <HeroSection />
      </Section>

      {/* 2. How it works / Process */}
      <Section className="bg-jade-800" spacing="loose">
        <ProcessOverview />
      </Section>

      {/* 3. Expectation setting */}
      <Section className="bg-jade-700" spacing="loose">
        <ExpectationSetting />
      </Section>

      {/* 4. Contact & photo submission (primary CTA) */}
      <Section id="contact" className="bg-jade-600" spacing="loose">
        <ContactAndPhotoSubmission />
      </Section>

      {/* 5. Footer */}
      <Section className="bg-jade-500" spacing="loose">
        <Footer />
      </Section>
    </main>
  );
}

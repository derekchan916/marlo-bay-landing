import Header from "@/components/Global/Header";
import Footer from "@/components/Global/Footer";
import ContactForm from "@/components/Contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Header logoVariant="color" handleScroll={false} />
      <ContactForm />
      <Footer />
    </div>
  );
}


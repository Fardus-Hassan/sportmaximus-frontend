import Container from "@/components/shared/Container";
import Footer from "@/components/layouts/footer/Footer";
import Navbar from "@/components/layouts/header/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <Container className="py-8">{children}</Container>

      <Footer />
    </div>
  );
}

import Navbar from "@/components/Navbar";
import PageLayout from "@/components/PageLayout";
import Container from "@/components/Container";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Container className="py-8">
        <h1 className="text-2xl font-bold mb-6 text-text-primary">
          PageLayout Test
        </h1>
      
      {/* Three Column Layout Example */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-text-primary">3 Column Layout (Middle Large, Sides Small)</h2>
        <PageLayout
          layout="three-column"
          stickyLeft={true}
          stickyRight={true}
          leftColumn={
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Left Sidebar</h3>
              <p className="text-sm text-gray-600">This is sticky</p>
              <div className="space-y-2 mt-4">
                <div className="p-2 bg-white rounded">Item 1</div>
                <div className="p-2 bg-white rounded">Item 2</div>
                <div className="p-2 bg-white rounded">Item 3</div>
              </div>
            </div>
          }
          middleColumn={
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Middle Column (Scrollable)</h3>
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="mb-4 p-4 bg-white rounded">
                  <p>Content item {i + 1} - This column scrolls</p>
                </div>
              ))}
            </div>
          }
          rightColumn={
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Right Sidebar</h3>
              <p className="text-sm text-gray-600">This is sticky</p>
              <div className="space-y-2 mt-4">
                <div className="p-2 bg-white rounded">Item A</div>
                <div className="p-2 bg-white rounded">Item B</div>
                <div className="p-2 bg-white rounded">Item C</div>
              </div>
            </div>
          }
        />
      </div>

      {/* Two Column Left Large Example */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-text-primary">2 Column Layout (Left Large, Right Small)</h2>
        <PageLayout
          layout="two-column-left-large"
          stickyRight={true}
          leftColumn={
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Left Column (Large - Scrollable)</h3>
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} className="mb-4 p-4 bg-white rounded">
                  <p>Content {i + 1} - Scrolls here</p>
                </div>
              ))}
            </div>
          }
          rightColumn={
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Right Sidebar (Sticky)</h3>
              <p className="text-sm text-gray-600">This stays fixed</p>
              <div className="mt-4 text-text-primary/60 text-sm">
                (Logo removed here)
              </div>
            </div>
          }
        />
      </div>

      {/* Two Column Right Large Example */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-text-primary">2 Column Layout (Right Large, Left Small)</h2>
        <PageLayout
          layout="two-column-right-large"
          stickyLeft={true}
          leftColumn={
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Left Sidebar (Sticky)</h3>
              <p className="text-sm text-gray-600">This stays fixed</p>
              <div className="mt-4 text-text-primary/60 text-sm">
                (Logo removed here)
              </div>
            </div>
          }
          rightColumn={
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Right Column (Large - Scrollable)</h3>
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} className="mb-4 p-4 bg-white rounded">
                  <p>Content {i + 1} - Scrolls here</p>
                </div>
              ))}
            </div>
          }
        />
      </div>
      </Container>
      <Footer />
    </div>
  );
}

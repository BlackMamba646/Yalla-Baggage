import DemoOne from "@/components/demo";
import Footer4Col from "@/components/ui/footer-column";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans overflow-x-hidden bg-white">
      <div className="flex-1 w-full flex flex-col">
        <DemoOne />
      </div>
      <div className="w-full">
        <Footer4Col />
      </div>
    </main>
  );
}

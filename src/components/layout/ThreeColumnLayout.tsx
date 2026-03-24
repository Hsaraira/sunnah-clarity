import Sidebar from "./Sidebar";
import TableOfContents from "./TableOfContents";
import MobileTOC from "./MobileTOC";

interface ThreeColumnLayoutProps {
  children: React.ReactNode;
}

export default function ThreeColumnLayout({ children }: ThreeColumnLayoutProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div className="lg:grid lg:grid-cols-[220px_1fr_200px] lg:gap-12">
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        <main className="min-w-0">
          {children}
        </main>

        <div className="hidden lg:block">
          <TableOfContents />
        </div>
      </div>
      <MobileTOC />
    </div>
  );
}

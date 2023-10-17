import { Footer, Heading, Heros } from "./_components";

export default function MarketingPage() {
  return (
    <div className="flex flex-col min-h-full">
      <div className="flex flex-col flex-1 items-center justify-center md:justify-start text-center gap-y-8">
        <Heading />
        <Heros />
      </div>
      <Footer />
    </div>
  );
}

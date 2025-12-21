import { NavBar } from "@/components/nav/nav-bar";
import { WikiCard } from "@/components/ui/wiki-card";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main className="max-w-2-xl mx-auto mt-10 flex flex-col gap-6">
        <WikiCard
          title="Entry one"
          author="Simba the One"
          date="Nov 2025"
          summary="Well..."
          href="/"
        />
        <WikiCard
          title="Entry 2"
          author="Simba the One"
          date="Nov 2025"
          summary="What's up"
          href="/"
        />
      </main>
    </div>
  );
}

import { ModeToggle } from "@/components/ui/darkmode";

export default function Home() {
  return (
    <main className="relative min-h-screen p-4">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <h1>portfolio begins</h1>
    </main>
  );
}

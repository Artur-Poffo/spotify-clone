import { Footer } from "@/components/Footer";
import { NavButtons } from "@/components/NavButtons";
import { PlaylistCard } from "@/components/PlaylistCard";
import { Sidebar } from "@/components/Sidebar";
import { SuggestionCard } from "@/components/SuggestionCard";

export default function Home() {
  return (
    <div className="h-screen flex flex-col" >
      <div className="flex flex-1" >
        <Sidebar />

        <main className="flex-1 p-6" >
          <NavButtons />

          <h1 className="font-semibold text-3xl mt-10" >Good Morning</h1>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <SuggestionCard />
            <SuggestionCard />
            <SuggestionCard />
            <SuggestionCard />
            <SuggestionCard />
            <SuggestionCard />
          </div>

          <h2 className="font-semibold text-2xl mt-10" >Made for Diego Schell Fernandes</h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
          </div>
        </main>
      </div>
      
     <Footer />
    </div>
  )
}

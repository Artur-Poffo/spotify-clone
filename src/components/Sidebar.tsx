import { Home as HomeIcon, Search, Library } from "lucide-react"
import { NavLink } from "./NavLink"
import { PlaylistLink } from "./PlaylistLink"

export function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6" >
      <nav className="space-y-4 text-zinc-300" >
        <NavLink text="Home" icon={<HomeIcon/>} />
        <NavLink text="Search" icon={<Search/>} />
        <NavLink text="Your Library" icon={<Library/>} />
      </nav>

      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
        <PlaylistLink text="Top Brasil" />
        <PlaylistLink text="Top Internacionais" />
        <PlaylistLink text="Top Hits Winter" />
        <PlaylistLink text="Cachorrinho Pitoco" />
      </nav>
    </aside>
  )
}
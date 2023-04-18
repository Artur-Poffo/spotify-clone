import { PlaylistResume } from "./PlaylistResume";
import { MusicPlayer } from "./MusicPlayer";
import { MusicOptions } from "./MusicOptions";

export function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between" >
      <PlaylistResume />

      <MusicPlayer />

      <MusicOptions />
    </footer>
  )
}
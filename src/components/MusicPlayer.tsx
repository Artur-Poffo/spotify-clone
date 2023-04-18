import {Repeat, Shuffle, SkipBack, SkipForward } from "lucide-react";
import { PlayButton } from "./PlayButton";

export function MusicPlayer() {
  return (
    <div className="flex flex-col items-center gap-2" >
      <div className="flex items-center gap-6" >
        <Shuffle size={20} cursor={'pointer'} className="text-zinc-200" />
        <SkipBack size={20} cursor={'pointer'} className="text-zinc-200" />

         <PlayButton variant="secondary" />

        <SkipForward size={20} cursor={'pointer'} className="text-zinc-200" />
        <Repeat size={20} cursor={'pointer'} className="text-zinc-200" />
      </div>

      <div className="flex items-center gap-1" >
        <span className="text-xs text-zinc-500">0:31</span>
        <div className="w-96 h-1 bg-zinc-600 rounded-full" >
          <div className="w-32 h-1 bg-white rounded-full" ></div>
        </div>
        <span className="text-xs text-zinc-500">3:23</span>
      </div>
    </div>
  )
}
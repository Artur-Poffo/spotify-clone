import { Laptop2, LayoutList, Maximize2, Mic2, Volume } from "lucide-react";

export function MusicOptions() {
  return (
    <div className="flex items-center gap-2" >
      <Mic2 size={20} cursor={'pointer'} />
      <LayoutList size={20} cursor={'pointer'} />
      <Laptop2 size={20} cursor={'pointer'} />
      <div className="flex items-center" >
        <Volume size={20} cursor={'pointer'} />
        <div className="w-24 h-1 bg-zinc-600 rounded-full" >
          <div className="w-16 h-1 bg-white rounded-full" ></div>
        </div>
      </div>
      <Maximize2 size={20} cursor={'pointer'} />
    </div>
  )
}
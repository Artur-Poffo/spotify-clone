import { ChevronLeft, ChevronRight } from "lucide-react";

export function NavButtons() {
  return (
    <div className="flex items-center gap-4">
      <button type="button" className="p-1 bg-black/40 rounded-full">
        <ChevronLeft />
      </button>
      <button type="button" className="p-1 bg-black/40 rounded-full">
        <ChevronRight />
      </button>
    </div>
  )
}
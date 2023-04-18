import { Play } from "lucide-react";
import Image from "next/image";
import { PlayButton } from "./PlayButton";

export function SuggestionCard() {
  return (
    <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors" >
      <Image src={"/album.jpg"} width={104} height={104} alt="Imagem do album" />
      <strong>Wasting Light</strong>

      <PlayButton />
    </a>
  )
}
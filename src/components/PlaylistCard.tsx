import Image from "next/image";

export function PlaylistCard() {
  return (
    <a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
    <Image src={"/album.jpg"} className="w-full" width={120} height={120} alt="Imagem do album" />
    <strong className="font-semibold" >Daily Mix 1</strong>
    <span className="text-sm text-zinc-400" >Wallows, COIN, girl in red and more</span>
  </a>
  )
}
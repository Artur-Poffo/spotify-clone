import Image from "next/image";

export function PlaylistResume() {
  return (
    <div className="flex items-center gap-4" >
      <Image src={"/album.jpg"} width={70} height={70} alt="Imagem do album" />
      <div className="flex flex-col gap-px" >
        <strong className="font-normal" >Wasting Light</strong>
        <span className="text-xs text-zinc-400" >Foo Fighters</span>
      </div>
    </div>
  )
}
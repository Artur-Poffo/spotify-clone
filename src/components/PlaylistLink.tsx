export function PlaylistLink({text}: {text: string}) {
  return (
    <a href="#" className="text-zinc-400 text-sm hover:text-zinc-100 transition-colors">
      {text}
    </a>
  )
}
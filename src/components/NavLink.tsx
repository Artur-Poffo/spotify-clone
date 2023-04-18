import { LucideIcon } from "lucide-react"

interface NavLinkProps {
  icon: any
  text: string
}

export function NavLink({ text, icon }: NavLinkProps) {
  return (
    <a href="#" className="flex items-center gap-4 font-semibold text-sm hover:text-zinc-50 transition-colors" >
      {icon}
      {text}
    </a>
  )
}
import { Play } from "lucide-react";

interface PlayButtonProps {
  variant?: 'default' | 'secondary'
}

export function PlayButton({variant = 'default'}: PlayButtonProps) {
  const defaultStyles = "text-black flex items-center justify-center pl-1 rounded-full"
  
  const defaultVariantStyle = `${defaultStyles} w-12 h-12 bg-green-400 invisible group-hover:visible ml-auto mr-8`
  const secondaryStyles = `${defaultStyles} w-10 h-10 bg-white`

  return (
    <button className={variant === 'default' ? defaultVariantStyle : secondaryStyles} >
      <Play />
    </button>
  )
}
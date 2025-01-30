"use client"

import { useTheme } from "@/contexts/theme-context"
import { Button } from "@/components/ui/button"
import { Moon, Leaf } from "lucide-react"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "nature" : "dark")}
      className="rounded-full"
    >
      {theme === "dark" ? (
        <Leaf className="h-[1.2rem] w-[1.2rem] text-emerald-400" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] text-blue-400" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}


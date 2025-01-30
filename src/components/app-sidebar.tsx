"use client"

import { Home, Calendar, Plus, CalendarDays } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { title: "Home", icon: Home, href: "/" },
  { title: "My Day", icon: Calendar, href: "/my-day" },
  { title: "Add Task", icon: Plus, href: "/add-task" },
  { title: "Weekly Schedule", icon: CalendarDays, href: "/weekly-schedule" },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 h-screen glass-effect border-r border-white/10 flex flex-col">
      <div className="p-6">
        <h1 className="text-xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
          TIME PACER
        </h1>
      </div>
      <nav className="flex-1 px-3 py-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center space-x-3 px-4 py-3 mb-2 rounded-lg transition-all duration-200
              ${
                pathname === item.href
                  ? "bg-green-600 text-white shadow-lg shadow-green-500/25"
                  : "text-muted-foreground hover:bg-white/10"
              }`}
          >
            <item.icon className={`h-5 w-5 ${pathname === item.href ? "text-white" : "text-green-400"}`} />
            <span className="font-medium">{item.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}


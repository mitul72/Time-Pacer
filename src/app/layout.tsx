import { Inter } from "next/font/google";
import "./globals.css";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/contexts/theme-context";
import { ThemeSwitcher } from "@/components/theme-switcher";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Time Pacer",
  description: "A simple and effective time management app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <SidebarProvider>
            <div className="flex h-screen w-screen">
              <AppSidebar />
              <div className="flex-1 flex flex-col h-screen overflow-hidden">
                <header className="flex justify-end p-4 border-b border-white/10">
                  <ThemeSwitcher />
                </header>
                <main className="flex-1 overflow-auto">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    {children}
                  </div>
                </main>
              </div>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

"use client";

import { useRouter, usePathname } from "next/navigation";
import type { User } from "@supabase/supabase-js";
import {
  Home03,
  File06,
  TrendUp01,
  Settings01,
  LogOut01,
} from "@untitledui/icons";
import { useAuth } from "@/providers/auth-provider";
import { Button } from "@/components/base/buttons/button";
import { PurchaseRatesLogo } from "@/components/foundations/logo/purchaserates-logo";

interface PortalLayoutProps {
  user: User | null;
  children: React.ReactNode;
}

const navItems = [
  { icon: Home03, label: "Dashboard", href: "/portal" },
  { icon: File06, label: "Documents", href: "/portal/documents" },
  { icon: TrendUp01, label: "Rates", href: "/portal/rates" },
  { icon: Settings01, label: "Settings", href: "/portal/settings" },
];

export function PortalLayout({ user, children }: PortalLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
    router.refresh();
  };

  return (
    <div className="flex h-screen bg-secondary">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-col border-r border-secondary bg-primary lg:flex">
        <div className="flex h-20 items-center border-b border-secondary px-6">
          <PurchaseRatesLogo className="h-8" />
        </div>

        <nav className="flex-1 px-4 py-6">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href ||
                (item.href !== "/portal" && pathname.startsWith(item.href));
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-brand-primary text-brand-secondary"
                        : "text-secondary hover:bg-secondary hover:text-primary"
                    }`}
                  >
                    <item.icon className="size-5" />
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-secondary p-4">
          <div className="mb-3 px-3">
            <p className="truncate text-sm font-medium text-primary">{user?.email}</p>
            <p className="text-xs text-tertiary">Homebuyer</p>
          </div>
          <button
            onClick={handleSignOut}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-secondary transition-colors hover:bg-secondary hover:text-primary"
          >
            <LogOut01 className="size-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Mobile Header */}
        <header className="flex h-16 items-center justify-between border-b border-secondary bg-primary px-4 lg:hidden">
          <PurchaseRatesLogo className="h-8" />
          <Button color="secondary" size="sm" onPress={handleSignOut}>
            Sign Out
          </Button>
        </header>

        <div className="p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}

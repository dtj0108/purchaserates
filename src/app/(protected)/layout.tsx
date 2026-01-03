import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase";

// Force dynamic rendering - protected routes require auth checks on every request
export const dynamic = 'force-dynamic';

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return <>{children}</>;
}

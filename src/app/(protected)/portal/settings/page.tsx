import { createSupabaseServerClient } from "@/lib/supabase";
import { SettingsContent } from "./settings-content";

export default async function SettingsPage() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  return <SettingsContent user={user} />;
}

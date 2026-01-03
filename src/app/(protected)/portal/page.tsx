import { createSupabaseServerClient } from "@/lib/supabase";
import { PortalContent } from "./portal-content";

export default async function PortalPage() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  return <PortalContent user={user} />;
}

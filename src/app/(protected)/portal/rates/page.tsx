import { createSupabaseServerClient } from "@/lib/supabase";
import { RatesContent } from "./rates-content";

export default async function RatesPage() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  return <RatesContent user={user} />;
}

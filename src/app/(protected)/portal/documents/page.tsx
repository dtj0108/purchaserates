import { createSupabaseServerClient } from "@/lib/supabase";
import { DocumentsContent } from "./documents-content";

export default async function DocumentsPage() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  return <DocumentsContent user={user} />;
}

import { createClient } from "@supabase/supabase-js";

export default function SupabaseClient() {
  const client = createClient(
    "https://vdttmkazftyzrogtrjoq.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkdHRta2F6ZnR5enJvZ3Ryam9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE5MTM3ODUsImV4cCI6MjAzNzQ4OTc4NX0.2quEAlPDxWPl0CxlPfUeQOkR1m39THe-onc3fu4YXj4"
  );

  return client;
}

import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://djqgijgdhnvkzfldtfaa.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqcWdpamdkaG52a3pmbGR0ZmFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM5NDk4NDQsImV4cCI6MjA1OTUyNTg0NH0.Y2fM44N3Q9C5a_it0-ncToLEnUBq0QcQ_vcz_WNtN_c";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

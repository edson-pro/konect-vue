import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qcyzgwifgnopjobqycjm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjeXpnd2lmZ25vcGpvYnF5Y2ptIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI1MDAwOTEsImV4cCI6MTk4ODA3NjA5MX0.NP0PdnTXiyfF-6fsT6qHhPDaLV50m1_vajiqxbHUMxU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

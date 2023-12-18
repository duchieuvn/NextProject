import { createClient } from "@supabase/supabase-js";
const supabaseURL = "https://ibqmlzzvtxhdsbycdzyw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlicW1senp2dHhoZHNieWNkenl3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTY3NTA0MCwiZXhwIjoyMDE1MjUxMDQwfQ.c3Ry59novmFXQvRC3yB6bvJG19pxPANmjEpUtDmQd6E";
const supabase = createClient(supabaseURL, supabaseKey);

export default supabase;

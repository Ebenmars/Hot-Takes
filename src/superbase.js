
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://acnuilrhdcvfmphsdyog.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjbnVpbHJoZGN2Zm1waHNkeW9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIyNDUzNjEsImV4cCI6MjAxNzgyMTM2MX0.UEVjLVN5KRa3dhr17ay4bYIzzcq1-ogh703z5z7w0sc";
const supabase = createClient(supabaseUrl, supabaseKey);
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iccpktxyvhfbisxqpdkp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljY3BrdHF5eWhmYml4c3FwZGtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3NjI4MDYsImV4cCI6MjA3ODMzODgwNn0.VPug1NH3rXFAeeLFWel4tHLgXj9jFz1eKHlATu7-Qwc';
export const supabase = createClient(supabaseUrl, supabaseKey);
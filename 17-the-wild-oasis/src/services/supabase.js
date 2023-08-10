import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://wktrvjxrhrkngikeoyjd.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrdHJ2anhyaHJrbmdpa2VveWpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE0ODQ4MzUsImV4cCI6MjAwNzA2MDgzNX0.nqxXU8UtFsP46AGl8piJt2SOhjoCWT9lcYXM1p4XIDs';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

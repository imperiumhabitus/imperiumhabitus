import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xgxofupeypzouhbiroij.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhneG9mdXBleXB6b3VoYmlyb2lqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3ODgyNDAsImV4cCI6MjA2NTM2NDI0MH0._ZlLLx_VvCPZ9IybkV71xSsegi2jyMoono--J2Ow90M';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
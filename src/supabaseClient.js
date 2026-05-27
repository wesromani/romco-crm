import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://yambvgpaymitrjcrzpns.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_p-P_z4IjOYOpaeUbKlF7YQ_VKJtkr9T'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

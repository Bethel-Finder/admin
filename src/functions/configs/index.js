let { createClient } = require('@supabase/supabase-js') 

export const supabase = () => {
   return createClient('https://uxodgfvjaublmxwvvwwp.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDUyMDEzNSwiZXhwIjoxOTU2MDk2MTM1fQ.udbYrrlX3vQgKV-0sGt6ZSEc_Oo0ElR0KIWiw_aPeq4')
}



export const key = () => {
   return {
      SECRETE: '6d066956-4af5-4a19-99eb-d33f7d27a9de', 
      OTPAPIKEY : '345c4a1f06dc91d01ae427c5028290696e8e80b0038eb16ef43ca5f6fea755f9',
      OTPAPIUSERNAME : 'unboxAPP'
   }
}
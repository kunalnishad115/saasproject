
// 'use server';

// import {auth} from "@clerk/nextjs/server";
// // import supabase{createSupabaseClient} from "@/lib/";
// import createSupabaseClient from "@/lib/supabase";
// export async function createCompanion(formData : CreateCompanion) {
//   const{userId : author}= await auth();
//   const supabase = createSupabaseClient();
//   const {data, error} = await supabase
//   .from('companions')
//   .insert({...formData, author})
//   .select()
//   if(error || !data){
//     throw new Error(error?.message || 'Failed to create companion');
//   }
//   return data[0];
    
// }

'use server';
import {auth} from "@clerk/nextjs/server";
import {createSupabaseClient} from "@/lib/supabase";
// import { revalidatePath } from "next/cache";

export const createCompanion = async (formData: CreateCompanion) => {
    const { userId: author } = await auth();
    const supabase = createSupabaseClient();

    const { data, error } = await supabase
        .from('companions')
        .insert({...formData, author })
        .select();

    if(error || !data) throw new Error(error?.message || 'Failed to create a companion');

    return data[0];
}
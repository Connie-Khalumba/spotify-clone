import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { headers, cookies } from "next/headers";

const getSongs = async (): Promise<Song[]> => {
 const supabse = createServerComponentClient({
    cookies: cookies
 });

 const { data, error } = await supabse
 .from('songs')
 .select('*')
 .order('id', { ascending: false });

if (error) {
    console.log(error);
}
 
}
"use client"

import { Song } from "@/types";

interface PageContentProps {
    songs: Song[];
}

const PageContent: React.FC<PageContentProps> = ({
    songs,
}) => {
    if (songs.length === 0) {
        return(
        <div className="mt-4 text-neutral-400">
            No songs found. 
        </div>
        )
    }
    return (
<div
  className="
    grid 
    grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
>
   
</div>
    )
}

export default PageContent;
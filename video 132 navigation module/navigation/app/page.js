"use client"
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchparams = useSearchParams()
  return (
      <div>
        main page and the search parems of blog is {searchparams.get("blog")} and source is {searchparams.get("source")}
        {/* the search reselt of =>  http://localhost:3000/?blog=python&source=sekhar
          will giv => main page and the search parems of blog is python and source is sekhar */}
      </div>
  );
}

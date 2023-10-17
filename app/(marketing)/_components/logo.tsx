import Image from "next/image";
import { Poppins } from "next/font/google";

import { images } from "@/assets";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function Logo() {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image src={images.logo} alt="Logo" width="40" height="40" />
      <p className={cn("font-semibold", font.className)}>Notion</p>
    </div>
  );
}

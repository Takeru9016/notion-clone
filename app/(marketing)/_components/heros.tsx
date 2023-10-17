import { images } from "@/assets";
import Image from "next/image";

export default function Heros() {
  return (
    <div className="flex flex-col justify-center items-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
          <Image
            className="object-contain"
            src={images.documents}
            alt="Documents"
            fill
          />
        </div>
        <div className="relative h-[400px] w-[400px] hidden md:block">
          <Image
            className="object-contain"
            src={images.reading}
            alt="Documents"
            fill
          />
        </div>
      </div>
    </div>
  );
}

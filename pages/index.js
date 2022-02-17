import Image from "next/image";
import cat1 from "../public/images/cat1.gif";
import cat2 from "../public/images/cat2.gif";
import cat3 from "../public/images/cat3.gif";

export default function Home() {
  let cats = [cat1, cat2, cat3];
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen space-y-8 lg-flex-row">
      <h1 className="text-3xl">The Cat App</h1>
      {cats.map((c, i) => {
        return (
          <div
            key={i}
            className="relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4"
          >
            <Image
              objectFit="cover"
              src={c}
              alt="Pic of cat"
              layout="fill"
              priority
            />
          </div>
        );
      })}
    </div>
  );
}

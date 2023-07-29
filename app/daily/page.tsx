import Image from "next/image";
import { dailyType } from "../page";

async function getData(): Promise<dailyType> {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`
  );
  return res.json();
}

export default async function Home() {
  const dailyImage = await getData();
  return (
    <main className="flex min-h-screen flex-col gap-6 items-center p-24">
      <h1>{dailyImage?.title}</h1>
      <article className="flex flex-col md:flex-row gap-10">
        <Image
          src={dailyImage?.url}
          alt="Image of day"
          width={512}
          height={512}
          className="rounded-lg w-1/2"
        />
        <p className="w-1/2">{dailyImage.explanation}</p>
      </article>
    </main>
  );
}

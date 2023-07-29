import Image from "next/image";
import Link from "next/link";

export interface dailyType {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

async function getData(): Promise<dailyType> {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`
  );
  return res.json();
}

export default async function Home() {
  const dailyImage = await getData();
  return (
    <main className="flex min-h-screen w-2/3 m-auto flex-col items-center p-24">
      <Link href="/daily">
        <h1 className="text-center mb-6">{dailyImage?.title}</h1>
        <Image
          src={dailyImage?.url}
          alt="Image of day"
          width={512}
          height={512}
          className="rounded-lg"
        />
      </Link>
    </main>
  );
}

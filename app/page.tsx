import Image from "next/image";

interface dailyType {
  date: string;
  explanation: string;
  hdUrl: string;
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{dailyImage?.title}</h1>
      <Image
        src={dailyImage?.url}
        alt="Image of day"
        width={256}
        height={256}
      />
    </main>
  );
}

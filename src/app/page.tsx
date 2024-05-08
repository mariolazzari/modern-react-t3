import Image from "next/image";

const mockUrls = [
  "https://utfs.io/f/a50486de-c57d-4205-9548-eeb2f655e0f2-p8urrv.webp",
  "https://utfs.io/f/46e5bf9b-f98a-4571-ace3-8442993b425d-1riaj6.jpeg",
  "https://utfs.io/f/a8092a8f-9d9f-435d-9e6e-41b839dde84f-kwi98f.jpg",
  "https://utfs.io/f/49436ae6-3daf-4341-ab1d-ed144a920f6e-v73ai5.jpg",
];

const mockImages = mockUrls.map((url, idx) => ({
  id: idx + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((img) => (
          <div key={img.id} className="w-48">
            <img src={img.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}

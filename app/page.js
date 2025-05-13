import PwaInstall from "@/components/pwa-install";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-5 bg-gray-800">
      <Link
        className="px-6 py-3 bg-gray-100 rounded"
        href="/javascript-guidebook-en"
      >
        👉 JavaScript Guidebook
      </Link>
      <PwaInstall />
    </div>
  );
};

export default page;

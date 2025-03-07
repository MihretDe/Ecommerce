import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white px-4">
      <h1 className="text-6xl font-bold text-black">404 Not Found</h1>
      <p className="text-gray-500 mt-2">Your visited page not found. You may go home page.</p>
      <Link href="/">
        <button className="mt-6 px-6 py-3 bg-red-500 text-white text-lg rounded-md hover:bg-red-600 transition">
          Back to home page
        </button>
      </Link>
    </div>
  );
}

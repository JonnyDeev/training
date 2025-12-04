export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white">
      <h1 className="text-5xl font-extrabold mb-4 animate-pulse">
        TestPage is LIVE ⚡
      </h1>
      <p className="text-xl opacity-90">
        Next.js + Tailwind deployed in under 30 min.
      </p>
      <a
        href="https://twitter.com/intent/tweet?text=Just%20deployed%20my%20first%20Next.js%20%2B%20Tailwind%20site%20in%20%3C30%20min%20%23100DaysOfCode"
        target="_blank"
        className="mt-8 px-6 py-3 bg-white text-purple-900 rounded-full font-semibold hover:scale-105 transition"
      >
        Brag on Twitter
      </a>
    </main>
  );
}
export default function Home() {
  return (
    <main className="p-8">
      <h1 className="mb-4 text-4xl font-bold">Welcome to QCGO!</h1>
      <p className="mb-8 text-lg">Discover the vibrant culture and hidden gems of Quezon City</p>

      <div className="p-6 text-white rounded-lg bg-primary">
        <h2 className="mb-2 text-2xl font-bold">Start Your Adventure</h2>
        <p>Explore the best attractions, food, and experiences in Quezon City.</p>
        <button className="px-4 py-2 mt-4 font-bold text-white transition duration-300 rounded bg-accent hover:bg-red-700">
          Explore Now
        </button>
      </div>
    </main>
  );
}

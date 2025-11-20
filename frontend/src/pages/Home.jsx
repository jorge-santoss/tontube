// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { fetchVideos } from "../api/videos";
import Card from "../components/Card";

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const response = await fetchVideos(); // Axios
        if (cancelled) return;
        setVideos(response.data || []);
      } catch (err) {
        if (cancelled) return;
        console.error(err);
        setError("Impossible de charger les vidéos.");
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="flex flex-row h-[calc(100%-56px)]">
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-white dark:bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {loading && (
            <>
              {/* Skeleton simple */}
              <div className="h-52 w-full rounded-xl bg-neutral-800 animate-pulse" />
              <div className="h-52 w-full rounded-xl bg-neutral-800 animate-pulse" />
              <div className="h-52 w-full rounded-xl bg-neutral-800 animate-pulse" />
            </>
          )}

          {error && !loading && (
            <p className="col-span-full text-red-500 text-sm">{error}</p>
          )}

          {!loading &&
            !error &&
            videos.map((item, index) => (
              <Card key={item.id ?? index} video={item} />
            ))}
        </div>
      </div>
    </main>
  );
}

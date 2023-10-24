import DisplaySection from './components/DisplaySection';

export default function Home() {
  return (
    <div className="transition">
      <DisplaySection label="Trending Movies" />
      <DisplaySection label="Trending Web Series" />
    </div>
  );
}

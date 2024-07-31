import DisplaySection from './components/DisplaySection';
temp line fork test
export default function Home() {
  return (
    <div className="transition">
      <DisplaySection label="Trending Movies" />
      <DisplaySection label="Trending Web Series" />
    </div>
  );
}

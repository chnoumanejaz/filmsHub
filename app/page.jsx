import DisplaySection from './components/DisplaySection';
// Noman Ali Fork Comment
export default function Home() {
  return (
    <div className="transition">
      <DisplaySection label="Trending Movies" />
      <DisplaySection label="Trending Web Series" />
    </div>
  );
}

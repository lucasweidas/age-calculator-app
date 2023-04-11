import Card from './components/Card';

export default function App() {
  return (
    <div>
      <main className="flex min-h-screen w-full items-center justify-center px-4">
        <h1 className="sr-only">Fill in the fields below to find out how many years, months and days have passed since you were born</h1>
        <Card />
      </main>
    </div>
  );
}

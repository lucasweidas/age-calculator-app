import Card from './components/Card';

export default function App() {
  return (
    <div>
      <main className="flex min-h-screen w-full items-center justify-center px-4">
        <h1 className="sr-only">Fill out the fields below to find out your age</h1>
        <Card />
      </main>
    </div>
  );
}

import BusSchedule from './components/bus-schedule';

export default function App() {
  return (
    <main className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 p-4 md:p-8">
      <a className="text-sm text-white" href={'https://t.me/dinmuhammad05'}>
        Powered by @dinmuhammad05
      </a>
      <BusSchedule />
    </main>
  );
}

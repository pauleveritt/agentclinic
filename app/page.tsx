export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <main className="flex flex-col items-center gap-8 text-center">
        <h1 className="text-4xl font-bold">AgentClinic</h1>
        <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
          PetClinic for AI coding agent mental health. Coding agents are doing a
          lot of work. It&apos;s stressful! Let&apos;s build a clinic where they
          can get help with their issues.
        </p>
      </main>
    </div>
  )
}

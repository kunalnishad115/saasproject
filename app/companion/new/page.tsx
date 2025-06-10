import CompanionForm1 from "@/components/CompanionForm";


export default function NewCompanion() {
  return (
    <main className="lg:w-1/3 md:w-2/3 w-full mx-auto flex items-center justify-center min-h-screen px-4">
      <article className="w-full gap-4 flex flex-col">
        <h1 className="text-2xl font-bold text-center">
          Companion Builder
        </h1>
        <CompanionForm1 />
      </article>
    </main>
  )
}
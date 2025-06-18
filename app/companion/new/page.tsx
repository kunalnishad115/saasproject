import CompanionForm1 from "@/components/CompanionForm";
import { newCompanionPermissions } from "@/lib/actions/companion.action";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default async function  NewCompanion() {

  const { userId } = await auth();
  if (!userId) {
    redirect("/sign-in");
  }
     const canCreateCompanion=await newCompanionPermissions();
  return (
    <main className="lg:w-1/3 md:w-2/3 w-full mx-auto flex items-center justify-center min-h-screen px-4">
       {canCreateCompanion ? (
      <article className="w-full gap-4 flex flex-col">
        <h1 className="text-2xl font-bold text-center">
          Companion Builder
        </h1>
        <CompanionForm1 />
      </article>
       ):(


         <article className="companion-limit">
                        <Image src="/images/limit.svg" alt="Companion limit reached" width={360} height={230} />
                        <div className="cta-badge">
                            Upgrade your plan
                        </div>
                        <h1>You’ve Reached Your Limit</h1>
                        <p>You’ve reached your companion limit. Upgrade to create more companions and premium features.</p>
                        <Link href="/subscription" className="btn-primary w-full justify-center" >
                            Upgrade My Plan
                        </Link>
                    </article>
                )}



    </main>
  )
}
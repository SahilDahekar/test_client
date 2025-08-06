import Image from "next/image"
import { auth, login, logout } from "./actions"

export default async function Home() {
  const subject = await auth()

  return (
    <div className="">
      <main className="p-4">
        <div className="p-4">
          {subject ? (
            <div>
              <p className="my-2">
                Logged in as <code>{subject.properties.name}</code>.
              </p>
              <div className="flex items-center gap-4">
                <Image height={48} width={48} alt="profile picture" className="rounded-full" src={subject.properties.picture}/>
                <div className="flex flex-col">
                  <code className="font-semibold text-xl">{subject.properties.name}</code>
                  <code className="text-sm text-slate-400">{subject.properties.email}</code>
                </div>
              </div>

              
            </div>
          ) : (
            <>
              <p>No Logged in User</p>
            </>
          )}
        </div>

        <hr />

        <div className="p-4">
          {subject ? (
            <form action={logout}>
              <button className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150 cursor-pointer">Logout</button>
            </form>
          ) : (
            <form action={login}>
                <button className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150 cursor-pointer">
                    <Image height={6} width={6} className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
                    <span>Login with Google</span>
                </button>
            </form>
          )}
        </div>
      </main>
    </div>
  )
}
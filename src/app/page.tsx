 
import SignIn from "./components/signing";
import SignOut from "./components/signout";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  const user = session?.user;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {!user ? <SignIn /> : <SignOut />}

        <p>Using Auth.js to Authenticate with Oauth and protecting route</p>
        <p>https://authjs.dev/</p>
        <p>After signing in, you will be able to see your user information in the console.</p>

      </main>
    </div>
  );
}

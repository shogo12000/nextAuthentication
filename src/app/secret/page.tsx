import { auth } from "@/auth";
import SignOut from "../components/signout";

export default async function Secret() {
  const session = await auth();
  console.log(session);
  const user = session?.user;

  // if(!session) return <div> Not authenticated</div>

  return (
    <>
      <div className="flex gap-10 justify-center items-center">
        {user?.image && (
          <img
            src={user.image}
            alt={user.name || "User Avatar"}
            className="w-10 h-10 rounded-full border shadow"
          />
        )}
        <h1 className="text-2xl text-green-700">
          Welcome to private page {user?.name}
        </h1>
      </div>

      <div className="flex justify-center items-center mt-10">
        <SignOut />
      </div>
    </>
  );
}

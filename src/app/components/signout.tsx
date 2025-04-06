import { signOut } from "@/auth";

export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
    >
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
      >
        SignOut Google
      </button>
    </form>
  );
}

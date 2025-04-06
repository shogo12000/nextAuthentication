import { auth, signOut } from "@/auth";

export default async function SignIn() {
  const session = await auth();
  console.log(session?.user);
  const user = session?.user;

  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <h1>Welcome {user?.name}</h1>
      <img src="https://lh3.googleusercontent.com/a/ACg8ocJy1ksQ9pQ1KKhGWnDoQK3GHYMW_XcF6npZs80K7Tsz253E=s96-c" className="w-10 h-10 rounded-full border shadow"/>
      <button type="submit">SignOut with Google</button>
      <p>{user?.image}</p>
      {user?.image && (
        <img
          src={user.image}
          alt={user.name || "User Avatar"} 
          className="w-10 h-10 rounded-full border shadow"
        />
      )}
    </form>
  );

  //   return user ?(
  //     <form
  //       action={async () => {
  //         "use server"
  //         await signOut()
  //       }}
  //     >
  //     <h1>Welcome {user.name}</h1>
  //       <button type="submit">SignOut with Google</button>

  //     </form>
  //   ):(
  //     <form
  //     action={async () => {
  //       "use server"
  //       await signIn("google")
  //     }}
  //   >
  //     <h1>welcome to Signin Page</h1>
  //     <button type="submit">Signin with Google</button>

  //   </form>
  //   )
}

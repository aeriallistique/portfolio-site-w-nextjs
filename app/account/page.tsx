import { auth } from "@/auth";

const AccountPage = async () => {
  const session = await auth();

  return (
    <div>
      <p>{session?.user?.name}</p>
    </div>
  )
}

export default AccountPage;
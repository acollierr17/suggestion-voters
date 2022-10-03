import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <div>
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
        Signed in as {session.user!.name}
        <Image
          src={session.user!.image!}
          alt={`${session.user!.name}'s profile picture`}
          width={38}
          height={38}
          style={{ borderRadius: '50%' }}
        />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}

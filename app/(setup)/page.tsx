import { initialProfile } from "@/lib/initial-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server"; 

const SetupPage = async () => {
  const profile = await initialProfile();

  if (profile instanceof NextResponse) {
    return null; 
  }
  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) {
    redirect(`/server/${server.id}`);
    return null;
  }

  return (
    <div>
      Create a Server
    </div>
  );
};

export default SetupPage;

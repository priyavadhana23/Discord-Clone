import { initialProfile } from "@/lib/initial-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { InitialModal } from "@/components/modals/initial-model";

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
    redirect(`/servers/${server.id}`);
    return null;

  }

  return <InitialModal />

};

export default SetupPage;

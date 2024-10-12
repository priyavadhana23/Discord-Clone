import { createUploadthing, type FileRouter } from "uploadthing/next";
import { auth } from "@clerk/nextjs/server";

const f = createUploadthing();

const handleAuth = () => {
    const { userId } = auth();
    console.log("User ID:",userId);
    if (!userId) throw new Error("Unauthorized");
    return { userId };
};

export const ourFileRouter = {
    serverImage: f({ image: { maxFileSize: "16MB", maxFileCount: 1 } })
        .middleware(() => handleAuth())
        .onUploadComplete(({ metadata, file }) => {
            console.log("Upload complete for userId:", metadata.userId);
            console.log("File:", file);
        }),

    messageFile: f(["image", "pdf"])
        .middleware(() => handleAuth())
        .onUploadComplete(({ metadata, file }) => {
            console.log("Upload complete for userId:", metadata.userId);
            console.log("File:", file);
        }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
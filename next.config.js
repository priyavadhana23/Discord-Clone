/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "uploadthing.com",
            "utfs.io"  // Add this line to include utfs.io
        ]
    }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["upcdn.io", "replicate.delivery", "lh3.googleusercontent.com"],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/MattPhelps/photo-restorer",
        permanent: false,
      },
      {
        source: "/deploy",
        destination: "https://vercel.com/mphelps/photo-restorer",
        permanent: false,
      },
    ];
  },
};

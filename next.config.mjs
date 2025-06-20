/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    'rc-util',
    "rc-picker",
    "rc-pagination",
    "@ant-design/icons-svg"
  ]
};

export default nextConfig;



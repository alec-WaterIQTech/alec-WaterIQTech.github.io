// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    // ...other config
    allowedDevOrigins: [
      // Add the ones you need:
      'http://localhost:3000',           // always allow this
      'http://192.168.1.144:3000',       // your LAN IP
      // Add others if you access from other devices/IPs
    ],
  };
  
  module.exports = nextConfig;
  
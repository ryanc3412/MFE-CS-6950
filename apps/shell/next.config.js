import NextFederationPlugin from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'shell',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          remote_a: `remote_a@http://localhost:3001/_next/static/chunks/remoteEntry.js`,
        },
        shared: {
          // Add any shared dependencies here
        },
      })
    );

    return config;
  },
};

export default nextConfig;

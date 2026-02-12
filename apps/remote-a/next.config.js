import NextFederationPlugin from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'remote_a',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          // The key is the public name, the value is the path to your file
          './SquareNumber': './components/SquareNumber.js', 
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
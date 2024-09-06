/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recomendado para detectar problemas potenciais
  swcMinify: true, // Usar o SWC para minificar o código
  images: {
    remotePatterns: [{
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**', // Isso permite todas as imagens de lh3.googleusercontent.com
      },], // Adicione o domínio aqui
  },
};

export default nextConfig;

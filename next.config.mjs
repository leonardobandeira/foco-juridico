/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recomendado para detectar problemas potenciais
  swcMinify: true, // Usar o SWC para minificar o código
  images: {
    domains: ['lh3.googleusercontent.com'], // Adicione o domínio aqui
  },
};

export default nextConfig;

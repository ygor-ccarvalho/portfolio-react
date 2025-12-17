import type { Project, TechSkill, TechKey } from '../types';

// ==================
// Imagens tecnologias
// ==================
import node from '../assets/images/tecnologias/node.webp';
import typescript from '../assets/images/tecnologias/typescript.png';
import react from '../assets/images/tecnologias/react.png';
import javascript from '../assets/images/tecnologias/javascript.png';
import html from '../assets/images/tecnologias/html.png';
import css from '../assets/images/tecnologias/css.png';

import ccna1 from '../assets/images/tecnologias/ccna1.png';
import networkSecurity from '../assets/images/tecnologias/network_security.png';

// ==================
// Imagens projetos
// ==================
import telegramBot from '../assets/images/imagens-projetos/telegram-bot.gif';
import advice from '../assets/images/imagens-projetos/advice.gif';
import gitApi from '../assets/images/imagens-projetos/git-api.gif';

// ==================
// Mapa de ícones
// ==================
export const techImages: Record<TechKey, string> = {
  node,
  typescript,
  javascript,
  react,
  html,
  css,
  ccna1,
  networksecurity: networkSecurity,
};

// ==================
// Labels amigáveis
// ==================
export const techLabels: Record<TechKey, string> = {
  node: 'Node.js',
  typescript: 'TypeScript',
  javascript: 'JavaScript',
  react: 'React',
  html: 'HTML',
  css: 'CSS',
  ccna1: 'CCNA 1',
  networksecurity: 'Network Security',
};

// ==================
// Projetos
// ==================
export const projectsData: Project[] = [
  {
    title: 'Teste Técnico Furia - Bot para Telegram',
    description:
      'Este projeto foi desenvolvido como parte de um desafio técnico para uma vaga de desenvolvedor na FURIA Esports. O bot funciona dentro do Telegram e traz informações em tempo real sobre o time de CS2 da FURIA — incluindo próximos e últimos jogos, lineup atual e notícias mais recentes. Por meio de integrações com APIs externas (PandaScore e Draft5), o bot consulta, processa e entrega as informações diretamente no chat, oferecendo uma experiência prática e rápida para os fãs do time. Todo o fluxo de mensagens foi estruturado com comandos e respostas dinâmicas.',
    technologies: ['node', 'typescript'],
    liveLink: 'https://github.com/ygor-ccarvalho/telegram-bot-furia',
    githubLink: 'https://github.com/ygor-ccarvalho/telegram-bot-furia',
    imageSrc: telegramBot,
    imageAlt: 'Gif mostrando o projeto funcionando',
  },
  {
    title: 'Advice Generator',
    description:
      'Projeto utilizando a API Advice Generator para buscar conselhos de forma dinâmica, com foco em layout responsivo e experiência do usuário.',
    technologies: ['html', 'css', 'javascript'],
    liveLink: 'https://ygor-ccarvalho.github.io/advice-generator-app/',
    githubLink: 'https://github.com/ygor-ccarvalho/advice-generator-app',
    imageSrc: advice,
    imageAlt: 'Gif mostrando o projeto funcionando',
  },
  {
    title: 'GitHub API',
    description:
      'Projeto que consome a GitHub API para exibir dados de usuários, incluindo nome, avatar e últimos repositórios, com tratamento de erros e estados.',
    technologies: ['html', 'css', 'javascript'],
    liveLink: 'https://ygor-ccarvalho.github.io/GitHub-API/',
    githubLink: 'https://github.com/ygor-ccarvalho/GitHub-API',
    imageSrc: gitApi,
    imageAlt: 'Gif mostrando o projeto funcionando',
  },
];

// ==================
// Tech Skills
// ==================
export const techSkillsData: TechSkill[] = [
  { name: 'HTML', imageSrc: html, imageAlt: 'Logo HTML' },
  { name: 'CSS', imageSrc: css, imageAlt: 'Logo CSS' },
  { name: 'JavaScript', imageSrc: javascript, imageAlt: 'Logo JavaScript' },
  { name: 'TypeScript', imageSrc: typescript, imageAlt: 'Logo TypeScript' },
  { name: 'React', imageSrc: react, imageAlt: 'Logo React' },
  {
    name: 'CCNA 1',
    imageSrc: ccna1,
    imageAlt: 'Logo CCNA 1',
    badgeLink:
      'https://www.credly.com/badges/d15b44b2-6d58-4455-8a71-2b3f89446348',
  },
  {
    name: 'Network Security',
    imageSrc: networkSecurity,
    imageAlt: 'Logo Network Security',
    badgeLink:
      'https://www.credly.com/badges/4e2f1169-1c28-435c-a822-75972e33e68a',
  },
];

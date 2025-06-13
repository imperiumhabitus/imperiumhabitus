
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Avançado',
      description: 'Plataforma completa de vendas online com sistema de pagamento integrado, gestão de estoque e analytics em tempo real.',
      image: 'Modern e-commerce platform with shopping cart and payment system',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      category: 'E-commerce',
      featured: true
    },
    {
      title: 'App de Gestão Empresarial',
      description: 'Sistema completo para gestão de recursos humanos, financeiro e operacional com dashboard interativo.',
      image: 'Business management dashboard with charts and analytics',
      technologies: ['Vue.js', 'Express', 'MongoDB', 'Chart.js'],
      category: 'Gestão',
      featured: true
    },
    {
      title: 'Plataforma de Ensino',
      description: 'Sistema de educação online com videoaulas, exercícios interativos e acompanhamento de progresso.',
      image: 'Online learning platform with video courses and progress tracking',
      technologies: ['React Native', 'Firebase', 'WebRTC', 'AWS'],
      category: 'Educação',
      featured: false
    },
    {
      title: 'Sistema de Delivery',
      description: 'App completo para delivery com rastreamento em tempo real, sistema de pagamento e avaliações.',
      image: 'Food delivery app with real-time tracking and payment system',
      technologies: ['Flutter', 'Node.js', 'Redis', 'Google Maps'],
      category: 'Mobile',
      featured: false
    },
    {
      title: 'Portal de Notícias',
      description: 'CMS avançado para publicação de conteúdo com sistema de comentários e newsletter automática.',
      image: 'News portal with content management and newsletter system',
      technologies: ['Next.js', 'Strapi', 'PostgreSQL', 'Vercel'],
      category: 'Web',
      featured: false
    },
    {
      title: 'Sistema Bancário',
      description: 'Plataforma financeira segura com transferências, investimentos e carteira digital.',
      image: 'Banking system with secure transactions and digital wallet',
      technologies: ['React', 'Java', 'Oracle', 'Blockchain'],
      category: 'Fintech',
      featured: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const handleProjectClick = (projectTitle) => {
    toast({
      title: "🚧 Funcionalidade em desenvolvimento",
      description: "Esta funcionalidade ainda não foi implementada—mas não se preocupe! Você pode solicitá-la no seu próximo prompt! 🚀",
      duration: 3000,
    });
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 via-purple-50 to-cyan-50">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Projetos em Destaque</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça alguns dos projetos que desenvolvemos e como transformamos 
              ideias em soluções digitais de sucesso.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Projetos Principais</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.filter(project => project.featured).map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img  
                      alt={`Projeto ${project.title} - ${project.description}`}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                     src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-purple-600 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h4 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                        onClick={() => handleProjectClick(project.title)}
                      >
                        <Github className="w-4 h-4" />
                        Código
                      </Button>
                      <Button
                        size="sm"
                        className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600"
                        onClick={() => handleProjectClick(project.title)}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Ver Projeto
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Projects */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Outros Projetos</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(project => !project.featured).map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => handleProjectClick(project.title)}
                >
                  <div className="relative overflow-hidden">
                    <img  
                      alt={`Projeto ${project.title}`}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                     src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-purple-600 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center text-purple-600 text-sm font-medium group-hover:text-purple-700">
                      Ver detalhes
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Tem um projeto em mente?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Vamos conversar sobre como podemos transformar sua ideia em uma 
                solução digital de sucesso. Nossa equipe está pronta para ajudar!
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white px-8 py-3"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Iniciar Projeto
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

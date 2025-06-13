
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, Database, Cloud, Shield } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: Code,
      title: 'Desenvolvimento Web',
      description: 'Aplicações web modernas e responsivas usando as mais recentes tecnologias.',
      technologies: ['React', 'Vue.js', 'Node.js', 'TypeScript'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Smartphone,
      title: 'Aplicativos Mobile',
      description: 'Apps nativos e híbridos para iOS e Android com performance otimizada.',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Globe,
      title: 'E-commerce',
      description: 'Plataformas de vendas online completas e integradas.',
      technologies: ['Shopify', 'WooCommerce', 'Magento', 'Custom'],
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Database,
      title: 'Banco de Dados',
      description: 'Arquitetura e otimização de bancos de dados escaláveis.',
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Soluções em nuvem para escalabilidade e performance.',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker'],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Segurança',
      description: 'Implementação de protocolos de segurança robustos.',
      technologies: ['OAuth', 'JWT', 'SSL/TLS', 'Encryption'],
      color: 'from-red-500 to-orange-600'
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

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Nossas Especialidades</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos um conjunto abrangente de serviços tecnológicos para 
              atender todas as necessidades do seu negócio digital.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900">
                  {skill.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {skill.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium group-hover:bg-gray-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Pronto para transformar sua ideia em realidade?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Nossa equipe está preparada para desenvolver a solução perfeita para o seu negócio.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Solicitar Orçamento
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;


import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Clock, Lightbulb } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '50+', label: 'Clientes Satisfeitos' },
    { icon: Award, number: '100+', label: 'Projetos Entregues' },
    { icon: Clock, number: '5+', label: 'Anos de Experiência' },
    { icon: Lightbulb, number: '24/7', label: 'Suporte Dedicado' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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
    <section id="about" className="py-20 bg-white/50 backdrop-blur-sm">
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
              <span className="text-gradient">Sobre a IHS</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos uma empresa especializada em desenvolvimento de soluções tecnológicas 
              personalizadas, focada em transformar desafios em oportunidades digitais.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Nossa Missão
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Na IHS - Imperium Habitus Solutions, acreditamos que a tecnologia deve 
                ser uma ferramenta poderosa para impulsionar o crescimento dos negócios. 
                Nossa missão é criar soluções digitais inovadoras que não apenas atendam 
                às necessidades atuais, mas também preparem nossos clientes para o futuro.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Combinamos expertise técnica com uma abordagem centrada no cliente, 
                garantindo que cada projeto seja desenvolvido com excelência, 
                agilidade e foco em resultados mensuráveis.
              </p>
              
              <div className="flex flex-wrap gap-3 mt-6">
                {['Inovação', 'Qualidade', 'Agilidade', 'Resultados'].map((value) => (
                  <span
                    key={value}
                    className="px-4 py-2 bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-700 rounded-full text-sm font-medium"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img  
                  alt="Escritório moderno da IHS com equipe trabalhando"
                  className="w-full h-96 object-cover"
                 src="https://images.unsplash.com/photo-1637622124152-33adfabcc923" />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 to-cyan-500/10"></div>
              </div>
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Certificação ISO</p>
                    <p className="text-sm text-gray-600">Qualidade Garantida</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 hover-lift"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</h4>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

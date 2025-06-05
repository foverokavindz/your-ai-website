import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Trophy, Star } from 'lucide-react';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Card from '../ui/Card';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      icon: Trophy,
      title: 'Research Excellence',
      description:
        'Outstanding research methodology and innovative approach to UI personalization',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Star,
      title: 'Technical Innovation',
      description: 'Advanced implementation of AI-powered adaptive interfaces',
      color: 'from-blue-500 to-purple-500',
    },
    {
      icon: Award,
      title: 'Academic Recognition',
      description: 'Recognized for contribution to user experience research',
      color: 'from-green-500 to-teal-500',
    },
  ];

  return (
    <Section id="achievements" background="gray">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Achievements
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="text-center h-full">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                  >
                    <achievement.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Achievements;

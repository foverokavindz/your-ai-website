import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Sparkles, Github } from 'lucide-react';
import Section from '../ui/Section';
import Container from '../ui/Container';
import UniLogo from '../../assets/unilogo.png?url';

const Hero = () => {
	return (
		<Section id="home" className="min-h-screen flex items-center justify-center relative bg-white overflow-hidden ">
			<div className="mesh-bg absolute inset-0 z-0"></div>
			{/* Minimalistic Background Gradients */}
			{/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-green-50/50 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-50/50 blur-[120px]" />
      </div> */}

			<Container className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center">
				{/* Top Badge */}
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 text-base font-medium mb-8" style={{ color: '#888888' }}>
					<img src={UniLogo} alt="" className="w-10 h-10" />
					<span>University of Sri Jayewardenepura, Faculty of Technology</span>
				</motion.div>

				{/* Main Heading */}
				<motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight mb-6" style={{ color: '#1A1A1A' }}>
					Knowledge Graph based Retrieval Augmented Generation (RAG) System for Domain Specific Information Extraction with Glossary-Aided Responses
				</motion.h1>

				{/* Description */}
				<motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg sm:text-xl leading-relaxed max-w-2xl mb-10 font-medium" style={{ color: '#444444' }}>
					Powered by RAG systems, LLMs, and knowledge graphs for intelligent document analysis. We extract knowledge from documents, identify Entities & Relationships, and create intelligent responses.
				</motion.p>

				{/* CTA Buttons */}
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
					<button className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm sm:text-base font-medium rounded-full transition-all duration-200 shadow-sm hover:shadow-md" style={{ backgroundColor: '#1A1A1A', color: '#FFFFFF' }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#000000')} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1A1A1A')}>
						Explore
						<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
					</button>

					<a
						href="https://github.com/orgs/NDK-Research-AI-Project/repositories"
						target="_blank"
						rel="noopener noreferrer"
						className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm sm:text-base font-medium rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
						style={{ color: '#1A1A1A', backgroundColor: '#F5F5F5', border: '1px solid #E0E0E0' }}
						onMouseEnter={(e) => {
							e.currentTarget.style.backgroundColor = '#E0E0E0';
							e.currentTarget.style.borderColor = '#1A1A1A';
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.backgroundColor = '#F5F5F5';
							e.currentTarget.style.borderColor = '#E0E0E0';
						}}
					>
						<Github className="w-5 h-5" />
						GitHub
					</a>
				</motion.div>
			</Container>

			{/* Subtle Scroll Indicator */}
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1 }} className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
				<motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
					<ArrowDown className="w-5 h-5" style={{ color: '#CCCCCC' }} />
				</motion.div>
			</motion.div>
		</Section>
	);
};

export default Hero;

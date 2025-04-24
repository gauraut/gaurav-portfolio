'use client'

// src/components/modules/Skills/index.tsx
import { motion } from 'framer-motion'

export default function Skills() {
	const categories = [
		{
			title: 'Programming Languages',
			items: ['C++ (Strongest)', 'Python (Strongest)', 'TypeScript', 'Bash']
		},
		{
			title: 'Frameworks & Libraries',
			items: [
				'PyTorch · TensorFlow · OpenCV',
				'ROS 2 · PCL · cuPCL',
				'CUDA · TensorRT · ONNX Runtime',
				'Open3D'
			]
		},
		{
			title: 'Tools & DevOps',
			items: [
				'Git · GitHub Actions · Azure DevOps',
				'Docker / Docker Compose',
				'Vercel · NVIDIA Nsight / Nsight Compute'
			]
		},
		{
			title: 'Machine Learning Expertise',
			items: [
				'Object Detection · Segmentation · Tracking',
				'Multi-modal (RGB + LiDAR) · Generative Models · VLM',
				'CNN · Transformers (ViT) · U-Net'
			]
		}
	]

	return (
		<motion.section
			id="skills"
			className="py-5 px-4 text-white font-mono"
			style={{backgroundColor: '#623A00'}}
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6 }}
		>
			{/* Symlink‑style Skills Header */}
			<div className="flex items-center space-x-2 mb-6 text-xl sm:text-2xl md:text-4xl">
				<span className="text-white font-bold">./Gaurav_Raut</span>
				<span className="text-red-500"> -{'>'} </span>
				<span className="text-green-500 font-bold">./Skills</span>
			</div>

			{/* Folder‑style hierarchy for skills */}
			<div className="bg-gray-800 p-4 sm:p-6 rounded-md">
				{categories.map((cat, idx) => (
					<div key={idx} className={idx === 0 ? '' : 'mt-6'}>
						<div className="flex pl-2 items-start">
							<span className="text-[#4EC9B0] w-6 sm:w-8 flex-shrink-0">|_</span>
							<p className="text-[#FFA067] font-semibold text-lg sm:text-xl md:text-2xl flex-1">
								{cat.title}
							</p>
						</div>
						{cat.items.map((item, i) => (
							<div key={i} className="flex pl-4 mt-1">
								<span className="text-[#4EC9B0] w-6 sm:w-8 flex-shrink-0">|_</span>
								<p className="text-[#D4D4D4] text-sm sm:text-base md:text-lg flex-1">
									{item}
								</p>
							</div>
						))}
					</div>
				))}
			</div>
		</motion.section>
	)
}
'use client'

// src/components/modules/Projects/index.tsx
import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-5 px-4 sm:px-6 md:px-24 text-white font-mono"
			style={{backgroundColor: '#074F00'}}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Symlink‑style Projects Header */}
      <div className="flex items-center space-x-2 mb-6 text-xl sm:text-2xl md:text-4xl">
        <span className="text-white font-bold">./Gaurav_Raut</span>
        <span className="text-red-500"> -&gt; </span>
        <span className="text-green-500 font-bold">./Projects</span>
      </div>

      {/* Terminal‑style Folder Hierarchy for Projects */}
      <div className="bg-gray-800 p-4 sm:p-6 rounded-md">
        {/* --- Project 1 -------------------------------------------------- */}
        <div className="flex pl-2 mt-2">
          <span className="text-[#4EC9B0] w-6 sm:w-8 flex-shrink-0">|_</span>
          <p className="text-[#FFA067] font-semibold text-lg sm:text-xl md:text-2xl flex-1">
            Foundational VLM for Robotics Perception
          </p>
        </div>
        {/* <a href="https://vlm-perception-demo.com" target="_blank" rel="noopener noreferrer"></a> */}
        <div className="flex pl-4 mt-1">
          <span className="text-[#4EC9B0] w-6 sm:w-8 flex-shrink-0">|_</span>
          <p className="text-[#D4D4D4] text-sm sm:text-base md:text-lg flex-1">
            Fine‑tuned CLIP with 3D point‑cloud embeddings and GPT‑style prompts for spatial scene understanding
          </p>
        </div>

        {/* --- Project 2 -------------------------------------------------- */}
        <div className="flex pl-2 mt-6">
          <span className="text-[#4EC9B0] w-6 sm:w-8 flex-shrink-0">|_</span>
          <p className="text-[#FFA067] font-semibold text-lg sm:text-xl md:text-2xl flex-1">
            Real‑Time CUDA Point‑Cloud Filter
          </p>
        </div>
        {/* <a href="https://cuda-filter-demo.com" target="_blank" rel="noopener noreferrer"></a> */}
        <div className="flex pl-4 mt-1">
          <span className="text-[#4EC9B0] w-6 sm:w-8 flex-shrink-0">|_</span>
          <p className="text-[#D4D4D4] text-sm sm:text-base md:text-lg flex-1">
            Custom CUDA kernels integrated with ROS 2 for low‑latency filtering & publish‑subscribe pipelines
          </p>
        </div>

        {/* --- Project 3 -------------------------------------------------- */}
        <div className="flex pl-2 mt-6">
          <span className="text-[#4EC9B0] w-6 sm:w-8 flex-shrink-0">|_</span>
          <p className="text-[#FFA067] font-semibold text-lg sm:text-xl md:text-2xl flex-1">
            Azure MLDC Automation Suite
          </p>
        </div>
        {/* <a href="https://github.com/gaurav-raut/azure-mldc" target="_blank" rel="noopener noreferrer"></a> */}
        <div className="flex pl-4 mt-1">
          <span className="text-[#4EC9B0] w-6 sm:w-8 flex-shrink-0">|_</span>
          <p className="text-[#D4D4D4] text-sm sm:text-base md:text-lg flex-1">
            End‑to‑end pipeline to version datasets, orchestrate training, & deploy TensorRT models from Azure DevOps
          </p>
        </div>
      </div>
    </motion.section>
  )
}
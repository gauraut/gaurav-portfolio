'use client'

// src/components/modules/Projects/index.tsx
import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-5 px-4 sm:px-6 md:px-24 text-white font-mono"
      style={{ backgroundColor: '#074F00' }}
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
        <ProjectEntry
          title="Foundational VLM for Robotics Perception"
          description="Fine‑tuned CLIP with 3D point‑cloud embeddings and GPT‑style prompts for spatial scene understanding"
        />

        {/* --- Project 2 -------------------------------------------------- */}
        <ProjectEntry
          title="Real‑Time CUDA Point‑Cloud Filter"
          description="Custom CUDA kernels integrated with ROS 2 for low‑latency filtering & publish‑subscribe pipelines"
          marginTop
        />

        {/* --- Project 3 -------------------------------------------------- */}
        <ProjectEntry
          title="Azure MLDC Automation Suite"
          description="End‑to‑end pipeline to version datasets, orchestrate training, & deploy TensorRT models from Azure DevOps"
          marginTop
        />

        {/* --- Project 4 -------------------------------------------------- */}
        <ProjectEntry
          title="Autonomous PTZ Barcode Scanner"
          description="Auto‑orients a 3‑DOF PTZ camera to detect & decode barcodes on moving freight in real time"
          marginTop
        />

        {/* --- Project 5 -------------------------------------------------- */}
        <ProjectEntry
          title="Pallet Detection & Pose Estimation"
          description="Deep CNN locates pallet pockets and estimates 6‑DoF pose to guide autonomous forklifts"
          marginTop
        />

        {/* --- Project 6 -------------------------------------------------- */}
        <ProjectEntry
          title="LiDAR‑Camera Freight Stacking"
          description="Fuses 3D LiDAR with RGB tracking to autonomously stack automotive freight with sub‑inch accuracy"
          marginTop
        />

        {/* --- Project 7 -------------------------------------------------- */}
        <ProjectEntry
          title="Warehouse‑Scale 3D Reconstruction"
          description="Voxel‑hash mapping pipeline reconstructs 50 m³ environments at 15 fps for inventory analytics"
          marginTop
        />

        {/* --- Project 8 -------------------------------------------------- */}
        <ProjectEntry
          title="Ground‑Plane Segmentation ROS Stack"
          description="CUDA‑accelerated ground removal node processes 300 kpts/s, boosting downstream object detection recall by 12 %"
          marginTop
        />

        {/* --- Project 9 -------------------------------------------------- */}
        <ProjectEntry
          title="Safety‑Alert Zone Monitoring"
          description="Eigen‑based proximity algorithm triggers real‑time alerts when humans enter AGV danger zones"
          marginTop
        />

        {/* --- Project 10 ------------------------------------------------- */}
        <ProjectEntry
          title="2D‑3D ToF Camera Calibration Toolkit"
          description="Optimizes extrinsics between ToF depth and RGB, reducing avg reprojection error to 0.8 px"
          marginTop
        />
      </div>
    </motion.section>
  )
}

/* Helper component for tidy JSX */
function ProjectEntry({ title, description, marginTop = false }: { title: string; description: string; marginTop?: boolean }) {
  return (
    <>
      <div className={`flex pl-2 ${marginTop ? 'mt-6' : 'mt-2'}`}>        
        <span className="text-[#4EC9B0] w-6 sm:w-8 flex-shrink-0">|_</span>
        <p className="text-[#FFA067] font-semibold text-lg sm:text-xl md:text-2xl flex-1">
          {title}
        </p>
      </div>
      {/* <a href="" target="_blank" rel="noopener noreferrer"></a> */}
      <div className="flex pl-4 mt-1">
        <span className="text-[#4EC9B0] w-6 sm:w-8 flex-shrink-0">|_</span>
        <p className="text-[#D4D4D4] text-sm sm:text-base md:text-lg flex-1">
          {description}
        </p>
      </div>
    </>
  )
}
'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Publications() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    fetch('/api/citations')
      .then(res => res.json())
      .then(data => setCount(data.count))
      .catch(() => {})
  }, [])

  return (
    <motion.section
      id="publications"
      className="py-5 px-4 sm:px-6 md:px-12 text-white font-mono"
			style={{ backgroundColor: '#351100' }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Publications Header */}
      <div className="flex items-center space-x-2 mb-4 text-lg sm:text-lg md:text-base lg:text-lg">
        <span className="text-green-500 font-bold">ls ./Publications</span>
      </div>

      {/* Citation Count */}
      {count !== null && (
        <p className="text-sm sm:text-base md:text-lg mb-4">
          Citations: <span className="text-green-500 font-semibold">{count}...</span>
        </p>
      )}

      {/* Publications List */}
      <ul className="list-disc list-inside ml-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-[#D4D4D4] space-y-2">
        <li>
          <a
            href="https://arxiv.org/abs/2402.16369"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Raut, Gaurav, and Apoorv Singh. “Generative AI in Vision: A Survey on Models, Metrics and Applications.” arXiv:2402.16369 (2024).
          </a>
        </li>
        <li>
          <a
            href="https://arxiv.org/abs/2405.15777"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Singh, Apoorv, Gaurav Raut, and Alka Choudhary. “Multi-agent Collaborative Perception for Robotic Fleet: A Systematic Review.” arXiv:2405.15777 (2024).
          </a>
        </li>
        <li>
          <a
            href="https://arxiv.org/pdf/2312.15377"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Raut, Gaurav, and Advait Patole. “End-to-End 3D Object Detection using LiDAR Point Cloud.” 2024 IEEE ICMI.
          </a>
        </li>
        <li>
          <a
            href="https://patents.google.com/patent/IN201921045820A"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Ranmale, Sunil et al. “Apparatus And A Method For Measuring Slackness.” Patent IN201921045820 (2021).
          </a>
        </li>
      </ul>
    </motion.section>
	)
}
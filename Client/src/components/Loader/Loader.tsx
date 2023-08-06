import { motion } from "framer-motion"
import './Loader.scss'

function Loader() {
  return (
    <motion.div
      className="box"
      id='loader'
      animate={{
        rotate: [0, 90, 180, 270, 360],
        borderRadius: ["10%", "25%", "50%",  "25%", "0%"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      }}
    />
  )
}

export default Loader

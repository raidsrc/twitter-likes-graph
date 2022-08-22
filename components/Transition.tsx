import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/router"
import { useEffect } from "react"

type props = {
  children: JSX.Element
}

const Transition: React.FC<props> = ({ children }) => {
  const variants = {
    out: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    },
    in: {
      opacity: 1,
      transition: {
        duration: 0.2,
        delay: 0.05,
      }
    }
  }
  const router = useRouter()
  return (
    <div className="effect-1">
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => scroll(0,0)}>
        <motion.div key={router.asPath} variants={variants} animate="in" initial="out" exit="out">
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
export default Transition 
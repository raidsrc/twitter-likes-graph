import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/router"
import { ReactElement } from "react"

type props = {
  children: JSX.Element
}

const Transition: React.FC<props> = ({ children }) => {
  const variants = {
    out: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    },
    in: {
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.1,
      }
    }
  }
  const router = useRouter()
  return (
    <div className="effect-1">
      <AnimatePresence initial={false} mode="wait">
        <motion.div key={router.asPath} variants={variants} animate="in" initial="out" exit="out">
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
export default Transition 
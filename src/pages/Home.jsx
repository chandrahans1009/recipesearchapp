import Popular from "../components/Popular"
import Veggie from "../components/Veggie"
import {motion} from "framer-motion"
const Home = () => {
  return (
    <div>
        <motion.div
         animate={{opacity:1}}
         initial={{opacity:0}}
         exit={{opacity:0}}
         transition={{duration: 0.5}}
        >
        <Popular/>
        <Veggie/>
        </motion.div>
    </div>
  )
}

export default Home
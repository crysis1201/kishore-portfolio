import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ReactPlayer from "react-player";

const Content = ({name, imageUrl, description, small}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [isplaying, setIsPlaying] = useState(false)
    
    return ( 
        <AnimatePresence layout>
            <motion.div layout className="bg-gray-900 rounded-lg mt-6 mx-auto h-auto">
                <motion.div layout onClick={() => setIsOpen(!isOpen)} onMouseEnter={() => setIsPlaying(!isplaying)} onMouseLeave={() => setIsPlaying(!isplaying)} className={`rounded-lg ${small ? "w-56" : "max-w-xs"}`} >
                <ReactPlayer playing={isplaying ? true : false} loop={true} className="rounded-lg max-w-xs overflow-hidden" width="auto" height="auto" url={imageUrl}></ReactPlayer>
                </motion.div>
                {isOpen && 
                    <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="py-2 pl-2 text-gray-100 text-left max-w-xs"
                    >
                        <h1 className="text-lg font-semibold ">{name}</h1>
                        <p className="text-md font-light ">{description}</p>
                    </motion.div>
                }
            </motion.div>
        </AnimatePresence>
     );
}
 
export default Content;
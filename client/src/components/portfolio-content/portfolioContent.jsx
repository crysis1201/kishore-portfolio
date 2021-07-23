import ProgressDiv from "../progressbar/progressDiv"
import Content from "./content"
import { motion } from "framer-motion"

const PortfolioContent = ({collection}) => {
    const { barValues, items, title } = collection
    return (
        <div className="">
            <div className="text-3xl text-center" >{title}</div>
            <ProgressDiv levels={barValues} />
            <p className=" text-center font-semibold text-2xl mt-10">My Works</p>
            <motion.div layout className="flex flex-wrap items-start justify-between mt-10">
                {
                    items.map(({id, ...itemProps}) => (
                        <Content key={id} {...itemProps} />
                    ))
                }
            </motion.div>
        </div>
     );
}
 
export default PortfolioContent;
import Htext from "../../shared/Htext"
import HOMEGRAPHIC from '../../assets/HOMEGRAPHIC.png'
import ActionButton from "../../shared/ActionBtn"
import { motion } from "framer-motion";
import { SElectedPage } from "../../shared/types";

type props={
    selectedPage : SElectedPage;
    setSelectedPage:(value:SElectedPage)=>void
}
const Home = ({selectedPage,setSelectedPage}:props)=>{
    return (
        <motion.div id="home" className="container mx-auto md:flex justify-between items-center w-full md:min-h-[90vh] pt-[80px]"
        onViewportEnter={()=>{setSelectedPage(SElectedPage.Home)}}
        >
            <motion.div className="px-3 basis-4/5" 
            initial='hidden'
            whileInView={'visible'}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 }
            }}
          
            >
                <Htext>
                    WELCOME TO X-GYM
                </Htext>
                <p className="my-2 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quia quod nobis soluta, temporibus id repellendus necessitatibus sequi? Quod totam sed qui consectetur rerum dolores iste non quas odio ut.</p>
                <ActionButton target = {'#classes'}>
                    See More
                </ActionButton>
            </motion.div>
            <div className="w-100 h-full">
                <img src={HOMEGRAPHIC} alt="HOMEGRAPHIC" className="max-w-[80%] md:max-w-[100%] mx-auto" />
            </div>
        </motion.div>
    )
}
export default Home
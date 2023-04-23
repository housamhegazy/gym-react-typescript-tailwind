import Htext from "../../shared/Htext"
import HOMEGRAPHIC from '../../assets/HOMEGRAPHIC.png'
import ActionButton from "../../shared/ActionBtn"

const Home = ()=>{
    return (
        <div id="home" className="container mx-auto md:flex justify-between items-center w-full md:min-h-[90vh] pt-[80px]">
            <div className="px-3 basis-4/5">
                <Htext>
                    WELCOME TO X-GYM
                </Htext>
                <p className="my-2 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quia quod nobis soluta, temporibus id repellendus necessitatibus sequi? Quod totam sed qui consectetur rerum dolores iste non quas odio ut.</p>
                <ActionButton target = {'#classes'}>
                    See More
                </ActionButton>
            </div>
            <div className="w-100 h-full">
                <img src={HOMEGRAPHIC} alt="HOMEGRAPHIC" className="max-w-[80%] md:max-w-[100%] mx-auto" />
            </div>
        </div>
    )
}
export default Home
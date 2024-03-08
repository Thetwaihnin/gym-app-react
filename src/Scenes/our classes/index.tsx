import { ClassType,SelectedPage } from "@/shared/type"
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import { motion } from "framer-motion"
import Htext from "../Htext"
import Class from "./Class"


type Props = {
  setSelectedPage: (value: SelectedPage)=>void
}

const OurClasses = ({setSelectedPage}: Props) => {

  const classes: Array<ClassType> = [
    {
      name: "Fitness Classes",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sit dolores officia, pariatur esse id quibusdam harum sequi velit dignissimos!",
      image: image1
    },
    {
      name: "Training Classes",
      image: image2
    },
    {
      name: "Yoga Classes",
      image: image3
    },
    {
      name: "Ab Core Classes",
      image: image4
    },
    {
      name: "Adventure Classes",
      image: image5
    },
    {
      name: "Fitness Classes",
      image: image6
    },
  ]

  return (
    <section className="w-full bg-primary-100" id="ourclasses">
      <motion.div 
      onViewportEnter={()=> setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div className="mx-auto w-5/6" 
          initial="hidden" whileInView="visible"
          viewport={{once:true, amount: 0.5}}
          transition={{duration: 0.5}}
          variants={{
            hidden: {opacity:0 , x:-50},
            visible: {opacity:1 , x: 0}
          }}
        >
          <div className="md:w-3/5 pt-10">
            <Htext>Our Classes</Htext>
            <p className="py-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis amet eaque iusto ullam iste! Ea, expedita aspernatur nemo officiis in suscipit libero dolorem atque inventore!
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-auto">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index)=>(
              <Class key={`${item.name}-${index}`}
                name={item.name} description={item.description} image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default OurClasses
import { BenefitType, SelectedPage } from "@/shared/type";
import { 
    HomeModernIcon,UserGroupIcon,AcademicCapIcon 
} from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Htext from "../Htext";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitPageGraphic from "@/assets/BenefitsPageGraphic.png"

type Props = {
    setSelectedPage: (value: SelectedPage)=> void;
}

const Benefits = ({setSelectedPage}: Props) => {

  const benefits: Array<BenefitType> = [
    {
      icon: <HomeModernIcon className="h-6 w-6"/>,
      title: "State Of The Art Facilities",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque necessitatibus voluptas dolore distinctio voluptates? Pariatur id unde quibusdam. Ullam, repellendus."
    },
    {
      icon: <UserGroupIcon className="h-6 w-6"/>,
      title: "100's Of Diverse Classes",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque necessitatibus voluptas dolore distinctio voluptates? Pariatur id unde quibusdam. Ullam, repellendus."
    },
    {
      icon: <AcademicCapIcon className="h-6 w-6"/>,
      title: "Experts and Pro Trainer",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque necessitatibus voluptas dolore distinctio voluptates? Pariatur id unde quibusdam. Ullam, repellendus."
    }
  ]

  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div 
          onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount: 0.5}}
          transition={{duration: 0.5}}
          variants={{
            hidden: {opacity:0,x: -50},
            visible: {opacity:1, x: 0}
          }}
        >
          <div className="md:my-5 md:w-3/5">
            {/* HEADER  */}
            <Htext>MORE THAN JUST A GYM</Htext>
            <p className="my-5 text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Fugiat tempora consequuntur, incidunt illo magnam esse? Aliquid provident, minus ipsum sunt eveniet id qui autem 
              ducimus eius temporibus pariatur, sequi fuga.
            </p>
          </div>
          {/* BENEFITS  */}
          <motion.div className="md:flex mt-5 items-center justify-between gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
              hidden: {opacity:0,x: -50},
              visible: {opacity:1, x: 0}
            }}
          >
             {benefits.map((benefit: BenefitType)=>(
              <Benefit 
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
              />
             ))}
          </motion.div>

          {/* GRAPHIC AND DESCRIPTION  */}
          <div className="mt-16 items-center justify-between gap-20 md:mt-29 md:flex">
            {/* GRAPHIC  */}
            <img src={BenefitPageGraphic} className="mx-auto" alt="benefits-page-graphic"></img>
            {/* DESCRIPTION  */}
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
              hidden: {opacity:0,x: -50},
              visible: {opacity:1, x: 0}
            }}
            >
              {/* TITLE  */}
              <div className="relative">
                <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                  <div>
                    <Htext>
                      MILLIONS OF HAPPY MEMBERS GETTING{""}
                      <span className="text-primary-500"> FIT</span>
                    </Htext>
                  </div>
                </div>
              </div>

              {/* Description  */}
              <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{once:true, amount: 0.5}}
              transition={{dealy: 0.2,duration: 0.5}}
              variants={{
                hidden: {opacity:0,x: 50},
                visible: {opacity:1, x: 0}
              }}
              >
                <p className="my-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga qui ducimus, asperiores, quo quibusdam quos corporis explicabo facere praesentium libero ut, officiis porro facilis perspiciatis nihil culpa odit quod id!
                </p>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolorum reiciendis optio voluptatum vero maxime, cum expedita architecto obcaecati sit.
                </p>
              </motion.div>
              {/* Buttton  */}
              <div className="relative mt-5">
                <div className="before:absolute before:-bottom-20 before:content-sparkles before:z-[-1] before:right-40">
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Join Now
                  </ActionButton>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
    </section>
  )
}

export default Benefits
import HText from "@/shared/HText";
import { SelectedPage, BenefitType, baseProps } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: BenefitType[] = [
  {
    icon: <HomeModernIcon className="w-6 h-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur illo quas aspernatur perspiciatis voluptas autem distinctio, commodi ipsa veritatis inventore atque sunt tempora dolore soluta eligendi impedit dolores, eaque possimus!",
  },
  {
    icon: <UserGroupIcon className="w-6 h-6" />,
    title: "100's of Diverse Classes",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur illo quas aspernatur perspiciatis voluptas autem distinctio, commodi ipsa veritatis inventore atque sunt tempora dolore soluta eligendi impedit dolores, eaque possimus!",
  },
  {
    icon: <AcademicCapIcon className="w-6 h-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur illo quas aspernatur perspiciatis voluptas autem distinctio, commodi ipsa veritatis inventore atque sunt tempora dolore soluta eligendi impedit dolores, eaque possimus!",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type BenefitsIndexProps = baseProps;

const Benefits = ({ setSelectedPage }: BenefitsIndexProps) => {
  return (
    <section id="benefits" className="w-5/6 min-h-full py-20 mx-auto">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-3/5"
        >
          <HText>MORE THAN JUST GYM.</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with eas. We provide true
            care into each and every member.
          </p>
        </motion.div>

        {/* BENEFITS  */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={container}
          className="items-center justify-between gap-8 mt-5 md:flex"
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="items-center justify-between gap-20 mt-16 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                provident dolorum unde quo sequi, distinctio, itaque voluptatem
                cum molestiae recusandae nihil ab consequatur libero ullam
                deserunt eveniet animi aliquam dicta?
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                atque molestias tempore quis distinctio sapiente officiis
                voluptatem in rem exercitationem cupiditate labore quam sit ipsa
                architecto debitis tempora aspernatur? Commodi.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;

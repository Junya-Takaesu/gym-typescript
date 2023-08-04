import { SelectedPage, baseProps } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import { ClassType } from "@/shared/types";
import Class from "./Class";

const classes: ClassType[] = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab laborum voluptates ipsam fugit harum soluta at voluptatem voluptatibus libero cumque corporis assumenda quidem nisi, provident autem tempora voluptas quisquam ipsa.",
    image: image1,
  },
  {
    name: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tempore corrupti fugit reiciendis corporis, porro omnis et velit eum. Aliquam dolores reprehenderit adipisci tempore quis quas, eveniet ipsam saepe hic.",
    image: image2,
  },
  {
    name: "Yoga Classes",
    image: image3,
  },
  {
    name: "Fitness Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab laborum voluptates ipsam fugit harum soluta at voluptatem voluptatibus libero cumque corporis assumenda quidem nisi, provident autem tempora voluptas quisquam ipsa.",
    image: image4,
  },
  {
    name: "Aerobics Classes",
    image: image5,
  },
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab laborum voluptates ipsam fugit harum soluta at voluptatem voluptatibus libero cumque corporis assumenda quidem nisi, provident autem tempora voluptas quisquam ipsa.",
    image: image6,
  },
];

type OurClassesIndexProps = baseProps;

const OurClasses = ({ setSelectedPage }: OurClassesIndexProps) => {
  return (
    <section id="ourClasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              voluptas atque, nemo sequi sunt nihil labore culpa rem aliquid
              similique, quasi distinctio aut voluptatum aspernatur ullam maxime
              molestias! Illo, asperiores?
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;

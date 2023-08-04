import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            beatae excepturi ullam eos cupiditate nisi fuga vero mollitia illum
            officiis aliquam cum sequi, assumenda voluptatum optio. Molestiae
            excepturi rem accusantium?
          </p>
          <p>© Evogym ALL Rights Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Mass orci senctus</p>
          <p className="my-5">Mass orci senctus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>ULLamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Lorem, ipsum dolor.</p>
          <p>9999(999)-9999</p>
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;

import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          <span className="text-coral-red">Special </span>Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embaerk on a shopping journey that redifines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalled value that sets us apart
        </p>
        <p className="mt-4 lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fufill your unique
          desires surpassing the loftiest expectations. Your journey with us is
          nothing short of expectations
        </p>
        <div className="flex flex-wrap mt-11 gap-4">
          <Button label="Shop Now" iconUrl={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;

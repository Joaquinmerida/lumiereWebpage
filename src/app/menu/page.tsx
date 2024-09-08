import Image from "next/image";
import { antic } from "../fonts";

export default function Page() {
  return (
    <main className="flex flex-col items-center">
      {/* Image Container */}
      <div className="relative w-full h-[600px]">
        <Image
          src="./chefImage.webp"
          alt="Photo of our restaurant"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center 90%",
          }}
          className="brightness-90 w-full h-full"
        />
      </div>
      <h1
        className={`${antic.className} text-5xl font-bold text-3xl py-4 text-center`}
      >
        Our Menu
      </h1>
      <hr className="w-11/12 mx-auto my-4" />

      {/* Main Images */}
      <div className="flex justify-between items-center w-full px-4 py-4">
        <Image
          src="./fruits.webp"
          alt="Photo of fresh vegetables"
          width={300}
          height={600}
          className="object-cover w-[calc(100%/3.236)] aspect-[1/1.618]"
        />
        <Image
          src="./tuna.png"
          alt="Photo of fresh tuna"
          width={300}
          height={600}
          className="object-cover w-[calc(100%/3.236)] aspect-[1/1.618]"
        />
        <Image
          src="./pasta.webp"
          alt="Photo of fresh pasta"
          width={300}
          height={600}
          className="object-cover w-[calc(100%/3.236)] aspect-[1/1.618]"
        />
      </div>

      {/* Bottom Article */}
      <article className="flex flex-wrap justify-evenly py-12 w-10/12">
        <h2
          data-aos="fade-up"
          className={`${antic.className} text-5xl text-center w-full mb-4`}
        >
          Unrivaled Freshness
        </h2>
        <hr className="w-full my-2" />
        
        {/* Text Section */}
        <div className={`${antic.className} w-full md:w-1/2 px-4`}>
          <h3 className={`${antic.className} text-yellow-500 text-lg my-2`}>
            Fresh Ingredients and Finest Produce Selection
          </h3>
          <p className="text-justify text-base my-2 leading-relaxed">
            At Lumière, we believe that exceptional cuisine begins with the
            finest ingredients. Our commitment to quality is reflected in every
            dish we serve, ensuring that our guests experience the true essence
            of gourmet dining.
          </p>
          <p className="text-justify text-base my-2 leading-relaxed">
            We take great pride in sourcing the highest quality ingredients from
            both local and international suppliers. Our partnerships with
            trusted farmers and purveyors ensure that we receive the freshest
            produce, premium meats, and sustainable seafood. Each component of
            our dishes is carefully selected to meet our rigorous standards of
            excellence.
          </p>
          <h3 className={`${antic.className} text-yellow-500 text-lg my-2`}>
            Seasonal and Organic Produce
          </h3>
          <p className="text-justify text-base my-2 leading-relaxed">
            Our menu features seasonal ingredients that are harvested at their
            peak ripeness, delivering maximum flavor and nutritional value.
            Whenever possible, we choose organic produce to guarantee that our
            dishes are not only delicious but also health-conscious and
            environmentally friendly.
          </p>
          <h3 className={`${antic.className} text-yellow-500 text-lg my-2`}>
            Farm-to-Table Philosophy
          </h3>
          <p className="text-justify text-base my-2 leading-relaxed">
            Embracing a farm-to-table philosophy, we work closely with local
            farmers to bring the freshest ingredients directly to our kitchen.
            This approach not only supports the local economy but also allows us
            to provide our guests with dishes that are vibrant, fresh, and full
            of flavor.
          </p>
          <p className="text-justify text-base my-2 leading-relaxed">
            We take great pride in sourcing the highest quality ingredients from
            both local and international suppliers. Our partnerships with
            trusted farmers and purveyors ensure that we receive the freshest
            produce, premium meats, and sustainable seafood. Each component of
            our dishes is carefully selected to meet our rigorous standards of
            excellence.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/3 px-4 mt-8 md:mt-0">
          <Image
            src="./wineGlass.webp"
            width={500}
            height={500}
            alt="An exquisite dish with a wine glass."
            className="object-cover w-full h-auto"
          />
        </div>
      </article>
    </main>
  );
}

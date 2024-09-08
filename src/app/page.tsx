import Image from "next/image";
import { antic } from "./fonts";
import { Footer } from "./Footer";
import { NavBar } from "./Navbar";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="relative w-full h-[60vh]">
        <Image
          src="./landingPhoto.png"
          alt="Photo of our restaurant"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="brightness-90 w-full h-full"
        />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black opacity-50"></div>
      </div>
      {/* Section Overlay */}
      <section className="absolute top-[30%] left-[5%] w-[90%] md:w-[50%] lg:w-[40%] md:left-[5%] md:top-[20%] text-white text-center md:text-left">
        <h1 className={`${antic.className} text-4xl md:text-7xl font-bold`}>
          Lumière
        </h1>
        <p className={`${antic.className} mt-4 text-lg w-full`}>
          Located in the heart of New York City, our restaurant offers a culinary experience that blends sophistication, luxury, and exceptional taste. Our mission is to provide our guests with an unforgettable dining experience that tantalizes the senses and elevates the soul.
        </p>
      </section>

      {/* About Us Section */}
      <article className="w-full max-w-7xl py-16 px-4 lg:px-0 text-center md:text-left">
        <div className="text-center md:text-center mb-8">
          <h2 className={`${antic.className} text-3xl font-semibold`}>About Us</h2>
          <hr className="border-t-2 border-gray-300 mt-2 mb-6 mx-auto md:mx-0" />
          <Image
            src="./aboutUsImage.svg"
            alt="Image of our chef working with food."
            width={960}
            height={500}
            className="mx-auto md:w-10/12 w-full"
          />
        </div>

        {/* Features List */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <li className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 w-full">
            <Image
              src="./diamondIcon.png"
              alt="Small image of a diamond"
              width={50}
              height={50}
              className="w-12 h-12"
            />
            <div className="w-full">
              <h3 className="font-semibold text-xl">Welcome to Lumière</h3>
              <p>
                Discover an unparalleled dining experience at Lumière, where sophistication meets culinary excellence in the heart of New York City.
              </p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 w-full">
            <Image
              src="./diamondIcon.png"
              alt="Small image of a diamond"
              width={50}
              height={50}
              className="w-12 h-12"
            />
            <div className="w-full">
              <h3 className="font-semibold text-xl">Our Story</h3>
              <p>
                Founded in 2024 by celebrated chef Marcus Bennett, Lumière is the culmination of a lifelong passion for fine dining and exceptional service.
              </p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 w-full">
            <Image
              src="./diamondIcon.png"
              alt="Small image of a diamond"
              width={50}
              height={50}
              className="w-12 h-12"
            />
            <div className="w-full">
              <h3 className="font-semibold text-xl">Culinary Philosophy</h3>
              <p>
                We are dedicated to using the finest seasonal ingredients, expertly crafted into exquisite dishes that delight the senses and elevate your dining experience.
              </p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 w-full">
            <Image
              src="./diamondIcon.png"
              alt="Small image of a diamond"
              width={50}
              height={50}
              className="w-12 h-12"
            />
            <div className="w-full">
              <h3 className="font-semibold text-xl">Lumière Experience</h3>
              <p>
                Our meticulously designed interior provides an ambiance of elegance and comfort, perfect for both intimate dinners and special celebrations.
              </p>
            </div>
          </li>
        </ul>
      </article>

      {/* Private Events Section */}
      <article className="w-full max-w-7xl py-16 px-4 lg:px-0 text-center md:text-left">
        <div className="text-center md:text-left mb-8">
          <h2 className={`${antic.className} text-center text-3xl font-semibold`}>Private Events</h2>
          <hr className="border-t-2 border-gray-300 mt-2 mb-6 mx-auto md:mx-0" />
          <Image
            src="./events.png"
            alt="Image of our chef working with food."
            width={1900}
            height={1080}
            className="mx-auto w-full"
          />
        </div>
        <p className={`${antic.className} text-center text-lg`}>
          Lumière offers an elegant and intimate setting for private events, including corporate dinners, wedding receptions, and special celebrations. For more information about hosting your event with us, please contact our events coordinator at
          <a href="mailto:events@lumierenyc.com" className="text-blue-600"> events@lumierenyc.com</a>.
        </p>
      </article>
    </main>
  );
}

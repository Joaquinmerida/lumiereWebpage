import Image from "next/image";

export default function Page() {
    return (
        <main className="flex flex-col items-center text-center px-8 py-10">
            {/* Background Image */}
            <div className="absolute left-0 w-full h-auto z-[-1] overflow-hidden">
                <Image
                    src="./backgroundMap.webp"
                    alt="NYC Map"
                    height={2000}
                    width={1903}
                    style={{
                        objectFit: "cover",
                        objectPosition: "center 40%",
                        opacity: "0.06",
                    }}
                />
            </div>

            {/* Skyline Image */}
            <Image
                src={"/skyline.png"}
                alt="NYC skyline"
                width={1000}
                height={700}
                className="w-[80%] h-[600px] object-cover mt-[20px]"
            />

            {/* About Us Section */}
            <section className="flex flex-col mt-[100px] items-center px-6 md:px-[10%] text-lg">
                <h1 className="text-4xl">About Us</h1>
                <hr className="w-[90%] my-4" />
                <h2 className="text-xl py-8">Our Story</h2>
                <p className="w-[100%] mb-8">
                    Founded in 2003 by renowned chef Marcus Bennett, Lumière was born from a passion for haute cuisine and a desire to create a dining destination that celebrates the finest ingredients and culinary techniques. Chef Bennetts vision was to establish a restaurant where each dish is crafted with precision and artistry, and where guests can savor the true essence of culinary excellence.
                </p>
                <h2 className="text-xl py-8">Our Philosophy</h2>
                <p className="w-[100%] mb-8">
                    At Lumière, we are committed to the highest standards of quality and service. Our team of talented chefs and dedicated staff work tirelessly to ensure that every detail of your dining experience is perfect. From the carefully curated menu to the exquisite presentation of each dish, we strive to create a dining environment that is both luxurious and welcoming.
                </p>
                <h2 className="text-xl py-8">The Lumière Experience</h2>
                <p className="w-[100%] mb-8">
                    Our menu features a selection of gourmet dishes that highlight the best seasonal and locally sourced ingredients. Each plate is a masterpiece, designed to showcase the flavors and textures that define modern fine dining. Our wine list, curated by our expert sommelier, offers a range of exceptional vintages that perfectly complement our cuisine.
                </p>
            </section>

            {/* Manager Signature */}
            <div className="flex flex-col items-end p-8 mb-10">
                <Image 
                    src={"/sign.png"}
                    alt="Our manager signature"
                    width={700}
                    height={400}
                    className="mb-[-20px]"
                />
                <p className="text-sm">Sebastian Moreau</p>
                <p className="text-sm">Lumiere CEO</p>
            </div>
        </main>
    );
}

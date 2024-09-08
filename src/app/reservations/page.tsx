"use client";

import Image from "next/image";
import { useState } from "react";
import { antic } from "../fonts";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DatePicker } from "@/components/ui/date-Picker";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/hooks/use-toast";

export default function Page() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [comment, setComment] = useState<string>("");

  const handleSubmit = () => {
    setStartDate(null);
    setComment("");
  };

  const { toast } = useToast();

  const handleClear = () => {
    setStartDate(null);
    setComment("");
  };

  return (
    <main className="flex flex-col items-center">
      <div className="relative w-full h-[500px] overflow-hidden brightness-90">
        <Image
          src="/events.webp"
          alt="Photo of our restaurant"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center 60%",
          }}
        />
      </div>

      <section className="flex flex-wrap justify-evenly py-10 w-full">
        <h1 className={`${antic.className} text-5xl text-center w-full mb-8`}>
          Make a reservation
        </h1>
        <form
          className="flex m-2 flex-wrap flex-column justify-center"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <DatePicker />
          <Textarea
            className="w-full mt-3 resize-none text-black bg-gray-100 border border-gray-800 text-lg"
            placeholder="Leave a comment or special request..."
            name="request"
            maxLength={40}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <div className="flex mt-3 w-full justify-between">
            <Button
              type="button"
              onClick={handleClear}
              className="w-[48%] p-3 border-2 border-gray-800"
            >
              Clear
            </Button>
            <Button
              className="w-[48%] p-3 bg-orange-600 text-white border-2 border-gray-800"
              variant="outline"
              onClick={() => {
                toast({
                  title: "Thank you!",
                  description: "Your reservation was booked succesfully.",
                });
              }}
            >
              Send
            </Button>
          </div>
        </form>
      </section>

      <div className="flex flex-wrap justify-center items-center w-full text-center gap-4">
        {/* Card 1 */}
        <Card className="w-[350px] p-4 m-4 flex flex-col justify-between">
          <CardHeader>
            <CardTitle>Reservation Policy</CardTitle>
            <CardDescription>Calendar Information</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Image
              src="/calendar.png"
              alt="Calendar icon."
              width={120}
              height={120}
            />
            <p className="text-lg mt-2">
              We understand that plans can change. If you need to modify or
              cancel your reservation, at least 24 hours in advance to avoid any
              cancellation fees.
            </p>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card className="w-[350px] p-4 m-4 flex flex-col justify-between">
          <CardHeader>
            <CardTitle>Dress Code</CardTitle>
            <CardDescription>Dress Information</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Image
              src="/clothes.png"
              alt="Dressing code icon."
              width={120}
              height={120}
            />
            <p className="text-lg mt-2">
              Please note that Lumière adheres to a smart casual dress code. We
              kindly ask our guests to dress accordingly to enhance the dining
              experience.
            </p>
          </CardContent>
        </Card>
      </div>

      <section className="w-100 overflow-hidden flex flex-col items-center p-4">
        <p className="mb-4">
          Find us easily with the map below. We are located at 123 Elegant
          Avenue, New York, NY 10001.
        </p>
        <iframe className="w-90 p-5"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d377.73104407667284!2d-73.97614792355611!3d40.76536000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fbb7d07007%3A0xb07e2bc7ebad08a2!2sLa%20Prairie%20Spa%20at%20The%20Ritz-Carlton%20New%20York%2C%20Central%20Park!5e0!3m2!1ses!2suy!4v1725808079876!5m2!1ses!2suy" width="400" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </main>
  );
}

"use client";
import {
  getAllEvents,
  getRelatedEventsByCategory,
} from "@/lib/actions/event.actions";
import { formatDateTime } from "@/lib/utils";
import { Event } from "@/types";
import EventsShowcase from "@/components/EventsShowcase";
import { useEffect, useState } from "react";
import WorkshopShowcase from "@/components/WorkshopShowcase";

const page = () => {
  const [events, setEvents] = useState<Event[] | null | undefined>(undefined);

  useEffect(() => {
    getAllEvents({ category: "", limit: 100, page: 1, query: "" })
      .then((events) => {
        setEvents(events?.data || null);
      })
      .catch((err) => {
        setEvents(null);
      });
  }, []);

  return (
    <>
      <header className=" flex justify-center items-center w-screen h-screen relative">
        <img
          src="/events.jpg"
          className="w-full h-full object-cover absolute -z-20 top-0 left-0"
        />
        <h2 className="text-6xl font-bold text-white font-got">Events</h2>
      </header>
      <main className=" py-20 w-full gap-10 flex  relative">
        <img
          src="/comp.png"
          alt="mother of dragon"
          className=" -z-50 absolute top-0 left-0 w-full h-full object-cover"
        />
        {events == null && (
          <h4 className="text-red-600 font-got text-center text-3xl` ">
            oops looks like there is an Error!
          </h4>
        )}
        {events && (
          <>
            <WorkshopShowcase events={events} />
          </>
        )}
      </main>
    </>
  );
};

export default page;

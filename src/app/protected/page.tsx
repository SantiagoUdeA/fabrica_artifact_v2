import { redirect } from "next/navigation";

import { LogoutButton } from "@/components/auth/logout-button";
import { createClient } from "@/lib/supabase/server";
import { fetchEvents } from "@/lib/actions/events.actions";
import EventCard from "@/components/events/EventCard";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/auth/login");
  }

  const events = await fetchEvents();

  return (
    <>
      <nav className="w-screen flex gap-2 flex-row-reverse p-4">
        <LogoutButton />
        <p>
          Hello <span>{data.user.email}</span>
        </p>
      </nav>
      <section className="p-4">
        <h1 className="text-4xl mb-4">Events</h1>
        <div className="grid grid-cols-2 gap-2">
          {events.map((event) => (
            <EventCard event={event} key={event.id} />
          ))}
        </div>
      </section>
    </>
  );
}

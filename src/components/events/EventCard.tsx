import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Event } from "@/lib/definitions/event";
import { Calendar, Pin } from "lucide-react";

export default function EventCard({ event }: { event: Event }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{event.title}</CardTitle>
        <CardDescription>{event.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <Calendar /> {event.date}
        </div>
        <div className="flex gap-2">
          <Pin /> {event.location}
        </div>
      </CardContent>
    </Card>
  );
}

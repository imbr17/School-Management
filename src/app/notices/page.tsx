import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Dummy data for notices
const dummyNotices = [
  {
    id: 1,
    title: "PTA Meeting Announcement",
    description: "Join us for the Parent-Teacher Association meeting to discuss upcoming school events.",
    date: "2024-07-15",
    type: "Meeting",
  },
  {
    id: 2,
    title: "Science Fair Registration Open",
    description: "Register now for the annual school science fair and showcase your innovative projects.",
    date: "2024-07-20",
    type: "Event",
  },
  {
    id: 3,
    title: "Summer Holiday Schedule",
    description: "Check out the school's summer holiday schedule and plan your vacation accordingly.",
    date: "2024-07-25",
    type: "Notice",
  },
  {
    id: 4,
    title: "New Library Resources Available",
    description: "Explore the new collection of books and resources available at the school library.",
    date: "2024-08-01",
    type: "Resource",
  },
  {
    id: 5,
    title: "Sports Day Announcement",
    description: "Get ready for the annual sports day with exciting games and activities.",
    date: "2024-08-10",
    type: "Event",
  },
];

const NoticePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("All");

  // Filter notices based on search query and type
  const filteredNotices = dummyNotices.filter((notice) => {
    const searchMatch = notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notice.description.toLowerCase().includes(searchQuery.toLowerCase());
    const typeMatch = filterType === "All" || notice.type === filterType;
    return searchMatch && typeMatch;
  });

  return (
    <div className="container mx-auto py-12">
      {/* Page Title */}
      <h1 className="text-3xl font-semibold text-center mb-8">School Notices & Announcements</h1>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <Input
          type="text"
          placeholder="Search notices..."
          className="md:w-1/3"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="flex items-center gap-2">
          <Label htmlFor="filterType">Filter by Type:</Label>
          <select
            id="filterType"
            className="border rounded px-4 py-2"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Meeting">Meeting</option>
            <option value="Event">Event</option>
            <option value="Notice">Notice</option>
            <option value="Resource">Resource</option>
          </select>
        </div>
      </div>

      {/* Notices Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredNotices.map((notice) => (
          <Card key={notice.id} className="bg-secondary shadow-md">
            <CardHeader>
              <CardTitle>{notice.title}</CardTitle>
              <CardDescription>{notice.type} - {notice.date}</CardDescription>
            </CardHeader>
            <CardContent>
              {notice.description}
              <Button variant="link" className="mt-4">Read More</Button>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Archive Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Archive</h2>
        <Accordion type="multiple" collapsible>
          <AccordionItem value="2024">
            <AccordionTrigger>2024</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc list-inside">
                {dummyNotices.map((notice) => (
                  <li key={notice.id}>{notice.title} ({notice.date})</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="2023">
            <AccordionTrigger>2023</AccordionTrigger>
            <AccordionContent>
              <p>No notices available for 2023.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
};

export default NoticePage;

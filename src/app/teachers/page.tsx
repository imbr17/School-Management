import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icons } from "@/components/icons";
import Link from "next/link";

const teachersData = [
  {
    name: "Jane Smith",
    subject: "Mathematics",
    email: "jane.smith@example.com",
    image: "https://picsum.photos/id/237/100/100",
    quote: "Inspiring students to love math through real-world applications.",
  },
  {
    name: "Michael Johnson",
    subject: "Science",
    email: "michael.johnson@example.com",
    image: "https://picsum.photos/id/238/100/100",
    quote: "Fostering curiosity and critical thinking in the world of science.",
  },
  {
    name: "Emily Brown",
    subject: "English",
    email: "emily.brown@example.com",
    image: "https://picsum.photos/id/239/100/100",
    quote: "Unlocking the power of language and literature for every student.",
  },
  {
    name: "David Wilson",
    subject: "History",
    email: "david.wilson@example.com",
    image: "https://picsum.photos/id/240/100/100",
    quote: "Bringing history to life with engaging stories and thought-provoking discussions.",
  },
  {
    name: "Sarah Lee",
    subject: "Art",
    email: "sarah.lee@example.com",
    image: "https://picsum.photos/id/241/100/100",
    quote: "Encouraging creativity and self-expression through the visual arts.",
  },
  {
    name: "Kevin Miller",
    subject: "Music",
    email: "kevin.miller@example.com",
    image: "https://picsum.photos/id/242/100/100",
    quote: "Igniting a lifelong passion for music and its universal language.",
  },
  {
    name: "Jessica Davis",
    subject: "Physics",
    email: "jessica.davis@example.com",
    image: "https://picsum.photos/id/243/100/100",
    quote: "Making physics accessible and exciting for all students.",
  },
  {
    name: "Brian White",
    subject: "Chemistry",
    email: "brian.white@example.com",
    image: "https://picsum.photos/id/244/100/100",
    quote: "Exploring the wonders of chemistry and its impact on our world.",
  },
  {
    name: "Ashley Green",
    subject: "Biology",
    email: "ashley.green@example.com",
    image: "https://picsum.photos/id/245/100/100",
    quote: "Inspiring a deep appreciation for the diversity of life on Earth.",
  },
  {
    name: "Christopher Hall",
    subject: "Geography",
    email: "christopher.hall@example.com",
    image: "https://picsum.photos/id/246/100/100",
    quote: "Helping students understand the world and their place in it.",
  },
  {
    name: "Amanda King",
    subject: "Spanish",
    email: "amanda.king@example.com",
    image: "https://picsum.photos/id/247/100/100",
    quote: "Empowering students to communicate and connect across cultures.",
  },
  {
    name: "Justin Scott",
    subject: "French",
    email: "justin.scott@example.com",
    image: "https://picsum.photos/id/248/100/100",
    quote: "Bringing the French language and culture to life in the classroom.",
  },
  {
    name: "Tiffany Adams",
    subject: "German",
    email: "tiffany.adams@example.com",
    image: "https://picsum.photos/id/249/100/100",
    quote: "Unlocking the richness of the German language and its global impact.",
  },
  {
    name: "Brandon Carter",
    subject: "Economics",
    email: "brandon.carter@example.com",
    image: "https://picsum.photos/id/250/100/100",
    quote: "Providing students with the tools to understand and analyze economic systems.",
  },
  {
    name: "Victoria Reed",
    subject: "Political Science",
    email: "victoria.reed@example.com",
    image: "https://picsum.photos/id/251/100/100",
    quote: "Engaging students in critical discussions about government and politics.",
  },
  {
    name: "Jonathan Morgan",
    subject: "Psychology",
    email: "jonathan.morgan@example.com",
    image: "https://picsum.photos/id/252/100/100",
    quote: "Exploring the complexities of the human mind and behavior.",
  },
  {
    name: "Stephanie Cook",
    subject: "Sociology",
    email: "stephanie.cook@example.com",
    image: "https://picsum.photos/id/253/100/100",
    quote: "Helping students understand the dynamics of society and culture.",
  },
  {
    name: "Nicholas Bell",
    subject: "Drama",
    email: "nicholas.bell@example.com",
    image: "https://picsum.photos/id/254/100/100",
    quote: "Cultivating creativity and self-confidence through the performing arts.",
  },
  {
    name: "Brittany Reed",
    subject: "Journalism",
    email: "brittany.reed@example.com",
    image: "https://picsum.photos/id/255/100/100",
    quote: "Empowering students to tell stories that matter and make a difference.",
  },
  {
    name: "Patrick Long",
    subject: "Computer Science",
    email: "patrick.long@example.com",
    image: "https://picsum.photos/id/256/100/100",
    quote: "Preparing students for the future with essential coding and technology skills.",
  },
];

const TeachersInfoPage = () => {
  const [selectedSubject, setSelectedSubject] = useState("All");

  const filteredTeachers =
    selectedSubject === "All"
      ? teachersData
      : teachersData.filter((teacher) => teacher.subject === selectedSubject);

  const subjects = ["All", ...new Set(teachersData.map((teacher) => teacher.subject))];

  return (
    <div className="container mx-auto py-12">
       
      {/* Page Title */}
      <h1 className="text-3xl font-semibold text-center mb-8">Meet Our Teachers</h1>

      {/* Subject Filter */}
      <Tabs defaultValue="all" className="w-[80%] mx-auto mb-8">
        <TabsList className="grid w-full grid-cols-[repeat(auto-fit,minmax(100px,1fr))]">
          {subjects.map((subject) => (
            <TabsTrigger
              key={subject}
              value={subject.toLowerCase()}
              onClick={() => setSelectedSubject(subject)}
            >
              {subject}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Teacher Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredTeachers.map((teacher) => (
          <Card key={teacher.email} className="bg-secondary shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Avatar className="w-20 h-20 mx-auto">
                <AvatarImage src={teacher.image} alt={teacher.name} />
                <AvatarFallback>
                  <Icons.user className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-center mt-4">{teacher.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">{teacher.subject}</CardDescription>
              <p className="text-center text-muted-foreground mb-4">
                <a href={`mailto:${teacher.email}`}>{teacher.email}</a>
              </p>
              <p className="text-center text-sm italic text-gray-600">
                "{teacher.quote}"
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Inspirational Quote */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          "Education is the most powerful weapon which you can use to change the world."
        </h2>
        <p className="text-muted-foreground">- Nelson Mandela</p>
      </section>

      {/* CTA Section */}
      <section className="mt-16 text-center">
        <Link href="/contact">
          <Button size="lg">Want to join our teaching team?</Button>
        </Link>
      </section>
    </div>
  );
};

export default TeachersInfoPage;

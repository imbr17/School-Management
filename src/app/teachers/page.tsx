"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icons } from "@/components/icons";
import Link from "next/link";

const teachersData = [
  {
    name: "Jane Smith",
    subject: "Mathematics",
    email: "jane.smith@example.com",
    image: "https://picsum.photos/id/237/100/100",
  },
  {
    name: "Michael Johnson",
    subject: "Science",
    email: "michael.johnson@example.com",
    image: "https://picsum.photos/id/238/100/100",
  },
  {
    name: "Emily Brown",
    subject: "English",
    email: "emily.brown@example.com",
    image: "https://picsum.photos/id/239/100/100",
  },
  {
    name: "David Wilson",
    subject: "History",
    email: "david.wilson@example.com",
    image: "https://picsum.photos/id/240/100/100",
  },
  {
    name: "Sarah Lee",
    subject: "Art",
    email: "sarah.lee@example.com",
    image: "https://picsum.photos/id/241/100/100",
  },
  {
    name: "Kevin Miller",
    subject: "Music",
    email: "kevin.miller@example.com",
    image: "https://picsum.photos/id/242/100/100",
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
          <Card key={teacher.email} className="bg-secondary shadow-md">
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
              <p className="text-center text-muted-foreground">
                <a href={`mailto:${teacher.email}`}>{teacher.email}</a>
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
        <Button size="lg">
          <Link href="/contact">Want to join our teaching team?</Link>
        </Button>
      </section>
    </div>
  );
};

export default TeachersInfoPage;

    
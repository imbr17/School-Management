"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqData = [
  {
    question: "What is the school's mission?",
    answer: "Our mission is to provide a nurturing environment where students can excel academically, socially, and emotionally.",
  },
  {
    question: "What extracurricular activities are available?",
    answer: "We offer a variety of extracurricular activities, including sports, music, arts, and clubs.",
  },
  {
    question: "How can I contact the school?",
    answer: "You can contact us via email at info@dreamvalleyhighschool.com or by phone at (123) 456-7890.",
  },
];

const timelineData = [
  { year: 1950, event: "School Founded" },
  { year: 1965, event: "First graduating class" },
  { year: 1980, event: "New Science Building opened" },
  { year: 2000, event: "Became a tech-focused institution" },
  { year: 2020, event: "Celebrated 70th Anniversary" },
];

const InfoPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-semibold text-center mb-8">About Our School</h1>

      {/* Tabs Section */}
      <section className="mb-12">
        <Tabs defaultValue="vision" className="w-[80%] mx-auto">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="vision">Vision</TabsTrigger>
            <TabsTrigger value="mission">Mission</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="motto">Motto</TabsTrigger>
          </TabsList>
          <TabsContent value="vision">
            <Card>
              <CardHeader>
                <CardTitle>Our Vision</CardTitle>
                <CardDescription>What we aspire to become.</CardDescription>
              </CardHeader>
              <CardContent>
                A leading institution in nurturing future leaders and innovators.
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="mission">
            <Card>
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
                <CardDescription>How we plan to achieve our vision.</CardDescription>
              </CardHeader>
              <CardContent>
                To provide quality education and foster a supportive learning environment.
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="history">
             <Card>
              <CardHeader>
                <CardTitle>Our History</CardTitle>
                <CardDescription>How it all began.</CardDescription>
              </CardHeader>
              <CardContent>
               Established in 1950, Dream Valley High School started as a small community school.
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="motto">
             <Card>
              <CardHeader>
                <CardTitle>Our Motto</CardTitle>
                <CardDescription>Guiding principle.</CardDescription>
              </CardHeader>
              <CardContent>
               "Excellence in Learning, Integrity in Life."
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Timeline Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">School History Timeline</h2>
        <div className="relative">
          <div className="absolute left-1/2 -ml-2 h-full border border-secondary"></div>
          <div className="space-y-6">
            {timelineData.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-1/2 text-right pr-4">
                  <div className="text-lg font-semibold">{item.year}</div>
                </div>
                <div className="rounded-full bg-primary w-4 h-4 z-10"></div>
                <div className="w-1/2 pl-4">
                  <Card className="bg-secondary">
                    <CardContent>{item.event}</CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History with Image Section */}
      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600">
            Founded in 1950, Dream Valley High School has grown from a small community school to a leading educational institution.
          </p>
          <p className="text-gray-600 mt-4">
            We are committed to providing a nurturing environment where students can thrive.
          </p>
        </div>
        <div>
          <img
            src="https://picsum.photos/id/292/500/300"
            alt="School Building"
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible>
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <Button size="lg">
         <Link href="/teachers">Meet Our Teachers</Link>
         </Button>
      </section>
    </div>
  );
};

export default InfoPage;

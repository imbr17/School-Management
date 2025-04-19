"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
    answer: "You can contact us via email at info@schoolmate.com or by phone at (123) 456-7890.",
  },
];

const downloadLinks = [
  {
    title: "School Routine (PDF)",
    href: "#",
  },
  {
    title: "Admission Form (PDF)",
    href: "#",
  },
  {
    title: "Other Downloads",
    href: "#",
  },
];

const HelpPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-semibold text-center mb-8">Need Help?</h1>

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

      {/* Contact Form Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <Card className="bg-secondary shadow-md">
          <CardContent>
            <form className="grid gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <Input type="text" id="name" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input type="email" id="email" placeholder="Your Email" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea id="message" placeholder="Your Message" />
              </div>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Downloads Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Downloads</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {downloadLinks.map((link, index) => (
            <Button key={index} asChild>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.title}
              </a>
            </Button>
          ))}
        </div>
      </section>

      {/* Embedded Google Maps Location */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
        <div className="overflow-hidden rounded-lg shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2245934274775!2d90.39298927457823!3d23.733078587925516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b08836c57f%3A0x5ca439a253c00d49!2sDaffodil%20International%20University!5e0!3m2!1sen!2sbd!4v1718989456194!5m2!1sen!2sbd"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[450px]"
          ></iframe>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <Button size="lg">Send us a Message</Button>
      </section>
    </div>
  );
};

export default HelpPage;

    
'use client';

import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {Icons} from '@/components/icons';
import {cn} from '@/lib/utils';
import Link from 'next/link';
import {useEffect, useState} from 'react';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

const navigation = [
  {name: 'Home', href: '/'},
  {name: 'About', href: '/about'},
  {name: 'Notices', href: '/notices'},
  {name: 'Help', href: '/help'},
  {name: 'Teachers', href: '/teachers'},
  {name: 'Contact', href: '/contact'},
];

const testimonials = [
  {
    content:
      'SchoolMate has made it so much easier to stay informed about everything happening at school. Highly recommend!',
    author: 'Alice Smith',
    role: 'Parent',
    image: 'https://picsum.photos/id/888/50/50',
  },
  {
    content: 'I love how SchoolMate keeps me updated on all the important dates and events. It\'s a game changer!',
    author: 'Bob Johnson',
    role: 'Student',
    image: 'https://picsum.photos/id/222/50/50',
  },
  {
    content: 'As a teacher, SchoolMate helps me communicate with parents and students effectively. Great tool!',
    author: 'Eve Williams',
    role: 'Teacher',
    image: 'https://picsum.photos/id/122/50/50',
  },
];

const notices = [
  {title: 'PTA Meeting', description: 'October 26, 2024', content: 'Join us for the Parent-Teacher Association meeting to discuss upcoming school events.'},
  {title: 'Science Fair', description: 'November 10, 2024', content: 'Showcase your scientific talents at our annual science fair.'},
  {title: 'Holiday Concert', description: 'December 18, 2024', content: 'Celebrate the holidays with our festive school concert.'},
];

const stats = [
  {title: 'Students', value: '1200+'},
  {title: 'Teachers', value: '80+'},
  {title: 'Events', value: '20+'},
  {title: 'Clubs', value: '15+'},
];

const faqData = [
  {
    question: "What is the school's mission?",
    answer: "Our mission is to provide a nurturing environment where students can excel academically, socially, and emotionally."
  },
  {
    question: "What extracurricular activities are available?",
    answer: "We offer a variety of extracurricular activities, including sports, music, arts, and clubs."
  },
  {
    question: "How can I contact the school?",
    answer: "You can contact us via email at info@schoolmate.com or by phone at (123) 456-7890."
  }
];


export default function Home() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-background min-h-screen text-foreground">
      {/* Sticky Navbar */}
      <header className={cn('sticky top-0 z-50 w-full bg-background/90 backdrop-blur transition-all duration-300 border-b', isSticky ? 'border-border' : 'border-transparent')}>
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <Link href="/" className="text-lg font-bold">
            SchoolMate
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="hover:text-primary transition-colors duration-200">
                {item.name}
              </Link>
            ))}
          </nav>
          <Link href="/login">
          <Button>Login</Button>
          </Link>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 bg-secondary overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://picsum.photos/id/1074/2000/1000"
              alt="School Campus"
              className="absolute inset-0 object-cover w-full h-full opacity-30"
            />
          </div>
          <div className="container mx-auto relative px-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Welcome to Our School
            </h1>
            <p className="text-lg text-foreground mb-8">
              Nurturing Minds, Inspiring Futures.
            </p>
            <Link href="/notices">
            <Button size="lg">See Notices</Button>
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-8">About Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-secondary shadow-md">
                <CardHeader>
                  <CardTitle>Our Vision</CardTitle>
                  <CardDescription>A brief overview of what we aim to achieve.</CardDescription>
                </CardHeader>
                <CardContent>
                  To provide a nurturing environment where students can excel academically, socially, and emotionally.
                </CardContent>
              </Card>
              <Card className="bg-secondary shadow-md">
                <CardHeader>
                  <CardTitle>Our Mission</CardTitle>
                  <CardDescription>How we plan to make our vision a reality.</CardDescription>
                </CardHeader>
                <CardContent>
                  We are dedicated to fostering a community of lifelong learners and responsible global citizens.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold mb-8">Quick Stats</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <Card key={stat.title} className="bg-secondary shadow-md">
                  <CardHeader>
                    <CardTitle>{stat.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-2xl font-bold">{stat.value}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events or Notices Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-8">Upcoming Events &amp; Notices</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {notices.map((notice) => (
                <Card key={notice.title} className="bg-secondary shadow-md">
                  <CardHeader>
                    <CardTitle>{notice.title}</CardTitle>
                    <CardDescription>{notice.description}</CardDescription>
                  </CardHeader>
                  <CardContent>{notice.content}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-8 text-center">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.author} className="bg-secondary shadow-md">
                  <CardContent className="mb-4">{testimonial.content}</CardContent>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={testimonial.image}/>
                      <AvatarFallback><Icons.user className="h-4 w-4"/></AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-sm font-semibold">{testimonial.author}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

               {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible>
              {faqData.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-secondary py-12 md:py-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            &copy; {new Date().getFullYear()} SchoolMate. All rights reserved.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              Privacy Policy
            </Link>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Contact: info@schoolmate.com</p>
        </div>
      </footer>
    </div>
  );
}


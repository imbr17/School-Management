import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Icons} from "@/components/icons";
import {cn} from "@/lib/utils";

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:order-2">
            <img
              src="https://picsum.photos/id/237/600/400"
              alt="School Activities"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:order-1 flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to SchoolMate!</h1>
            <p className="text-gray-300 mb-6">
              Your go-to platform for staying connected with school activities, announcements, and teacher
              information.
            </p>
            <Button>Learn More</Button>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Notices &amp; Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Example Notices */}
          <Card>
            <CardHeader>
              <CardTitle>PTA Meeting</CardTitle>
              <CardDescription>October 26, 2024</CardDescription>
            </CardHeader>
            <CardContent>
              Join us for the Parent-Teacher Association meeting to discuss upcoming school events.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Science Fair</CardTitle>
              <CardDescription>November 10, 2024</CardDescription>
            </CardHeader>
            <CardContent>
              Showcase your scientific talents at our annual science fair.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Holiday Concert</CardTitle>
              <CardDescription>December 18, 2024</CardDescription>
            </CardHeader>
            <CardContent>
              Celebrate the holidays with our festive school concert.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Quick Stats</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Example Counters */}
          <Card>
            <CardHeader>
              <CardTitle>Students</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-bold">1200+</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Teachers</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-bold">80+</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Events</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-bold">20+</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Clubs</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-bold">15+</CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Example Testimonials */}
          <Card>
            <CardContent className="mb-4">
              "SchoolMate has made it so much easier to stay informed about everything happening at school.
              Highly recommend!"
            </CardContent>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://picsum.photos/id/888/50/50"/>
                <AvatarFallback><Icons.user className="h-4 w-4"/></AvatarFallback>
              </Avatar>
              <div>
                <div className="text-sm font-semibold">Alice Smith</div>
                <div className="text-xs text-muted-foreground">Parent</div>
              </div>
            </div>
          </Card>
          <Card>
            <CardContent className="mb-4">
              "I love how SchoolMate keeps me updated on all the important dates and events. It's a game
              changer!"
            </CardContent>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://picsum.photos/id/222/50/50"/>
                <AvatarFallback><Icons.user className="h-4 w-4"/></AvatarFallback>
              </Avatar>
              <div>
                <div className="text-sm font-semibold">Bob Johnson</div>
                <div className="text-xs text-muted-foreground">Student</div>
              </div>
            </div>
          </Card>
          <Card>
            <CardContent className="mb-4">
              "As a teacher, SchoolMate helps me communicate with parents and students effectively. Great
              tool!"
            </CardContent>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://picsum.photos/id/122/50/50"/>
                <AvatarFallback><Icons.user className="h-4 w-4"/></AvatarFallback>
              </Avatar>
              <div>
                <div className="text-sm font-semibold">Eve Williams</div>
                <div className="text-xs text-muted-foreground">Teacher</div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}

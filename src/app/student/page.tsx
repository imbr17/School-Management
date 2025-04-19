"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Icons } from "@/components/icons";
import Link from "next/link";

const StudentAreaPage = () => {
  // Dummy student data
  const student = {
    name: "John Doe",
    studentId: "2023-1234",
    grade: "10th",
    email: "john.doe@example.com",
    avatarUrl: "https://picsum.photos/id/888/50/50",
  };

  return (
    <div className="container mx-auto py-12">
      {/* Welcome Banner */}
      <section className="mb-8 p-8 bg-secondary rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-center">
          Welcome, {student.name}!
        </h1>
      </section>

      {/* Dashboard Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar/Tabbed Dashboard */}
        <div className="md:col-span-1">
          <Tabs defaultValue="results" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-1">
              <TabsTrigger value="results">Results</TabsTrigger>
              <TabsTrigger value="certificates">Certificates</TabsTrigger>
              <TabsTrigger value="assignments">Assignments</TabsTrigger>
              <TabsTrigger value="library">Library</TabsTrigger>
              <TabsTrigger value="notices">Notices</TabsTrigger>
            </TabsList>
            <TabsContent value="results">
              <Card>
                <CardHeader>
                  <CardTitle>Results</CardTitle>
                  <CardDescription>Your academic results.</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Display student's results here */}
                  <p>No results available yet.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="certificates">
              <Card>
                <CardHeader>
                  <CardTitle>Certificates</CardTitle>
                  <CardDescription>Your awarded certificates.</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Display student's certificates here */}
                  <p>No certificates available yet.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="assignments">
              <Card>
                <CardHeader>
                  <CardTitle>Assignments</CardTitle>
                  <CardDescription>Your current assignments.</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Display student's assignments here */}
                  <p>No assignments available yet.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="library">
              <Card>
                <CardHeader>
                  <CardTitle>Library</CardTitle>
                  <CardDescription>Access school library resources.</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Display library resources here */}
                  <p>No resources available yet.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="notices">
              <Card>
                <CardHeader>
                  <CardTitle>Notices</CardTitle>
                  <CardDescription>Important notices from the school.</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Display school notices here */}
                  <p>No notices available yet.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Profile Card */}
        <div className="md:col-span-3">
          <Card className="bg-secondary shadow-md">
            <CardHeader>
              <CardTitle>Student Profile</CardTitle>
              <CardDescription>View and edit your profile details.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 mb-4">
                <Avatar>
                  <AvatarImage src={student.avatarUrl} />
                  <AvatarFallback>
                    <Icons.user className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-sm font-semibold">{student.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {student.email}
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Student ID
                  </label>
                  <Input type="text" value={student.studentId} readOnly />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Grade
                  </label>
                  <Input type="text" value={student.grade} readOnly />
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-2">
                <Button variant="outline">
                <Link href="/edit-profile">
                  Edit Profile
                  </Link>
                </Button>
                <Button>
                 <Link href="/logout">
                  Logout
                  </Link>
                  </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudentAreaPage;

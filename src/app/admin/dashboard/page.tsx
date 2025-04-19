"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Menu, Bell, User, Settings, Book, Presentation, Home, LogOut } from 'lucide-react'; // Import necessary icons
import Link from "next/link";
import { useState } from "react";

const AdminDashboardPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Dummy Data
  const statCards = [
    { title: "Total Students", value: "1,200" },
    { title: "Issued Books", value: "800" },
    { title: "New Signups", value: "50" },
  ];

  const activityData = [
    { action: "New student joined", time: "2 mins ago" },
    { action: "Book issued", time: "5 mins ago" },
    { action: "Report generated", time: "10 mins ago" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`hidden md:flex flex-col w-64 bg-secondary border-r transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4">
            <Link href="/" className="flex items-center space-x-2 font-semibold">
              <Home className="h-6 w-6" /> {/* Use Home icon here */}
              <span>Dream Valley High School</span>
            </Link>
          </div>
          <nav className="flex-1 px-2 py-4">
            <ul>
              <li>
                <Link href="/admin/dashboard" className="block py-2 hover:bg-muted rounded-md flex items-center">
                  <Home className="h-4 w-4 mr-2" />
                  <span className="ml-2">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link href="/admin/members" className="block py-2 hover:bg-muted rounded-md flex items-center">
                   <User className="h-4 w-4 mr-2" />
                  <span className="ml-2">Members</span>
                </Link>
              </li>
              <li>
                <Link href="/admin/books" className="block py-2 hover:bg-muted rounded-md flex items-center">
                   <Book className="h-4 w-4 mr-2" />
                  <span className="ml-2">Books</span>
                </Link>
              </li>
              <li>
                <Link href="/admin/reports" className="block py-2 hover:bg-muted rounded-md flex items-center">
                   <Presentation className="h-4 w-4 mr-2" />
                  <span className="ml-2">Reports</span>
                </Link>
              </li>
              <li>
                <Link href="/admin/settings" className="block py-2 hover:bg-muted rounded-md flex items-center">
                   <Settings className="h-4 w-4 mr-2" />
                  <span className="ml-2">Settings</span>
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        <div className="flex-1 flex flex-col">
          {/* Topbar */}
          <header className="bg-card border-b p-4 flex items-center justify-between">
            <Button variant="ghost" onClick={toggleSidebar} className="md:hidden">
              <Menu className="h-5 w-5" /> {/* Use Menu icon here */}
            </Button>
            <div className="flex items-center space-x-4">
              <Bell className="h-5 w-5" /> {/* Use Bell icon here */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0 rounded-full">
                    <Avatar>
                      <AvatarImage src="https://picsum.photos/50/50" alt="User Avatar" />
                      <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/">
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          {/* Main Content */}
          <main className="p-6">
            <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {statCards.map((card, index) => (
                <Card key={index} className="bg-secondary shadow-md">
                  <CardHeader>
                    <CardTitle>{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-3xl font-bold">{card.value}</CardContent>
                </Card>
              ))}
            </div>

            {/* Activity Table */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Activity</TableHead>
                      <TableHead>Time</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {activityData.map((activity, index) => (
                      <TableRow key={index}>
                        <TableCell>{activity.action}</TableCell>
                        <TableCell>{activity.time}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Settings Form */}
            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>Change password and update your information</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4">
                  <div>
                    <Label htmlFor="password">New Password</Label>
                    <Input type="password" id="password" />
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input type="password" id="confirmPassword" />
                  </div>
                  <Button>Update Password</Button>
                </form>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;

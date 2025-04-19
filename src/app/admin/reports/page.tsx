'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AdminReportsPage = () => {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Reports</CardTitle>
          <CardDescription>View school reports</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Sample report data goes here...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminReportsPage;

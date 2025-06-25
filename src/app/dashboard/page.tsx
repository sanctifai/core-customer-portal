'use client';

import { useUser } from '@clerk/nextjs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Activity, Users, DollarSign, ArrowUpRight } from 'lucide-react';

export default function DashboardPage() {
  const { user } = useUser();

  const stats = [
    {
      name: 'Total Revenue',
      value: '$45,231.89',
      icon: DollarSign,
      change: '+20.1%',
      changeType: 'positive',
    },
    {
      name: 'Active Users',
      value: '2,338',
      icon: Users,
      change: '+15.1%',
      changeType: 'positive',
    },
    {
      name: 'Active Sessions',
      value: '1,257',
      icon: Activity,
      change: '+10.5%',
      changeType: 'positive',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">
          Welcome back, {user?.firstName || 'User'}
        </h2>
        <p className="text-muted-foreground">
          Here's an overview of your account
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.name}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.name}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center text-sm text-green-600">
                <ArrowUpRight className="mr-1 h-4 w-4" />
                {stat.change}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center space-x-4 rounded-md border p-4"
                >
                  <Activity className="h-5 w-5 text-gray-500" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">Activity {i}</p>
                    <p className="text-sm text-gray-500">
                      Some details about activity {i}
                    </p>
                  </div>
                  <div className="text-sm text-gray-500">5m ago</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <button className="w-full rounded-lg border border-gray-200 p-4 text-left hover:bg-gray-50">
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <p className="text-sm font-medium">Update Profile</p>
                    <p className="text-sm text-gray-500">
                      Keep your information up to date
                    </p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-gray-400" />
                </div>
              </button>
              <button className="w-full rounded-lg border border-gray-200 p-4 text-left hover:bg-gray-50">
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <p className="text-sm font-medium">View Billing</p>
                    <p className="text-sm text-gray-500">
                      Manage your subscription and payments
                    </p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-gray-400" />
                </div>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 
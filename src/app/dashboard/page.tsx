'use client';

import { useUser } from '@clerk/nextjs';
import { Card } from '@/components/ui/card';
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
          <Card key={stat.name} className="bg-black/5 dark:bg-white/5 border-0">
            <div className="p-6">
              <div className="flex items-center justify-between space-y-0 pb-2">
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.name}
                </p>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex items-baseline gap-2">
                <p className="text-2xl font-bold">{stat.value}</p>
                <div className="flex items-center text-sm text-emerald-500">
                  <ArrowUpRight className="mr-1 h-4 w-4" />
                  {stat.change}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-black/5 dark:bg-white/5 border-0">
          <div className="p-6">
            <h3 className="font-semibold leading-none tracking-tight mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center space-x-4 rounded-md border border-black/5 dark:border-white/5 p-4"
                >
                  <Activity className="h-5 w-5 text-muted-foreground" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">Activity {i}</p>
                    <p className="text-sm text-muted-foreground">
                      Some details about activity {i}
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground">5m ago</div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card className="bg-black/5 dark:bg-white/5 border-0">
          <div className="p-6">
            <h3 className="font-semibold leading-none tracking-tight mb-4">Quick Actions</h3>
            <div className="space-y-4">
              <button className="w-full rounded-lg border border-black/5 dark:border-white/5 p-4 text-left transition-colors hover:bg-black/5 dark:hover:bg-white/5">
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <p className="text-sm font-medium">Update Profile</p>
                    <p className="text-sm text-muted-foreground">
                      Keep your information up to date
                    </p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </button>
              <button className="w-full rounded-lg border border-black/5 dark:border-white/5 p-4 text-left transition-colors hover:bg-black/5 dark:hover:bg-white/5">
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <p className="text-sm font-medium">View Billing</p>
                    <p className="text-sm text-muted-foreground">
                      Manage your subscription and payments
                    </p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
} 
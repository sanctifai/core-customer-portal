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
        <p className="text-gray-600 dark:text-gray-400">
          Here's an overview of your account
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.name} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <div className="p-6">
              <div className="flex items-center justify-between space-y-0 pb-2">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.name}
                </p>
                <stat.icon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              </div>
              <div className="flex items-baseline gap-2">
                <p className="text-2xl font-bold">{stat.value}</p>
                <div className="flex items-center text-sm text-emerald-600 dark:text-emerald-500">
                  <ArrowUpRight className="mr-1 h-4 w-4" />
                  {stat.change}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <div className="p-6">
            <h3 className="font-semibold leading-none tracking-tight mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center space-x-4 rounded-md border border-gray-200 dark:border-gray-700 p-4"
                >
                  <Activity className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">Activity {i}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Some details about activity {i}
                    </p>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">5m ago</div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <div className="p-6">
            <h3 className="font-semibold leading-none tracking-tight mb-4">Quick Actions</h3>
            <div className="space-y-4">
              <button className="w-full rounded-lg border border-gray-200 dark:border-gray-700 p-4 text-left transition-colors hover:bg-gray-50 dark:hover:bg-gray-700">
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <p className="text-sm font-medium">Update Profile</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Keep your information up to date
                    </p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                </div>
              </button>
              <button className="w-full rounded-lg border border-gray-200 dark:border-gray-700 p-4 text-left transition-colors hover:bg-gray-50 dark:hover:bg-gray-700">
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <p className="text-sm font-medium">View Billing</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Manage your subscription and payments
                    </p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                </div>
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
} 
'use client';

import { Button } from '@repo/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/ui/card';
import { Shield, User, ShieldCheck, UserCog } from 'lucide-react';
import Link from 'next/link';

const ROLES = [
  {
    name: 'Super Admin',
    email: 'superadmin@brumkit.com',
    password: 'SuperAdmin123!',
    description: 'Full access to all system features and management tools.',
    icon: ShieldCheck,
    color: 'text-rose-500',
    bgColor: 'bg-rose-500/10',
  },
  {
    name: 'Admin',
    email: 'admin@brumkit.com',
    password: 'Admin123!',
    description: 'Administrative access for managing users and content.',
    icon: UserCog,
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
  },
  {
    name: 'Moderator',
    email: 'moderator@brumkit.com',
    password: 'Moderator123!',
    description: 'Limited access to moderate content and reports.',
    icon: Shield,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
  },
  {
    name: 'Regular User',
    email: 'user@example.com',
    password: 'User123!',
    description: 'Standard access for regular platform usage.',
    icon: User,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
  },
];

export default function LoginDemoPage() {
  return (
    <div className="container relative flex min-h-screen flex-col items-center justify-center lg:max-w-none lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[800px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Choose Your Role
          </h1>
          <p className="text-xl text-muted-foreground">
            Experience Brumkit with different permission levels pre-configured
            for you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {ROLES.map((role) => (
            <Card
              key={role.name}
              className="group relative overflow-hidden border-2 transition-all hover:border-primary/50 hover:shadow-xl"
            >
              <div
                className={`absolute right-0 top-0 -mr-4 -mt-4 h-24 w-24 rounded-full transition-transform group-hover:scale-110 ${role.bgColor}`}
              />

              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className={`rounded-xl p-3 ${role.bgColor}`}>
                    <role.icon className={`h-6 w-6 ${role.color}`} />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold">
                      {role.name}
                    </CardTitle>
                    <CardDescription className="text-xs font-mono opacity-70">
                      {role.email}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {role.description}
                </p>
                <Link
                  href={`/login?email=${encodeURIComponent(role.email)}&password=${encodeURIComponent(role.password)}`}
                  passHref
                >
                  <Button
                    className="w-full group-hover:bg-primary/90 transition-colors"
                    variant="outline"
                  >
                    Login as {role.name}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/login"
            className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors"
          >
            Go back to standard login
          </Link>
        </div>
      </div>
    </div>
  );
}

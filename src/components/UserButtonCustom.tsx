'use client';

import { UserButton } from "@clerk/nextjs";

export function UserButtonCustom() {
  return (
    <UserButton
      afterSignOutUrl="/"
      appearance={{
        elements: {
          userButtonPopoverCard: "!p-0 !gap-0",
          userButtonPopoverActions: "!p-2 !mt-0 border-t dark:border-gray-700",
          userButtonPopoverFooter: "!p-2 !mt-0 border-t dark:border-gray-700",
        },
      }}
    />
  );
} 
'use client';

import { UserButton } from "@clerk/nextjs";
import { Moon, Sun, Laptop } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function UserButtonCustom() {
  const { theme, setTheme } = useTheme();

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
    >
      <UserButton.MenuItems>
        <UserButton.Action
          onClick={() => setTheme('light')}
          labelIcon={<Sun className="h-4 w-4" />}
          label="Light"
        />
        <UserButton.Action
          onClick={() => setTheme('dark')}
          labelIcon={<Moon className="h-4 w-4" />}
          label="Dark"
        />
        <UserButton.Action
          onClick={() => setTheme('system')}
          labelIcon={<Laptop className="h-4 w-4" />}
          label="System"
        />
      </UserButton.MenuItems>
    </UserButton>
  );
} 
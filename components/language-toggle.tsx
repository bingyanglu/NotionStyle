"use client"

import { Button } from "@/components/ui/button"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
import { Language } from "@/lib/i18n/translations"

interface LanguageToggleProps {
  currentLang: Language
}

export function LanguageToggle({ currentLang }: LanguageToggleProps) {
  const router = useRouter()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          {currentLang.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => router.push("?lang=en")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("?lang=zh")}>
          中文
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


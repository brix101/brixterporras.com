"use client";

import { ViewVerticalIcon } from "@radix-ui/react-icons";
import Link, { LinkProps } from "next/link";
import * as React from "react";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navButtons } from "@/config/docs";
import { siteConfig } from "@/config/site";
import { cn, handleScroll } from "@/lib/utils";

interface Props {
  isOffset?: boolean;
  activeSection: string | null;
}

export function MobileNav({ isOffset, activeSection }: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex w-full items-center justify-between md:hidden">
      <div>
        <Link
          className={cn(
            "flex items-center space-x-2",
            !isOffset ? "hidden" : "visible",
          )}
          href="#section-hero"
          onClick={handleScroll}
        >
          <Icons.mainLogo className={cn("h-10 w-10")} />
          <span className="hidden break-normal font-bold sm:inline-block">
            {siteConfig.name}
          </span>
        </Link>
      </div>
      <div className="space-x-2">
        {
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size={"icon"}
                className="border-primary text-base hover:bg-background  hover:text-primary focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                <ViewVerticalIcon className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <MobileLink
                className="flex items-center"
                onOpenChange={setOpen}
                href="#section-hero"
              >
                <Icons.mainLogo className="mr-2 h-4 w-4" />
                <span className="font-bold">{siteConfig.name}</span>
              </MobileLink>
              <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                <div className="flex flex-col space-y-3">
                  {navButtons?.map((item, index) => (
                    <React.Fragment key={index}>
                      {!item.isHidden && (
                        <MobileLink
                          href={"#" + item.sectionId}
                          onOpenChange={setOpen}
                          className="capitalize"
                          activeSection={activeSection}
                        >
                          {item.label}
                        </MobileLink>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        }
      </div>
    </div>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
  activeSection?: string | null;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  activeSection,
  ...props
}: MobileLinkProps) {
  const isActive = href === "#" + activeSection;
  return (
    <Link
      href={href}
      onClick={e => {
        handleScroll(e);
        onOpenChange?.(false);
      }}
      className={cn(className, isActive && "text-primary")}
      {...props}
    >
      {children}
    </Link>
  );
}

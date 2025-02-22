import Image from "next/image";
import Link from "next/link";
import forwardArrow from "@/assets/arrow_forward.svg";
import { cn } from "@/util/cn";

interface MenuItemProps {
  label: string;
  href: string;
  className?: string;
}

export function MenuItem({ label, href, className }: MenuItemProps) {
  return (
    <li className={cn("block group", className)}>
      <Link href={href} className="flex justify-between items-center">
        {label}
        <Image 
          src={forwardArrow} 
          alt="Forward arrow link" 
          className="inline-block w-6" 
        />
      </Link>
    </li>
  );
}
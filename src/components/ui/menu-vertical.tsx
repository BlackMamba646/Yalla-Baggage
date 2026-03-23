"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import Link from "next/link";

type MenuItem = {
  label: string;
  href: string;
};

interface MenuVerticalProps {
  menuItems: MenuItem[];
  color?: string;
  skew?: number;
}

const MotionLink = motion.create(Link);

export const MenuVertical = ({
  menuItems = [],
  color = "#ff6900",
  skew = 0,
}: MenuVerticalProps) => {
  return (
    <div className="flex w-fit flex-col gap-2">
      {menuItems.map((item, index) => (
        <motion.div
          key={`${item.href}-${index}`}
          className="group/nav flex items-center gap-2 cursor-pointer text-white"
          initial="initial"
          whileHover="hover"
        >
          <motion.div
            variants={{
              initial: { x: "-100%", color: "inherit", opacity: 0 },
              hover: { x: 0, color, opacity: 1 },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="z-0"
          >
            <ArrowRight strokeWidth={3} className="size-5" />
          </motion.div>

          <MotionLink
            href={item.href}
            variants={{
              initial: { x: -40, color: "inherit" },
              hover: { x: 0, color, skewX: skew },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="font-semibold text-xl md:text-2xl no-underline drop-shadow-md"
          >
            {item.label}
          </MotionLink>
        </motion.div>
      ))}
    </div>
  );
};

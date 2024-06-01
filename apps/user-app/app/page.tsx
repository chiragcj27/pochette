"use client";

import { useBalance } from "@repo/store/useBalance"
import Image from "next/image";
import { Card } from "@repo/ui/card";
import { Code } from "@repo/ui/code";
import styles from "./page.module.css";
import { Button } from "@repo/ui/button";

export default function Page(): JSX.Element {
  const balance = useBalance();
  return (
    <div>
      hi there {balance}
    </div>
  );
}

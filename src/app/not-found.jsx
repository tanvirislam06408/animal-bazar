'use client'
import Lottie from "lottie-react";
import Image from "next/image";
import animal from '../../public/cow.json'
import Link from "next/link";
import { Button } from "@heroui/react";
export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center max-h-screen">
      <Lottie animationData={animal}/>
      <Link href={'/'}><Button variant="outline">Back To Home</Button></Link>
    </div>
  );
}

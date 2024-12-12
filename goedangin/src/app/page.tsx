
import { Hero } from '@/components/hero';
import { Info } from "@/components/info";
import { Partner } from '@/components/partner';
import { Why } from '@/components/why';

// import { Pricing } from "@/components/uit";

export default function Home() {
  return (
    <>
    {/* <Hero />

    <Pricing /> */}
    <Hero />
    <Why />
    <Info />
    <Partner />
    </>
  );
}
import Banner from "@/components/Banner";
import BannerSlider from "@/components/BannerSlider";
import { Faq } from "@/components/Faq";
import Featured from "@/components/Featured";
import QurbaniTips from "@/components/QurbaniTips";

export default function Home() {
  return (
    <div>
      {/* <Banner/> */}
      <div className="container mx-auto px-3 mt-5">
        <BannerSlider />
      </div>
      <Featured />
      <QurbaniTips />
      <Faq />
    </div>
  );
}

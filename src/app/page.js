import Banner from "@/components/Banner";
import BannerSlider from "@/components/BannerSlider";
import { Faq } from "@/components/Faq";
import Featured from "@/components/Featured";
import QurbaniTips from "@/components/QurbaniTips";

export default function Home() {
  return (
    <div>
      {/* <Banner/> */}
      <BannerSlider/>
      <Featured/>
      <QurbaniTips/>
      <Faq/>
    </div>
  );
}

import Banner from "@/components/Banner";
import { Faq } from "@/components/Faq";
import Featured from "@/components/Featured";
import QurbaniTips from "@/components/QurbaniTips";

export default function Home() {
  return (
    <div>
      <Banner/>
      <Featured/>
      <QurbaniTips/>
      <Faq/>
    </div>
  );
}

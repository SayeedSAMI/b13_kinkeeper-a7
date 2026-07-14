import Image from "next/image";
import BannerPage from "./components/banner/page";
import BannerPageStats from "./components/bannerstats/page";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg=[#F8FAFC]">
      <main className="flex flex-1 w-full  flex-col items-center justify-between bg-zinc-50  text-black dark:bg=[#F8FAFC] sm:items-start">
        <BannerPage></BannerPage>
        <BannerPageStats />
            <div className="divider w-306 mx-auto mb-24"></div>
      </main>
    </div>
  );
}

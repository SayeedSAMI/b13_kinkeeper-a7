import Image from "next/image";
import BannerPage from "./components/banner/page";
import BannerPageStats from "./components/bannerstats/page";
import HomePageFriendList from "./friendslist/page";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg=[#F8FAFC]">
      <main className="flex flex-1  lg:mx-61   flex-col items-center justify-between bg-zinc-50  text-black dark:bg=[#F8FAFC] sm:items-start">
        <BannerPage></BannerPage>
        <BannerPageStats />
        <div className="divider lg:w-300  mx-auto mb-10"></div>

        <h1 id="targer-section" className="text-[#1F2937] font-semibold text-[24px]">Your Friends</h1>
        <HomePageFriendList></HomePageFriendList>
      </main>
    </div>
  );
}

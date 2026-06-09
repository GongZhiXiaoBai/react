import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h2>测试界面</h2>
      <div className="border border-red-500 text-2xl w-100 h-75 px-2 py-1">
        box内容
      </div>
    </div>
  );
}

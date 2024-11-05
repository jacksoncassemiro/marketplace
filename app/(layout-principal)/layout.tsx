import HeaderAuth from "@/components/header-auth";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="min-h-screen flex flex-col items-center">
        <div className="flex gap-5 items-center font-semibold">
          <Link href={"/"}>Next.js Supabase Starter</Link>
        </div>
        <HeaderAuth />
      </div>
      <div>layout principal</div>
      <div className="flex flex-col gap-20 max-w-5xl p-5">
        {children}
      </div>
    </div>
  );
}

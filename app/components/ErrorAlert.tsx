// components/ErrorAlert.tsx
"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function ErrorAlert() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const errorMessage = searchParams.get("error");

  if (!errorMessage) return null;
  console.log(errorMessage, `is this an error message`);


  const handleDismiss = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("error");

    // Replace URL without refreshing the page
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded my-4">
      {errorMessage}
      <button
        onClick={handleDismiss}
        className="ml-2 text-sm underline cursor-pointer"
      >
        Dismiss
      </button>
    </div>
  );
}

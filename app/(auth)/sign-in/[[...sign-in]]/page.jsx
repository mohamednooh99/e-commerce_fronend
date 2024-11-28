import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="/login-2.webp"
            className="absolute inset-0 h-full w-full object-cover opacity-90"
          />
          {/* <Image src="/logoin-1.avif" alt="logo" width={80} height={50} 
          className="absolute inset-0 h-full w-full object-cover opacity-80" /> */}
          <Image src="/logo_2.avif" alt="logo" width={80} height={50} />
          <div className="hidden lg:relative lg:block lg:p-12">
            <h2 className="mt-6 text-2xl font-bold text-teal-500 text-white sm:text-3xl md:text-4xl">
              Welcome to E-commerce 
            </h2>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <SignIn forceRedirectUrl="/" />
          </div>
        </main>
      </div>
    </section>
  );
}

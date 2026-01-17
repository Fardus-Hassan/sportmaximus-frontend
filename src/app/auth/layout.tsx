import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-6xl rounded-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
          {/* Left Side - Image (Same for all auth pages) */}
          <div className="hidden lg:block lg:w-1/2 relative h-[80vh] rounded-2xl">
            <Image
              src="https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Beauty Service"
              fill
              className="object-cover rounded-2xl"
              unoptimized
            />
          </div>

          {/* Right Side - Form (Changes per page) */}
          <div className="w-full lg:w-1/2 p-8 flex items-center justify-center rounded-2xl shadow-xl h-fit">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

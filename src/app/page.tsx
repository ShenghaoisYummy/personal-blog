import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { SOCIALS } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <section className="space-y-6 pb-8 md:pb-12 md:pt-10 lg:py-32">
      <div className="container mt-6 flex max-w-5xl flex-col items-center gap-4 text-center xl:mt-0">
        <div className="flex items-center space-x-2">
          {SOCIALS.map((social) => {
            // Define brand colors for each platform
            const getBrandStyles = (label: string) => {
              switch (label) {
                case "Github":
                  return "hover:bg-gray-400 hover:text-white hover:border-gray-400";
                case "Instagram":
                  return "hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500 hover:text-white hover:border-transparent";
                case "Twitter":
                  return "hover:bg-blue-400 hover:text-white hover:border-blue-400";
                default:
                  return "hover:bg-primary hover:text-white";
              }
            };

            return (
              <Link
                key={social.label}
                href={social.path}
                rel="noreferrer"
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "text-primary px-0 transition-all duration-300 rounded-full p-2 size-8 bg-white border border-gray-200 hover:shadow-lg hover:scale-105",
                  getBrandStyles(social.label)
                )}
              >
                <social.icon className="size-6" />
                <span className="sr-only">{social.label}</span>
              </Link>
            );
          })}
        </div>
        <h1 className="text-3xl capitalize sm:text-5xl md:text-6xl lg:text-7xl">
          For Sharing Insights and Knowledge on{" "}
          <span className="font-code bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_2px_rgba(34,211,238,0.5)] font-bold">
            AI
          </span>{" "}
          and <span className="font-code text-sky-500">Web Development</span>
        </h1>
        <p className="max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {siteConfig.description}
        </p>
        <div className="space-x-4">
          <Link
            href="/blog"
            className={cn(
              buttonVariants({ size: "lg", variant: "default" }),
              "border"
            )}
          >
            Explore Posts
          </Link>
        </div>
      </div>
    </section>
  );
}

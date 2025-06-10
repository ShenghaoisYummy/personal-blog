import React from "react";
import PageHeader from "@/components/page-header";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { SOCIALS } from "@/constants";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="container relative max-w-6xl py-6 lg:py-10">
      <PageHeader title="About" description="Let's get to know each other" />
      <hr className="my-8" />

      <div className="flex flex-col items-center space-y-6 lg:flex-row  lg:space-x-6 lg:space-y-0">
        <div className="relative flex flex-col items-center gap-2 rounded-md bg-primary px-4 py-6 w-[400px]">
          <Image
            src={siteConfig.authorImage}
            width={82}
            height={82}
            alt={siteConfig.name}
            className="absolute -top-8 mb-4 rounded-full border bg-primary object-cover aspect-square"
          />
          <h3 className="mt-8 text-lg font-semibold">{siteConfig.author}</h3>
          <p className="text-center text-sm text-muted-foreground">
            Software Engineer
          </p>
          <div className="flex items-center space-x-2">
            {SOCIALS.map((social) => (
              <Link
                key={social.label}
                href={social.path}
                rel="noreferrer"
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "text-primary px-0 hover:bg-primary transition-colors rounded-full p-2 size-8 bg-primary/80"
                )}
              >
                <social.icon className="size-6" />
                <span className="sr-only">{social.label}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <p className="flex-1 text-center text-sm text-muted-foreground lg:text-start xl:text-base">
            With a solid foundation in full-stack development, I build
            end-to-end applications using modern software engineering practices.
            I have extensive front-end and back-end experience—API integration,
            unit testing— with proficiency in JavaScript/TypeScript, React.js,
            .NET, SQL, MongoDB, and GraphQL. I excel at deploying scalable
            applications in AWS environments, integrating CI/CD pipelines, and
            collaborating in Agile teams to deliver high-quality solutions.I
            contributed to an end-to-end MLOps pipeline—using DVC for data
            versioning and MLflow for experiment tracking—to fine-tune a Llama
            model with RAG (LangChain) and integrate an AI-powered e-commerce
            assistant into Hugging Face Space.
          </p>
        </div>
      </div>
    </div>
  );
}

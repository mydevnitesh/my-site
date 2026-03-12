import { PageHeader } from "@/components/page-header";

export default function JobHuntPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-3rem)] md:h-[calc(100vh-1rem)] -m-6 md:-m-8 lg:-m-10">
      <div className="px-6 pt-6 md:px-8 md:pt-8 lg:px-10 lg:pt-10">
        <PageHeader
          title="Job Hunter"
          description="Find and track job opportunities. Powered by CA Job Finder."
        />
      </div>
      <iframe
        src="https://job-hunt-check.vercel.app/"
        className="flex-1 w-full border-0"
        title="Job Hunter"
        allow="clipboard-read; clipboard-write"
      />
    </div>
  );
}

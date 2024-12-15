import { Layout } from "@/layouts/layout";
import { Breadcrumb } from "@/components/breadcrumb";
import Event from "@/content/Event";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { NavUser } from "@/components/nav-user";

const data = {
  user: {
    name: "Administrator",
    email: "admninistrator@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
};

export default function PageEvent() {
  return (
    <Layout>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb />
        </div>
        <div className="ml-auto">
          <NavUser user={data.user} />
        </div>
      </header>
      <Event />
    </Layout>
  );
}

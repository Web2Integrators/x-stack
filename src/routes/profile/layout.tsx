import Image from "next/image";

import { Separator } from "@/registry/new-york/ui/separator";
import { SidebarNav } from "@/app/examples/forms/components/sidebar-nav";
import { Slot, component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export const head: DocumentHead = {
  title: "X-Stack",
  meta: [
    {
      name: "Profile",
      content: "Advanced form example using server loaders/actions and Zod.",
    },
  ],
};

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/examples/forms",
  },
  {
    title: "Account",
    href: "/examples/forms/account",
  },
  {
    title: "Appearance",
    href: "/examples/forms/appearance",
  },
  {
    title: "Notifications",
    href: "/examples/forms/notifications",
  },
  {
    title: "Display",
    href: "/examples/forms/display",
  },
];

export default component$(() => {
  return (
    <>
      <div class="md:hidden">
        <Image
          src="/examples/forms-light.png"
          width={1280}
          height={791}
          alt="Forms"
          class="block dark:hidden"
        />
        <Image
          src="/examples/forms-dark.png"
          width={1280}
          height={791}
          alt="Forms"
          class="hidden dark:block"
        />
      </div>
      <div class="hidden space-y-6 p-10 pb-16 md:block">
        <div class="space-y-0.5">
          <h2 class="text-2xl font-bold tracking-tight">Settings</h2>
          <p class="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator class="my-6" />
        <div class="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside class="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div class="flex-1 lg:max-w-2xl">
            <Slot />
          </div>
        </div>
      </div>
    </>
  );
});

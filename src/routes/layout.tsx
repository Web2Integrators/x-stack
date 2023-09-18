import { type Session } from "@auth/core/types";
import { component$, Slot, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import {
  type RequestHandler,
  routeLoader$,
  useLocation,
} from "@builder.io/qwik-city";

import { QProgress } from "~/integrations/react/ui/progress";

function delay(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export const onRequest: RequestHandler = async ({
  sharedMap,
  url,
  redirect,
}) => {
  const session: Session | null = sharedMap.get("session");
  if (
    !session &&
    url.pathname !== "/signin/" &&
    !url.pathname.startsWith("/pub/")
  ) {
    throw redirect(302, `/signin/`);
  }
};

export const onGet: RequestHandler = async ({ sharedMap, cacheControl }) => {
  const session: Session | null = sharedMap.get("session");
  if (!session) {
    cacheControl({
      public: true,
      staleWhileRevalidate: 86400,
      maxAge: 60,
      sMaxAge: 180,
    });
  } else {
    cacheControl({
      public: false,
      staleWhileRevalidate: 86400,
      maxAge: 5,
      sMaxAge: 0,
    });
  }
};
export const useServerTimeLoader = routeLoader$(async () => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  const location = useLocation();
  const progress = useSignal(0);

  useVisibleTask$(({ track }) => {
    track(() => location.isNavigating);
    if (location.isNavigating) {
      delay(30).then(() => {
        progress.value = 100;
      });
    }
    if (!location.isNavigating) {
      progress.value = 0;
    }
  });

  return (
    <>
      <main>
        {location.isNavigating && (
          <QProgress value={progress.value} className="w-full" />
        )}
        <Slot />
      </main>
    </>
  );
});

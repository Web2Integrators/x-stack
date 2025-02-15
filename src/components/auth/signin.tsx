import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { useAuthSignin } from "~/routes/plugin@auth";

import Button from "../ui/button";
import { LuGamepad2 } from "@qwikest/icons/lucide";

export default component$(() => {
  const signIn = useAuthSignin();

  return (
    <Form action={signIn} class="flex justify-center">
    
      <input type="hidden" name="options.callbackUrl" value="/" />
      <Button variant="outline" type="submit">
        <LuGamepad2 class="mr-2" /> Sign In
      </Button>
    </Form>
  );
});

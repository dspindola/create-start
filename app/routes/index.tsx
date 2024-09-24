import { Button } from "@/components/Button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return <Button>hi</Button>;
}

import { Button, Card, CardBody } from "@/components/mind2care/ui";

export default function SignUp() {
  return (
    <main className="mx-auto max-w-md px-6">
      <section className="mt-12">
        <Card>
          <CardBody>
            <h1 className="mb-4 text-center text-xl font-semibold text-[hsl(var(--charcoal))]">
              Sign Up
            </h1>
            <form className="space-y-3">
              <input
                className="w-full rounded-xl border border-[hsl(var(--grayblue))] bg-white px-3 py-2 text-sm"
                placeholder="Name"
              />
              <input
                className="w-full rounded-xl border border-[hsl(var(--grayblue))] bg-white px-3 py-2 text-sm"
                placeholder="Email"
              />
              <input
                className="w-full rounded-xl border border-[hsl(var(--grayblue))] bg-white px-3 py-2 text-sm"
                placeholder="Password"
                type="password"
              />
              <Button type="submit" className="w-full">
                Create account
              </Button>
              <Button type="button" variant="secondary" className="w-full">
                Continue with Google
              </Button>
            </form>
          </CardBody>
        </Card>
      </section>
    </main>
  );
}

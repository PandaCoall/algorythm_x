/**
 * v0 by Vercel.
 * @see https://v0.dev/t/5LYUDAapk9b
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { CartesianGrid, XAxis, Bar, BarChart, Line, LineChart, Pie, PieChart } from "recharts"
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "@/components/ui/chart"

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="bg-primary text-primary-foreground px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="size-6" />
          <span className="sr-only">Power BI Analytics</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Explore Work
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
        <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
          <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Power BI Analytics and Dashboards
              </h1>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Unlock the power of your data with our expert Power BI services. From interactive dashboards to custom
                analytics, we help businesses make data-driven decisions.
              </p>
              <div className="space-x-4">
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Started
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <img
            src="/placeholder.svg"
            width="1270"
            height="300"
            alt="Hero"
            className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
          />
        </div>
      </section>
      <section id="features" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Services</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Unlock the Power of Your Data</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From interactive dashboards to custom analytics, we offer a wide range of Power BI services to help your
                business make data-driven decisions.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Power BI Analytics</h3>
              <p className="text-sm text-muted-foreground">
                Leverage the power of Power BI to gain deep insights into your data and make informed business
                decisions.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Dashboard Building</h3>
              <p className="text-sm text-muted-foreground">
                Create visually stunning and interactive dashboards to present your data in a clear and engaging way.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Interactive Dashboards</h3>
              <p className="text-sm text-muted-foreground">
                Empower your users with interactive dashboards that allow them to explore and analyze data on their own.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Business Intelligence</h3>
              <p className="text-sm text-muted-foreground">
                Leverage our expertise in business intelligence to transform your data into actionable insights.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Data Visualization</h3>
              <p className="text-sm text-muted-foreground">
                Bring your data to life with stunning visualizations that help you tell a compelling story.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Low Code App Building</h3>
              <p className="text-sm text-muted-foreground">
                Quickly build custom applications and solutions using low-code tools and platforms.
              </p>
            </div>
          </div>
          <div className="flex justify-center flex-col sm:flex-row items-start gap-4">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Learn More
            </Link>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      <section id="work" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Explore Our Work</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of the custom Power BI solutions we've built for our clients.
            </p>
          </div>
          <div className="mx-auto w-full max-w-5xl space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Retail Sales Dashboard</CardTitle>
                <CardDescription>Interactive dashboard for tracking and analyzing retail sales data.</CardDescription>
              </CardHeader>
              <CardContent>
                <BarchartChart className="aspect-[9/4]" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Marketing Analytics</CardTitle>
                <CardDescription>
                  Comprehensive dashboard for monitoring marketing campaign performance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <LinechartChart className="aspect-[9/4]" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>HR Reporting</CardTitle>
                <CardDescription>Custom reporting solution for HR data and employee analytics.</CardDescription>
              </CardHeader>
              <CardContent>
                <PiechartcustomChart className="aspect-square" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section id="about" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About Power BI Analytics</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We are a team of experienced Power BI experts dedicated to helping businesses unlock the power of their
              data. With a focus on custom analytics, interactive dashboards, and business intelligence, we empower our
              clients to make data-driven decisions that drive growth and success.
            </p>
          </div>
          <div className="flex gap-4 lg:justify-end">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Meet the Team
            </Link>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a project in mind or want to learn more about our Power BI services? Contact us today!
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex flex-col gap-2">
              <Input type="text" placeholder="Name" className="max-w-lg flex-1" />
              <Input type="email" placeholder="Email" className="max-w-lg flex-1" />
              <Textarea placeholder="Message" className="max-w-lg flex-1" />
              <Button type="submit" className="self-end">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Power BI Analytics. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function BarchartChart(props) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
        className="min-h-[300px]"
      >
        <BarChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}


function LinechartChart(props) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
      >
        <LineChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Line dataKey="desktop" type="natural" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
        </LineChart>
      </ChartContainer>
    </div>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function PiechartcustomChart(props) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          visitors: {
            label: "Visitors",
          },
          chrome: {
            label: "Chrome",
            color: "hsl(var(--chart-1))",
          },
          safari: {
            label: "Safari",
            color: "hsl(var(--chart-2))",
          },
          firefox: {
            label: "Firefox",
            color: "hsl(var(--chart-3))",
          },
          edge: {
            label: "Edge",
            color: "hsl(var(--chart-4))",
          },
          other: {
            label: "Other",
            color: "hsl(var(--chart-5))",
          },
        }}
      >
        <PieChart>
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Pie
            data={[
              { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
              { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
              { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
              { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
              { browser: "other", visitors: 90, fill: "var(--color-other)" },
            ]}
            dataKey="visitors"
            nameKey="browser"
          />
        </PieChart>
      </ChartContainer>
    </div>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

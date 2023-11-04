import { HR } from "../../components/HorizontalRule";

export function Content() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-5 px-8 text-2xl text-gray-400">
      <HR />
      <p className="">
        In today's fast-paced tech environment, constant learning is a must to
        stay relevant and employable. That's why we created relativepath - a
        daily virtual devops class designed to level up your skills and keep you
        on the cutting edge.{" "}
      </p>

      <p className="">
        Our expert instructor{" "}
        <a
          href="https://linkedin.com/in/stephenlauck/"
          className="font-semibold text-sky-300 hover:text-purple-400"
        >
          <code className="rounded-lg bg-stone-950 px-2 py-1">
            Stephen Lauck
          </code>
        </a>
        , will walk you through the latest devops tools and techniques in a
        hands-on learning environment. Learn bash, Git, VSC, automation,
        infrastructure as code, CI/CD pipelines, virtual machines, cloud
        deployment, and more. Gain real-world skills to make you a more
        well-rounded DevOps professional.
      </p>

      <p className="">
        The best part? Relativepath fits into your busy life. With short, daily
        classes that pack a punch, you can progress your skills without
        disrupting your schedule. And with our interactive virtual platform, you
        can join from anywhere.{" "}
      </p>

      <p className="">
        Don't let your skills stagnate. Join relativepath to stay sharp and open
        new career doors. Discover how our nightly devops training can take your
        abilities to the next level!
      </p>

      <HR />
    </div>
  );
}

import Image from "next/image";
import { calculateFinalPrice, processOrder } from "./utils/discount-util";

export default function Home() {

  const n1 = processOrder(1,1,'DISCOUNT10')
  const n3 = calculateFinalPrice(100, 'DISCOUNT10')
  function insecureFunction(userInput: string): void {
    // Security Issue: Directly concatenating user input into a query (SQL Injection Risk)
    const query = `SELECT * FROM users WHERE username = '${userInput}'`;
    console.log("Executing query:", query);
    // Imagine this query being executed in a real database
}

function unreliableFunction(): void {
    // Reliability Issue: Hardcoded credentials (sensitive data exposure)
    const apiKey = "12345-very-secret-key";
    console.log(`Using API key: ${apiKey}`);
}

function poorlyMaintainedFunction(): void {
    // Maintainability Issue: Deeply nested and complex logic
    for (let i = 0; i < 10; i++) {
        if (i % 2 === 0) {
            for (let j = 0; j < 5; j++) {
                if (j === 3) {
                    console.log(`Nested level reached: i=${i}, j=${j}`);
                }
            }
        }
    }
}

function duplicateCode(): void {
    // Duplication Issue: Repeated code with minimal changes
    console.log("This is duplicate code section 1.");
    console.log("This is duplicate code section 1.");
    console.log("This is duplicate code section 1.");
    console.log("This is duplicate code section 2.");
    console.log("This is duplicate code section 2.");
    console.log("This is duplicate code section 2.");
}

// Call the functions
insecureFunction("admin' OR 1=1 --");
unreliableFunction();
poorlyMaintainedFunction();
duplicateCode();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer">
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer">
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>

      <p>{n1}</p>
      <p>{n3}</p>
    </div>
  );
}

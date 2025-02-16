export default function Skills() {
    return (
      <div className="container pt-16 sm:pt-32 px-5 sm:px-10">
        <div className="grid md:grid-cols-2 gap-10 sm:gap-20 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Technologies I work with</h2>
            <p className="text-gray-500 pt-2 text-sm sm:text-base">
              I work with a range of technologies that combine web development fundamentals with advanced AI tools. My expertise includes programming languages like Python, JavaScript, and TypeScript, alongside frontend development skills in HTML, CSS, and Next.js. I&apos;m also delving into Generative AI, particularly large language models, to explore innovative applications in tech. This diverse stack allows me to create dynamic, user-centered solutions while staying on the cutting edge of AI advancements.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-2 text-accent text-xl sm:text-2xl md:text-3xl gap-4">
              <div className="space-y-2">
                <h2>TypeScript</h2>
                <h2>CSS</h2>
                <h2>Python</h2>
              </div>
              <div className="space-y-2">
                <h2>Tailwind CSS</h2>
                <h2>Next.js</h2>
                <h2>Node.js</h2>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-black text-white py-5 mt-10 text-center">
          <p>&copy; 2023 Huzaifa Rehan. All rights reserved.</p>
        </footer>
      </div>
    );
}
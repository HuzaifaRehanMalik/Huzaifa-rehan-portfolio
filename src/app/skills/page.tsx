export default function skils() {
    return (
      <div className="container pt-32">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl">Technologies I work with</h2>
            <p className="text-gray-500 pt-2">I work with a range of technologies that combine web development fundamentals with advanced AI tools. My expertise includes programming languages like Python, JavaScript, and TypeScript, alongside frontend development skills in HTML, CSS, and Next.js. I'm also delving into Generative AI, particularly large language models, to explore innovative applications in tech. This diverse stack allows me to create dynamic, user-centered solutions while staying on the cutting edge of AI advancements.</p>
          </div>
          <div>
            <div className="grid grid-cols-2 text-accent text-3xl sm-text-4xl">
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
        
      </div>
    );
}
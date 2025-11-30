import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, PlayCircle, Languages, Github, Download, Terminal } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  const scripts = [
    {
      id: "srt-translator",
      title: "SRT Translator",
      icon: <Languages className="h-8 w-8" />,
      description: "Translate subtitle files while preserving all timestamps",
      tagline: "Seamlessly translate movie subtitles between languages",
      features: [
        "Auto-detects source language",
        "Three translation backends (LibreTranslate, Google Translate, DeepL)",
        "Preserves all timestamps and formatting",
        "Simple terminal menu interface",
        "Bulk processing support"
      ],
      tech: ["Python 3.7+", "requests", "googletrans"],
      usage: `python srt-translator.py`,
      color: "from-blue-500/20 to-cyan-500/20",
      githubUrl: "https://github.com/raccoondev7/srt-translator",
      downloadUrl: "https://github.com/raccoondev7/srt-translator/archive/refs/heads/main.zip"
    },
    {
      id: "dual-movie",
      title: "Dual-Movie Player",
      icon: <PlayCircle className="h-8 w-8" />,
      description: "Play two videos simultaneously with instant keyboard switching",
      tagline: "Perfect for language learning - watch movies in two languages phrase by phrase",
      features: [
        "Switch between videos with Tab key",
        "Pause/play with Space",
        "Rewind/forward 5 seconds",
        "Speed control (0.25x - 4x)",
        "Supports video and audio files"
      ],
      tech: ["Python 3.7+", "python-vlc", "keyboard", "VLC media player"],
      usage: `python dual-movie.py`,
      color: "from-purple-500/20 to-pink-500/20",
      githubUrl: "https://github.com/raccoondev7/Dual-Movie",
      downloadUrl: "https://github.com/raccoondev7/Dual-Movie/archive/refs/heads/main.zip"
    },
    {
      id: "srt-transcript",
      title: "SRT Transcript Converter",
      icon: <FileText className="h-8 w-8" />,
      description: "Convert subtitle files into clean, readable transcripts",
      tagline: "Transform SRT files into plain text with time markers",
      features: [
        "Removes complex timestamp formatting",
        "Adds periodic reference markers (e.g., every 30 seconds)",
        "Merges subtitle blocks into flowing text",
        "Zero external dependencies",
        "Customizable time intervals"
      ],
      tech: ["Python 3.7+", "Standard library only"],
      usage: `python srt-transcript.py`,
      color: "from-green-500/20 to-emerald-500/20",
      githubUrl: "https://github.com/raccoondev7/srt-transcriptor",
      downloadUrl: "https://github.com/raccoondev7/srt-transcriptor/archive/refs/heads/main.zip"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Terminal className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">Handy Media Scripts</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="#scripts">Scripts</a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="#about">About</a>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container px-4 py-20 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" className="mb-4">
            Open Source Python Tools
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Handy Media Python Scripts
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Simple, powerful Python utilities for working with subtitles and media files. 
            Built by an indie developer, free for everyone.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <a href="#scripts">
                <Download className="mr-2 h-5 w-5" />
                View Scripts
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/raccoondev7" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Scripts Section */}
      <section id="scripts" className="container px-4 py-20 scroll-mt-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Available Scripts
            </h2>
            <p className="text-lg text-muted-foreground">
              Three powerful tools to enhance your media workflow
            </p>
          </div>

          <div className="grid gap-8">
            {scripts.map((script, index) => (
              <Card key={script.id} className="overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${script.color}`} />
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        {script.icon}
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-2">{script.title}</CardTitle>
                        <CardDescription className="text-base">
                          {script.description}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground italic">
                    {script.tagline}
                  </p>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                    <ul className="grid gap-2">
                      {script.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-0.5">▸</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Requirements</h4>
                    <div className="flex flex-wrap gap-2">
                      {script.tech.map((tech, i) => (
                        <Badge key={i} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Usage</h4>
                    <div className="bg-muted p-4 rounded-md font-mono text-sm text-foreground">
                      {script.usage}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button variant="default" asChild>
                      <a href={script.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View on GitHub
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href={script.downloadUrl} download>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container px-4 py-20 scroll-mt-16">
        <div className="mx-auto max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">About These Scripts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                These Python scripts were created to solve real-world problems when working with media files
                and subtitles. Whether you're learning a new language, translating content, or just need to
                process subtitle files efficiently, these tools are here to help.
              </p>
              <p>
                All scripts are free, open-source, and built with simplicity in mind. No complex setup,
                no bloated dependencies—just straightforward Python tools that work.
              </p>
              <div className="pt-4">
                <h4 className="font-semibold text-foreground mb-2">Installation</h4>
                <div className="bg-muted p-4 rounded-md font-mono text-sm text-foreground space-y-2">
                  <div># Clone the repository</div>
                  <div>git clone https://github.com/yourusername/handy-media-scripts</div>
                  <div className="pt-2"># Install dependencies</div>
                  <div>pip install -r requirements.txt</div>
                  <div className="pt-2"># Run any script</div>
                  <div>python script-name.py</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Terminal className="h-4 w-4" />
              <span>Handy Media Scripts © 2025</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://github.com/raccoondev7" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
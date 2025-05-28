import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { projects, type Project } from '@/data/portfolioData'; // Importing the projects data

const ProjectCarousel = ({ images }: { images: string[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
      });

      // Initial state
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    }
  }, [emblaApi]);

  return (
    <div className="space-y-4">
      <div className="relative">
        <div ref={emblaRef} className="overflow-hidden rounded-lg">
          <div className="flex">
            {images.map((image, index) => (
              <div className="relative flex-[0_0_100%]" key={index}>
                <div className="aspect-video">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <Button
          variant="secondary"
          size="icon"
          className={cn(
            "absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 shadow-lg hover:bg-background",
            !canScrollPrev && "opacity-50 cursor-not-allowed"
          )}
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canScrollPrev}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className={cn(
            "absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 shadow-lg hover:bg-background",
            !canScrollNext && "opacity-50 cursor-not-allowed"
          )}
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canScrollNext}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            className={cn(
              "relative flex-0 min-w-[100px] cursor-pointer overflow-hidden rounded-md border-2 transition-all",
              selectedIndex === index
                ? "border-primary"
                : "border-transparent opacity-70 hover:opacity-100"
            )}
            onClick={() => emblaApi?.scrollTo(index)}
          >
            <div className="aspect-video w-[100px]">
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="mb-8 overflow-hidden">
      <CardHeader>
        <h3 className="text-2xl font-bold">{project.title}</h3>
      </CardHeader>
      <CardContent className="space-y-6">
        <ProjectCarousel images={project.images} />

        <div className="space-y-4">
          <p className="text-muted-foreground">{project.summary}</p>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <div
            className={`space-y-4 overflow-hidden transition-all duration-500 ease-in-out ${
              isExpanded ? 'max-h-[1000px]' : 'max-h-0'
            }`}
          >
            <div className="rounded-lg bg-muted/50 p-4 space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Challenge</h4>
                <p className="text-muted-foreground">{project.details.challenge}</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Solution</h4>
                <p className="text-muted-foreground">{project.details.solution}</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Impact</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {project.details.impact.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              {project.externalLink && (
                <Button variant="link" className="flex items-center gap-2 text-md" asChild>
                  <a href={project.externalLink.url} target="_blank" rel="noopener noreferrer">
                    {project.externalLink.title}
                  </a>
                </Button>
              )}
            </div>
          </div>

          <Button
            variant="ghost"
            className="w-full"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <>
                <ChevronUp className="mr-2 h-4 w-4" /> Show Less
              </>
            ) : (
              <>
                <ChevronDown className="mr-2 h-4 w-4" /> See More
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const PortfolioFeed = () => {
  return (
    <section className="relative z-10 min-h-screen bg-background/95 px-4 py-24 backdrop-blur-sm">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-center text-4xl font-bold tracking-tight">
          Projects
        </h2>
        
        <div className="space-y-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioFeed;

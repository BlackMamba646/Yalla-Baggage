import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Marquee } from '@/components/ui/3d-testimonails';
import { BlurIn } from '@/components/ui/blur-in';

// Unique reviews data tailored for Yallah Baggage
const testimonials = [
  {
    name: 'Sarah L.',
    username: '@sarahl',
    body: 'Yallah Baggage completely changed my Dubai layover! Hands-free the entire day.',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
    country: '🇬🇧 UK',
  },
  {
    name: 'Mark T.',
    username: '@mark_t',
    body: 'Seamless service. Driver was right on time at my hotel.',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop',
    country: '🇺🇸 USA',
  },
  {
    name: 'Elena R.',
    username: '@elena_dubai',
    body: 'Such a relief not having to drag suitcases through Dubai Mall.',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    country: '🇪🇸 Spain',
  },
  {
    name: 'James D.',
    username: '@jd_travels',
    body: 'Live tracking link gave me total peace of mind.',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    country: '🇦🇺 Australia',
  },
  {
    name: 'Emma W.',
    username: '@emma_w',
    body: 'Very affordable and exactly as described!',
    img: 'https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?q=80&w=800&auto=format&fit=crop',
    country: '🇨🇦 Canada',
  },
  {
    name: 'Ahmed K.',
    username: '@ahmed_k',
    body: 'Drop off at DXB was incredibly smooth. 10/10.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    country: '🇦🇪 UAE',
  },
];

function TestimonialCard({ img, name, username, body, country }: (typeof testimonials)[number]) {
  return (
    <Card className="w-64 bg-white shadow-md border-gray-100 md:w-80 rounded-2xl mx-1 transform transition-all hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="p-5">
        <div className="flex items-center gap-3">
          <Avatar className="size-12 shadow-sm border border-gray-100">
            <AvatarImage src={img} alt={username} className="object-cover" />
            <AvatarFallback className="bg-yellow-400 text-gray-900 font-bold">{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <figcaption className="text-sm md:text-base font-black text-gray-900 flex items-center gap-1">
              {name} <span className="text-xs">{country}</span>
            </figcaption>
            <p className="text-xs md:text-sm font-medium text-gray-400">{username}</p>
          </div>
        </div>
        <blockquote className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed font-semibold">{body}</blockquote>
      </CardContent>
    </Card>
  );
}

export function TestimonialsSection() {
  return (
    <section className="bg-gray-50 py-20 overflow-hidden relative border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-6 mb-16 text-center relative z-10">
        <BlurIn 
          word="Loved by Travelers Worldwide"
          className="text-3xl md:text-5xl lg:text-5xl font-black mb-4 text-center text-gray-900 tracking-tight leading-tight"
        />
        <p className="text-lg text-gray-500 font-medium mt-4 max-w-2xl mx-auto">
          See how Yallah Baggage transforms the travel experience for thousands of visitors coming to the UAE.
        </p>
      </div>

      <div className="relative flex h-[600px] md:h-[700px] w-full flex-row items-center justify-center overflow-hidden gap-4 md:gap-8 [perspective:1000px]">
        <div
          className="flex flex-row items-center gap-4 md:gap-8 translate-x-[15px] md:translate-x-0"
          style={{
            transform:
              'translateX(-5px) translateY(0px) translateZ(-100px) rotateX(15deg) rotateY(-5deg) rotateZ(10deg)',
          }}
        >
          {/* Vertical Marquee (downwards) */}
          <Marquee vertical pauseOnHover repeat={4} className="[--duration:55s] md:[--duration:60s]">
            {testimonials.map((review, i) => (
              <TestimonialCard key={i + review.username} {...review} />
            ))}
          </Marquee>
          
          {/* Vertical Marquee (upwards) */}
          <Marquee vertical pauseOnHover reverse repeat={4} className="[--duration:40s] md:[--duration:50s]">
            {testimonials.map((review, i) => (
              <TestimonialCard key={i + 'rev' + review.username} {...review} />
            ))}
          </Marquee>
          
          {/* Vertical Marquee (downwards) - Hidden on smallest phones for performance */}
          <Marquee vertical pauseOnHover repeat={4} className="[--duration:65s] hidden sm:flex">
            {testimonials.map((review, i) => (
              <TestimonialCard key={i + 'sm' + review.username} {...review} />
            ))}
          </Marquee>
          
          {/* Vertical Marquee (upwards) - Hidden on medium screens only visible on LG */}
          <Marquee vertical pauseOnHover reverse repeat={4} className="[--duration:45s] hidden lg:flex">
            {testimonials.map((review, i) => (
              <TestimonialCard key={i + 'lg' + review.username} {...review} />
            ))}
          </Marquee>
        </div>

        {/* Gradient overlays to blend smoothly into the grey background */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-gray-50 via-gray-50/80 to-transparent"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-gray-50 via-gray-50/80 to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent"></div>
      </div>
    </section>
  );
}

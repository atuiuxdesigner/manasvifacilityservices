import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronRight,
  Clock3,
  ExternalLink,
  HeartHandshake,
  Home,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import teamBanner from "@/assets/team-banner.png.asset.json";
import teamPoster from "@/assets/team-poster.png.asset.json";
import manasviLogo from "@/assets/manasvi-logo.svg.asset.json";
import aboutImage from "@/assets/manasvi/about.jpg";
import officeImage from "@/assets/manasvi/office.jpg";
import clinicImage from "@/assets/manasvi/clinic.jpg";
import societyImage from "@/assets/manasvi/society.jpg";
import homeImage from "@/assets/manasvi/home.jpg";
import inaugurationImage from "@/assets/manasvi/inauguration.jpg";
import teamImage from "@/assets/manasvi/team.jpg";
import detailImage from "@/assets/manasvi/detail.jpg";
import lobbyImage from "@/assets/manasvi/lobby.jpg";
import equipmentImage from "@/assets/manasvi/equipment.jpg";

const PHONE = "+917387602344";
const PHONE_LABEL = "+91 7387602344";
const SECONDARY_PHONE_LABEL = "+91 7376341891";
const WHATSAPP = "919270868493";
// Business location shared by the Google Business Profile listing.
const MAP_EMBED_SRC =
  "https://maps.google.com/maps?q=Manasvi%20Facility%20Services%2C%20SRA%20Building%2C%20Lane%20No.%2013%2C%20Viman%20Nagar%2C%20Pune&z=16&output=embed";
const GOOGLE_MAPS_PLACE_URL =
  "https://www.google.com/maps/place/?q=place_id:ChIJMzXNyE3BwjsRop7cIuWIDqQ";

const services = [
  {
    name: "Office Cleaning",
    shortName: "Office",
    description: "Routine workplace care that keeps teams comfortable and spaces presentation-ready.",
    icon: Building2,
  },
  {
    name: "Clinic Cleaning",
    shortName: "Clinic",
    description: "Detail-focused cleaning for consultation rooms, receptions and shared areas.",
    icon: Stethoscope,
  },
  {
    name: "Society Cleaning",
    shortName: "Society",
    description: "Reliable upkeep for lobbies, staircases, lifts and common spaces.",
    icon: Users,
  },
  {
    name: "Deep Cleaning",
    shortName: "Deep Cleaning",
    description: "A thorough reset for high-use areas, handovers, move-ins and seasonal needs.",
    icon: Sparkles,
  },
  {
    name: "Flat / Home Cleaning",
    shortName: "Home / Flat",
    description: "Respectful home cleaning planned around your rooms, routines and priorities.",
    icon: Home,
  },
  {
    name: "Manpower Supply",
    shortName: "Manpower",
    description: "Practical housekeeping and facility manpower support for ongoing operations.",
    icon: HeartHandshake,
  },
];

const processSteps = [
  ["01", "Tell us about the space", "Share the location, service and preferred timing."],
  ["02", "Get a clear service plan", "We align the scope and practical details with you."],
  ["03", "Schedule the work", "Choose a suitable date or recurring routine."],
  ["04", "Stay connected", "Reach our local team for ongoing coordination."],
];

const gallery = [
  [officeImage, "Workplaces ready for the day", "Cleaning planned around access, teams and the rhythm of the office."],
  [clinicImage, "Careful cleaning for clinics", "Detail-focused attention for receptions, rooms and frequently touched areas."],
  [societyImage, "Common areas that feel cared for", "Routine upkeep for entrances, staircases, lifts and shared spaces."],
  [homeImage, "A thorough home reset", "Practical support for flats, homes, move-ins and deep-cleaning moments."],
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manasvi Facility Services | Cleaning & Manpower Support in Pune" },
      {
        name: "description",
        content:
          "Professional housekeeping, cleaning and manpower support for offices, clinics, societies and homes across Pune and Pimpri-Chinchwad.",
      },
      { property: "og:title", content: "Manasvi Facility Services | Pune & PMC" },
      {
        property: "og:description",
        content: "Clean spaces, reliable people and practical local support across Pune and Pimpri-Chinchwad.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://manasvifacilityservices.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://manasvifacilityservices.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Manasvi Facility Services",
          description: "Professional cleaning, housekeeping and manpower support in Pune and Pimpri-Chinchwad.",
          url: "https://manasvifacilityservices.lovable.app/",
          telephone: PHONE_LABEL,
          email: "manasvifacilityservices01@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Lamhe, 15, SRA Building C Wing, Ground Floor, Viman Nagar",
            addressLocality: "Pune",
            addressRegion: "Maharashtra",
            postalCode: "411016",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 18.5709953,
            longitude: 73.9143378,
          },
          hasMap: GOOGLE_MAPS_PLACE_URL,
          sameAs: [GOOGLE_MAPS_PLACE_URL],
          areaServed: ["Pune", "Pimpri-Chinchwad"],
          openingHours: "Mo-Sa 09:00-18:00",
          knowsAbout: services.map((s) => s.name),
        }),
      },
    ],
  }),
  component: HomePage,
});

function Brand({ onDark = false }: { onDark?: boolean }) {
  return (
    <a
      href="#top"
      aria-label="Manasvi Facility Services home"
      className={onDark ? "inline-flex items-center rounded-lg bg-card px-3 py-2" : "inline-flex items-center"}
    >
      <img
        src={manasviLogo.url}
        alt="Manasvi Facility Services logo"
        width={112}
        height={42}
        className={onDark ? "h-9 w-auto" : "h-10 w-auto"}
      />
    </a>
  );
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [service, setService] = useState(services[0]?.name ?? "Office Cleaning");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function closeMenu() {
    setMenuOpen(false);
  }

  function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").replace(/\D/g, "");
    const locality = String(data.get("locality") ?? "").trim();
    const details = String(data.get("details") ?? "").trim();
    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors["name"] = "Please enter your name.";
    if (phone.length !== 10) nextErrors["phone"] = "Please enter a valid 10-digit Indian mobile number.";
    if (!locality) nextErrors["locality"] = "Please enter your area or locality.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const message = [
      "Hello Manasvi Facility Services, I would like a free quote.",
      `Name: ${name}`,
      `Phone: +91 ${phone}`,
      `Service: ${service}`,
      `Area: ${locality}`,
      details ? `Details: ${details}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <div id="top" className="min-h-screen overflow-x-clip bg-background pb-16 text-foreground md:pb-0">
      <header className="relative z-40">
        <div className="bg-navy text-navy-foreground">
          <div className="page-shell flex min-h-8 items-center justify-between gap-4 py-1.5 text-[11px]">
            <span className="flex items-center gap-1.5"><Clock3 className="size-3 text-service" />Monday – Saturday, 09:00 AM – 06:00 PM </span>
            <div className="hidden items-center gap-5 lg:flex">
              <a className="hover:text-service" href={`tel:${PHONE}`}><Phone className="mr-1 inline size-3" />{PHONE_LABEL}</a>
              <a className="hover:text-service" href="mailto:manasvifacilityservices01@gmail.com"><Mail className="mr-1 inline size-3" />manasvifacilityservices01@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="border-b border-border bg-background/95 backdrop-blur">
          <div className="page-shell grid h-18 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:flex lg:justify-between">
            <Brand />
            <nav className="hidden items-center gap-4 text-sm font-medium lg:flex xl:gap-7" aria-label="Primary navigation">
              <a href="#services">Services</a><a href="#about">About</a><a href="#process">How it works</a><a href="#coverage">Coverage</a><a href="#contact">Contact</a>
            </nav>
            <Button asChild className="hidden shrink-0 rounded-full px-5 lg:inline-flex"><a href="#quote">Request a Free Quote</a></Button>
            <Button variant="ghost" size="icon" className="shrink-0 lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label="Toggle navigation">
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
          {menuOpen && (
            <nav className="border-t border-border bg-background px-5 py-4 lg:hidden" aria-label="Mobile navigation">
              <div className="flex flex-col gap-1">
                {[["Services", "#services"], ["About", "#about"], ["How it works", "#process"], ["Coverage", "#coverage"], ["Contact", "#contact"]].map(([label, href]) => (
                  <a key={href} href={href} onClick={closeMenu} className="rounded-md px-3 py-3 font-medium hover:bg-muted">{label}</a>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-hero-surface">
          <img
            src={teamBanner.url}
            alt="Manasvi Facility Services team at their Pune office"
            className="absolute inset-0 hidden h-full w-full object-cover object-[70%_center] md:block"
          />
          <div className="absolute inset-0 hidden bg-hero-wash md:block" />
          <div className="md:hidden">
            <img
              src={teamPoster.url}
              alt="Manasvi Facility Services team at their Pune office"
              className="max-h-[62vh] w-full object-cover object-top"
            />
          </div>
          <div className="page-shell relative flex flex-col pb-12 pt-10 md:min-h-[610px] md:flex-row md:items-center md:pb-16 md:pt-16">
            <div className="max-w-xl">
              <p className="eyebrow"><span className="size-1.5 rounded-full bg-service" /> Cleaning & facility support in Pune</p>
              <h1 className="mt-5 text-[2rem] font-extrabold leading-[1.04] sm:text-4xl md:text-5xl xl:text-6xl">Clean spaces.<br />Reliable people.<br /><span className="text-primary">Better workplaces.</span></h1>
              <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground md:text-lg">Professional housekeeping, cleaning and manpower support for offices, clinics, societies and homes across Pune & PMC.</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild size="lg" className="w-full rounded-full sm:w-auto"><a href="#quote">Request a Free Quote</a></Button>
                <Button asChild size="lg" className="w-full rounded-full bg-service text-service-foreground hover:bg-service/90 sm:w-auto"><a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">WhatsApp Us</a></Button>
                <Button asChild variant="outline" size="lg" className="w-full rounded-full bg-background/90 sm:w-auto"><a href={`tel:${PHONE}`}>Call Now</a></Button>
              </div>
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-foreground/75">
                {["Clear service plan", "Flexible scheduling", "Local support"].map((item) => <span key={item} className="flex items-center gap-1.5"><Check className="size-3.5 text-service" />{item}</span>)}
              </div>
              <div className="mt-6 grid w-full max-w-sm grid-cols-2 divide-x divide-border rounded-lg border border-border bg-background/85 p-3 shadow-sm backdrop-blur sm:inline-grid sm:w-auto">
                <div className="flex min-w-0 items-center gap-2 pr-3 sm:pr-4"><MapPin className="size-4 shrink-0 text-primary" /><span className="text-xs">Serving <strong>Pune + PMC</strong></span></div>
                <div className="pl-4 text-xs"><strong>4.7 ★</strong><span className="block text-[10px] text-muted-foreground">Google rating · Reviews</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section-space scroll-mt-20">
          <div className="page-shell">
            <div className="grid gap-5 md:grid-cols-[minmax(0,1.1fr)_minmax(260px,.65fr)] md:items-end">
              <div><p className="eyebrow">Our services</p><h2 className="section-title mt-3">The right care for every kind of space.</h2></div>
              <p className="text-sm leading-6 text-muted-foreground">Choose a service to start the conversation. We’ll understand the space, frequency and support you need before recommending a plan.</p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((item, index) => {
                const Icon = item.icon;
                const active = index === activeService;
                return (
                  <button key={item.name} type="button" onClick={() => { setActiveService(index); setService(item.name); }} className={`service-card text-left ${active ? "service-card-active" : ""}`} aria-pressed={active}>
                    <span className="grid size-9 place-items-center rounded-full bg-brand-soft text-primary"><Icon className="size-4" /></span>
                    <h3 className="mt-5 text-lg font-bold">{item.name}</h3>
                    <p className="mt-2 text-sm leading-6 opacity-75">{item.description}</p>
                    <span className="mt-5 inline-flex items-center gap-1 text-xs font-bold">Explore service <ChevronRight className="size-3.5" /></span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-navy py-6 text-navy-foreground">
          <div className="page-shell grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[[ShieldCheck, "Affordable Rates", "Practical pricing"], [Sparkles, "Quality Service", "Clear expectations"], [Clock3, "On Time Work", "Dependable scheduling"], [Users, "Experienced Staff", "Prepared for facility needs"]].map(([Icon, title, text]) => {
              const ValueIcon = Icon as typeof ShieldCheck;
              return <div key={String(title)} className="flex items-center gap-3 rounded-md bg-navy-raised px-4 py-3"><ValueIcon className="size-5 shrink-0 text-service" /><span><strong className="block text-sm">{String(title)}</strong><span className="text-[11px] text-navy-muted">{String(text)}</span></span></div>;
            })}
          </div>
        </section>

        <section id="about" className="section-space scroll-mt-20 bg-warm-surface">
          <div className="page-shell grid gap-10 md:grid-cols-2 md:items-center md:gap-10 xl:gap-20">
            <div className="relative mx-auto w-full max-w-md md:mx-0">
              <img src={aboutImage} alt="A Manasvi team member carefully cleaning a workplace" className="aspect-[4/4.6] w-full rounded-xl object-cover" loading="lazy" />
              <div className="absolute -bottom-5 right-4 max-w-[190px] rounded-lg bg-service p-4 text-sm font-semibold text-service-foreground shadow-lg">Clear briefs. Respectful teams. Work done with care.</div>
            </div>
            <div><p className="eyebrow">About Manasvi</p><h2 className="section-title mt-3">Local coordination you can reach. People you can rely on.</h2><p className="mt-5 leading-7 text-muted-foreground">Led by proprietor Manju Waghmare, Manasvi Facility Services supports everyday spaces with practical planning, responsive communication and a clear focus on dependable work.</p>
              <div className="mt-7 space-y-4">{[[Users, "People", "We value respectful service and a well-understood brief."], [ShieldCheck, "Process", "We align scope, schedule and contact points before work begins."], [MapPin, "Locality", "We serve Pune and Pimpri-Chinchwad from Viman Nagar."]].map(([Icon, title, text]) => { const RowIcon = Icon as typeof Users; return <div key={String(title)} className="flex gap-3"><RowIcon className="mt-0.5 size-5 shrink-0 text-primary" /><p className="text-sm leading-6"><strong>{String(title)}</strong><br /><span className="text-muted-foreground">{String(text)}</span></p></div>; })}</div>
              <a className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary" href="#contact">Meet Manasvi <ArrowRight className="size-4" /></a>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="page-shell"><p className="eyebrow">Service in action</p><h2 className="section-title mt-3">Built around the way your space actually works.</h2><p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">From opening-hour office routines to society common areas and careful clinic upkeep, every plan starts with context.</p>
            <div className="mt-9 grid gap-3 md:grid-cols-2">{gallery.map(([image, title, text]) => <figure key={title} className="group relative overflow-hidden rounded-lg"><img src={image} alt={title} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] sm:aspect-[16/9]" loading="lazy" /><div className="absolute inset-0 bg-image-shade" /><figcaption className="absolute inset-x-0 bottom-0 p-4 text-image-foreground sm:p-5"><h3 className="text-base font-bold sm:text-lg">{title}</h3><p className="mt-1 text-xs opacity-80">{text}</p></figcaption></figure>)}</div>
          </div>
        </section>

        <section id="process" className="section-space scroll-mt-20 bg-blue-surface">
          <div className="page-shell"><div className="text-center"><p className="eyebrow justify-center">How it works</p><h2 className="section-title mx-auto mt-3">A clear path from first call to ready space.</h2><p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">No confusing packages. We begin with your need, agree the plan and keep coordination straightforward.</p></div>
            <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{processSteps.map(([number, title, text]) => <li key={number} className="rounded-lg bg-background p-5"><span className="text-xs font-extrabold text-service">{number}</span><h3 className="mt-7 font-bold">{title}</h3><p className="mt-2 min-h-12 text-xs leading-5 text-muted-foreground">{text}</p><div className="mt-5 h-0.5 bg-service/60" /></li>)}</ol>
          </div>
        </section>

        <section id="coverage" className="section-space scroll-mt-20 bg-navy text-navy-foreground">
          <div className="page-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-16"><div><p className="eyebrow text-service">Pune + PMC</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">Local reach, direct coordination.</h2><p className="mt-4 text-sm leading-6 text-navy-muted">Tell us where your space is and what support you need. We serve offices, clinics, societies and homes across Pune and Pimpri-Chinchwad.</p><div className="mt-5 flex flex-wrap gap-2">{["Pune", "Pimpri", "Chinchwad", "Viman Nagar", "Nearby areas"].map((place) => <span key={place} className="rounded-full border border-navy-line px-3 py-1 text-[11px]">{place}</span>)}</div><Button asChild variant="secondary" className="mt-6 rounded-full"><a href="#quote">Check service availability <ArrowRight /></a></Button></div>
            <div className="overflow-hidden rounded-xl bg-background p-2"><iframe src={MAP_EMBED_SRC} title="Google Map showing Manasvi Facility Services in Viman Nagar, Pune" className="aspect-[16/9] w-full rounded-lg border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /><a href={GOOGLE_MAPS_PLACE_URL} target="_blank" rel="noreferrer" className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-service py-2.5 text-sm font-bold text-service-foreground transition-colors hover:bg-service/90">View our Google Business Profile <ExternalLink className="size-4" /></a></div></div>
        </section>

        <section className="section-space">
          <div className="page-shell"><div className="grid gap-4 md:grid-cols-[1fr_.6fr]"><div><p className="eyebrow">A closer look</p><h2 className="section-title mt-3">Work that respects the space.</h2></div><p className="text-sm leading-6 text-muted-foreground">Every space has a different routine. Our visual language focuses on the people, preparation and details behind the result.</p></div>
            <div className="mt-9 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-[1.25fr_.8fr_.8fr_.8fr_.8fr]">{[[teamImage,"Local team"],[detailImage,"Careful detail work"],[lobbyImage,"Clean shared spaces"],[equipmentImage,"Prepared service team"],[inaugurationImage,"Manasvi business inauguration"]].map(([image, alt], index) => <img key={alt} src={image} alt={alt} className={`h-48 w-full rounded-lg object-cover sm:h-56 md:h-64 xl:h-72 ${index === 0 ? "col-span-2 xl:col-span-1" : ""}`} loading="lazy" />)}</div>
          </div>
        </section>

        <section id="quote" className="section-space scroll-mt-20 bg-warm-surface">
          <div className="page-shell grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-start lg:gap-12 xl:gap-20"><div><p className="eyebrow">Request a quote</p><h2 className="section-title mt-3">Tell us what needs care.</h2><p className="mt-4 text-sm leading-6 text-muted-foreground">Share a few details and we’ll connect during business hours to understand the space and next step.</p><div className="mt-7 space-y-3 text-sm"><a className="flex min-w-0 items-start gap-3" href={`tel:${PHONE}`}><Phone className="mt-0.5 size-4 shrink-0 text-primary" /><span>{PHONE_LABEL}<span className="mx-1">·</span>{SECONDARY_PHONE_LABEL}</span></a><a className="flex items-center gap-3" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer"><HeartHandshake className="size-4 shrink-0 text-service" /> WhatsApp: +91 9270868493</a><p className="flex items-center gap-3"><Clock3 className="size-4 shrink-0 text-primary" /> Monday – Saturday, 09:00 AM – 06:00 PM</p></div></div>
            <form onSubmit={submitQuote} className="rounded-xl bg-background p-5 shadow-form md:p-7" noValidate><h3 className="text-lg font-bold">Get your free quote</h3><p className="mt-1 text-xs text-muted-foreground">Fields marked * are required</p><div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div><Label htmlFor="name">Your name *</Label><Input id="name" name="name" className="mt-2 h-11" placeholder="Enter your name" aria-invalid={Boolean(errors["name"])} />{errors["name"] && <p className="mt-1 text-xs text-destructive">{errors["name"]}</p>}</div>
              <div><Label htmlFor="phone">Phone number *</Label><div className="mt-2 flex"><span className="grid h-11 place-items-center rounded-l-md border border-r-0 border-input bg-muted px-3 text-sm">+91</span><Input id="phone" name="phone" inputMode="numeric" className="h-11 rounded-l-none" placeholder="10-digit number" aria-invalid={Boolean(errors["phone"])} /></div>{errors["phone"] && <p className="mt-1 text-xs text-destructive">{errors["phone"]}</p>}</div>
              <div><Label htmlFor="service">Service needed *</Label><Select value={service} onValueChange={setService}><SelectTrigger id="service" className="mt-2 h-11"><SelectValue /></SelectTrigger><SelectContent>{services.map((item) => <SelectItem key={item.name} value={item.name}>{item.name}</SelectItem>)}</SelectContent></Select></div>
              <div><Label htmlFor="locality">Area / locality *</Label><Input id="locality" name="locality" className="mt-2 h-11" placeholder="e.g. Viman Nagar" aria-invalid={Boolean(errors["locality"])} />{errors["locality"] && <p className="mt-1 text-xs text-destructive">{errors["locality"]}</p>}</div>
              <div className="sm:col-span-2"><Label htmlFor="details">Tell us about the space</Label><Textarea id="details" name="details" className="mt-2 min-h-24" placeholder="Type of space, preferred date or any useful details" /></div>
            </div><div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-sm text-[11px] leading-5 text-muted-foreground">By submitting, you agree to be contacted about your service request.</p><Button type="submit" className="h-11 rounded-full px-6">Request a Free Quote</Button></div></form>
          </div>
        </section>

        <section className="bg-primary py-10 text-primary-foreground"><div className="page-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between"><div><h2 className="text-2xl font-bold">Ready for a cleaner, better-run space?</h2><p className="mt-2 text-sm opacity-80">Call, WhatsApp or request a quote. We’ll help you choose the right next step.</p></div><div className="flex flex-col gap-3 sm:flex-row md:shrink-0"><Button asChild className="w-full rounded-full bg-service text-service-foreground hover:bg-service/90 sm:w-auto"><a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">WhatsApp Us</a></Button><Button asChild variant="secondary" className="w-full rounded-full sm:w-auto"><a href={`tel:${PHONE}`}>Call Now</a></Button></div></div></section>
      </main>

      <footer id="contact" className="scroll-mt-20 bg-navy pb-20 pt-12 text-navy-foreground md:py-12"><div className="page-shell grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.3fr_.7fr_.7fr_1.3fr]"><div><Brand onDark /><p className="mt-5 max-w-xs text-xs leading-5 text-navy-muted">Professional cleaning, housekeeping and manpower support for Pune and Pimpri-Chinchwad.</p><p className="mt-4 text-xs"><strong>Proprietor</strong> · Manju Waghmare</p></div><div><h3 className="footer-title">Services</h3><ul className="footer-list">{services.slice(0,4).map((item) => <li key={item.name}><a href="#services">{item.name}</a></li>)}</ul></div><div><h3 className="footer-title">Company</h3><ul className="footer-list"><li><a href="#about">About Manasvi</a></li><li><a href="#process">How it works</a></li><li><a href="#coverage">Coverage</a></li><li><a href="#quote">Request a quote</a></li></ul></div><div><h3 className="footer-title">Contact</h3><ul className="footer-list"><li><a href={`tel:${PHONE}`}>{PHONE_LABEL} · {SECONDARY_PHONE_LABEL}</a></li><li><a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">WhatsApp +91 9270868493</a></li><li><a className="break-all" href="mailto:manasvifacilityservices01@gmail.com">manasvifacilityservices01@gmail.com</a></li><li>Lamhe, 15, SRA Building C Wing, Ground Floor, Viman Nagar, Pune–411016</li><li>Monday – Saturday, 09:00 AM – 06:00 PM</li></ul></div></div><div className="page-shell mt-10 flex flex-col gap-2 border-t border-navy-line pt-5 text-[10px] text-navy-muted sm:flex-row sm:justify-between"><span>© Manasvi Facility Services. All rights reserved.</span><span>Pune · Pimpri-Chinchwad</span></div></footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid h-16 grid-cols-3 border-t border-border bg-background shadow-mobile md:hidden">
        <a className="mobile-action" href={`tel:${PHONE}`}><Phone />Call</a><a className="mobile-action text-service" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer"><HeartHandshake />WhatsApp</a><a className="mobile-action text-primary" href="#quote"><ArrowRight />Quote</a>
      </div>
    </div>
  );
}
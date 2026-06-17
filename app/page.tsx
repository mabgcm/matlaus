import {
  ArrowRight,
  BarChart3,
  Globe2,
  LineChart,
  Mail,
  MapPin,
  Megaphone,
  MousePointer2,
  PenTool,
  Phone,
  Sparkles,
  Target,
} from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Market Strategy",
    text: "Positioning, audience architecture, go-to-market planning, and channel strategy for regional and cross-border growth.",
  },
  {
    icon: Megaphone,
    title: "Campaign Management",
    text: "Integrated paid, organic, influencer, and partnership campaigns built around measurable business outcomes.",
  },
  {
    icon: PenTool,
    title: "Brand Systems",
    text: "Identity refinement, messaging, launch assets, and content systems that keep global teams aligned.",
  },
  {
    icon: LineChart,
    title: "Performance Growth",
    text: "Landing page optimization, analytics, funnel reporting, and media iteration for efficient acquisition.",
  },
];

const regions = ["Canada", "Europe", "Asia", "Middle East", "Global"];
const stats = [
  ["01", "Ontario base"],
  ["04", "priority regions"],
  ["360", "campaign view"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#" aria-label="Matlaus home">
          <span className="logo-mark">M</span>
          <span>Matlaus</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#markets">Markets</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="#contact">
          <Mail size={16} />
          Start a brief
        </a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <Sparkles size={16} />
            Ontario based. Globally focused.
          </p>
          <h1>Matlaus</h1>
          <p className="hero-lede">
            A modern marketing company helping brands from Canada scale into
            Europe, Asia, the Middle East, and high-opportunity global markets.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#contact">
              Plan a campaign
              <ArrowRight size={18} />
            </a>
            <a className="secondary-button" href="#services">
              View services
            </a>
          </div>
          <div className="region-strip" aria-label="Markets served">
            {regions.map((region) => (
              <span key={region}>{region}</span>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-label="3D global campaign network">
          <div className="stage">
            <div className="globe">
              <div className="longitude longitude-one" />
              <div className="longitude longitude-two" />
              <div className="latitude latitude-one" />
              <div className="latitude latitude-two" />
              <div className="core">
                <Globe2 size={54} />
              </div>
            </div>
            <div className="orbit orbit-one">
              <span />
            </div>
            <div className="orbit orbit-two">
              <span />
            </div>
            <div className="orbit orbit-three">
              <span />
            </div>
            <div className="data-card card-one">
              <BarChart3 size={18} />
              <span>Demand mapping</span>
            </div>
            <div className="data-card card-two">
              <MousePointer2 size={18} />
              <span>Conversion paths</span>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-band" aria-label="Company highlights">
        {stats.map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="section" id="services">
        <div className="section-heading">
          <p className="eyebrow">Capabilities</p>
          <h2>Marketing built for international momentum.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <service.icon size={24} />
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="markets" id="markets">
        <div>
          <p className="eyebrow">Markets</p>
          <h2>From Ontario to the regions where your next buyers are.</h2>
        </div>
        <div className="market-panel">
          {regions.map((region, index) => (
            <div className="market-row" key={region}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{region}</strong>
              <p>
                Localized messaging, channel selection, and campaign pacing for
                each market context.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section process" id="process">
        <div className="section-heading">
          <p className="eyebrow">Process</p>
          <h2>Clear strategy, sharp execution, measurable learning.</h2>
        </div>
        <div className="process-grid">
          <div>
            <span>Discover</span>
            <p>Clarify offer, audience, market fit, competitors, and growth constraints.</p>
          </div>
          <div>
            <span>Design</span>
            <p>Shape positioning, campaign architecture, creative direction, and KPI logic.</p>
          </div>
          <div>
            <span>Deploy</span>
            <p>Launch campaigns, monitor signals, optimize conversion, and report decisions.</p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Bring the next campaign brief.</h2>
          <p>
            Logo, phone number, email, address, and social links are placeholders
            until you provide the final details.
          </p>
        </div>
        <div className="contact-card">
          <a href="mailto:hello@example.com">
            <Mail size={18} />
            hello@example.com
          </a>
          <a href="tel:+10000000000">
            <Phone size={18} />
            +1 000 000 0000
          </a>
          <span>
            <MapPin size={18} />
            Ontario, Canada
          </span>
        </div>
      </section>
    </main>
  );
}

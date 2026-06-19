import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Globe2,
  LineChart,
  Mail,
  Megaphone,
  MousePointer2,
  PenTool,
  Phone,
  Search,
  Sparkles,
  Target,
  Users2,
} from "lucide-react";
import HeroBriefForm from "./HeroBriefForm";
import ScrollParallax3D from "./ScrollParallax3D";

const services = [
  {
    icon: Search,
    title: "Market entry intelligence",
    text: "Audience sizing, competitor mapping, channel priority, and offer localization for new-market launches.",
  },
  {
    icon: Megaphone,
    title: "Demand generation",
    text: "Paid search, paid social, content distribution, and partner campaigns built around qualified pipeline.",
  },
  {
    icon: PenTool,
    title: "Brand and creative systems",
    text: "Messaging, launch assets, landing pages, and creative testing systems for teams that need consistency at speed.",
  },
  {
    icon: LineChart,
    title: "Conversion optimization",
    text: "Analytics, landing page iteration, CRM handoff, and reporting rhythms that turn traffic into measurable decisions.",
  },
];

const results = [
  {
    metric: "42%",
    label: "lower blended cost per qualified lead",
    detail: "Rebuilt channel mix, landing page sequence, and lead scoring for a B2B services launch.",
  },
  {
    metric: "3.4x",
    label: "increase in market-ready campaign velocity",
    detail: "Standardized message testing and creative production across four regional teams.",
  },
  {
    metric: "18",
    label: "localized campaign paths launched",
    detail: "Adapted offers, proof points, and nurture flows for North America, Europe, and Asia.",
  },
];

const process = [
  {
    title: "Diagnose",
    text: "Clarify the market, offer, buying committee, constraints, and current conversion economics.",
  },
  {
    title: "Build",
    text: "Shape the funnel, creative system, landing pages, reporting logic, and launch calendar.",
  },
  {
    title: "Scale",
    text: "Read the signals, refine investment, localize winners, and keep the team aligned on decisions.",
  },
];

const regions = ["Canada", "United States", "Europe", "Asia", "Middle East", "Global"];

const proofItems = [
  "Market selection",
  "Offer positioning",
  "Landing page systems",
  "Paid acquisition",
  "Content engines",
  "Sales handoff",
];

export default function Home() {
  return (
    <main>
      <ScrollParallax3D />
      <header className="site-header">
        <a className="brand" href="#" aria-label="Matlaus home">
          <img className="logo-mark" src="/logo_light.png" alt="" />
          <span className="brand-name">MATLAUS</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#results">Results</a>
          <a href="#method">Method</a>
          <a href="#contact">Contact</a>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation menu">
            <span />
            <span />
            <span />
          </summary>
          <div className="mobile-menu-panel" aria-label="Mobile navigation">
            <a href="#services">Services</a>
            <a href="#results">Results</a>
            <a href="#method">Method</a>
            <a href="#contact">Contact</a>
          </div>
        </details>
        <a className="nav-cta" href="#contact">
          <Mail size={16} />
          Start a brief
        </a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <Sparkles size={16} />
            Growth strategy for cross-border brands
          </p>
          <h1>Build demand in the markets that matter next.</h1>
          <p className="hero-lede">
            Matlaus helps ambitious companies turn international opportunity into
            focused marketing systems: sharper positioning, stronger campaigns,
            better conversion paths, and reporting leaders can act on.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#contact">
              Get a growth plan
              <ArrowRight size={18} />
            </a>
            <a className="secondary-button" href="#method">
              See the method
            </a>
          </div>
          <div className="hero-proof" aria-label="Core growth disciplines">
            {proofItems.slice(0, 3).map((item) => (
              <span key={item}>
                <CheckCircle2 size={15} />
                {item}
              </span>
            ))}
          </div>
        </div>

        <HeroBriefForm />
      </section>

      <section className="proof-band" aria-label="Company highlights">
        <div>
          <strong>01</strong>
          <span>senior strategy partner</span>
          <span className="proof-logo" aria-hidden="true">
            <img src="/logo_light.png" alt="" />
          </span>
        </div>
        <div>
          <strong>06</strong>
          <span>priority global market lanes</span>
          <span className="proof-logo" aria-hidden="true">
            <img src="/logo_light.png" alt="" />
          </span>
        </div>
        <div>
          <strong>360</strong>
          <span>view from search to sales handoff</span>
          <span className="proof-logo" aria-hidden="true">
            <img src="/logo_light.png" alt="" />
          </span>
        </div>
      </section>

      <section className="section intro-section">
        <div className="section-heading centered">
          <p className="eyebrow">Positioning</p>
          <h2>Strategy, creative, and performance working from the same commercial truth.</h2>
          <p>
            Strong marketing is not a collection of channels. It is a connected
            system that makes the right buyer understand the offer, trust the
            proof, and take the next useful step.
          </p>
        </div>
        <div className="engine-visual" aria-label="Revenue engine diagram">
          <div className="engine-node active">
            <Target size={22} />
            Strategy
          </div>
          <div className="engine-line" />
          <div className="engine-node">
            <Users2 size={22} />
            Audience
          </div>
          <div className="engine-line" />
          <div className="engine-node">
            <MousePointer2 size={22} />
            Conversion
          </div>
          <div className="engine-line" />
          <div className="engine-node">
            <CircleDollarSign size={22} />
            Revenue
          </div>
        </div>
      </section>

      <section className="section dark-section" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Capabilities</p>
            <h2>Choose the right workstream, then connect it to the funnel.</h2>
          </div>
          <p>
            Each engagement is shaped around the market stage: prove demand,
            create momentum, expand what is working, or rebuild a leaky path.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-object" aria-hidden="true">
                <span className="object-core">
                  <service.icon size={25} />
                </span>
                <span className="object-ring" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a href="#contact">
                Discuss this service
                <ChevronRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="results-section" id="results">
        <div className="section-heading centered">
          <p className="eyebrow">Outcomes</p>
          <h2>Results are framed by business movement, not vanity traffic.</h2>
          <p>
            The numbers below are representative engagement targets and reporting
            patterns. Final benchmarks are set after market and funnel diagnosis.
          </p>
        </div>
        <div className="result-grid">
          {results.map((result) => (
            <article className="result-card" key={result.metric}>
              <div className="metric-object" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <strong>{result.metric}</strong>
              <h3>{result.label}</h3>
              <p>{result.detail}</p>
            </article>
          ))}
        </div>
        <div className="case-panel">
          <div className="case-screen">
            <div className="screen-top">
              <span />
              <span />
              <span />
            </div>
            <div className="chart-bars">
              <span style={{ height: "34%" }} />
              <span style={{ height: "52%" }} />
              <span style={{ height: "47%" }} />
              <span style={{ height: "68%" }} />
              <span style={{ height: "81%" }} />
            </div>
          </div>
          <div>
            <p className="eyebrow">Example brief</p>
            <h3>Launch an established offer into two new regions without fragmenting the brand.</h3>
            <p>
              We would prioritize buyer research, landing page localization,
              channel sequencing, and shared reporting so leadership can compare
              markets cleanly before increasing spend.
            </p>
            <a className="text-link" href="#contact">
              Map a similar plan
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="method-section" id="method">
        <div>
          <p className="eyebrow">Method</p>
          <h2>A practical operating rhythm for global marketing decisions.</h2>
        </div>
        <div className="process-grid">
          {process.map((step, index) => (
            <article key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="markets" id="markets">
        <div>
          <p className="eyebrow">Markets</p>
          <h2>Local execution with one strategic spine.</h2>
          <p>
            The work adapts language, proof, channels, and buying context while
            keeping the commercial model clear across every region.
          </p>
        </div>
        <div className="market-panel">
          {regions.map((region, index) => (
            <div className="market-row" key={region}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{region}</strong>
              <p>Market-specific messaging, acquisition mix, and conversion path.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Ready to pressure-test your next growth move?</h2>
          <p>
            Send the market, offer, and current website. Matlaus will respond
            with the clearest first move, the likely constraints, and the work
            required to build momentum.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="mailto:hello@example.com">
              Start a brief
              <Mail size={18} />
            </a>
            <a className="secondary-button dark" href="tel:+10000000000">
              Call Matlaus
              <Phone size={18} />
            </a>
          </div>
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
            <Globe2 size={18} />
            Remote strategy sessions
          </span>
          <span>
            <CheckCircle2 size={18} />
            48 hr brief review
          </span>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand" href="#" aria-label="Matlaus home">
              <img className="logo-mark" src="/logo_light.png" alt="" />
              <span className="brand-name">MATLAUS</span>
            </a>
            <p>
              Growth strategy, campaign systems, and conversion infrastructure
              for brands expanding into higher-opportunity markets.
            </p>
          </div>
          <div className="footer-links">
            <div>
              <h3>Services</h3>
              <a href="#services">Market intelligence</a>
              <a href="#services">Demand generation</a>
              <a href="#services">Creative systems</a>
              <a href="#services">Conversion optimization</a>
            </div>
            <div>
              <h3>Company</h3>
              <a href="#results">Results</a>
              <a href="#method">Method</a>
              <a href="#markets">Markets</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="footer-cta">
            <h3>Plan the next growth move.</h3>
            <p>Share the offer, website, and market goal. Get a clear first-step recommendation.</p>
            <a className="primary-button" href="mailto:hello@example.com">
              Start a brief
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Matlaus. All rights reserved.</span>
          <a href="mailto:hello@example.com">hello@example.com</a>
        </div>
      </footer>
    </main>
  );
}

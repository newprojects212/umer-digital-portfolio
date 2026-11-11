import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Instagram,
  Layout,
  MessageCircle,
  Share2,
} from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import portfolioWorkspace from "@/assets/umer-portfolio-workspace.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Umer | Digital Creations" },
      {
        name: "description",
        content:
          "Umer offers social media management, portfolio website creation, and student services through Digital Creations.",
      },
      { property: "og:title", content: "Umer | Digital Creations" },
      {
        property: "og:description",
        content:
          "Social media management, portfolio websites, and student services by Umer.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header-inner page-wrap">
          <a className="brand" href="#top" aria-label="Umer, Digital Creations">
            <span className="brand-name">umer</span>
            <span className="brand-divider" aria-hidden="true" />
            <span className="brand-label">Digital Creations</span>
          </a>
          <nav className="main-nav" aria-label="Main navigation">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <Button asChild className="header-contact">
            <a href="#contact">
              Let’s talk <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-grid page-wrap">
            <div className="hero-copy">
              <p className="eyebrow"><span aria-hidden="true" /> Independent creative support</p>
              <h1>I’m Umer.</h1>
              <p className="hero-lead">
                Through <strong>Digital Creations</strong>, I manage social media, build portfolio
                websites, and provide student services.
              </p>
              <div className="hero-actions">
                <Button asChild size="lg">
                  <a href="#services">
                    Explore services <ArrowDown aria-hidden="true" />
                  </a>
                </Button>
                <a className="text-link" href="#contact">
                  Get in touch <ArrowRight aria-hidden="true" />
                </a>
              </div>
              <p className="hero-location">Based in Lahore, Pakistan</p>
            </div>
            <div className="hero-image-wrap">
              <img
                className="hero-image"
                src={portfolioWorkspace}
                alt="A laptop and phone displaying website and social media designs on a bright studio desk"
                width={1536}
                height={1024}
                fetchPriority="high"
              />
              <div className="image-caption">
                <span className="caption-mark" aria-hidden="true">U.</span>
                <span><strong>Umer</strong><small>Digital Creations</small></span>
                <ArrowUpRight aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="page-wrap">
            <div className="section-heading">
              <p className="eyebrow">What I do</p>
              <h2>Good work, made personal.</h2>
              <p className="section-intro">
                Thoughtful support for your online presence, your portfolio, and your studies.
              </p>
            </div>
            <div className="service-list">
              <article className="service-item">
                <div className="service-number">01</div>
                <div className="service-icon"><Share2 aria-hidden="true" /></div>
                <div className="service-content">
                  <h3>Social media management</h3>
                  <p>
                    Keep your pages active and consistent with considered planning, captions, and
                    publishing that fits your brand.
                  </p>
                  <ul>
                    <li>Content planning and scheduling</li>
                    <li>Caption writing and page management</li>
                    <li>Publishing across your social channels</li>
                  </ul>
                </div>
                <a className="service-link" href="#contact" aria-label="Ask Umer about social media management">
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </article>

              <article className="service-item">
                <div className="service-number">02</div>
                <div className="service-icon"><Layout aria-hidden="true" /></div>
                <div className="service-content">
                  <h3>Portfolio website creation</h3>
                  <p>
                    A polished place to introduce yourself, show your work, and help the right
                    people get in touch.
                  </p>
                  <ul>
                    <li>Personal, professional presentation</li>
                    <li>Project highlights and social links</li>
                    <li>Designed for phones and computers</li>
                  </ul>
                </div>
                <a className="service-link" href="#contact" aria-label="Ask Umer about a portfolio website">
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </article>

              <article className="service-item">
                <div className="service-number">03</div>
                <div className="service-icon"><BookOpen aria-hidden="true" /></div>
                <div className="service-content">
                  <h3>Student services</h3>
                  <p>
                    Turn class notes into clear, organized revision material that is easier to
                    review and use.
                  </p>
                  <ul>
                    <li>Study notes and revision resources</li>
                    <li>Mind maps and flashcards</li>
                    <li>Presentation slides from course material</li>
                  </ul>
                </div>
                <a className="service-link" href="#contact" aria-label="Ask Umer about student services">
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-grid page-wrap">
            <p className="eyebrow">A little about me</p>
            <div>
              <h2>One person to talk to. Care in every detail.</h2>
              <p>
                I’m Umer, the person behind Digital Creations. I help businesses and students with
                practical creative support—clear communication, thoughtful work, and a personal
                touch from the first message to the finished result.
              </p>
              <a className="text-link about-link" href="#contact">
                Tell me what you’re working on <ArrowRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-inner page-wrap">
            <div>
              <p className="eyebrow">Start a conversation</p>
              <h2>Have something in mind?</h2>
              <p>Tell me what you need, and we can take it from there.</p>
            </div>
            <div className="contact-actions">
              <Button asChild size="lg" className="contact-primary">
                <a href="https://www.instagram.com/digitalcreations.pk1/" target="_blank" rel="noreferrer">
                  <Instagram aria-hidden="true" /> Message on Instagram <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
              <a
                className="contact-secondary"
                href="https://www.threads.net/@digitalcreations.pk1"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle aria-hidden="true" /> Find Digital Creations on Threads
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner page-wrap">
          <a className="footer-brand" href="#top">umer <span>·</span> Digital Creations</a>
          <span>Social media · Websites · Student services</span>
          <a href="#top" className="back-to-top">Back to top <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </footer>
    </div>
  );
}
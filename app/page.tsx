'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Globe, BarChart3, Zap, TrendingUp, Shield, MessageSquare, AlertCircle, Check, X } from 'lucide-react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleGetDemo = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-foreground">
            tradez<span className="text-primary">.ai</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-teal-50 -z-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-30 -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-30 -z-10" />

        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
            Export Smarter. Sell Globally.
          </h1>
          
          <p className="text-xl lg:text-2xl text-text-muted leading-relaxed max-w-3xl mx-auto">
            The only platform that tells Indian exporters exactly where to sell, what it will cost, and who to sell to — powered by live UN Comtrade data and AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
            <Button size="lg" className="bg-primary hover:bg-accent-dark text-white" asChild>
              <a href="#get-access">Request Early Access <ArrowRight className="ml-2 w-4 h-4" /></a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
              <a href="#how-it-works">See How It Works</a>
            </Button>
          </div>

          <p className="text-sm text-text-light pt-4">
            Built on UN Comtrade · India-UAE CEPA Database · GPT-4o
          </p>

          <div className="relative mt-12">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-400 to-teal-400 rounded-2xl blur-xl opacity-20 -z-10" />
            <img 
              src="/pic.jpg"
              alt="World trade routes" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-background-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">Why tradez.ai Exists</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-balance mb-6">
              Indian SME exporters don&apos;t need more data. They need answers to 3 questions.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              {
                number: 1,
                title: "Can I make money in this market?",
                desc: "Exporters don't know their landed cost, how their price compares globally, or which markets have untapped demand for their product."
              },
              {
                number: 2,
                title: "Can I legally enter this market?",
                desc: "Compliance requirements are scattered across 10+ government portals, change constantly, and cost ₹50,000+ to research through consultants."
              },
              {
                number: 3,
                title: "Who do I actually sell to?",
                desc: "Knowing a country imports your product is useless without knowing which company to call."
              }
            ].map((card, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">{card.number}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{card.title}</h3>
                <p className="text-text-muted leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-teal-50 border border-primary/20 rounded-xl p-6 text-center">
            <p className="text-lg text-foreground font-semibold">
              Today, answering these questions means hiring consultants, waiting weeks, and spending lakhs. tradez.ai answers all three in under 5 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">How It Works</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
              From product to full market intelligence in 5 steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { number: 1, title: "Tell us what you make", desc: "Describe your product in plain English or drop in an HS code — no trade expertise needed" },
              { number: 2, title: "Share your situation", desc: "Your price, current markets, and revenue — so every insight is specific to you, not generic advice" },
              { number: 3, title: "We do the heavy lifting", desc: "Live Comtrade data, FTA tariff databases, compliance sources, and AI agents run in parallel — in seconds" },
              { number: 4, title: "Your intelligence dashboard", desc: "Ranked market opportunities, real competitor pricing, duty rates, demand trends, and an ease-of-entry score for each market" },
              { number: 5, title: "Go deeper, ask anything", desc: "Your personal Export Advisor is ready — ask follow-up questions and get answers grounded in your own data" }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto bg-gradient-to-br from-indigo-500 to-teal-500 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold">{step.number}</span>
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{step.title}</h4>
                  <p className="text-sm text-text-muted">{step.desc}</p>
                </div>
                {i < 4 && (
                  <div className="hidden md:block absolute top-6 -right-2 w-4 h-0.5 bg-gradient-to-r from-indigo-500 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-background-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">What It Does Today</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Built on real trade data. Not AI guesses.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: BarChart3,
                title: "Market Intelligence Dashboard",
                desc: "Top import markets ranked by opportunity gap. See exactly where demand exists and where India is underpenetrated — using live 2023 UN Comtrade data.",
                color: "from-indigo-500 to-indigo-600"
              },
              {
                icon: Shield,
                title: "FTA Tariff Intelligence",
                desc: "Exact import duty rates under India–UAE CEPA for any HS code, sourced from a 1 million+ row tariff database. Not estimated. The actual rate.",
                color: "from-pink-500 to-rose-600"
              },
              {
                icon: TrendingUp,
                title: "Competitive Price Benchmarking",
                desc: "Your unit price benchmarked against India, Germany, Vietnam, China, Pakistan and 10+ exporters using real Comtrade export statistics.",
                color: "from-teal-500 to-cyan-600"
              },
              {
                icon: AlertCircle,
                title: "AI Compliance Checklist",
                desc: "Product + destination country → sourced compliance checklist: certifications, labeling standards, testing requirements, regulation citations.",
                color: "from-orange-500 to-red-600"
              },
              {
                icon: Zap,
                title: "Export Intelligence Report",
                desc: "One-click PDF. Full market analysis, pricing benchmark, compliance summary, and AI strategy — generated in 60 seconds.",
                color: "from-purple-500 to-violet-600"
              },
              {
                icon: MessageSquare,
                title: "Export Advisor Chatbot",
                desc: "Conversational AI with full context of your analysis. Ask 'What documents do I need for Germany?' — gets live data, not generic answers.",
                color: "from-amber-500 to-orange-600"
              }
            ].map((feature, i) => {
              const Icon = feature.icon
              return (
                <div key={i} className="bg-white rounded-xl p-8 border border-border hover:border-primary/50 hover:shadow-lg transition">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{feature.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Before / After Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">The Old Way vs. The New Way</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
              What used to take weeks now takes 5 minutes.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Before */}
            <div className="rounded-2xl border border-red-100 bg-red-50 p-8 space-y-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-red-400">Before tradez.ai</p>
              {[
                { stat: "3–6 weeks", label: "to research a new export market manually" },
                { stat: "₹50,000+", label: "spent on trade consultants per market" },
                { stat: "10+ portals", label: "to piece together compliance requirements" },
                { stat: "Still guessing", label: "which buyer to actually approach" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <X className="text-red-400 w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-foreground">{item.stat}</span>
                    <span className="text-text-muted"> — {item.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* After */}
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-indigo-50 to-teal-50 p-8 space-y-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">After tradez.ai</p>
              {[
                { stat: "5 minutes", label: "to get a full market opportunity report" },
                { stat: "₹0", label: "in consultant fees — answers are instant" },
                { stat: "1 platform", label: "for compliance, pricing, and demand data" },
                { stat: "Real buyer leads", label: "from live customs import data" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <Check className="text-primary w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-foreground">{item.stat}</span>
                    <span className="text-text-muted"> — {item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 px-6 bg-background-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">What's Coming</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-balance mb-2">
              We are in active R&D. Here's what's next.
            </h2>
            <p className="text-lg text-text-muted">Currently onboarding early design partners and pilot exporters.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Landed Cost Calculator",
                desc: "Full cost to land your product in any market: freight + duty + handling + compliance. Know your actual margin before you quote."
              },
              {
                title: "Buyer Discovery",
                desc: "The actual companies importing your product. Names, volumes, existing suppliers, implied prices — from public customs data."
              },
              {
                title: "Regulatory Change Alerts",
                desc: "Automated monitoring for anti-dumping investigations, new labeling rules, FTA rate changes, and quota announcements for your specific product and markets."
              },
              {
                title: "Multi-Country Compliance Engine",
                desc: "One product. Five markets. Five compliance reports generated in parallel."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/50 backdrop-blur rounded-xl p-6 border border-border opacity-75 hover:opacity-100 transition relative">
                <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  Coming Soon
                </div>
                <h4 className="font-bold text-foreground mb-2 mt-7">{item.title}</h4>
                <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-indigo-50 to-teal-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            An exporter in Surat, Ludhiana, or Coimbatore opens tradez.ai, enters their product, and within 5 minutes knows exactly which market to enter next, what it will cost to land their product there, whether they are compliant, and which buyer to call first.
          </h2>
          <p className="text-2xl font-semibold text-primary">
            That is a problem worth solving.
          </p>
          <div className="pt-8">
            <img 
              src="/image.png"
              alt="Dashboard visualization" 
              className="rounded-xl shadow-lg w-full max-w-xl mx-auto max-h-72 object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section id="get-access" className="py-20 px-6 bg-white border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
            See a live demo in your inbox.
          </h2>
          <p className="text-lg text-text-muted mb-8">
            Drop in your email and we&apos;ll send you a personalized demo report showing how tradez.ai works for exporters like you.
          </p>

          {status === 'success' ? (
            <div className="flex items-center justify-center gap-2 max-w-md mx-auto mb-8 py-4 px-6 bg-green-50 border border-green-200 rounded-lg text-green-700">
              <Check className="w-5 h-5" />
              <span>You&apos;re on the list! We&apos;ll be in touch soon.</span>
            </div>
          ) : (
            <form onSubmit={handleGetDemo} className="flex flex-col md:flex-row gap-3 max-w-md mx-auto mb-8">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder-text-light focus:outline-none focus:border-primary transition"
                required
                disabled={status === 'loading'}
              />
              <Button type="submit" disabled={status === 'loading'} className="bg-primary text-white hover:bg-accent-dark whitespace-nowrap">
                {status === 'loading' ? 'Sending...' : 'Get Demo Report'}
              </Button>
            </form>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-500 flex items-center justify-center gap-1 mb-4">
              <X className="w-4 h-4" /> Something went wrong. Please try again.
            </p>
          )}

          <p className="text-sm text-text-light">
            tradez.ai · Built for Indian SME Exporters · Powered by UN Comtrade + GPT-4o
          </p>
        </div>
      </section>
    </div>
  )
}


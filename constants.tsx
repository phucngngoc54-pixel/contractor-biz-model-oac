
import React from 'react';
import { BMCData } from './types';

export const COLORS = {
  primary: '#002060',
  secondary: '#ffffff',
  text: '#1e293b',
  border: '#e2e8f0'
};

export const ICONS = {
  Partners: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  ),
  Activities: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
  ),
  ValueProp: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
  ),
  Relationship: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
  ),
  Segments: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  ),
  Resources: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
  ),
  Channels: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
  ),
  Costs: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
  ),
  Revenues: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z"/><path d="m3 9.89 10.95 6.21a2 2 0 0 0 1.93 0L21 13.11"/><path d="m3 14.89 10.95 6.21a2 2 0 0 0 1.93 0L21 18.11"/></svg>
  )
};

export const BMC_DATA: BMCData = {
  partners: {
    id: 'partners',
    title: 'Key Partners',
    icon: 'Partners',
    items: [
      {
        point: 'Contractor firms and specialist communities.',
        rationale: 'Provide scalable capacity and local depth faster.'
      },
      {
        point: 'Legal template partner.',
        rationale: 'Standardized MSA/SOW/NDA prevent expensive mistakes.'
      },
      {
        point: 'Optional verification vendors.',
        rationale: 'Add formal checks only when the client requires them.'
      }
    ]
  },
  activities: {
    id: 'activities',
    title: 'Key Activities',
    icon: 'Activities',
    items: [
      {
        point: 'Project intake and role mapping (roles, waves, start dates, must-have criteria).',
        rationale: 'Project-based hiring fails without clear wave planning.'
      },
      {
        point: 'Batch sourcing and shortlisting (by role cluster, not isolated job-by-job).',
        rationale: 'Batch delivery is the only way to reach high throughput with a small team.'
      },
      {
        point: 'Vendor management and coordination.',
        rationale: 'Supply aggregation requires active relationship and quality control.'
      },
      {
        point: 'Replacement SLA execution within a defined window.',
        rationale: 'Key trust lever and differentiator.'
      },
      {
        point: 'Timesheet workflow support.',
        rationale: 'Structured workflow reduces disputes and speeds payment.'
      }
    ]
  },
  resources: {
    id: 'resources',
    title: 'Key Resources',
    icon: 'Resources',
    items: [
      {
        point: 'Supply network: individual contractors + a curated list of contractor firms by niche and location.',
        rationale: 'Speed comes from pre-built supply. Partnerships reduce marginal sourcing cost.'
      },
      {
        point: 'Delivery system: intake templates, role mapping, screening scorecards, onboarding checklist, replacement policy.',
        rationale: 'Repeatability is how a small team scales beyond one-off hero work.'
      },
      {
        point: 'Tooling and intelligence: lightweight CRM/ATS, vendor tracker, pipeline dashboard, rate-band benchmarks.',
        rationale: 'Visibility reduces coordination overhead and supports pricing discipline.'
      }
    ]
  },
  valueProp: {
    id: 'valueProp',
    title: 'Value Propositions',
    icon: 'ValueProp',
    items: [
      {
        point: 'Fast project ramp-up by waves (batch hiring, not one-off searches).',
        rationale: 'The core client pain is time-to-mobilize. Speed wins in project environments.'
      },
      {
        point: 'Light risk control via pipeline visibility and replacement within a defined window.',
        rationale: 'Contractor drop-off is common. A replacement promise increases buyer confidence.'
      },
      {
        point: 'Cost flexibility without permanent headcount expansion.',
        rationale: 'Clients want capacity without long-term fixed costs once the project ends.'
      }
    ]
  },
  relationships: {
    id: 'relationships',
    title: 'Customer Relationships',
    icon: 'Relationship',
    items: [
      {
        point: 'High-touch, project-based delivery: one person owns the account and delivery (with 1–2 delivery support).',
        rationale: 'Small team reality. Project staffing needs frequent coordination and fast iteration.'
      },
      {
        point: 'Weekly staffing sync during active delivery (pipeline, start dates, drop-off risks).',
        rationale: 'Project timelines shift. Visibility and cadence prevent surprises.'
      },
      {
        point: 'Goal: become a “preferred vendor” after the first successful project.',
        rationale: 'Repeat projects are the profitability engine. Preferred vendor status improves deal flow stability.'
      }
    ]
  },
  channels: {
    id: 'channels',
    title: 'Channels',
    icon: 'Channels',
    items: [
      {
        point: 'Account-based outbound to project directors, site leaders, and functional heads.',
        rationale: 'Demand is concentrated in a few decision-makers. Broad marketing is inefficient.'
      },
      {
        point: 'Partner referrals from contractor firms and trusted industry connectors (PMs, site supervisors).',
        rationale: 'Referrals reduce trust friction and shorten sales cycles.'
      },
      {
        point: 'Credibility content (short market intel notes on talent availability, lead times, rate bands).',
        rationale: 'Buyers respond to proof that you understand the labor market and can deliver quickly.'
      }
    ]
  },
  segments: {
    id: 'segments',
    title: 'Customer Segments',
    icon: 'Segments',
    items: [
      {
        point: 'Mid-sized operators and project owners launching new initiatives (3–12 months) that require fast ramp-up of specialized talent.',
        rationale: 'These buyers typically move faster than large enterprises and have fewer procurement barriers.'
      },
      {
        point: 'Small to mid-sized EPCs and vendors delivering project work who need staffing in waves (mobilization, peak build, handover).',
        rationale: 'Project delivery organizations face recurring spikes in manpower demand and often outsource staffing to stay flexible.'
      },
      {
        point: 'Contractor firms needing overflow capacity for specific roles or locations.',
        rationale: 'Partnering with firms that already aggregate supply reduces sourcing cost and increases speed early on.'
      }
    ]
  },
  costs: {
    id: 'costs',
    title: 'Cost Structure',
    icon: 'Costs',
    items: [
      {
        point: 'Delivery labor (account + sourcing + coordination).',
        rationale: 'Main cost driver in project staffing.'
      },
      {
        point: 'Tooling (ATS/CRM, sourcing subscriptions).',
        rationale: 'Minimal tools improve speed without heavy overhead.'
      },
      {
        point: 'BD and relationship building (meetings, industry events, travel).',
        rationale: 'Relationships reduce CAC over time.'
      },
      {
        point: 'Legal templates and periodic reviews.',
        rationale: 'Low recurring cost that reduces operational risk.'
      }
    ]
  },
  revenues: {
    id: 'revenues',
    title: 'Revenue Streams',
    icon: 'Revenues',
    items: [], // Legacy field
    subsections: [
      {
        title: 'A) Proposed (Early Stage, Lean)',
        items: [
          {
            point: 'Placement fee per headcount (fixed fee).',
            rationale: 'Keeps procurement simple, fits broker-light model.'
          },
          {
            point: 'Conversion fee (contractor → full-time).',
            rationale: 'Monetizes the value of “bringing talent inside”.'
          },
          {
            point: 'Credit retainer (prepayment).',
            rationale: 'Stabilizes cashflow without feeling like a subscription.'
          }
        ]
      },
      {
        title: 'B) Alternatives (Scaling Up)',
        items: [
          {
            point: 'Fee as % of contractor rate.',
            rationale: 'Standard recruitment model for higher volume.'
          },
          {
            point: 'Markup model.',
            rationale: 'Common for contractor management services.'
          },
          {
            point: 'Monthly management fee.',
            rationale: 'Covers overhead and recurring support.'
          },
          {
            point: 'SLA tiers.',
            rationale: 'Premium pricing for guaranteed delivery speed.'
          },
          {
            point: 'Compliance/verification add-on.',
            rationale: 'Monetizes specialized administrative work.'
          }
        ]
      }
    ]
  }
};

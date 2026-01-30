
import React, { useState } from 'react';

type SubTab = 'LICENSED_LABOR' | 'B2B_BROKER' | 'MANAGED_BROKER' | 'B2B_PRIME' | 'MILESTONE';

const RevenueModel: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<SubTab>('LICENSED_LABOR');

  const subTabs = [
    { id: 'LICENSED_LABOR', label: 'Licensed Labor' },
    { id: 'B2B_BROKER', label: 'B2B Broker' },
    { id: 'MANAGED_BROKER', label: 'Managed Broker' },
    { id: 'B2B_PRIME', label: 'B2B Prime Vendor' },
    { id: 'MILESTONE', label: 'Milestone-Based' },
  ];

  const contentData: Record<string, { title: string, imageUrl: string, table: { section: string, content: string }[] }> = {
    LICENSED_LABOR: {
      title: "Licensed Labor Model",
      imageUrl: "https://lh3.googleusercontent.com/d/1wjWX2A0G-k1i73Ltug6nDiuZo8lTEMeE",
      table: [
        {
          section: "Essence (OAC role + fees)",
          content: "<strong>OAC role:</strong> OAC acts as the legal employer of the contractor and supplies labor to the client. Contractors are employees of OAC, while the client provides day-to-day direction and supervision. OAC owns HR, payroll, and compliance obligations. <br><br> <strong>Fees OAC can charge:</strong> Client pays OAC a combined amount covering employee salary plus a service / management fee (typically bundled or marked up)."
        },
        {
          section: "Pros (for OAC)",
          content: "- Strong control over workforce availability and replacement<br>- Clear, recurring revenue tied to payroll cycles<br>- Easier to embed long-term resources with clients<br>- High client stickiness once embedded<br>- Well-understood model in labor-intensive industries"
        },
        {
          section: "Cons / Limitations (for OAC)",
          content: "- High legal and licensing requirements<br>- Significant compliance and employment risk<br>- Wage cashflow risk due to payroll pre-financing<br>- High operational overhead: HR, payroll, insurance<br>- Difficult for small teams or early-stage firms without capital"
        },
        {
          section: "Works best when",
          content: "Works best when clients need long-term, stable manpower, regulatory frameworks are clear and licenses are in place, and OAC has sufficient capital and HR infrastructure to manage employment risk at scale."
        }
      ]
    },
    B2B_BROKER: {
      title: "B2B Broker Model",
      imageUrl: "https://lh3.googleusercontent.com/d/1XaYG-6b0jQ1y0LYMze6lxGY4gz-wXkyd",
      table: [
        {
          section: "Essence (OAC role + fees)",
          content: "<strong>OAC role:</strong> OAC acts purely as a broker / introducer. OAC sources and refers suitable contractors to the client but does not manage delivery, payroll, or ongoing operations. The contractual and working relationship is directly between client and contractor. <br><br> <strong>Fees OAC can charge:</strong> Referral fee or placement fee (one-off, per headcount, or limited-time percentage of contractor rate after start)."
        },
        {
          section: "Pros (for OAC)",
          content: "- Lowest legal and licensing exposure: clean B2B introduction<br>- No payroll, no cashflow risk related to wages<br>- Simple operating model, easy to execute with a very small team<br>- Fast sales cycle and low delivery overhead<br>- Easy to scale sourcing volume without heavy operations"
        },
        {
          section: "Cons / Limitations (for OAC)",
          content: "- Lowest margin among all models<br>- No control over delivery quality or contractor performance<br>- Limited differentiation: easily perceived as a standard agency<br>- Revenue is mostly one-off, weak recurring income<br>- Little protection if contractor drops after placement"
        },
        {
          section: "Works best when",
          content: "Works best when clients only need fast access to talent, roles are well-defined and low-risk, and OAC does not need to own delivery or ongoing outcomes beyond the introduction stage."
        }
      ]
    },
    MANAGED_BROKER: {
      title: "Managed Broker Model",
      imageUrl: "https://lh3.googleusercontent.com/d/1US4wTbSEbH1mWhiBLCbEtwuktiJgGdH3",
      table: [
        {
          section: "Essence (OAC role + fees)",
          content: "<strong>OAC role:</strong> OAC acts as a managed broker sitting between client and contractor. OAC does not run payroll and does not invoice wages. OAC coordinates onboarding, replacement, and ongoing reporting, while the client directly manages day-to-day work and pays contractors their rates. <br><br> <strong>Fees OAC can charge:</strong> Management fee (monthly, per headcount band, or per project). Optional add-ons include replacement handling fees or priority support fees."
        },
        {
          section: "Pros (for OAC)",
          content: "- No payroll responsibility and low legal/licensing exposure<br>- No wage cashflow risk. OAC does not pre-finance contractor payments<br>- Clear value beyond pure referral through coordination and SLA-lite services<br>- Easier to justify recurring fees than one-off placement fees<br>- More scalable than milestone-based models without full prime vendor risk"
        },
        {
          section: "Cons / Limitations (for OAC)",
          content: "- Limited margin compared to prime vendor models<br>- Lower control over daily execution and performance quality<br>- Dependency on client discipline for approvals and reporting accuracy<br>- Risk of being perceived as “overpriced broker” if value is not visible<br>- Requires consistent communication effort to avoid scope creep"
        },
        {
          section: "Works best when",
          content: "Works best when clients want operational support and risk reduction but prefer to keep direct payment and control over contractors, and when projects require ongoing coordination rather than one-off placements."
        }
      ]
    },
    B2B_PRIME: {
      title: "B2B Prime Vendor Model",
      imageUrl: "https://lh3.googleusercontent.com/d/1gET3k9Taf4xbt10prHr6R5G3-LkR7cxr",
      table: [
        {
          section: "Essence (OAC role + fees)",
          content: "<strong>OAC role:</strong> OAC acts as the prime vendor and single commercial interface for the client. OAC owns vendor management, staffing coordination, SLA delivery, and reporting. Contractors deliver work to the client, but all commercial and operational governance sits with OAC. <br><br> <strong>Fees OAC can charge:</strong> All-in bill rate paid by the client to OAC. OAC pays contractors their agreed pay rate and retains margin (markup and/or embedded management fee)."
        },
        {
          section: "Pros (for OAC)",
          content: "- Strong control over delivery, quality, and replacement<br>- Higher and more scalable margin compared to pure brokerage<br>- Clear value positioning as a service provider, not an introducer<br>- Easier to standardize pricing, SLA, and reporting across projects<br>- Enables preferred vendor or master vendor status with clients"
        },
        {
          section: "Cons / Limitations (for OAC)",
          content: "- Significant cashflow risk due to payment terms and wage pre-financing<br>- Higher legal and compliance exposure (closer to labor supply models)<br>- Greater operational complexity: payroll coordination, timesheets, invoicing<br>- Requires strong contract structure to avoid being treated as labor outsourcing<br>- Less forgiving for small teams without mature delivery operations"
        },
        {
          section: "Works best when",
          content: "Works best when the client wants a single accountable vendor, projects involve multiple contractors or waves of hiring, and OAC has sufficient financial buffer and operational maturity to manage billing, SLAs, and cashflow risk."
        }
      ]
    },
    MILESTONE: {
      title: "Milestone-Based Revenue Model",
      imageUrl: "https://lh3.googleusercontent.com/d/17sA9YWsLinlXZrPKe6l7iI3-98ipBZDt",
      table: [
        {
          section: "Essence (OAC role + fees)",
          content: "<strong>OAC role:</strong> OAC acts as the milestone owner and delivery orchestrator. OAC defines milestones, deliverables, acceptance criteria, and coordinates execution between client and contractor to ensure outcomes are achieved on time. OAC does not run payroll or employ contractors. <br><br> <strong>Fees OAC can charge:</strong> Milestone-based fee (per milestone or per project phase). Optional add-ons include coordination fees or replacement handling fees if contractually agreed."
        },
        {
          section: "Pros (for OAC)",
          content: "• No payroll responsibility and minimal labor licensing exposure<br>• No wage cashflow risk, as contractors are paid directly by the client<br>• Higher strategic positioning than a traditional staffing agency. OAC is paid for outcomes, not headcount<br>• Revenue can be decoupled from contractor rates, reducing margin pressure<br>• Feasible to pilot with a small team if milestone logic is clear"
        },
        {
          section: "Cons / Limitations (for OAC)",
          content: "• High delivery and dispute risk. OAC is accountable even without direct execution control<br>• Strong dependency on client transparency and timely decision-making<br>• Requires deep domain expertise to define “done” and enforce acceptance<br>• High coordination and communication overhead across parties<br>• Difficult to scale without standardized milestone frameworks"
        },
        {
          section: "Works best when",
          content: "Works best when project outputs are clearly measurable, acceptance criteria can be defined upfront, and the client operates with structured project governance and accountable owners."
        }
      ]
    }
  };

  const currentContent = contentData[activeSubTab];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-3xl font-bold text-[#002060] mb-6 text-center uppercase tracking-tight">
        Revenue Model Frameworks
      </h2>

      {/* Sub-navigation bar */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 pb-2 border-b border-slate-200">
        {subTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveSubTab(tab.id as SubTab)}
            className={`px-4 py-2 rounded-lg text-[10px] md:text-xs font-bold transition-all duration-200 uppercase tracking-wider ${
              activeSubTab === tab.id
                ? 'bg-[#002060] text-white shadow-md'
                : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      {currentContent && (
        <div className="space-y-12">
          {/* Revenue Model Diagram */}
          <div className="flex justify-center">
            <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-md max-w-5xl w-full">
              <img 
                src={currentContent.imageUrl} 
                className="max-w-full h-auto rounded mx-auto block" 
                alt={`${currentContent.title} Diagram`}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const errorDiv = document.createElement('div');
                    errorDiv.className = "p-20 text-center bg-slate-50 border-2 border-dashed border-slate-200 rounded-lg text-slate-400 font-medium w-full";
                    errorDiv.innerHTML = "Diagram: Image loading failed<br/><span class='text-xs opacity-75'>(The source URL may be restricted or expired)</span>";
                    parent.appendChild(errorDiv);
                  }
                }}
              />
            </div>
          </div>

          {/* Data Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xl bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#002060] text-white">
                  <th className="px-8 py-5 font-bold uppercase tracking-wider text-sm border-r border-blue-800 w-1/4">Section</th>
                  <th className="px-8 py-5 font-bold uppercase tracking-wider text-sm">Content</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {currentContent.table.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-8 font-bold text-slate-900 border-r border-slate-100 bg-slate-50/30 align-top">
                      {row.section}
                    </td>
                    <td 
                      className="px-8 py-8 text-slate-700 leading-relaxed align-top text-base md:text-lg"
                      dangerouslySetInnerHTML={{ __html: row.content }}
                    />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-8 bg-blue-50/50 rounded-2xl border border-blue-100 flex items-start gap-5 shadow-inner">
            <div className="text-blue-900 mt-1 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-blue-900 font-bold text-lg mb-1">Strategic Note</h4>
              <p className="text-blue-800 font-medium italic leading-relaxed">
                {activeSubTab === 'LICENSED_LABOR'
                  ? "The Licensed Labor model offers maximum client stickiness and recurring revenue, acting as a deep operational partner while bearing the HR and compliance load."
                  : activeSubTab === 'B2B_PRIME' 
                  ? "The Prime Vendor model maximizes commercial control and accountability, making OAC the indispensable hub of project delivery while scaling revenue through managed margins."
                  : activeSubTab === 'MANAGED_BROKER'
                  ? "The Managed Broker model provides a lightweight path to recurring revenue by owning the coordination layer without the financial complexity of payroll management."
                  : activeSubTab === 'B2B_BROKER'
                  ? "The Broker model offers the fastest route to market with minimal operational risk, focusing purely on high-velocity introduction and talent access."
                  : "The Milestone-Based model prioritizes outcome-based delivery over head-count based supply, positioning the company as a strategic project partner rather than a transactional labor vendor."}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RevenueModel;

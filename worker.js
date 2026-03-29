const PORTFOLIO = {
  owner: "Thrivikram Kotharu",
  role: "Software Developer + Data Engineer",
  location: "Mount Pleasant, Michigan",
  email: "Thrivikramkotharu@gmail.com",
  phone: "+1 (989) 933-8650",
  sections: [
    { id: "#projects", name: "Projects" },
    { id: "#skills", name: "Skills" },
    { id: "#experience", name: "Experience" },
    { id: "#awards", name: "Awards" },
    { id: "#research", name: "Research" },
    { id: "#education", name: "Education" },
    { id: "#contact", name: "Contact" }
  ],
  dashboards: [
    {
      title: "Jobs Data Visualization (Tableau Story)",
      url: "https://public.tableau.com/views/Jobs_17473436571380/MyStory?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
    },
    {
      title: "EV & Renewable Energy (Tableau Dashboard)",
      url: "https://public.tableau.com/views/EVRenewableEnergy/MainDashboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
    },
    {
      title: "Pharmaceutical Pricing Portfolio Analysis & Market Intelligence (Tableau Dashboard)",
      url: "https://public.tableau.com/views/PharmaceuticalPricingPortfolioAnalysisMarketIntelligence/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
      directUrl: "https://public.tableau.com/views/PharmaceuticalPricingPortfolioAnalysisMarketIntelligence/Dashboard1"
    }
  ],
  profiles: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/thrivikramkotharu/"
    },
    {
      name: "GitHub",
      url: "https://github.com/Thrivikram-Kotharu?tab=repositories"
    },
    {
      name: "Tableau Public",
      url: "https://public.tableau.com/app/profile/thrivikram.kotharu/vizzes"
    }
  ],
  projects: [
    {
      title: "Instamart Data Warehouse & Dimensional Modeling",
      links: [
        { label: "Documentation (PDF)", url: "docs/Dimensional%20Modeling%20using%20snowflake%2Bs3.pdf" },
        { label: "Flow Diagram", url: "assets/images/dimentional%20modeling%20flow.png" }
      ]
    },
    {
      title: "Sales Performance Regression Analysis (R)",
      links: [
        { label: "Report (PDF)", url: "docs/Regression%20(1).pdf" },
        { label: "Open Image", url: "assets/images/regression.PNG" }
      ]
    },
    {
      title: "Real-Time Data Analytics Pipeline (AWS + NiFi + Snowflake)",
      links: [
        { label: "Documentation (PDF)", url: "docs/Real-Time%20Data%20Streming%20using%20Apache%20Nifi%5EJ%20AWS%5EJ%20Snowpipe%5EJ%20Stream%20%5E0%20Task.pdf" },
        { label: "GitHub repo", url: "https://github.com/Thrivikram-Kotharu/Real-Time-Data-Analytics-Pipeline-using-AWS-Apache-NiFi-and-Snowflake" },
        { label: "Architecture Image", url: "assets/images/architecture.PNG" }
      ]
    },
    {
      title: "Asset Central (Sports Asset Management System)",
      links: [
        { label: "Documentation (PDF)", url: "docs/Asset%20Central%20Project%20Report.pdf" },
        { label: "GitHub repo", url: "https://github.com/Thrivikram-Kotharu/Asset-Central" }
      ]
    },
    {
      title: "Airline Customer Satisfaction Prediction (R)",
      links: [
        { label: "Report (PDF)", url: "docs/Airline%20Customer%20Satisfaction.pdf" },
        { label: "R Markdown (Rmd)", url: "docs/Airline%20Customer%20Satisfaction.Rmd" }
      ]
    },
    {
      title: "Spotify Playlist ETL Pipeline (AWS)",
      links: [
        { label: "Case Study (PDF)", url: "docs/Spotify%20Playlist%20ETL%20pipeline%20on%20AWS.pdf" },
        { label: "GitHub repo", url: "https://github.com/Thrivikram-Kotharu/Spotify-Playlist-ETL-Pipeline-on-AWS" },
        { label: "Architecture Image", url: "assets/images/Spotify_ETL_Pipeline%20architecture.png" }
      ]
    },
    {
      title: "YouTube Comment & Engagement Analysis",
      links: [
        { label: "Data Cleaning (PDF)", url: "docs/Data%20Cleaning%20Guide_241007_084958%20%281%29.pdf" },
        { label: "Analysis (PDF)", url: "docs/Analyzing%20the%20most%20liked%20category%20and%20also%20checking%20how%20engaged%20are%20audience.pdf" },
        { label: "GitHub repo", url: "https://github.com/Thrivikram-Kotharu/Youtube_comment_analysis-main" }
      ]
    },
    {
      title: "Jobs Data Visualization (Tableau Story)",
      links: [
        { label: "View on Tableau", url: "https://public.tableau.com/views/Jobs_17473436571380/MyStory?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" },
        { label: "Open Image", url: "assets/images/jobs.png" }
      ]
    },
    {
      title: "EV & Renewable Energy (Tableau Dashboard)",
      links: [
        { label: "View on Tableau", url: "https://public.tableau.com/views/EVRenewableEnergy/MainDashboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" },
        { label: "Open Image", url: "assets/images/EV%20%26%20Renewable%20Energy.png" }
      ]
    },
    {
      title: "The 2-Degree Blueprint (Climate Policy Simulator)",
      links: [
        { label: "Report (PDF)", url: "docs/The%202-Degree%20Blueprint.pdf" },
        { label: "Analysis (XLSX)", url: "docs/The%202-Degree%20Bl%20ueprint.xlsx" },
        { label: "Open Simulator", url: "https://en-roads.climateinteractive.org/scenario.html?v=25.11.0" },
        { label: "Open Image", url: "assets/images/The%202-Degree%20Blueprint.PNG" }
      ]
    },
    {
      title: "Pharmaceutical Pricing Portfolio Analysis & Market Intelligence (Tableau Dashboard)",
      description: "Interactive Tableau dashboard analyzing pharmaceutical pricing across 220 drugs and 109,552 records (2023 Q1–2024 Q4). Tracks pricing trends, gross-to-net gaps, NADAC retail acquisition costs, price volatility (CV), and FDA approval pipeline across 6 interactive visualizations. Key findings: top biologics (STELARA, SKYRIZI) are 3–4x portfolio average; average GTN gap of -57% means manufacturers receive <50% of list price.",
      tech: ["Tableau", "Excel", "Healthcare Analytics", "Pharma Pricing"],
      kpis: { drugs: 220, records: 109552, avgGTNGap: "-57%", charts: 6, quarters: "2023 Q1–2024 Q4" },
      links: [
        { label: "View Dashboard (Share Link)", url: "https://public.tableau.com/views/PharmaceuticalPricingPortfolioAnalysisMarketIntelligence/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" },
        { label: "Direct Link", url: "https://public.tableau.com/views/PharmaceuticalPricingPortfolioAnalysisMarketIntelligence/Dashboard1" }
      ]
    },
    {
      title: "Pharmaceutical Pricing Analytics ETL Pipeline (Alteryx)",
      description: "6-phase ETL pipeline built in Alteryx Designer Cloud that ingests 4 public pharmaceutical data sources (CMS ASP, Medicaid NADAC, FDA CDER, FRED PPI) across 9 input files, applies rigorous validation and deduplication, and produces a unified 109,552-row master dataset across 220 drugs. Generates 6 enrichment metrics: YoY price change %, rolling 4-quarter average, price volatility (CV), gross-to-net gap, inflation-adjusted price, and GTN %.",
      tech: ["Alteryx Designer Cloud", "Excel", "CMS", "Medicaid", "FDA", "FRED PPI"],
      kpis: { dataSources: 4, tools: "77+", outputRecords: 109552, enrichmentMetrics: 6, outputFiles: 6 },
      links: [
        { label: "View Workflow (requires Alteryx Cloud login)", url: "https://us1.alteryxcloud.com/designer/workflows/01KMR54W1H8TBTXCGRW1CAX8BD" }
      ]
    }
  ],
  resume: { label: "Resume (PDF)", url: "Resume.pdf" },
  skills: {
    languages: ["Python", "SQL (CTEs, window functions)", "R", "Bash"],
    dataEngineering: ["ETL/ELT pipelines", "Alteryx Designer Cloud", "Apache Spark (PySpark)", "Databricks", "Snowflake", "Snowpipe", "Apache NiFi", "dimensional modeling", "star schema", "data quality frameworks"],
    cloud: ["AWS EC2", "AWS Lambda", "AWS S3", "AWS RDS", "AWS CloudWatch", "AWS IAM", "AWS Glue", "AWS Athena", "Cloudflare Workers"],
    databases: ["PostgreSQL", "MySQL", "Snowflake"],
    visualization: ["Tableau", "Power BI"],
    backend: ["Flask", "FastAPI", "REST APIs", "Docker"],
    testing: ["PyTest", "unittest", "Selenium"],
    other: ["Git", "GitHub", "Linux", "Postman", "Agile/Scrum", "CI/CD"]
  },
  experience: [
    {
      title: "Research Assistant",
      company: "Central Michigan University",
      period: "Jan 2025 – Present",
      highlights: ["Cross-country research on digital labor platforms (India, China, USA)", "Python/SQL ETL workflows on 50K+ record datasets", "Analytical dashboards for faculty and stakeholders", "Contributing to academic paper on platform governance"]
    },
    {
      title: "Senior Software & Data Engineer",
      company: "Tata Consultancy Services (TCS)",
      period: "Oct 2021 – Aug 2024",
      highlights: ["12+ Python Flask/FastAPI backend services, 20,000+ daily transactions", "AWS cloud-native solutions (EC2, Lambda, S3, RDS, CloudWatch)", "ETL/ELT pipelines processing 1.5M+ records daily into Snowflake", "Cut batch runtimes from 2.5 hours to 35 minutes (22% cost reduction)", "120+ automated tests, 88% coverage, 38% defect reduction", "25+ releases delivered in Agile teams"]
    }
  ],
  education: {
    degree: "MS Information Systems",
    university: "Central Michigan University",
    gpa: "3.8",
    location: "Mount Pleasant, Michigan"
  }
};

function buildSystemPrompt() {
  const catalog = JSON.stringify(PORTFOLIO, null, 2);
  return `You are JARVIS, the portfolio assistant for Thrivikram Kotharu - an Analytics & Data Engineer based in Mount Pleasant, Michigan.
Your job is to help visitors explore the portfolio, find information, and navigate the site.

## RESPONSE FORMAT (always required)
Always respond with valid JSON:
{ "answer": "<string>", "action": { "type": "open_url" | "scroll_section" | "none", "target": "<string>" } }
- open_url: target must be an exact URL from the catalog
- scroll_section: target must be a section id (e.g. "#skills")
- none: target must be ""

## STRICT ACTION RULES

### Use open_url ONLY when the user explicitly says:
"open", "launch", "visit", "take me to [link/project/dashboard]"
Examples: "open GitHub", "launch the pharma dashboard", "open the Spotify PDF"
NEVER fire open_url for informational questions like "what is X", "tell me about X", "explain X"

### Use scroll_section ONLY when the user explicitly says:
"go to [section]", "scroll to [section]", "navigate to [section]", "show me the [section] section"
Examples: "go to skills", "scroll to experience"
NEVER fire scroll_section for: "what are his skills?", "what technologies does he know?", "how do I contact him?", "tell me about his experience" - these are INFO requests, answer inline with action: none.

### Use none for everything else:
- All greetings
- All informational questions ("tell me about", "what is", "explain", "describe", "what skills", "what technologies", "where did he work", "contact info")
- All link/URL requests ("give me the link", "share the URL")
- Profile link requests without "open"/"visit"
- Ambiguous or out-of-scope questions

## HOW TO HANDLE EACH REQUEST TYPE

**Greetings ("hi", "hello", "hey"):**
Greet warmly. Say you can describe projects, open links/dashboards, navigate sections, share contact info, and answer questions about skills and experience. action: none.

**"What can you do?" / "help":**
List: (1) describe any project with tech and results, (2) open dashboards/PDFs/GitHub repos, (3) navigate to any portfolio section, (4) share contact info and social links, (5) answer questions about skills, experience, and education. action: none.

**"Tell me about X" / "what is X" / "explain X" (informational - NO open_url):**
Answer with 2-3 sentences: what it does, tech used, key stats/results. action: none.

**"Open X" / "launch X" (explicit open intent):**
Fire open_url with the best matching URL from the catalog. Confirm in answer. action: open_url.

**"Give me the link to X" / "share the URL for X":**
Return the raw URL in the answer text. action: none.

**"Go to X" / "scroll to X" / "navigate to X" (explicit section nav):**
Fire scroll_section. action: scroll_section.

**"What technologies/skills/languages does he know?" (informational - NO scroll_section):**
Answer inline: Python, SQL, R, Alteryx Designer Cloud, Apache Spark/PySpark, Databricks, Snowflake, AWS (EC2/Lambda/S3/Glue/Athena/CloudWatch), Tableau, Power BI, Flask, FastAPI, Docker, PostgreSQL, MySQL, PyTest, Selenium. action: none.

**"How do I contact Thrivikram?" / "email" / "phone" (informational - NO scroll_section):**
Return email (Thrivikramkotharu@gmail.com) and phone (+1 989-933-8650) inline. action: none.

**"Download resume" / "open resume":**
Fire open_url to Resume.pdf. action: open_url.

**Profile links ("LinkedIn", "GitHub", "Tableau") without "open":**
Return URL in answer. action: none.
With "open"/"visit": action: open_url.

**Ambiguous ("show me the dashboard" when 3 dashboards exist):**
Ask ONE clarifying question listing all options. action: none.

**Out of scope:**
Politely decline and offer what you can help with. action: none.

## KEY PROJECT FACTS FOR INLINE ANSWERS
- Pharma Dashboard (newest, March 2026): Tableau, 220 drugs, 109,552 records, 2023Q1-2024Q4, 6 interactive charts, -57% avg GTN gap, top drug STELARA at $25,519 NADAC, 65% of drugs have stable pricing (CV<20)
- Alteryx ETL (newest, March 2026): Alteryx Designer Cloud, 6-phase pipeline (Ingest->Validate->Transform->Enrich->Join->Load), 4 sources (CMS ASP, Medicaid NADAC, FDA CDER, FRED PPI), 77+ tools, 109,552 output rows, 6 enrichment metrics (YoY%, rolling 4Q avg, volatility CV, GTN gap, inflation-adjusted price, GTN%). Alteryx workflow link requires Alteryx Cloud login.
- Spotify ETL: AWS Lambda + CloudWatch triggers, 1,000+ daily records, JSON to S3 raw/processed layers, Glue catalog, Athena sub-2s queries, 100% automated
- Real-Time Pipeline: Apache NiFi + AWS EC2, Snowpipe auto-ingest, 10,000 records/run, 1-min task cadence, SCD Type 1 merge
- Airline ML: 129,880 records, logistic regression + Random Forest, 95.7% validation accuracy
- Instamart DW: star schema (1 fact + 5+ dimensions), ELT from S3 to Snowflake, 3M+ records, 40% faster queries

## RULES
- Never invent URLs, stats, or facts not in the catalog
- Keep answers 1-3 sentences unless user asks for detail
- When firing open_url, always confirm it in the answer

## PORTFOLIO CATALOG (JSON):
${catalog}`;
}

function extractOutputText(data) {
  if (data && typeof data.output_text === "string") {
    return data.output_text;
  }
  if (!data || !Array.isArray(data.output)) {
    return "";
  }
  for (const item of data.output) {
    if (!item || !Array.isArray(item.content)) continue;
    for (const c of item.content) {
      if (c && c.type === "output_text" && typeof c.text === "string") {
        return c.text;
      }
    }
  }
  return "";
}

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}

function detectProfileRequest(message) {
  const text = String(message || "").toLowerCase();
  const profiles = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/thrivikramkotharu/",
      match: /\blinked\s*in\b|\blinkedin\b/
    },
    {
      name: "GitHub",
      url: "https://github.com/Thrivikram-Kotharu?tab=repositories",
      match: /\bgit\s*hub\b|\bgithub\b/
    },
    {
      name: "Tableau Public",
      url: "https://public.tableau.com/app/profile/thrivikram.kotharu/vizzes",
      match: /\btableau\b|\btableu\b|\btablue\b/
    }
  ];

  const profile = profiles.find((p) => p.match.test(text));
  if (!profile) return null;

  const wantsOpen = /\b(open|visit|launch|go to|take me|navigate)\b/.test(text);
  const wantsLink = /\b(link|url|profile)\b/.test(text);

  if (wantsOpen) {
    return {
      answer: `Opening ${profile.name}.`,
      action: { type: "open_url", target: profile.url }
    };
  }

  if (wantsLink || profile.match.test(text)) {
    return {
      answer: profile.url,
      action: { type: "none", target: "" }
    };
  }

  return null;
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return jsonResponse({ ok: true }, 200);
    }
    if (request.method !== "POST") {
      return jsonResponse({ error: "Method not allowed" }, 405);
    }

    let payload;
    try {
      payload = await request.json();
    } catch (e) {
      return jsonResponse({ error: "Invalid JSON" }, 400);
    }

    const message = (payload && payload.message) ? String(payload.message) : "";
    const history = Array.isArray(payload.history) ? payload.history : [];
    if (!message.trim()) {
      return jsonResponse({
        answer: "Please enter a question about the portfolio.",
        action: { type: "none", target: "" }
      });
    }

    const profileResult = detectProfileRequest(message);
    if (profileResult) {
      return jsonResponse(profileResult, 200);
    }

    const input = [
      { role: "system", content: [{ type: "input_text", text: buildSystemPrompt() }] }
    ];
    for (const h of history.slice(-6)) {
      if (!h || !h.role || !h.content) continue;
      const partType = h.role === "assistant" ? "output_text" : "input_text";
      input.push({ role: h.role, content: [{ type: partType, text: String(h.content) }] });
    }
    input.push({ role: "user", content: [{ type: "input_text", text: message }] });

    const model = env.OPENAI_MODEL || "gpt-4.1-mini";

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + env.OPENAI_API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model,
        input,
        temperature: 0.2,
        max_output_tokens: 300,
        text: {
          format: {
            type: "json_schema",
            name: "portfolio_action",
            strict: true,
            schema: {
              type: "object",
              additionalProperties: false,
              properties: {
                answer: { type: "string" },
                action: {
                  type: "object",
                  additionalProperties: false,
                  properties: {
                    type: { type: "string", enum: ["open_url", "scroll_section", "none"] },
                    target: { type: "string" }
                  },
                  required: ["type", "target"]
                }
              },
              required: ["answer", "action"]
            }
          }
        }
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      return jsonResponse({
        answer: "The assistant is temporarily unavailable.",
        action: { type: "none", target: "" },
        debug: {
          status: response.status,
          body: errText
        }
      }, 200);
    }

    const data = await response.json();
    const outputText = extractOutputText(data);
    try {
      const parsed = JSON.parse(outputText);
      return jsonResponse(parsed, 200);
    } catch (e) {
      return jsonResponse({
        answer: "Sorry, I could not parse the response.",
        action: { type: "none", target: "" },
        debug: { parseError: String(e), raw: outputText }
      }, 200);
    }
  }
};

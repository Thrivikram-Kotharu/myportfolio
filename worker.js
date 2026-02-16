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
        { label: "Documentation (PDF)", url: "Dimensional%20Modeling%20using%20snowflake%2Bs3.pdf" },
        { label: "Flow Diagram", url: "dimentional%20modeling%20flow.png" }
      ]
    },
    {
      title: "Sales Performance Regression Analysis (R)",
      links: [
        { label: "Report (PDF)", url: "Regression%20(1).pdf" },
        { label: "Open Image", url: "regression.PNG" }
      ]
    },
    {
      title: "Real-Time Data Analytics Pipeline (AWS + NiFi + Snowflake)",
      links: [
        { label: "Documentation (PDF)", url: "Real-Time%20Data%20Streming%20using%20Apache%20Nifi%5EJ%20AWS%5EJ%20Snowpipe%5EJ%20Stream%20%5E0%20Task.pdf" },
        { label: "GitHub repo", url: "https://github.com/Thrivikram-Kotharu/Real-Time-Data-Analytics-Pipeline-using-AWS-Apache-NiFi-and-Snowflake" },
        { label: "Architecture Image", url: "architecture.PNG" }
      ]
    },
    {
      title: "Asset Central (Sports Asset Management System)",
      links: [
        { label: "Documentation (PDF)", url: "Asset%20Central%20Project%20Report.pdf" },
        { label: "GitHub repo", url: "https://github.com/Thrivikram-Kotharu/Asset-Central" }
      ]
    },
    {
      title: "Airline Customer Satisfaction Prediction (R)",
      links: [
        { label: "Report (PDF)", url: "Airline%20Customer%20Satisfaction.pdf" },
        { label: "R Markdown (Rmd)", url: "Airline%20Customer%20Satisfaction.Rmd" }
      ]
    },
    {
      title: "Spotify Playlist ETL Pipeline (AWS)",
      links: [
        { label: "Case Study (PDF)", url: "Spotify%20Playlist%20ETL%20pipeline%20on%20AWS.pdf" },
        { label: "GitHub repo", url: "https://github.com/Thrivikram-Kotharu/Spotify-Playlist-ETL-Pipeline-on-AWS" },
        { label: "Architecture Image", url: "Spotify_ETL_Pipeline%20architecture.png" }
      ]
    },
    {
      title: "YouTube Comment & Engagement Analysis",
      links: [
        { label: "Data Cleaning (PDF)", url: "Data%20Cleaning%20Guide_241007_084958%20%281%29.pdf" },
        { label: "Analysis (PDF)", url: "Analyzing%20the%20most%20liked%20category%20and%20also%20checking%20how%20engaged%20are%20audience.pdf" },
        { label: "GitHub repo", url: "https://github.com/Thrivikram-Kotharu/Youtube_comment_analysis-main" }
      ]
    },
    {
      title: "Jobs Data Visualization (Tableau Story)",
      links: [
        { label: "View on Tableau", url: "https://public.tableau.com/views/Jobs_17473436571380/MyStory?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" },
        { label: "Open Image", url: "jobs.png" }
      ]
    },
    {
      title: "EV & Renewable Energy (Tableau Dashboard)",
      links: [
        { label: "View on Tableau", url: "https://public.tableau.com/views/EVRenewableEnergy/MainDashboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" },
        { label: "Open Image", url: "EV%20%26%20Renewable%20Energy.png" }
      ]
    },
    {
      title: "The 2-Degree Blueprint (Climate Policy Simulator)",
      links: [
        { label: "Report (PDF)", url: "The%202-Degree%20Blueprint.pdf" },
        { label: "Analysis (XLSX)", url: "The%202-Degree%20Bl%20ueprint.xlsx" },
        { label: "Open Simulator", url: "https://en-roads.climateinteractive.org/scenario.html?v=25.11.0" },
        { label: "Open Image", url: "The%202-Degree%20Blueprint.PNG" }
      ]
    }
  ],
  resume: { label: "Resume (PDF)", url: "Resume.pdf" }
};

function buildSystemPrompt() {
  return [
    "You are the portfolio assistant for Thrivikram Kotharu.",
    "Answer questions using only the portfolio data provided.",
    "If the user asks to open a project, dashboard, or a specific asset, select the best matching link.",
    "If the user asks to open LinkedIn, GitHub, or Tableau Public, use the matching profile URL from the catalog.",
    "If the user asks for a link/URL (for example: 'share linkedin link', 'give github link', 'tableau link'), return only the raw URL in answer and set action to none.",
    "If the user asks to navigate to a section, respond with a scroll_section action using the section id.",
    "If ambiguous, ask a short clarifying question and set action to none.",
    "",
    "Allowed actions:",
    "- open_url (target must be one of the URLs in the catalog)",
    "- scroll_section (target must be one of the section ids)",
    "- none (target should be an empty string)",
    "",
    "Catalog (JSON):",
    JSON.stringify(PORTFOLIO)
  ].join("\n");
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

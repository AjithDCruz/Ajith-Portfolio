const https = require("https");
 
exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
 
  let message;
  try {
    message = JSON.parse(event.body).message;
  } catch (e) {
    return { statusCode: 400, body: JSON.stringify({ reply: "Invalid request body." }) };
  }
 
  const RESUME_CONTEXT = `You are Ajith R's AI portfolio assistant. Answer questions warmly and concisely about Ajith using only the information below.
 
PERSONAL:
Name: Ajith R | Role: QA Automation Engineer | Location: Coimbatore, India
Email: ajithdcruz5@gmail.com | Experience: 3.9 years | Current Company: Wipro (Sep 2022 – Present)
Education: B.E. Computer Science, Hindusthan College of Engineering and Technology (2018-2022), CGPA 9.26/10
 
TECHNICAL SKILLS:
- Automation: Selenium WebDriver, Playwright, TestNG, Cucumber BDD
- Programming: Core Java (OOP, Collections, Exception Handling), SQL
- API Testing: REST Assured, REST API Validation
- Frameworks: Page Object Model (POM), BDD (Cucumber), SDLC, STLC
- DevOps: Git, Jenkins, Maven | Tools: JIRA, IntelliJ IDEA, VS Code, Eclipse, Linux
- Domain: Banking (transaction monitoring, validation), ECM UI
 
KEY ACHIEVEMENTS:
1. Reduced regression execution time by 50% (4 hours to 2 hours)
2. Automated complex transaction validation in ECM UI
3. Developed pagination validation logic in Selenium
 
AWARDS: Gladiator Award, Atlas Award (Walk of Fame Q1 FY26), Habit Flagbearer, Inspiring Performance Award
CERTIFICATIONS (10): AZ-900, AI-900, AZ-204, AI-102, AZ-400, GH-900, GH-200, GH-300, GH-500, GH-100
AVAILABILITY: Open to new opportunities. Contact: ajithdcruz5@gmail.com
Keep replies concise (2-4 sentences). Be enthusiastic but professional.`;
 
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ reply: "API key not configured." }) };
  }
 
  const body = JSON.stringify({
    model: "claude-sonnet-4-6",
    max_tokens: 300,
    system: RESUME_CONTEXT,
    messages: [{ role: "user", content: message }],
  });
 
  return new Promise((resolve) => {
    const req = https.request(
      {
        hostname: "api.anthropic.com",
        path: "/v1/messages",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
          "Content-Length": Buffer.byteLength(body),
        },
      },
      (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          try {
            const parsed = JSON.parse(data);
            // If Anthropic returned an error, send it back so we can see it
            if (parsed.error) {
              resolve({
                statusCode: 200,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ reply: "Anthropic error: " + parsed.error.message }),
              });
              return;
            }
            const reply = parsed.content?.[0]?.text || "No response from AI.";
            resolve({
              statusCode: 200,
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ reply }),
            });
          } catch (e) {
            resolve({
              statusCode: 200,
              body: JSON.stringify({ reply: "Parse error: " + data.substring(0, 200) }),
            });
          }
        });
      }
    );
    req.on("error", (e) => {
      resolve({
        statusCode: 200,
        body: JSON.stringify({ reply: "Network error: " + e.message }),
      });
    });
    req.write(body);
    req.end();
  });
};
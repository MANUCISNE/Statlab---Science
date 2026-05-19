<div align="center">

# 🧪 StatLab

### *Automated statistical analysis powered by AI*

**Upload a spreadsheet. Pick a test. Get publication-style results in seconds.**

[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![Groq](https://img.shields.io/badge/Powered_by-Groq_Llama_3.3-orange?style=for-the-badge)](https://groq.com)
[![React](https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](#-license)

[Live Demo](#) · [Features](#-features) · [Quick Start](#-quick-start) · [Deploy](#-deploy-on-vercel) · [Caveats](#%EF%B8%8F-academic-disclaimer)

---

</div>

## 🎯 What is StatLab?

StatLab is a zero-friction statistical analysis tool. Drop in an Excel spreadsheet, choose a test (or let AI pick one for you), and get back a **complete analysis** — descriptive statistics, assumption checks, effect sizes, interactive charts, and a plain-English interpretation.

It's built for **researchers, students, and curious analysts** who need quick answers without firing up R or SPSS.

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   📊 Excel file  →  🧠 AI analyzes  →  📈 Results + charts │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 📝 Ready-to-use Excel templates
Every statistical test comes with a **pre-formatted .xlsx template** — correct column names, example data, and a built-in instructions sheet. No more guessing how to structure your data.

</td>
<td width="50%">

### 🤖 AI-assisted test selection
Not sure which test to use? Upload your data, **describe your research question in plain English**, and the AI recommends the right test — with rationale, alternatives, and data quality warnings.

</td>
</tr>
<tr>
<td>

### 📐 Rigorous assumption checking
StatLab checks normality, variance homogeneity, and other assumptions. If they're violated, it **automatically suggests the non-parametric alternative** (Mann-Whitney, Wilcoxon, Spearman, Fisher's exact).

</td>
<td>

### 📊 Beautiful interactive charts
Bar charts, scatter plots with trendlines, histograms, box-plot summaries — rendered with [Recharts](https://recharts.org/) and a custom dark theme that doesn't look like every other AI tool.

</td>
</tr>
<tr>
<td>

### 🔬 Effect sizes included
Goes beyond p-values: Cohen's *d*, eta-squared (η²), correlation *r*, odds ratios — because statistical significance ≠ practical significance.

</td>
<td>

### 💸 100% free to deploy
Uses **Groq's free tier** (Llama 3.3 70B) — no credit card, no usage limits for personal use, no Anthropic/OpenAI subscription needed.

</td>
</tr>
</table>

---

## 🧮 Available tests

| Test | Family | When to use |
|---|---|---|
| **Independent t-test** | Mean comparison | 2 independent groups, continuous outcome |
| **Paired t-test** | Mean comparison | Same subjects measured twice (before/after) |
| **One-way ANOVA** | Mean comparison | 3+ independent groups (with Tukey post-hoc) |
| **Linear regression** | Variable relationships | Predict continuous Y from one or more X |
| **Correlation** | Variable relationships | Strength/direction of association (Pearson/Spearman) |
| **Chi-square** | Categorical variables | Association between two categorical variables |
| **Descriptive statistics** | Summary | Mean, median, SD, quartiles, normality tests |

---

## 🚀 Quick Start

### What you'll need
- A free [GitHub](https://github.com/signup) account
- A free [Vercel](https://vercel.com/signup) account (sign in with GitHub)
- A free [Groq](https://console.groq.com) account (sign in with Google)

### Estimated time
**~10 minutes** from zero to live app. ⏱️

---

## 📦 Deploy on Vercel

### 1️⃣ Create the GitHub repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `statlab` (or any name you like)
3. Set as **Public**
4. Check **Add a README file**
5. Click **Create repository**

### 2️⃣ Upload the project files

Click **"Add file" → "Upload files"** and drag in the 6 source files. **Crucial step:** while uploading, edit the path of three files to put them in subfolders:

```
📂 your-repo/
├── 📄 package.json          ← root
├── 📄 vite.config.js        ← root
├── 📄 index.html            ← root
├── 📄 README.md             ← root
├── 📂 api/
│   └── 📄 claude.js         ← rename path to: api/claude.js
└── 📂 src/
    ├── 📄 main.jsx          ← rename path to: src/main.jsx
    └── 📄 App.jsx           ← rename path to: src/App.jsx
```

> 💡 **How to set subfolders during upload:** In GitHub's file upload form, click on the file name and type `src/App.jsx` (with the slash). GitHub creates the folder automatically.

Click **Commit changes**.

### 3️⃣ Get your free Groq API key

1. Go to [console.groq.com](https://console.groq.com)
2. Sign up with Google, GitHub, or email — **no credit card required** 🎉
3. Navigate to **API Keys** in the sidebar
4. Click **Create API Key**
5. Give it a name (e.g. `statlab`)
6. **Copy the key** — it starts with `gsk_...` and is only shown once

### 4️⃣ Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **Import** next to your `statlab` repository
3. **Leave all build settings as default** — Vercel auto-detects Vite ✨
4. Expand **Environment Variables** and add:

   | Key | Value |
   |-----|-------|
   | `GROQ_API_KEY` | Your Groq key from step 3 |

5. Click **Deploy**
6. Wait ~2 minutes ☕
7. Your app is live at `https://statlab-xxx.vercel.app` 🎊

---

## 🧪 Try it out

Once your deployment is live:

1. Click any test card (e.g. **Independent t-test**)
2. Hit **Download .xlsx template**
3. Open the file in Excel/Numbers/Google Sheets:
   - Read the **Instructions** tab
   - Go to the **Data** tab, delete the example rows, paste your own data
   - Save
4. Back in StatLab: **Drop the file** in the upload zone
5. Map your columns to the test variables
6. Click **Run analysis** ✨

You'll see:
- 📊 Key metrics (p-value, test statistic, effect size) up top
- 📝 A plain-English interpretation
- 📋 Descriptive summary table
- ✅ Assumption check report
- 📈 Visualizations

---

## 🏗️ Project structure

```
statlab/
├── api/
│   └── claude.js          # Vercel serverless function (Groq proxy)
├── src/
│   ├── App.jsx            # Main app component (all UI + logic)
│   └── main.jsx           # React entry point
├── index.html             # HTML shell
├── package.json           # Dependencies
├── vite.config.js         # Vite config
└── README.md              # You are here
```

### Tech stack

- **Frontend:** React 18, Vite 5
- **Charts:** [Recharts](https://recharts.org/)
- **Excel I/O:** [SheetJS (xlsx)](https://sheetjs.com/)
- **Icons:** [Lucide](https://lucide.dev/)
- **Fonts:** Fraunces (serif), Inter Tight (sans), JetBrains Mono (mono)
- **AI:** Llama 3.3 70B via [Groq](https://groq.com/)
- **Hosting:** Vercel (frontend + serverless function)

### Architecture

```
┌─────────────┐       ┌──────────────────┐       ┌──────────────┐
│             │       │                  │       │              │
│   Browser   │──────▶│ Vercel /api/     │──────▶│  Groq API    │
│  (React)    │       │ claude.js (proxy)│       │  (Llama 3.3) │
│             │◀──────│                  │◀──────│              │
└─────────────┘       └──────────────────┘       └──────────────┘
                              ▲
                              │
                       GROQ_API_KEY
                       (env variable,
                        never exposed
                        to browser)
```

The API key lives only on the server. Browsers never see it.

---

## ⚠️ Academic disclaimer

> **StatLab is not a replacement for traditional statistical software.**

All calculations are performed by a large language model (Llama 3.3 70B). While the model is remarkably accurate for common tests, you should be aware of important caveats:

| ✅ Good for | ❌ Not appropriate for |
|------|--------|
| Exploratory data analysis | Peer-reviewed publications |
| Teaching and learning | Clinical decision-making |
| Quickly checking a hypothesis | Regulatory submissions |
| Generating draft interpretations | Replacing a trained statistician |
| Workshop demos | High-stakes inferences |

**For formal publication, always validate the results in R, SPSS, SAS, or Python's `scipy.stats` / `statsmodels` before reporting.** Use StatLab to **explore**, then confirm in a deterministic environment.

The AI can occasionally make computational errors on complex models (multivariate regression with interactions, repeated-measures designs, etc.). Treat numerical outputs as a **first draft**, not a final answer.

---

## 💡 Tips & best practices

<details>
<summary><b>📂 How should I structure my Excel file?</b></summary>

- First row = column headers
- Each row = one observation (one subject, one trial, one record)
- Avoid merged cells, color-coding, or fancy formatting
- Missing data: leave blank (don't write "N/A", "—", or "?")
- Use the **provided templates** for the cleanest experience

</details>

<details>
<summary><b>🤔 The AI picked a weird test. What do I do?</b></summary>

1. Try rewriting your research question with more specifics
2. Use the **"Try again"** button to ask for another recommendation
3. Switch to **manual mode** ("I know which test to use") and pick the test yourself
4. Look at the **Alternatives to consider** section — often the right test is there

</details>

<details>
<summary><b>🐌 Groq is rate-limiting me!</b></summary>

The free tier gives ~14,400 requests/day and ~30 requests/minute. If you hit the limit:
- Wait 30 seconds and try again
- For heavy use, [upgrade to a paid Groq plan](https://groq.com/pricing) (still way cheaper than Anthropic/OpenAI)

</details>

<details>
<summary><b>🔐 Is my data sent to anyone?</b></summary>

Yes — your data is sent to Groq's API to be analyzed. Groq's privacy policy is at [groq.com/privacy-policy](https://groq.com/privacy-policy). If your data is highly sensitive (PHI, financial records, etc.), do not use this tool. Run your analysis in a local R/Python environment instead.

</details>

<details>
<summary><b>🛠️ Can I run this locally instead of deploying?</b></summary>

Yes:
```bash
git clone https://github.com/YOUR_USERNAME/statlab.git
cd statlab
npm install
echo "GROQ_API_KEY=gsk_your_key_here" > .env
npm run dev
```

Then open `http://localhost:5173`. You'll need [Node.js 18+](https://nodejs.org/).

⚠️ Local mode requires running `vercel dev` (install with `npm i -g vercel`) instead of `npm run dev` to make the `/api/claude.js` serverless function work.

</details>

---

## 🗺️ Roadmap

Ideas for future versions (PRs welcome!):

- [ ] **Two-way ANOVA** with interaction terms
- [ ] **Repeated-measures ANOVA**
- [ ] **Logistic regression** (binary outcomes)
- [ ] **Survival analysis** (Kaplan-Meier, Cox)
- [ ] **Export to PDF** (full report with charts)
- [ ] **Export R/Python code** that reproduces the analysis
- [ ] **Bilingual UI** (EN / PT-BR toggle)
- [ ] **Power analysis** calculator
- [ ] **Bayesian alternatives** for common tests
- [ ] **Multi-file comparison** (run same test on multiple datasets)

---

## 🤝 Contributing

Found a bug? Want to add a test? PRs are welcome.

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/amazing-test`)
3. Commit your changes (`git commit -m 'Add Mann-Whitney U test'`)
4. Push to the branch (`git push origin feature/amazing-test`)
5. Open a Pull Request

---

## 📝 License

MIT — free for personal and commercial use. See [LICENSE](LICENSE) for the full text.

---

## 🙏 Acknowledgments

- **[Groq](https://groq.com/)** for free, blazingly fast inference
- **[Meta](https://ai.meta.com/llama/)** for open-weighting Llama 3.3
- **[Vercel](https://vercel.com/)** for the smoothest deploy experience on the web
- **[SheetJS](https://sheetjs.com/)** for making Excel I/O actually pleasant
- **[Recharts](https://recharts.org/)** for charts that just work
- Inspired by [r-book.vercel.app](https://r-book.vercel.app/)

---

<div align="center">

**Built with ☕ and a healthy skepticism of p-values.**

*If StatLab saved you time, ⭐ star the repo and share with a fellow researcher.*

</div>

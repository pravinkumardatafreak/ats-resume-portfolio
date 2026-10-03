---
name: ats-resume-guidelines
description: >-
  Comprehensive guidelines, checklists, formatting standards, and do's & don'ts for crafting
  high-scoring (90+ / 7+/10 selected), 1-page ATS-friendly Data Science, Machine Learning, Quant, and AI resumes
  based on the Zen/GUVI Format 1 benchmark and the Navaneethan Executive Benchmark (Navy #1a365d, 7+/10 Selected Standard).
---

# ATS Resume Guidelines & Optimization Engine

This skill provides an authoritative standard for building, auditing, and formatting 1-page, high-impact resumes tailored for **Data Science**, **Machine Learning**, **Quantitative Finance**, and **Generative AI** roles. It incorporates the canonical **Zen/GUVI Format 1** benchmark (scoring 90+ on ATS parsers) and the **Navaneethan Executive Benchmark** (selected and rated **7+/10** by screening panels), while establishing strict guardrails against the common rejection patterns that disqualify applicants.

---

## 1. Core Principles of ATS-Friendly Engineering

1. **Strict 1-Page A4 Budgeting**:
   - Resumes for entry-level, junior, or career-transitioning candidates must **never exceed 1 page**.
   - Two-page resumes are only acceptable for senior professionals with 10+ years of domain experience.
   - Use strict CSS/print margins: `@page { size: A4 portrait; margin: 4.5mm 7.5mm 4.5mm 7.5mm; }`.

2. **Single-Column Linear Hierarchy**:
   - Modern Applicant Tracking Systems (Workday, Taleo, Greenhouse, iCIMS, Lever) parse documents linearly (left-to-right, top-to-bottom).
   - **Avoid multi-column layouts, sidebars, floating text boxes, and tables**. Multi-column designs cause text from disparate sections to interleave and scramble during OCR/parsing.

3. **High-Contrast Typography & Sizing Standards**:
   - Use clean, standard sans-serif typefaces (*Inter*, *Roboto*, *Helvetica*, *Arial*).
   - **Section Headings**: **MUST BE MORE THAN 12pt** (strictly **12.2pt – 14pt**). Never drop section headings below 12pt.
   - **Body Text**: Maintain font sizes strictly between **9.5pt – 10.5pt** for high-density 1-page fit while preserving 100% legibility.
   - **Candidate Name Header**: **18pt – 20pt** bold uppercase.
   - **Color Accents**: Pure white background (`#FFFFFF`) with deep black/charcoal body text (`#1f2937` / `#000000`). For headers and section titles, use Executive Navy Blue (`#1a365d`), which is 100% ATS OCR safe and delivers an executive aesthetic.

4. **Zero Fluff & Forbidden Buzzwords**:
   - Eliminate vague, self-aggrandizing descriptors (*"fast learner"*, *"hardworking"*, *"problem solver"*, *"proven track record"*).
   - Replace subjective claims with objective, quantifiable technical metrics (*Google X-Y-Z formula*).

---

## 2. Navaneethan Executive Benchmark (7+/10 Selected Standard)

The **Navaneethan Format** represents an approved, selected standard that successfully achieved **> 7/10** on technical screening benchmarks.

### Structural Flow:
```
[1. HEADER]                  -> Name (19pt Navy Bold), Role (10.5pt Navy Bold), 2-Line Contact Bar with Postal Code, Navy Divider Line (1.8px)
[2. PROFESSIONAL SUMMARY]    -> 3-4 Sentences: Identity, Transition, Key Model Metrics, Core Stack (Dictionary-friendly terms)
[3. TECHNICAL SKILLS]        -> Positioned directly under Summary to front-load matching ATS keywords (2-col key-value)
[4. PROJECTS]                -> EXACTLY 3 Projects: Single-line header (Title on Left, Tech Stack on Right) + 3 Bullets
[5. PROFESSIONAL EXPERIENCE] -> Title & Company (Left), Date (FAR RIGHT SIDE), Quantifiable business & operational bullets
[6. EDUCATION]               -> 2-Line format per degree: Degree (Left) & Year (FAR RIGHT SIDE); College & Honors (Line 2)
[7. CERTIFICATIONS]          -> Clean, single continuous comma-separated block
```

### Why Navaneethan's Format Scored High:
1. **Front-Loaded Technical Skills**: Placing `TECHNICAL SKILLS` immediately below `PROFESSIONAL SUMMARY` ensures parsing engines and recruiters encounter core hard skills (Python, SQL, PyTorch, Transformers) within the top 30% of the document.
2. **Right-Aligned Project Tech Stacks**: Putting the tech stack on the far right of the project title (`display: flex; justify-content: space-between; align-items: baseline;`) saves 1 full vertical line per project (3 lines saved per resume), allowing body text to stay at a readable `9.5pt – 9.6pt` without spilling over onto page 2.
3. **Executive Navy Blue Accent (`#1a365d`)**: Provides polished visual hierarchy, distinguishing section headers without using heavy underlines or colored boxes that interfere with OCR.
4. **Clean Whitespace Hierarchy**: Uses generous margin rhythm between sections rather than horizontal border dividers between every section.

---

## 3. Mandatory Reviewer Guardrails & Quality Engine

The following rules resolve the critical automated reviewer and panel penalties (including 4/10 failure modes and automated ATS spellchecker audits):

| Reviewer Finding | Disqualified Anti-Pattern | Mandatory Enforced Standard (90+ ATS Score) |
| :--- | :--- | :--- |
| **1. Resume Font Size** | Headings < 12pt or body text tiny / unreadable. | **Headings MUST be > 12pt** (12.2pt–14pt). Body text strictly **9.5pt–10.5pt**. |
| **2. Year / Date Placement** | Dates placed inline on the left next to titles with pipes: `Title \| Jan 2026 – June 2026`. | **Year / Dates MUST be on the FAR RIGHT SIDE** via `display: flex; justify-content: space-between;`. |
| **3. Project Count** | Listing 4, 5, or more projects in the main section. | **EXACTLY 3 featured projects only** under Projects. |
| **4. Other Verified Projects** | Bloating the resume with a secondary 6-item "ADDITIONAL PROJECTS" section. | Mention other verified projects in a **single concise line** with GitHub repository reference. |
| **5. Institution Naming** | Writing `"HCL GUVI (Zen Class)"`. | **REMOVE "Zen Class" completely**. Write `"HCL GUVI"` or `"HCL GUVI, IIT Madras Research Park Incubated"`. |
| **6. Certifications Format** | 6 separate vertical bullet points taking 6 lines. | **Certifications in a single line or using commas** (comma-separated text). |
| **7. Location Postal Code** | Missing postal/zip code (e.g., `Kurinjipadi, Tamil Nadu`). | **Always include PIN/ZIP code**: `Kurinjipadi, Tamil Nadu – 607303` for ATS geo-proximity indexing. |
| **8. Dictionary Unknown Words** | Using raw algorithm abbreviations like `RevIN`, `ElasticNet`, `LLM-as-a-Judge`. | **Expand/pair with standard English**: `Reversible Instance Normalization (RevIN)`, `Elastic Net`, `Critic LLM evaluation gates`. |
| **9. Spelling / Fused Terms** | Fused words and math symbols: `(EffNet+ResNet)`, `Multi TaskElastic Net`, `Group-Lasso`. | **Standard readable spelling**: `EfficientNet and ResNet`, `Multi-Task Elastic Net`, `Group Lasso Regularization`. |
| **10. Verb Repetition** | Repeating the same action verb (e.g. `Engineered` 5 times, `Deployed` 3 times). | **Rotate action verbs**: Replace with `Launched`, `Published`, `Delivered`, `Designed`, `Created`, `Constructed`, `Formulated`, `Implemented`. Max $\le 1$ repetition. |
| **11. Grammar & Articles** | Dropping indefinite articles: *"Developed sequence forecasting pipeline..."* | **Include articles**: *"Developed **a** sequence forecasting pipeline..."*, *"Built **a** Random Forest model..."*. |
| **12. Experience Quantifiability** | Bullets lacking business/operational context. | **Include operational & business KPIs**: *"achieving 99.8% feature completeness"*, *"reducing turnaround time by 75%"*, *"cutting policy review cycles to sub-15s"*, *"replacing $500+ lab assay delays"*. |
| **13. Chronology & Date Integrity** | Listing future dates (e.g. `2026` for past events), creating ATS parser rejection. | **Strictly past chronological dates**: Standardized `Month YYYY` format (`Jan 2024 – Feb 2024`, `Aug 2023 – May 2024`, `Aug 2017 – May 2021`). |
| **14. Cloud & BI Tool Keywords** | Omitting foundational cloud, MLOps, and BI terms (`AWS`, `Azure`, `GCP`, `CI/CD`, `Power BI`, `Tableau`, `Agile`). | **Strategic keyword grounding**: Embed verified cloud, MLOps (`CI/CD`), BI, and Agile practices across categorized skills and experience bullets. |
| **15. Internship Company Context** | Ambiguous company names without domain context (e.g., plain `"Internship Studio"`). | **Add domain clarification**: `"Internship Studio (Analytics & EdTech)"` / `"(FinTech & Analytics)"` / `"(AI & EdTech)"`. |

---

## 4. Detailed Section-by-Section Rules

### A. Header & Contact Information
- **Format**:
  - **Full Name**: Bold, centered, uppercase (`19pt – 20pt`), Navy Blue (`#1a365d`).
  - **Target Job Title**: Centered, uppercase (`10.5pt`), Navy Blue (`#1a365d`).
  - **Contact Rows with Explicit Labels** (Enables 100% accurate entity extraction across all ATS parsers):
    - Row 1: `Location: Kurinjipadi, Tamil Nadu – 607303 | Phone: +91 88259 38327 | Email: pravinrajavel@gmail.com`
    - Row 2: `LinkedIn: linkedin.com/in/... | GitHub: github.com/...`
  - **Divider**: Solid horizontal divider: `border-bottom: 1.8px solid #1a365d; margin-bottom: 5px;`.

### B. Professional Summary / Profile
- **Length**: Exactly 3 to 4 concise, impactful sentences (approx. 50–70 words).
- **Structure**:
  1. *Sentence 1 (Identity & Transition)*: State core discipline and engineering analytical foundation.
  2. *Sentence 2 (Core Technical Scope)*: Outline primary specializations (predictive modeling, deep learning, computer vision, sequence forecasting).
  3. *Sentence 3 (Hero Achievements & Metrics)*: Mention 2–3 high-rigor achievements with specific metrics; **always spell out acronyms on first use** (e.g., *"2.06% Mean Absolute Percentage Error (MAPE) with Reversible Instance Normalization (RevIN)"*).
  4. *Sentence 4 (Tooling & Goal)*: List core production tools (Python, PyTorch, SQL, Streamlit) and target impact.
- **Strict Prohibition**: Never use *"seeking an entry-level opportunity to learn"* or generic platitudes like *"enthusiastic team player"*.

### C. Skills Architecture (Formal 'SKILLS' Header & Semantic List)
Use a distinct formal section heading: `<h2 class="heading-92">SKILLS</h2>`.
Render as a semantic bulleted list (`<ul class="skills-list-92"><li>...</li></ul>`) with 2-column key-value visual alignment:
- **Programming:** *Python, SQL, SQLite, SQLAlchemy, REST APIs*
- **Machine Learning:** *Scikit-learn, Random Forest, XGBoost, Multi-Task Elastic Net, K-Means, PCA, Feature Engineering*
- **Deep Learning:** *PyTorch, CNN, PatchTST, LSTMs, Transformers, Swin Transformer Vision, OpenCV*
- **Generative AI:** *Groq LLaMA 3.3 70B, Multi-Agent RAG, LangChain, LLM Evaluation Gates, DistilRoBERTa*
- **Tools & Stats:** *Pandas, NumPy, SciPy, Walk-Forward Validation, Streamlit, Plotly, Git, GitHub*

### D. Universal Bullet Construction Formula
Every bullet across Projects and Professional Experience must strictly adhere to the 4-part **Impact Equation**:
$$\text{[Strong Action Verb]} + \text{[Technical Task]} + \text{\textbf{[Exact Number / Metric]}} + \text{[Result / Impact]}$$

* **[Strong Action Verb]:** High-signal, non-repeated, past-tense engineering verb (*Architected*, *Orchestrated*, *Formulated*, *Extracted*, *Trained*, *Designed*, *Built*, *Delivered*, *Integrated*). Never repeat an action verb $\ge 2$ times.
* **[Technical Task]:** The specific technical or algorithmic operation grounded directly in the **GitHub commit history and codebase reality** (e.g., *centralized PyTorch sequence forecasting pipeline*, *Multi-Agent Retrieval-Augmented Generation (RAG)*, *dual-backbone spatial feature extraction*, *8-way morphological flood routing on 30m DEM*).
* **[Exact Number / Metric]:** Empirical numerical validation in bold (e.g., **2.06% MAPE**, **55.21 Out-of-Fold Weighted EMD**, **R² of 0.9979 and MAE of 3.78 kcal**, **0.6782 Dice (+26.7%)**, **95.98% accuracy**, **$0.0087/run**, **99.8% completeness**, **75% reduction**).
* **[Result / Impact]:** Concrete system outcome (e.g., *eliminating non-stationary drift*, *overcoming small-sample regression-to-the-mean trap*, *mitigating hallucinations via deterministic self-correction passes*, *shortening turnaround time by 75%*).

### E. Dual Keyword Matching & Acronym Expansion Standard
To satisfy varying ATS parser heuristics and recruiter queries, **always write out both full terms and standard acronyms at first mention**:
- *Natural Language Processing (NLP)*
- *Multi-Agent Retrieval-Augmented Generation (RAG)*
- *Exploratory Data Analysis (EDA)*
- *Convolutional Neural Networks (CNN)*
- *Reversible Instance Normalization (RevIN)*
- *Mean Absolute Percentage Error (MAPE)*
- *Mean Absolute Error (MAE)*
- *Earth Mover's Distance (EMD)*
- *Median Absolute Error (MedAE)*
- *Large Language Model (LLM)*
- *Walk-Forward Validation (WFV)*
- *Value-at-Risk (VaR)*

### F. Projects (The Core Differentiator)
- **Quantity**: Strictly **EXACTLY 3 PROJECTS** relevant to the target role.
- **Header Layout**: Single line with Project Title on left, Tech Stack on right:
  ```html
  <div class="project-header-nav">
    <span class="item-title-92">CryptoCast: Multi-Horizon Deep Learning Sequence Forecasting</span>
    <span class="project-tech-nav">Python, PyTorch, PatchTST, LSTM, Streamlit</span>
  </div>
  ```
- **Bullet Count**: Exactly **3 high-impact bullets** per project conforming to the Universal Bullet Formula:
  - *Bullet 1 (Architecture & Ingestion Scope)*: Data scale, pipeline design, and validation baseline.
  - *Bullet 2 (Algorithmic Innovation & Hero Metric)*: Core deep learning or optimization breakthrough with bold exact metric.
  - *Bullet 3 (Feature Engineering & Deployment)*: Domain feature creation (ratios, lag features, spatial embeddings) and interactive tool launch.
- **Other Verified Projects Line**: At the end of the Projects section, include a single concise italicized line:
  `Other Verified Projects: Alveris-Geo-AI (95.98% Accuracy, Basel III VaR), HuBMAP (0.6782 Dice), Nifty 50 Stock Analysis – available on GitHub.`

### G. Professional Experience
- **Chronology**: Strictly reverse chronological.
- **Header**:
  - Left: **Job Title & Company Name** (Bold, `10pt`).
  - **FAR RIGHT SIDE**: **Date Range & Location** (e.g., *Jan 2026 – Feb 2026 | Remote*).
- **Bullets**: 2–3 high-impact bullets strictly following the Universal Formula:
  - Bullet 1: *Data engineering, feature ratios/lags, and dataset completeness KPI (e.g., 99.8%).*
  - Bullet 2: *Primary supervised modeling with statistical accuracy metrics (R², MAE).*
  - Bullet 3: *Unsupervised segmentation/clustering (Silhouette score) & business operational delivery (e.g., 75% turnaround time reduction).*

### H. Education
- **2-Line Format per degree**:
  - **Line 1**: Degree / Program Title (Left), Year / Completion Date (FAR RIGHT SIDE).
  - **Line 2**: Institution Name & Honors (e.g., *Rajalakshmi Engineering College, Anna University | First Class*).
- **Strict Rule**: **ZERO occurrences of "Zen Class"**. Written as *"HCL GUVI, IIT Madras Research Park Incubated"*.

### I. Certifications
- Formatted in a **single line or continuous block using commas**:
  `Certifications: Data Science & Analytics (HCL GUVI), Build & Deploy AI Apps with Google AI Studio, Machine Learning 101, Data Analytics using Pandas (Tamil), AI for All, Stress Management (IIT Kharagpur / NPTEL).`
- Never format certifications as vertical bullet points.

---

## 5. CSS & Printing Guidelines for Zero-Spillover A4 Output

```css
@page {
  size: A4 portrait;
  margin: 4.5mm 7.5mm 4.5mm 7.5mm;
}

@media print {
  html, body {
    width: 100% !important;
    height: auto !important;
    margin: 0 !important;
    padding: 0 !important;
    background: #ffffff !important;
  }

  .no-print, .hub-header, .standalone-bar {
    display: none !important;
  }

  .resume-paper {
    width: 100% !important;
    max-height: none !important;
    padding: 0 !important;
    box-shadow: none !important;
    border: none !important;
    page-break-inside: avoid !important;
  }

  .section-92, .project-block-92, .exp-block-92 {
    page-break-inside: avoid !important;
  }
}
```

---

## 6. Pre-Flight Submission Checklist (Enforced Quality Gate)

Before submitting or exporting any resume, verify all 18 checkpoints:
- [ ] **Section Headings Font Size**: **MORE THAN 12pt** (strictly 12.2pt – 14pt). Never smaller than 12pt.
- [ ] **Section Headings Color**: Executive Navy Blue (`#1a365d`).
- [ ] **Body Font Size**: Maintained between **9.5pt – 10.5pt** for crisp human & machine readability.
- [ ] **Page Count**: **Strictly 1 page A4** when printed to PDF (0 lines spilling onto page 2).
- [ ] **Postal PIN/ZIP Code**: Included in the contact row (`Kurinjipadi, Tamil Nadu – 607303`).
- [ ] **Header Divider**: Clean navy horizontal divider (`1.8px solid #1a365d`) under contact info.
- [ ] **Section Sequence**: Summary $\rightarrow$ Skills $\rightarrow$ Projects $\rightarrow$ Experience $\rightarrow$ Education $\rightarrow$ Certifications.
- [ ] **Year / Date Alignment**: Every date in Experience and Education is locked to the **FAR RIGHT SIDE**.
- [ ] **Project Count**: **EXACTLY 3 featured projects** under Projects (no more, no less).
- [ ] **Project Tech Stacks**: Right-aligned on the title line in italicized text with standard spelling.
- [ ] **No Unconventional Symbols**: No `+` or fused words in skill names (`EfficientNet and ResNet`, not `EffNet+ResNet`).
- [ ] **No Repeated Action Verbs**: Action verb frequency audit passed (no verb like `Engineered` repeated $\ge 2$ times).
- [ ] **English Articles Included**: Proper grammatical articles (`a`, `an`) present in all bullet lines.
- [ ] **Other Verified Projects**: Mentioned in a **single concise line** with GitHub link.
- [ ] **Institution Branding**: **ZERO occurrences of "Zen Class"**. Written as *"HCL GUVI, IIT Madras Research Park Incubated"*.
- [ ] **Academic Distinction**: Degree explicitly lists *"First Class Honors"*.
- [ ] **Languages Line**: Included seamlessly alongside certifications (*"Languages: English (Professional), Tamil (Native)"*).
- [ ] **Certifications Layout**: Formatted in a **single continuous line** (never vertical bullets that waste space).
- [ ] **Summary**: 3–4 sentences connecting foundational background to target role with dictionary-friendly terms.
- [ ] **Experience Metrics**: Every experience bullet contains verified numerical metrics ($R^2$, MAE, feature completeness %, turnaround speedup %).

---

## 7. AI Resume Scanner / Builder Quality Filtering

When ingesting recommendations or scans from automated AI resume tools (e.g. ResumeGyani, Jobscan, Teal, Kickresume):
1. **Extract High-Value Vocabulary & Real Keywords**:
   - Academic honors: `First Class Honors`.
   - Hard ATS keywords: `TensorFlow`, `Agile Methodologies`, `SHAP`, `Reversible Instance Normalization (RevIN)`.
   - Technical qualifiers: `under rigorous chronological Walk-Forward Validation`, `dual-backbone neural architectures`, `to capture nonlinear caloric acceleration`.
   - Global recruiter filter signals: `Languages: English (Professional), Tamil (Native)`.
2. **Reject AI Builder Traps & Hallucinations**:
   - **Multi-page bloat**: Never allow the tool to split 1 cohesive project into 3 separate micro-entries with duplicate dates (bloats resume to 3+ pages).
   - **Hallucinated degrees or colleges**: Automated tools often invent degrees (e.g. "Master of Science - Raja Engineering College"). Keep exact real institutions and programs (*HCL GUVI, IIT Madras Research Park Incubated*).
   - **Corrupted metrics or scores**: Guard against mathematical hallucinations (e.g. "8.5/5.0 Grounding score" vs correctly verified "&ge; 8.5/10").
   - **Contact details corruption**: Guard against misspelled emails or truncated phone numbers.

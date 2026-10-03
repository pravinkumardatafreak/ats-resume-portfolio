# ATS Resume & Career Portfolio Engine

A high-precision, single-page ATS-optimized resume and portfolio architecture engineered by **Pravin Kumar R**. Built in accordance with rigorous executive benchmarks (**Navaneethan Executive Benchmark**, `#1a365d` Navy standard) and designed for high ATS parsing compliance (90+ / 7+/10 selected profile rating).

---

## 🎯 Engineering Highlights & Architecture

1. **Sub-Millimeter Vertical Budgeting (Strict 1-Page Guarantee)**:
   - Print-calibrated CSS engineered to fit **100% within a single A4 page** (297mm × 210mm) with zero spillover or orphan lines.
   - Header, section titles, item bars, and bullet lists utilize proportional micro-spacing (`pt` and `mm` units) optimized across both desktop web viewing and physical/PDF printing.
   - Fully compatible with automated headless browser compilation (`msedge --headless --print-to-pdf`).

2. **Modular Multi-Track Architecture**:
   - Features dedicated, synchronized resume tracks covering multi-disciplinary technical competencies:
     - **Data Scientist**: End-to-end ML pipelines, deep sequence forecasting, and statistical modeling.
     - **Machine Learning Engineer**: MLOps, model deployment, Docker, FastAPI REST APIs, and CI/CD pipelines.
     - **Quantitative Data Scientist**: Deep sequence forecasting, financial time-series, and Basel III Climate VaR waterfalls.
     - **Geospatial AI Scientist**: Multi-sensor Earth observation, Sentinel-1/2, Copernicus 30m DEM, and spatial segmentation.
     - **Generative AI Engineer**: Autonomous multi-agent RAG systems, Critic LLM evaluation gates, and telemetry waterfalls.
     - **Data Engineer & Analytics**: Scalable ETL pipelines, relational data modeling, AutoML, and cloud database optimization.
     - **Associate Data Scientist**: Exploratory data analysis, baseline regression/clustering, and interactive BI dashboards.

3. **Approved Technical Action Verbs & Zero Buzzwords**:
   - All bullet points lead with high-impact, verified technical verbs: *Architected, Engineered, Implemented, Benchmarked, Formulated, Containerized, Deployed*.
   - Free of generic filler words (*fast learner, hardworking, team player, works well under pressure*).

4. **100% Quantified & Codebase-Verified Claims**:
   - Every metric and capability directly maps to active repositories on GitHub ([@pravinkumardatafreak](https://github.com/pravinkumardatafreak)):
     - **CryptoCast**: PyTorch, LSTM, PatchTST with RevIN, **2.06% 1-day MAPE** & **5.93% 7-day MAPE**, 11-page Streamlit analytics studio with SHAP explainability.
     - **ERIA**: Autonomous 4-agent RAG on Groq LLaMA 3.3 70B, Critic LLM gate (>= 8.5/10 Grounding), DistilRoBERTa 7-class sentiment, Hugging Face deployment.
     - **Alveris-Geo-AI**: Multi-sensor Earth observation, 13-band Sentinel-2 CNN (**95.98% accuracy**), 8-way morphological flood routing, **49 pytest unit tests** (Pylint 10/10).
     - **HuBMAP**: Organ-prompted Swin-TransUNet, **0.6782 Dice** & **0.5131 IoU** (+26.7% over baseline), Monte Carlo Dropout for epistemic uncertainty.
     - **Internship Studio**: Wearable telemetry ETL (**14,102 records, 99.8% feature completeness**), Random Forest regression (**R² 0.9979, MAE 3.78 kcal**), PCA + K-Means clustering.

---

## 🚀 How to View & Export to PDF

### Method 1: Interactive Master Hub (Browser)
Open [`index.html`](file:///c:/Users/home/Desktop/resume%20project%20single/index.html) in any modern web browser to interactively switch between role tracks, inspect typography, and export.

### Method 2: Command Line (PowerShell)
```powershell
# Open the master hub
Start-Process index.html
```

### 🖨️ How to Save as a Clean 1-Page PDF:
1. Open any resume file (or Master Hub) in Chrome or Edge.
2. Click **"Print / Save as PDF"** (or press `Ctrl + P`).
3. In the print dialog:
   - **Destination**: Save as PDF
   - **Pages**: All (Guaranteed strictly 1 page)
   - **Margins**: Default (or None)
   - **Options**: Check "Background graphics"
4. Click **Save**.

### 📋 1-Click ATS Plaintext Generator:
Click **"Copy ATS Text"** in the top navigation bar to copy clean, unformatted ATS plain text formatted specifically for enterprise applicant tracking parsers (Workday, Taleo, Greenhouse, Lever).

---

## 📁 Repository Structure

```text
├── index.html                                  # Master Hub with dynamic multi-track preview & switching
├── style.css                                   # Unified design system & print-calibrated CSS rules
├── script.js                                   # Controller for role switching, ATS text generation & print logic
├── data.json                                   # Centralized metric & project configuration registry
│
├── resume_data_scientist.html                  # Track 1: Data Scientist
├── resume_ml_engineer.html                     # Track 2: Machine Learning Engineer
├── resume_quant_analyst.html                   # Track 3: Quantitative Data Scientist
├── resume_geospatial_ds.html                   # Track 4: Geospatial Data Scientist
├── resume_genai_engineer.html                  # Track 5: Generative AI Engineer
├── resume_associate_ds.html                    # Track 6: Associate Data Scientist
│
├── Pravin_Kumar_R_Data_Scientist.pdf           # Compiled 1-Page PDF: Data Scientist
├── Pravin_Kumar_R_Machine_Learning_Engineer.pdf# Compiled 1-Page PDF: Machine Learning Engineer
├── Pravin_Kumar_R_Quantitative_Data_Scientist.pdf # Compiled 1-Page PDF: Quantitative Data Scientist
├── Pravin_Kumar_R_Geospatial_Data_Scientist.pdf# Compiled 1-Page PDF: Geospatial Data Scientist
├── Pravin_Kumar_R_Generative_AI_Engineer.pdf   # Compiled 1-Page PDF: Generative AI Engineer
├── Pravin_Kumar_R_Associate_Data_Scientist.pdf # Compiled 1-Page PDF: Associate Data Scientist
│
└── .agents/skills/ats-resume-guidelines/       # Reference specifications & ATS benchmarking rubrics
```

---

## 🛡️ License & Authorship

Developed by **Pravin Kumar R** ([GitHub](https://github.com/pravinkumardatafreak) | [LinkedIn](https://www.linkedin.com/in/pravin-kumar-ds/)).
Licensed under the [MIT License](LICENSE).

/**
 * MASTER RESUME CONTROLLER & ATS GENERATOR
 * Manages in-page role switching, 1-page printing, and plain text generation for 3 tailored industry roles
 * Adheres to the Navaneethan Executive Benchmark (#1a365d Navy Standard, 7+/10 Selected Profile)
 */

let currentRole = 'ds';

const resumeDataMap = {
  ds: {
    file: 'resume_data_scientist.html',
    title: 'Data Scientist',
    tabId: 'tabDS',
    viewId: 'viewDS',
    plainText: `PRAVIN KUMAR R
DATA SCIENTIST
Location: Kurinjipadi, Tamil Nadu – 607303 | Phone: +91 88259 38327 | Email: pravinrajavel@gmail.com
LinkedIn: linkedin.com/in/pravin-kumar-ds | GitHub: github.com/pravinkumardatafreak

PROFESSIONAL SUMMARY
Data Scientist with a solid foundation in Civil Engineering (B.E., First Class) and a successful transition into Data Science through self-driven exploration of financial markets, quantitative analysis, and systematic decision-making. Demonstrated expertise in engineering end-to-end machine learning pipelines, achieving impressive results in deep sequence forecasting (2.06% 1D MAPE), computer vision-based regression (55.22 weighted EMD), and multi-agent RAG systems. Proficient in Python, SQL, PyTorch, Scikit-Learn, Docker, and FastAPI, leveraging a hands-on engineering mindset to tackle complex challenges in FinTech, GeoAI, and applied AI domains. Committed to delivering innovative solutions that drive data-driven decision-making and enhance operational efficiency.

SKILLS
- Languages & Databases: Python, SQL, SQLite, SQLAlchemy, Data Warehousing, REST APIs
- ML & Deep Learning: Scikit-Learn, PyTorch, TensorFlow, XGBoost, Elastic Net, PatchTST, LSTMs, CNNs
- Data Science & BI: Pandas, NumPy, Feature Engineering, EDA, A/B Testing, Power BI, Tableau, PCA, K-Means
- Cloud, MLOps & Delivery: AWS, Azure, GCP, Docker, CI/CD (GitHub Actions), Streamlit, Git, GitHub, Agile

PROJECTS
CryptoCast: Multi-Horizon Deep Learning Sequence Forecasting    Python, PyTorch, PatchTST, LSTM, Streamlit
• Accelerated quantitative risk hedging by architecting a multi-horizon sequence forecasting pipeline benchmarking 5 PyTorch models across 5,000+ records under Walk-Forward Validation.
• Validated 5 PyTorch architectures (1D-CNN, RNN, LSTM, Transformer, PatchTST) under Walk-Forward Validation, achieving 2.06% MAPE at 1 day (LSTM) and 3.74% & 5.93% MAPE at 3-day and 7-day horizons (PatchTST with RevIN).
• Engineered protocol supply features (Halving cycles, Block Reward) to drive a $92 MAE reduction on 7-day horizon ablations, deploying an 11-page Streamlit analytics studio with SHAP explainability.

Education Regulation Impact Analyzer (ERIA)    Groq LLaMA 3.3 70B, Multi-Agent RAG, LangChain, Hugging Face
• Cut compliance review cycles from days to sub-15s latency by orchestrating an autonomous 4-agent regulatory intelligence system on Groq LLaMA 3.3 70B with Multi-Agent RAG across 50+ page documents.
• Guaranteed >= 8.5/10 factual Grounding, Consistency, and Completeness by engineering an automated Critic LLM evaluation gate with deterministic self-correction loops.
• Empowered policy stakeholders with 7-class sentiment mapping via DistilRoBERTa, deploying production application on Hugging Face Spaces with automated PDF report generation.

Other Verified Projects: Alveris-Geo-AI (95.98% Acc, Basel III VaR), HuBMAP (0.6782 Dice), Nifty 50 – on GitHub.

PROFESSIONAL EXPERIENCE
Data Science Intern — Internship Studio    Jan 2026 – Feb 2026 | Remote
• Delivered 99.8% feature completeness across 14,100+ session wearable records by designing health analytics and data warehousing pipelines under 2-week Agile sprints.
• Reduced caloric prediction error by 89.2% over baseline models (achieving an R² of 0.9979 and MAE of 3.78 kcal) by developing a high-precision Random Forest regression model capturing nonlinear metabolic exertion.
• Segmented workouts into 4 physiological exertion zones using PCA and K-Means clustering (Silhouette score 0.4546), containerizing models with Docker and serving inference via FastAPI REST endpoints.

EDUCATION
Master Data Science Program — HCL GUVI, IIT Madras Research Park Incubated    Completed Jun 2026
B.E. Civil Engineering (First Class Honors) — Rajalakshmi Engineering College, Anna University    Aug 2017 – May 2021

CERTIFICATIONS
• ML for Earth Observation (EO College)
• Data Science Master Program (HCL GUVI • IIT Madras)
• Build & Deploy AI Apps (Google for Education)
• Machine Learning & Pandas (HCL GUVI)
Additional: Stress Management (NPTEL)`
  },

  associate_ds: {
    file: 'resume_associate_ds.html',
    title: 'Associate Data Scientist',
    plainText: `PRAVIN KUMAR R
ASSOCIATE DATA SCIENTIST
Location: Kurinjipadi, Tamil Nadu – 607303 | Phone: +91 88259 38327 | Email: pravinrajavel@gmail.com
LinkedIn: linkedin.com/in/pravin-kumar-ds | GitHub: github.com/pravinkumardatafreak

PROFESSIONAL SUMMARY
Associate Data Scientist with a solid Civil Engineering foundation (B.E., First Class) and proven hands-on experience across the full analytics lifecycle -- from raw data wrangling and exploratory analysis to baseline model implementation and stakeholder-ready interactive dashboards. Proficient in Python (Pandas, NumPy, Scikit-Learn), SQL, and Plotly/Streamlit, with a strong grounding in descriptive and inferential statistics. Adept at writing clean, documented, and reproducible pipelines that bridge raw data and actionable business strategy in FinTech and applied AI domains.

SKILLS
- Programming & Data Wrangling: Python (Pandas, NumPy, Scikit-Learn), SQL, SQLite, SQLAlchemy, REST APIs, FastAPI
- Statistics & EDA: Descriptive & Inferential Statistics, Hypothesis Testing, Probability Distributions, Exploratory Data Analysis, Feature Engineering
- Machine Learning: Regression, Classification, Clustering, Random Forest, XGBoost, K-Means, PCA, Ridge, Elastic Net, Cross-Validation
- Visualization & Reporting: Streamlit, Plotly, Matplotlib, SHAP Explainability, Automated PDF Report Generation, Git, GitHub Actions CI, Docker

PROJECTS
CryptoCast: EDA & Multi-Horizon Forecasting Pipeline    Python, Pandas, NumPy, Scikit-Learn, PyTorch, Streamlit, SHAP
• Wrangled and validated ~5,000 daily Bitcoin records (2010-2024), engineering 60-day rolling window features and running EDA to surface volatility clusters, trend anomalies, and on-chain distribution patterns.
• Implemented and evaluated 5 forecasting architectures under chronological Walk-Forward cross-validation, selecting the optimal model achieving 2.06% MAPE at 1-day and 5.93% at 7-day horizons.
• Deployed an 11-page interactive Streamlit analytics studio with SHAP feature importance, translating model outputs into plain-language, stakeholder-ready business intelligence reports.

Nifty 50 Stock Analysis & Sector Intelligence Dashboard    Python, SQL, SQLAlchemy, Pandas, Plotly, Scikit-Learn
• Queried and aggregated Nifty 50 historical OHLCV data using SQLAlchemy and multi-table SQL joins, performing null-value audits, outlier detection, and consistency checks to ensure data integrity across 50 stocks.
• Conducted sector-level exploratory data analysis -- computing rolling returns, volatility metrics, and correlation matrices -- to identify cyclical vs. defensive sector behavior and flag performance anomalies.
• Designed interactive Plotly dashboards with filterable trend charts and correlation heatmaps, documenting all query logic and pipeline steps in reproducible, version-controlled notebooks for team collaboration.

Other Verified Projects: ERIA Multi-Agent RAG System, HuBMAP (0.6782 Dice), Soil Grain Size Estimation (55.22 OOF Weighted EMD) - on GitHub.

PROFESSIONAL EXPERIENCE
Data Science Intern — Internship Studio    Jan 2026 – Feb 2026 | Remote
• Collected, preprocessed, and validated 14,102 Fitbit telemetry records, performing categorical encoding, StandardScaler normalization, and 80/20 train-test splitting to ensure data integrity and consistency.
• Built, tested, and evaluated baseline regression and clustering models (Linear Regression, Random Forest, K-Means) -- reducing caloric prediction MAE from 34.97 to 3.78 kcal (89.2% error reduction, R2 = 0.9979).
• Documented the full ML pipeline in reproducible notebooks, applying PCA + K-Means (Silhouette 0.4546) to segment users into 4 exertion zones and containerizing inference via Docker and FastAPI REST endpoints.

EDUCATION
Master Data Science Program — HCL GUVI, IIT Madras Research Park Incubated    Completed Jun 2026
B.E. Civil Engineering (First Class Honors) — Rajalakshmi Engineering College, Anna University    Aug 2017 – May 2021

CERTIFICATIONS
• Data Science & Analytics (HCL GUVI)
• Build & Deploy AI Apps with Google AI Studio
• ML for Earth Observation (EO College)
• Machine Learning & Pandas (HCL GUVI)
Additional: Stress Management (NPTEL)`
  },

  geo_ds: {
    file: 'resume_geospatial_ds.html',
    title: 'Geospatial Data Scientist',
    plainText: `PRAVIN KUMAR R
GEOSPATIAL DATA SCIENTIST
Location: Kurinjipadi, Tamil Nadu – 607303 | Phone: +91 88259 38327 | Email: pravinrajavel@gmail.com
LinkedIn: linkedin.com/in/pravin-kumar-ds | GitHub: github.com/pravinkumardatafreak

PROFESSIONAL SUMMARY
Geospatial Data Scientist with a Civil Engineering foundation (B.E., First Class) uniquely positioned at the intersection of infrastructure domain knowledge and ML-driven spatial intelligence. Demonstrated expertise building a Copernicus DEM and InSAR-based Climate Value-at-Risk (VaR) engine achieving 95.98% accuracy, and a Swin-TransUNet segmentation system (0.6782 Dice) directly transferable to satellite imagery workflows. Proficient in Python (GeoPandas, Rasterio, PyTorch), Docker, and FastAPI, applying a hands-on GeoAI engineering mindset to remote sensing, climate risk, and precision environmental analytics.

SKILLS
- Geospatial & Remote Sensing: Copernicus DEM (30m), InSAR, Satellite Imagery Analysis, GeoPandas, Rasterio, OpenCV, Canny Edge Detection, ML for Earth Observation (EO College)
- Programming & Data: Python (Pandas, NumPy, Scikit-Learn), SQL, SQLAlchemy, REST APIs, FastAPI, Git, GitHub Actions CI
- Machine Learning & GeoAI: PyTorch, Swin Transformer, EfficientNet, ResNet, CNNs, Random Forest, XGBoost, SHAP, Walk-Forward Validation, Feature Engineering
- MLOps & Visualization: Docker, Streamlit, Plotly, Matplotlib, Hugging Face Spaces, Climate Value-at-Risk (VaR), Basel III Risk Framework

PROJECTS
Alveris-Geo-AI: InSAR & Copernicus DEM Climate Risk Engine    Python, Copernicus DEM, InSAR, PyTorch, Docker, FastAPI, Plotly
• Architected a geospatial risk intelligence engine integrating Copernicus DEM (30m) elevation profiles and Sentinel-1 InSAR-derived surface displacement maps to identify infrastructure climate exposure across multi-hazard terrain domains.
• Formulated a Basel III-aligned Climate Value-at-Risk (VaR) pipeline fusing InSAR subsidence rates with DEM terrain models, achieving 95.98% classification accuracy on hazard zone boundary delineation.
• Containerized the end-to-end geospatial pipeline with Docker and FastAPI REST endpoints, delivering automated hazard zone scoring and a Plotly spatial risk dashboard for real-time decision-support reporting.

HuBMAP: Swin-TransUNet High-Resolution Image Segmentation    Python, PyTorch, Swin Transformer, U-Net, OpenCV
• Designed a Swin Transformer + U-Net hybrid architecture (Swin-TransUNet) for pixel-level semantic segmentation of high-resolution 2D imagery, achieving a 0.6782 Dice Score (a +26.7% gain over plain U-Net baselines), with the architecture directly applicable to satellite land cover and change detection tasks.
• Built a tile-based patch extraction pipeline preserving spatial boundary context across variable-resolution imagery, applying stratified cross-validation and Monte Carlo dropout for uncertainty-aware predictions.
• Optimized multi-resolution feature fusion with boundary-aware loss weighting and Canny Edge Detection preprocessing, reducing false-positive boundary detections and delivering a scalable segmentation framework transferable to remote sensing imagery.

CryptoCast: Multi-Signal Temporal Intelligence Pipeline    Python, PyTorch, PatchTST, LSTM, Streamlit, SHAP
• Architected a multi-signal time-series intelligence pipeline processing ~5,000 daily records (2010-2024) with 60-day rolling windows, applying chronological Walk-Forward Validation to simulate real-world geospatial temporal sensing conditions.
• Validated 5 PyTorch forecasting architectures, selecting the optimal model achieving 2.06% MAPE at 1-day and 5.93% MAPE at 7-day horizons with Reversible Instance Normalization (RevIN) correcting non-stationary drift.
• Deployed an 11-page interactive Streamlit analytics studio with SHAP feature attribution, translating temporal model signals into stakeholder-ready spatial intelligence reports with a $92 MAE improvement on ablation benchmarks.

Other Verified Projects: ERIA Multi-Agent RAG System, Soil Grain Size Estimation (55.22 OOF Weighted EMD), Nifty 50 Stock Analysis - on GitHub.

PROFESSIONAL EXPERIENCE
Data Science Intern -- Internship Studio (Analytics & EdTech)    Jan 2026 – Feb 2026 | Remote
• Analyzed 14,102 Fitbit telemetry records, executing geospatial-style data preprocessing, categorical encoding, and StandardScaler normalization under an 80/20 stratified train-test validation split.
• Constructed a Random Forest regression model achieving R2 = 0.9979 and MAE of 3.78 kcal (89.2% error reduction over baseline), containerizing the model with Docker and serving inference via FastAPI REST endpoints.
• Applied PCA and K-Means clustering (Silhouette score 0.4546) to segment users into 4 physiological exertion zones, delivering a reproducible pipeline with GitHub Actions CI and automated validation reporting.

EDUCATION
Master Data Science Program -- HCL GUVI, IIT Madras Research Park Incubated    Completed Jun 2026
B.E. Civil Engineering (First Class Honors) -- Rajalakshmi Engineering College, Anna University    Aug 2017 – May 2021

CERTIFICATIONS
• ML for Earth Observation (EO College)
• Data Science & Analytics (HCL GUVI)
• Build & Deploy AI Apps with Google AI Studio
• Machine Learning & Pandas (HCL GUVI)`
  },

  ml_engineer: {
    file: 'resume_ml_engineer.html',
    title: 'Machine Learning Engineer',
    plainText: `PRAVIN KUMAR R
MACHINE LEARNING ENGINEER
Location: Kurinjipadi, Tamil Nadu – 607303 | Phone: +91 88259 38327 | Email: pravinrajavel@gmail.com
LinkedIn: linkedin.com/in/pravin-kumar-ds | GitHub: github.com/pravinkumardatafreak

PROFESSIONAL SUMMARY
Machine Learning Engineer with a Civil Engineering foundation (B.E., First Class) and demonstrated expertise deploying end-to-end ML systems from research prototypes to production REST APIs. Built a 4-agent Retrieval-Augmented Generation (RAG) orchestration system with deterministic Critic LLM evaluation gates, a multi-architecture forecasting pipeline achieving 2.06% MAPE under Walk-Forward Validation, and a Swin-TransUNet segmentation system scoring 0.6782 Dice. Proficient in PyTorch, Docker, FastAPI, and GitHub Actions CI, applying a production-first engineering mindset to GenAI, deep learning, and scalable applied ML systems.

SKILLS
- MLOps & Deployment: Docker, FastAPI REST APIs, GitHub Actions CI/CD, Hugging Face Spaces, Python (production OOP), Git, SQLAlchemy
- Deep Learning Systems: PyTorch (training loops, model serialization, multi-domain), PatchTST, LSTMs, Swin Transformer, CNNs, EfficientNet, ResNet, Hugging Face Transformers
- GenAI & LLM Engineering: Groq LLaMA 3.3 70B, Multi-Agent RAG, DistilRoBERTa, TF-IDF Retrieval, LLM Evaluation Gates, Sentence-BERT, VADER Sentiment
- ML Pipeline & Data: Scikit-Learn, Pandas, NumPy, SQL, Walk-Forward Validation, Cross-Validation, SHAP Explainability, Streamlit, Plotly, Feature Engineering

PROJECTS
ERIA: Multi-Agent RAG Orchestration System    Python, Groq LLaMA 3.3 70B, DistilRoBERTa, FastAPI, Docker, Hugging Face
• Architected a production 4-agent AI orchestration system (Analyst, Critic, Refiner, Strategist) powered by Groq LLaMA 3.3 70B, implementing a deterministic Critic LLM evaluation gate scoring draft responses on grounding, consistency, and completeness across a 10-point quality rubric.
• Engineered a TF-IDF and cosine similarity Retrieval-Augmented Generation (RAG) pipeline parsing 50+ page policy documents with contextual chunking, integrating a local DistilRoBERTa transformer for 7-class stakeholder emotion classification with sub-second inference latency.
• Deployed the full multi-agent system on Hugging Face Spaces with Docker containerization, FastAPI REST endpoints, and an automated PDF report generation pipeline, delivering end-to-end inference at $0.0087 per run under constrained compute budgets.

CryptoCast: Production ML Benchmarking & Deployment Pipeline    Python, PyTorch, PatchTST, LSTM, Streamlit, SHAP, GitHub Actions
• Designed a centralized PyTorch model training framework benchmarking 5 deep learning architectures (1D-CNN, RNN, LSTM, Transformer, PatchTST) under chronological Walk-Forward Validation across ~5,000 daily records, enforcing production-grade model selection discipline.
• Selected the optimal architecture achieving 2.06% MAPE at 1-day and 5.93% MAPE at 7-day horizons; engineered protocol supply features (Halving cycles, Block Reward) driving a $92 Mean Absolute Error reduction on 7-day ablation benchmarks.
• Delivered an end-to-end production pipeline with GitHub Actions CI, automated model checkpointing, and an 11-page Streamlit analytics studio with SHAP explainability -- containerized for repeatable, version-controlled inference deployment.

HuBMAP: Swin-TransUNet Deep Learning Segmentation System    Python, PyTorch, Swin Transformer, U-Net, OpenCV
• Implemented a Swin Transformer + U-Net hybrid architecture (Swin-TransUNet) for pixel-level semantic segmentation of high-resolution imagery, achieving a 0.6782 Dice Score -- a +26.7% gain over plain U-Net baselines across multi-resolution validation sets.
• Built a production-grade data pipeline with tile-based patch extraction, stratified cross-validation, and test-time augmentation, maintaining spatial boundary integrity and reducing false-positive edge detections.
• Applied Monte Carlo dropout for uncertainty quantification and boundary-aware loss weighting, demonstrating model reliability practices aligned with production deployment confidence requirements.

Other Verified Projects: Alveris-Geo-AI (95.98% Accuracy, Basel III Climate VaR), Soil Grain Size Estimation (55.22 OOF Weighted EMD), Nifty 50 Stock Analysis - on GitHub.

PROFESSIONAL EXPERIENCE
Data Science Intern -- Internship Studio (Analytics & EdTech)    Jan 2026 – Feb 2026 | Remote
• Analyzed 14,102 Fitbit telemetry records, executing feature engineering, categorical encoding, and StandardScaler normalization under an 80/20 stratified train-test split, achieving 99.8% feature completeness across all pipeline stages.
• Engineered a Random Forest regression model achieving R2 = 0.9979 and MAE of 3.78 kcal (89.2% error reduction over baseline linear models), containerizing the trained model with Docker and serving predictions via FastAPI REST endpoints.
• Segmented users into 4 physiological exertion zones using PCA and K-Means clustering (Silhouette 0.4546), deploying the full ML pipeline with GitHub Actions CI -- cutting manual validation turnaround time by 75%.

EDUCATION
Master Data Science Program -- HCL GUVI, IIT Madras Research Park Incubated    Completed Jun 2026
B.E. Civil Engineering (First Class Honors) -- Rajalakshmi Engineering College, Anna University    Aug 2017 – May 2021

CERTIFICATIONS
• Data Science & Analytics (HCL GUVI)
• Build & Deploy AI Apps with Google AI Studio
• ML for Earth Observation (EO College)
• Machine Learning & Pandas (HCL GUVI)`
  },

  quant: {
    file: 'resume_quant_analyst.html',
    title: 'Quantitative Data Scientist',
    tabId: 'tabQuant',
    viewId: 'viewQuant',
    plainText: `PRAVIN KUMAR R
QUANTITATIVE DATA SCIENTIST
Location: Kurinjipadi, Tamil Nadu – 607303 | Phone: +91 88259 38327 | Email: pravinrajavel@gmail.com
LinkedIn: linkedin.com/in/pravin-kumar-ds | GitHub: github.com/pravinkumardatafreak

PROFESSIONAL SUMMARY
Quantitative Data Scientist with an engineering analytical foundation (B.E. First Class Honors) and expertise in deep sequence forecasting, institutional climate risk modeling, and backtesting. Demonstrated success engineering multi-horizon neural architectures under walk-forward validation and automating Basel III & SEC Climate Value-at-Risk (VaR) waterfalls. Proficient across Python, SQL, PyTorch, financial statistics, and quantitative risk delivery.

SKILLS
- Quantitative Risk: Multi-Horizon Forecasting, Basel III Climate VaR, Rolling Sharpe Ratio, Max Drawdown, Value-at-Risk (VaR)
- ML & Deep Learning: PyTorch, PatchTST, Reversible Instance Normalization (RevIN), LSTMs, 1D-CNN, XGBoost, Scikit-Learn
- Statistical Modeling & BI: Walk-Forward Validation (WFV), Welch's t-Test, Mann-Whitney U, Power BI, Tableau, Stationarity, SHAP
- Cloud, FinTech & Delivery: AWS, Azure, GCP, SQL, SQLite, SQLAlchemy, Docker, CI/CD (GitHub Actions), Streamlit, Git, Agile

PROJECTS
CryptoCast: Multi-Horizon Deep Learning Sequence Forecasting    Python, PyTorch, PatchTST, LSTM, Streamlit
• Accelerated quantitative risk hedging by architecting a multi-horizon sequence forecasting pipeline benchmarking 5 PyTorch models across 5,000+ records under Walk-Forward Validation.
• Slashed 1-day price forecasting error to 2.06% MAPE (3.85% for 3-day horizons) by deploying PatchTST and LSTM architectures with Reversible Instance Normalization (RevIN) to eliminate market drift.
• Drove a $92 MAE prediction error reduction and guided hedging allocations by engineering multi-horizon lag features, on-chain dynamics, and an 11-page Streamlit analytics studio with SHAP explainability.

Alveris-Geo-AI: Institutional GeoAI & Basel III Climate VaR Engine    PyTorch, CNN, Copernicus DEM, InSAR, Streamlit
• Boosted pre-visual hazard detection to 95.98% zoning accuracy (+15.02% over RGB) by developing a 13-band Sentinel-2 PyTorch CNN trained on Level-2A reflectance tensors.
• Replaced planar buffering with breach hydraulics by formulating an 8-way morphological flood routing algorithm on Copernicus 30m DEM and InSAR subsidence trajectories.
• Protected loan portfolios against impairment by automating a Basel III Climate Value-at-Risk (VaR) haircut waterfall translating physical hazards into dynamic collateral haircuts.

Other Verified Projects: Nifty 50 Stock Analysis (SQLAlchemy, Plotly), OrbitalComm Space Telemetry (95% SLA Failure Recall), SentixAI – on GitHub.

PROFESSIONAL EXPERIENCE
Quantitative Data Science Intern — Internship Studio    Jan 2026 – Feb 2026 | Remote
• Delivered 99.8% feature completeness across 14,100+ session wearable records by designing health analytics and data warehousing pipelines under 2-week Agile sprints.
• Reduced caloric prediction error by 89.2% over baseline models (achieving an R² of 0.9979 and MAE of 3.78 kcal) by developing a high-precision Random Forest regression model capturing nonlinear metabolic exertion.
• Cut executive reporting turnaround time by 75% by deploying an interactive Streamlit and BI dashboard backed by K-Means and PCA clustering users into 4 exertion zones.

EDUCATION
Master Data Science Program — HCL GUVI, IIT Madras Research Park Incubated    Completed Jun 2026
B.E. Civil Engineering (First Class Honors) — Rajalakshmi Engineering College, Anna University    Aug 2017 – May 2021

CERTIFICATIONS
• ML for Earth Observation (EO College)
• Data Science Master Program (HCL GUVI • IIT Madras)
• Build & Deploy AI Apps (Google for Education)
• MAANG Strategy & Analytics (HCL GUVI)
Additional: Stress Management (NPTEL)`
  },

  genai: {
    file: 'resume_genai_engineer.html',
    title: 'Generative AI Engineer',
    tabId: 'tabGenAI',
    viewId: 'viewGenAI',
    plainText: `PRAVIN KUMAR R
GENERATIVE AI & MACHINE LEARNING ENGINEER
Location: Kurinjipadi, Tamil Nadu – 607303 | Phone: +91 88259 38327 | Email: pravinrajavel@gmail.com
LinkedIn: linkedin.com/in/pravin-kumar-ds | GitHub: github.com/pravinkumardatafreak

PROFESSIONAL SUMMARY
Generative AI and Machine Learning Engineer specializing in autonomous multi-agent architectures, self-correcting RAG systems, and multimodal vision transformers. Proven track record designing stage-gated agent pipelines with sub-second retrieval latency, automated Critic LLM validation gates, and cost-observability waterfalls ($0.0087/run). Proficient across Python, LangChain, PyTorch, Hugging Face, Groq API, Azure OpenAI, and production MLOps deployment.

SKILLS
- Generative AI & LLMs: Multi-Agent Systems, Stage-Gated Orchestration, Self-Correction Loops, Critic Gates, LangChain, Groq, Multi-Agent RAG
- NLP & Transformers: Hugging Face Transformers, DistilRoBERTa, Sentence-BERT (SBERT), TF-IDF, Cosine Retrieval, Tokenizer Optimization
- Deep Learning & Vision: PyTorch, TensorFlow, Vision Transformers (ViT), Swin Transformer Vision, Shifted Window Attention, CNNs
- Cloud, MLOps & Delivery: Azure (Azure OpenAI), AWS, GCP, Docker, CI/CD (GitHub Actions), Telemetry Waterfall, Streamlit, Git, Agile

PROJECTS
Unfoolable Lens: Stage-Gated Multi-Agent Rhetoric Deconstructor    Python, Multi-Agent Systems, GDELT API, Azure OpenAI
• Uncovered hidden editorial bias and rhetorical framing across 5 analytical perspectives by architecting a 5-agent stage-gated NLP pipeline using Azure OpenAI.
• Delivered real-time news context grounding with sub-second retrieval latency by integrating live GDELT global news APIs and cross-referencing archival precedents.
• Achieved 100% operational transparency and minimized inference costs at $0.0087 per comprehensive run by formulating a telemetry waterfall tracking token consumption and API expenditures.

Education Regulation Impact Analyzer (ERIA)    Groq LLaMA 3.3 70B, Multi-Agent RAG, LangChain, Hugging Face
• Cut compliance review cycles from days to sub-15s latency by orchestrating an autonomous 4-agent regulatory intelligence system on Groq LLaMA 3.3 70B with Multi-Agent RAG across 50+ page documents.
• Eliminated hallucination risks and guaranteed >= 8.5/10 factual Grounding, Consistency, and Completeness by engineering an automated Critic LLM evaluation gate with deterministic self-correction feedback loops.
• Empowered policy stakeholders with 7-class sentiment mapping by integrating a local DistilRoBERTa transformer, deploying production web application on Hugging Face Spaces with automated PDF report generation.

Other Verified Projects: HuBMAP (0.6782 Dice, Swin Transformer Vision), IMDb 2-Stage SBERT Recommender, CryptoCast PyTorch Sequence Engine – on GitHub.

PROFESSIONAL EXPERIENCE
Data Science & Machine Learning Intern — Internship Studio    Jan 2026 – Feb 2026 | Remote
• Delivered 99.8% feature completeness across 14,100+ session wearable records by designing health analytics and data warehousing pipelines under 2-week Agile sprints.
• Reduced caloric prediction error by 89.2% over baseline models (achieving an R² of 0.9979 and MAE of 3.78 kcal) by developing a high-precision Random Forest regression model capturing nonlinear metabolic exertion.
• Cut executive reporting turnaround time by 75% by deploying an interactive Streamlit and BI dashboard backed by K-Means and Principal Component Analysis (PCA) clustering users into 4 exertion zones.

EDUCATION
Master Data Science Program — HCL GUVI, IIT Madras Research Park Incubated    Completed Jun 2026
B.E. Civil Engineering (First Class Honors) — Rajalakshmi Engineering College, Anna University    Aug 2017 – May 2021

CERTIFICATIONS
• ML for Earth Observation (EO College)
• Data Science Master Program (HCL GUVI • IIT Madras)
• Build & Deploy AI Apps (Google for Education)
• Machine Learning & AI (HCL GUVI)
Additional: Stress Management (NPTEL)`
  },

  cognizant_returnship: {
    file: 'resume_cognizant_returnship.html',
    title: 'AI/ML & GenAI Engineer (Cognizant Returnship)',
    tabId: 'tabCognizant',
    viewId: 'viewCognizant',
    plainText: `PRAVIN KUMAR R
AI/ML & GENERATIVE AI ENGINEER
Location: Kurinjipadi, Tamil Nadu – 607303 | Phone: +91 88259 38327 | Email: pravinrajavel@gmail.com
LinkedIn: linkedin.com/in/pravin-kumar-ds | GitHub: github.com/pravinkumardatafreak

PROFESSIONAL SUMMARY
AI/ML and Generative AI Engineer transitioning from an engineering analytical foundation (B.E. Civil Engineering, First Class Honors), specialized in developing end-to-end machine learning models, autonomous multi-agent architectures, and Natural Language Processing (NLP) solutions. Proven track record architecting stage-gated Multi-Agent RAG systems with Critic LLM evaluation gates (>= 8.5/10 Grounding) and centralized PyTorch sequence pipelines achieving 2.06% 1-day forecasting MAPE with Reversible Instance Normalization (RevIN). Proficient across Python, SQL, PyTorch, Hugging Face, Scikit-Learn, Azure OpenAI, and Streamlit, applying disciplined model lifecycle evaluation and version-controlled practices to bridge AI engineering with enterprise business outcomes.

SKILLS
- Generative AI & LLMs: Autonomous Multi-Agent Systems, Stage-Gated Agent Orchestration, Groq LLaMA 3.3 70B, Multi-Agent RAG, Critic LLM-as-a-Judge, Self-Correction Feedback Loops, Prompt Engineering
- Machine Learning & NLP: Supervised & Unsupervised ML, Natural Language Processing (NLP), PyTorch, Scikit-Learn, Hugging Face Transformers, DistilRoBERTa, Random Forest, XGBoost, Multi-Task Elastic Net, Feature Engineering
- MLOps & Model Lifecycle: Model Lifecycle Management, Chronological Walk-Forward Validation (WFV), Model Checkpointing & Serialization, Metric Evaluation (MAPE, MAE, Dice, EMD, R²), Telemetry & Cost Observability, Pytest
- Cloud, Data & Tools: Python, Azure OpenAI, Google AI Studio, SQL, SQLite, SQLAlchemy, Pandas, NumPy, SciPy, Streamlit, Plotly, Git, GitHub, Agile Methodologies

PROJECTS
ERIA: Enterprise Multi-Agent Generative AI & Autonomous RAG Solution    Python, Groq LLaMA 3.3 70B, Multi-Agent RAG, DistilRoBERTa, Streamlit, Hugging Face
• Architected an enterprise Generative AI solution using Groq LLaMA 3.3 70B to synthesize 50+ page regulatory documents via an autonomous 4-agent workflow (Analyst, Critic, Refiner, Strategist), slashing review latency to sub-15s.
• Constructed an automated Critic LLM-as-a-Judge validation gate measuring Grounding, Consistency, and Completeness (>= 8.5/10 quality rubric), enforcing deterministic self-correction feedback loops to eliminate hallucinations.
• Integrated a local DistilRoBERTa transformer for 7-class stakeholder sentiment and risk mapping, deploying the production application on Hugging Face Spaces with automated UTF-8 sanitized PDF report generation.

CryptoCast: Deep Learning Model Lifecycle & Benchmarking Pipeline    Python, PyTorch, PatchTST, LSTM, 1D-CNN, Walk-Forward Validation, SHAP, Streamlit
• Built, trained, and evaluated a centralized PyTorch deep learning framework benchmarking 5 architectures (1D-CNN, RNN, LSTM, Transformer, PatchTST) across 5,000+ daily records under chronological Walk-Forward Validation.
• Achieved best-in-class accuracy of 2.06% MAPE at 1-day (LSTM) and 5.93% MAPE at 7-day horizons (PatchTST with RevIN); engineered domain supply features driving a $92 MAE reduction on multi-day horizons.
• Deployed an 11-page interactive Streamlit analytics studio featuring SHAP neural attribution, inferential hypothesis testing (Welch's t-test, Mann-Whitney U), and automated PyTorch model checkpointing and serialization.

Other Verified Projects: Unfoolable Lens (Azure OpenAI, 5-Agent NLP, $0.0087/run), Alveris-Geo-AI (95.98% Accuracy, Basel III Climate VaR), HuBMAP (0.6782 Dice, Swin Transformer) – available on GitHub.

PROFESSIONAL EXPERIENCE
Data Science & Machine Learning Intern — Internship Studio (Analytics & EdTech)    Jan 2026 – Feb 2026 | Remote
• Designed data ingestion, cleaning, and normalization pipelines for 14,102 wearable telemetry records, achieving 99.8% feature completeness under two-week Agile development sprints.
• Trained and evaluated a high-precision Random Forest regression model achieving R² = 0.9979 and MAE of 3.78 kcal (89.2% error reduction over baseline) to model nonlinear physiological exertion.
• Segmented user activity into 4 exertion zones using PCA and K-Means clustering (Silhouette score 0.4546), deploying an interactive Streamlit dashboard that cut reporting turnaround time by 75%.

EDUCATION
Master Data Science Program — HCL GUVI, IIT Madras Research Park Incubated    Completed Jun 2026
B.E. Civil Engineering (First Class Honors) — Rajalakshmi Engineering College, Anna Univ.    Aug 2017 – May 2021

CERTIFICATIONS
Certifications: Data Science & Analytics (HCL GUVI), Build & Deploy AI Apps with Google AI Studio, Machine Learning 101, Machine Learning & AI (HCL GUVI), Stress Management (NPTEL / IIT Kharagpur)
Languages: English (Professional), Tamil (Native)`
  },

  geo_ds: {
    file: 'resume_geospatial_ds.html',
    title: 'Geospatial Data Scientist',
    tabId: 'tabGeoDS',
    viewId: 'viewGeoDS',
    plainText: `PRAVIN KUMAR R
GEOSPATIAL DATA SCIENTIST
Location: Kurinjipadi, Tamil Nadu – 607303 | Phone: +91 88259 38327 | Email: pravinrajavel@gmail.com
LinkedIn: linkedin.com/in/pravin-kumar-ds | GitHub: github.com/pravinkumardatafreak

PROFESSIONAL SUMMARY
Geospatial Data Scientist transitioning from an engineering analytical foundation (B.E. Civil Engineering, First Class Honors), specialized in multi-sensor Earth observation, remote sensing workflows, and deep spatial intelligence. Proven expertise curating and training models across optical imagery (13-band Sentinel-2 Level-2A), SAR (Sentinel-1 InSAR subsidence), and elevation profiles (Copernicus 30m DEM), achieving 95.98% land-cover accuracy and developing physics-grounded hydraulic disaster routing. Proficient in Python, PyTorch, Rasterio, GeoPandas, OpenCV, and Scikit-Learn, with European Space Agency (EO College) certification in Machine Learning for Earth Observation.

SKILLS
- Earth Observation & Remote Sensing: Multi-Sensor Data Curation (Optical, SAR, DEM), Sentinel-2 (13 Bands, Level-2A Surface Reflectance), Sentinel-1 InSAR Subsidence, Copernicus 30m DEM, Atmospheric Correction, Orthorectification, Red Edge & SWIR Spectra
- Geospatial Tooling & Data: Rasterio, GeoPandas, GDAL Basics, OpenCV, Spatial Coordinate Systems (CRS/WGS84), Tiling & Patch Extraction, Pandas, NumPy, SciPy, SQL, SQLite
- Machine Learning & Spatial Vision: PyTorch, Swin-TransUNet, Convolutional Neural Networks (CNNs), Semantic Segmentation, Multi-Task Elastic Net, Random Forest, Monte Carlo Dropout (Spatial Uncertainty), Feature Engineering
- Evaluation & Engineering Stack: Grounding & Generalization Benchmarks, Stratified Cross-Validation, Basel III Climate VaR Framework, Streamlit, Plotly, Pytest (Unit Testing & Spatial Code Gates), Git, GitHub, Agile

PROJECTS
Alveris-Geo-AI: Multi-Sensor Earth Observation & Climate Risk Engine    Python, PyTorch, 13-Band Sentinel-2, Copernicus 30m DEM, Sentinel-1 InSAR, Streamlit, Pytest
• Architected a multi-sensor Earth observation pipeline training a 13-band Sentinel-2 PyTorch CNN on Level-2A surface reflectance tensors, achieving 95.98% classification accuracy (+15.02% over 3-band RGB) by resolving Red Edge and SWIR spectra.
• Modeled multi-decadal Sentinel-1 InSAR ground subsidence trajectories and engineered an 8-way morphological coastal flood routing algorithm on Copernicus 30m DEM, replacing planar bathtub models with physical breach hydraulics.
• Formulated an automated Basel III & SEC Climate Form 497 Value-at-Risk (VaR) framework translating spatial hazards into collateral haircuts; enforced reliability via 4 geodetic spatial code gates and 49 passed pytest unit tests (Pylint 10/10).

HuBMAP: High-Resolution Semantic Segmentation & Spatial Vision Architecture    Python, PyTorch, Swin-TransUNet, Shifted Window Self-Attention, Monte Carlo Dropout, OpenCV
• Engineered an Organ-Prompted Swin-TransUNet combining shifted-window self-attention with spatial skip connections, achieving 0.6782 Dice and 0.5131 IoU (+26.7% over classical U-Net) — architecture transferable to satellite land-cover mapping.
• Implemented Macenko optical density normalization using Beer-Lambert law and SVD matrix decomposition, eliminating cross-sensor spectral variance across large-scale high-resolution imagery.
• Constructed Monte Carlo Dropout inference to quantify pixel-level epistemic spatial uncertainty, generating calibrated confidence heatmaps to prevent false-positive boundary detections in downstream segmentation tasks.

Other Verified Projects: Soil Grain Size Estimation (55.22 OOF Weighted EMD, Multi-Task Elastic Net), CryptoCast (2.06% MAPE, PatchTST), ERIA Multi-Agent RAG (LLaMA 3.3 70B) – available on GitHub.

PROFESSIONAL EXPERIENCE
Data Science Intern — Internship Studio (Analytics & EdTech)    Jan 2026 – Feb 2026 | Remote
• Designed data ingestion, cleaning, and normalization pipelines for 14,102 wearable telemetry records, achieving 99.8% feature completeness under two-week Agile development sprints.
• Trained and evaluated a high-precision Random Forest regression model achieving R² = 0.9979 and MAE of 3.78 kcal (89.2% error reduction over baseline) to model nonlinear physiological exertion.
• Segmented user activity into 4 exertion zones using PCA and K-Means clustering (Silhouette score 0.4546), deploying an interactive Streamlit dashboard that cut reporting turnaround time by 75%.

EDUCATION
Master Data Science Program — HCL GUVI, IIT Madras Research Park Incubated    Completed Jun 2026
B.E. Civil Engineering (First Class Honors) — Rajalakshmi Engineering College, Anna Univ.    Aug 2017 – May 2021

CERTIFICATIONS
Certifications: ML for Earth Observation (EO College), Data Science & Analytics (HCL GUVI), Build & Deploy AI Apps with Google AI Studio, Machine Learning & Pandas (HCL GUVI)
Languages: English (Professional), Tamil (Native)`
  },

  target_ds: {
    file: 'resume_target_data_scientist.html',
    title: 'Data Scientist (Target in India)',
    tabId: 'tabTargetDS',
    viewId: 'viewTargetDS',
    plainText: `PRAVIN KUMAR R
DATA SCIENTIST
Location: Kurinjipadi, Tamil Nadu – 607303 | Phone: +91 88259 38327 | Email: pravinrajavel@gmail.com
LinkedIn: linkedin.com/in/pravin-kumar-ds | GitHub: github.com/pravinkumardatafreak

PROFESSIONAL SUMMARY
Data Scientist with a rigorous 4-year quantitative engineering foundation (B.E. Civil Engineering, First Class Honors), specialized in developing state-of-the-art predictive algorithms, mathematical optimization, and machine learning models at scale. Demonstrated expertise building sequence forecasting pipelines achieving 2.06% 1-day MAPE under chronological Walk-Forward Validation, and autonomous multi-agent GenAI architectures with Critic evaluation gates (>= 8.5/10 Grounding). Strong grounding in probability theory, inferential statistics (Welch's t-test, Mann-Whitney U), linear algebra, and data storytelling, dedicated to engineering maintainable, tested, and high-impact solutions for enterprise retail and supply chain decisions.

SKILLS
- Machine Learning & Optimization: Predictive Algorithms, Supervised & Unsupervised ML, Random Forest, XGBoost, Multi-Task Elastic Net, K-Means, Principal Component Analysis (PCA), Feature Engineering, Chronological Walk-Forward Validation
- Mathematics & Statistics: Probability Theory, Inferential Statistics, Hypothesis Testing (Welch's t-test, Mann-Whitney U), Linear Algebra, Matrix Decomposition, SHAP Neural Explainability
- Deep Learning, GenAI & Vision: PyTorch (Tensors, Checkpointing), Sequence Models (PatchTST, LSTMs, 1D-CNN), Groq LLaMA 3.3 70B, Multi-Agent RAG, Critic LLM-as-a-Judge, Swin Transformer Vision, OpenCV
- Programming & Software Craftsmanship: Python (OOP, Data Structures), SQL, SQLite, SQLAlchemy, Automated Testing (pytest), Code Organization, Streamlit, Plotly, Git, GitHub, Agile Methodologies

PROJECTS
CryptoCast: Multi-Horizon Predictive Sequence & Decision Engine    Python, PyTorch, PatchTST, LSTM, 1D-CNN, Walk-Forward Validation, SHAP, Streamlit
• Engineered a centralized PyTorch predictive modeling framework benchmarking 5 sequence architectures across 5,000+ daily records under chronological Walk-Forward Validation to eliminate lookahead bias.
• Achieved best-in-class accuracy of 2.06% MAPE at 1-day (LSTM) and 5.93% MAPE at 7-day horizons (PatchTST with RevIN); formulated protocol supply features driving a $92 MAE reduction on multi-day horizons.
• Deployed an 11-page interactive Streamlit analytics studio integrating SHAP neural explainability, inferential hypothesis testing (Welch's t-test, Mann-Whitney U), and automated PyTorch model checkpointing.

ERIA: Autonomous Multi-Agent Generative AI Decision Support System    Python, Groq LLaMA 3.3 70B, Multi-Agent RAG, DistilRoBERTa, Streamlit, Hugging Face
• Architected an autonomous 4-agent decision intelligence pipeline (Analyst, Critic, Refiner, Strategist) powered by Groq LLaMA 3.3 70B to synthesize 50+ page unstructured policy documents, slashing review latency to sub-15s.
• Constructed an automated Critic LLM-as-a-Judge validation gate measuring Grounding, Consistency, and Completeness (>= 8.5/10 quality rubric), triggering deterministic self-correction passes to eliminate hallucinations.
• Integrated a local DistilRoBERTa transformer for 7-class stakeholder sentiment mapping, deploying the production analytical dashboard on Hugging Face Spaces with automated UTF-8 sanitized PDF report compilation.

Other Verified Projects: HuBMAP Swin-TransUNet (0.6782 Dice, +26.7%), Soil Multi-Task Elastic Net (55.22 OOF Weighted EMD), Alveris-Geo-AI (95.98% Accuracy, Basel III Climate VaR) – available on GitHub.

PROFESSIONAL EXPERIENCE
Data Science Intern — Internship Studio (Analytics & EdTech)    Jan 2026 – Feb 2026 | Remote
• Designed data ingestion, cleaning, and normalization pipelines for 14,102 wearable telemetry records, achieving 99.8% feature completeness under two-week Agile development sprints.
• Trained and evaluated a high-precision Random Forest regression model achieving R² = 0.9979 and MAE of 3.78 kcal (89.2% error reduction over baseline) to model nonlinear physiological exertion.
• Segmented user activity into 4 exertion zones using PCA and K-Means clustering (Silhouette score 0.4546), deploying an interactive Streamlit dashboard that cut executive reporting turnaround time by 75%.

EDUCATION
Master Data Science Program — HCL GUVI, IIT Madras Research Park Incubated    Completed Jun 2026
B.E. Civil Engineering (First Class Honors) — Rajalakshmi Engineering College, Anna Univ.    Aug 2017 – May 2021

CERTIFICATIONS
Certifications: Data Science & Analytics (HCL GUVI), Build & Deploy AI Apps with Google AI Studio, Machine Learning 101, Machine Learning & AI (HCL GUVI), Stress Management (NPTEL / IIT Kharagpur)
Languages: English (Professional), Tamil (Native)`
  },

  aptiv_de: {
    file: 'resume_aptiv_data_engineer.html',
    title: 'Data Engineer (Aptiv)',
    tabId: 'tabAptivDE',
    viewId: 'viewAptivDE',
    plainText: `PRAVIN KUMAR R
DATA ENGINEER & ANALYTICS
Location: Kurinjipadi, Tamil Nadu – 607303 | Phone: +91 88259 38327 | Email: pravinrajavel@gmail.com
LinkedIn: linkedin.com/in/pravin-kumar-ds | GitHub: github.com/pravinkumardatafreak

PROFESSIONAL SUMMARY
Data Engineer transitioning from an engineering analytical foundation (B.E. Civil Engineering, First Class Honors), specialized in architecting scalable ETL pipelines, relational data modeling, and automated machine learning (AutoML) workflows. Demonstrated expertise building automated ingestion and sequence modeling pipelines achieving 2.06% 1-day forecasting MAPE, and distributed telemetry pipelines with real-time API extraction and cost observability ($0.0087/run). Proficient in Python, SQL, PostgreSQL, SQLite, SQLAlchemy, Google Cloud Platform (BigQuery, GCS), and automated testing, applying disciplined Agile methodologies to deliver reliable, optimized, and tested enterprise data solutions.

SKILLS
- Data Engineering & ETL: Scalable ETL Pipelines, Relational Data Modeling, Schema Normalization, Database Tuning & Query Optimization, Automated Data Ingestion, Data Storage Optimization
- Databases & Cloud: SQL, PostgreSQL, MySQL, SQLite, SQLAlchemy ORM, Google Cloud Platform (GCP), Google Cloud Storage (GCS), Google BigQuery, Google AI Studio, REST APIs
- Machine Learning & AutoML: Automated ML Benchmarking (AutoML), Model Selection Discipline, Chronological Walk-Forward Validation (WFV), Model Checkpointing & Serialization, PyTorch, Scikit-Learn, Random Forest, SHAP
- Analytics, Testing & Agile: Exploratory Data Analysis (EDA), Inferential Statistics (Welch's t-test, Mann-Whitney U), Automated Testing (pytest), Code Organization, Streamlit, Git, GitHub, Agile (Scrum/Kanban)

PROJECTS
CryptoCast: Automated ML Pipeline & Time-Series Data Architecture    Python, PyTorch, SQL, SQLAlchemy, Walk-Forward Validation, SHAP, Streamlit
• Engineered an automated ETL and model benchmarking pipeline processing 5,000+ daily financial records, enforcing chronological Walk-Forward Validation to eliminate lookahead bias.
• Implemented automated model selection across 5 sequence architectures, achieving 2.06% MAPE at 1-day (LSTM) and 5.93% MAPE at 7-day horizons (PatchTST with RevIN); engineered protocol supply features driving a $92 MAE reduction.
• Constructed an automated model checkpointing and serialization pipeline integrated with an 11-page Streamlit analytics studio featuring SHAP neural explainability and inferential hypothesis testing (Welch's t-test, Mann-Whitney U).

Unfoolable Lens: Distributed Telemetry & Multi-Agent Data Pipeline    Python, Azure OpenAI, GDELT DOC 2.0 API, Multi-Agent Systems, Streamlit, Pytest
• Architected an automated data ingestion and NLP pipeline integrating live GDELT DOC 2.0 external APIs, establishing typed dataclass contracts to process real-time multi-source media data.
• Constructed an end-to-end telemetry waterfall logging latency, token consumption, and per-query operational expense ($0.0087 per comprehensive run), enforcing graceful API degradation under upstream rate limits.
• Enforced production software craftsmanship by designing modular agent interfaces with 13 passed automated unit tests (pytest), deploying an interactive analytical dashboard for cross-comparative reporting.

Other Verified Projects: ERIA Multi-Agent RAG (Groq LLaMA 3.3 70B, sub-15s), Alveris-Geo-AI (95.98% Accuracy, 49 pytest tests, Pylint 10/10), HuBMAP Swin-TransUNet (0.6782 Dice) – available on GitHub.

PROFESSIONAL EXPERIENCE
Data Science & Data Engineering Intern — Internship Studio (Analytics & EdTech)    Jan 2026 – Feb 2026 | Remote
• Designed and maintained scalable ETL and preprocessing pipelines for 14,102 wearable telemetry records, executing categorical encoding and StandardScaler normalization to achieve 99.8% feature completeness under two-week Agile development sprints.
• Trained and evaluated a high-precision Random Forest regression model achieving R² = 0.9979 and MAE of 3.78 kcal (89.2% error reduction over baseline) to model nonlinear physiological exertion.
• Segmented user activity into 4 exertion zones using PCA and K-Means clustering (Silhouette score 0.4546), deploying an interactive Streamlit dashboard that cut executive reporting turnaround time by 75%.

EDUCATION
Master Data Science Program — HCL GUVI, IIT Madras Research Park Incubated    Completed Jun 2026
B.E. Civil Engineering (First Class Honors) — Rajalakshmi Engineering College, Anna Univ.    Aug 2017 – May 2021

CERTIFICATIONS
Certifications: Data Science & Analytics (HCL GUVI), Build & Deploy AI Apps with Google AI Studio, Machine Learning 101, Machine Learning & AI (HCL GUVI), Stress Management (NPTEL / IIT Kharagpur)
Languages: English (Professional), Tamil (Native)`
  }
};

function switchResume(roleKey) {
  if (!resumeDataMap[roleKey]) return;
  currentRole = roleKey;

  // Update tabs
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  const activeTab = document.getElementById(resumeDataMap[roleKey].tabId);
  if (activeTab) activeTab.classList.add('active');

  // Update in-page resume view
  document.querySelectorAll('.resume-view').forEach(view => view.classList.remove('active'));
  const activeView = document.getElementById(resumeDataMap[roleKey].viewId);
  if (activeView) activeView.classList.add('active');

  // Update standalone link
  const openBtn = document.getElementById('hubOpenBtn');
  if (openBtn) {
    openBtn.href = resumeDataMap[roleKey].file;
  }
}

function printCurrentResume() {
  // Direct window.print() prints the active view cleanly without iframe security hurdles
  window.print();
}

function copyCurrentATS() {
  const data = resumeDataMap[currentRole];
  if (!data) return;

  navigator.clipboard.writeText(data.plainText).then(() => {
    const btn = document.getElementById('hubCopyBtn');
    if (!btn) return;
    const originalHtml = btn.innerHTML;
    btn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Copied (${data.title})!`;
    btn.style.background = '#059669';

    setTimeout(() => {
      btn.innerHTML = originalHtml;
      btn.style.background = '';
    }, 2500);
  }).catch(err => {
    console.error('Failed to copy: ', err);
    window.prompt("Copy ATS Text (Ctrl+C, Enter):", data.plainText);
  });
}

function copyStandaloneATS(roleKey) {
  currentRole = roleKey;
  copyCurrentATS();
}

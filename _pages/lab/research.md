---
layout: lab
title: Research
permalink: /lab/research/
---

{% include lab/compact_bib.liquid %}

<style>
/* Hide default page title */
.post-header { display: none; }

/* Lab header */
.lab-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}
.lab-hero img {
  max-width: 450px;
  width: 100%;
  height: auto;
}
.lab-hero .lab-name {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}

/* Page width (nav, content, footer); thrust titles may wrap to two lines */
.container { max-width: 1280px; }

/* Card grid */
.research-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin: 1.5rem 0;
}
@media (max-width: 768px) {
  .research-grid { grid-template-columns: 1fr; }
}

.research-card {
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  border: 1px solid #e9ecef;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.research-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0,0,0,0.15);
}

.research-card.active {
  border-color: #2196F3;
  box-shadow: 0 4px 15px rgba(33,150,243,0.25);
  transform: translateY(0);
}

html[data-theme="dark"] .research-card {
  background: #1e1e2e;
  border-color: #333;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}
html[data-theme="dark"] .research-card:hover {
  box-shadow: 0 12px 30px rgba(0,0,0,0.5);
}
html[data-theme="dark"] .research-card.active {
  border-color: #64b5f6;
  box-shadow: 0 4px 15px rgba(100,181,246,0.3);
}

.research-card .card-image {
  width: 100%;
  overflow: hidden;
  background: #ffffff;
}
html[data-theme="dark"] .research-card .card-image {
  background: #ffffff;
}

.research-card .card-image img {
  width: 100%;
  height: auto;
  display: block;
}

.research-card .card-body {
  padding: 1.2rem 1.3rem;
  flex: 1;
}

.research-card .card-title {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.research-card .card-tagline {
  font-size: 0.88rem;
  color: #6c757d;
  margin: 0;
  line-height: 1.4;
}
html[data-theme="dark"] .research-card .card-tagline {
  color: #999;
}

/* Expandable detail panel */
.research-detail {
  display: none;
  margin-top: 1.5rem;
  padding: 1.5rem 1.8rem;
  background: #f8f9fa;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  animation: slideDown 0.3s ease;
  font-size: 0.95rem;
}
html[data-theme="dark"] .research-detail {
  background: #1e1e2e;
  border-color: #333;
}
.research-detail.visible {
  display: block;
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.research-detail .detail-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.8rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid #e0e0e0;
}
html[data-theme="dark"] .research-detail .detail-header {
  border-bottom-color: #444;
}

.research-detail .detail-header h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.research-detail .detail-close {
  cursor: pointer;
  font-size: 1.2rem;
  color: #aaa;
  background: none;
  border: none;
  padding: 0 0.2rem;
  line-height: 1;
  flex-shrink: 0;
  margin-left: 1rem;
}
.research-detail .detail-close:hover {
  color: #333;
}
html[data-theme="dark"] .research-detail .detail-close:hover {
  color: #ccc;
}

.research-detail .detail-description {
  margin-bottom: 0.8rem;
  line-height: 1.65;
  color: #444;
}
html[data-theme="dark"] .research-detail .detail-description {
  color: #bbb;
}

.research-detail .pub-section-label {
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #888;
  margin-bottom: 0;
}
.research-detail .publications.compact-bib {
  margin-top: 0;
  padding-top: 0;
}
.research-detail .compact-bib h2.bibliography {
  margin: 0;
  padding: 0;
  line-height: 0;
}
html[data-theme="dark"] .research-detail .pub-section-label {
  color: #777;
}
</style>

<div class="lab-hero">
  <img src="{{ '/assets/img/lab/tams-logo.png' | relative_url }}" alt="TAMS Lab">
  <div class="lab-name">Trustworthy Autonomous Mobility System Lab</div>
</div>

**TAMS Lab studies the path from advances in AI to real-world autonomy**, bridging frontier AI models and autonomous systems that can operate safely and reliably in open-world environments shared with people. Moving AI into the physical world requires more than capable models. It requires coupling AI with sensing, decision-making, and control under real-time constraints, physical uncertainty, limited onboard computing, and continual interaction with people and other agents. **We approach deployment as a continuous cycle: build systems that can act in real time, evaluate their readiness for target deployment conditions, and adapt them after deployment as environments, tasks, and human objectives change.** Across this cycle, we develop fundamental and practical methods at the intersection of AI, robotics, and control, with focal applications in autonomous driving, social robot navigation, and manipulation.

<div class="research-grid">
  {% for area in site.data.lab_research %}
  <div class="research-card" data-target="detail-{{ area.keywords_tag }}" onclick="toggleDetail(this, 'detail-{{ area.keywords_tag }}')">
    <div class="card-image">
      {% if area.image %}
      <img src="{{ area.image | prepend: '/assets/img/lab/research/' | relative_url }}" alt="{{ area.title }}">
      {% endif %}
    </div>
    <div class="card-body">
      <h3 class="card-title">{{ area.title }}</h3>
      <p class="card-tagline">{{ area.tagline }}</p>
    </div>
  </div>
  {% endfor %}
</div>

<!-- Developing Physical AI Systems for Real-Time Autonomy detail -->
<div class="research-detail" id="detail-realtime">
  <div class="detail-header">
    <h3>Developing Physical AI Systems for Real-Time Autonomy</h3>
    <button class="detail-close" onclick="closeDetail()">&times;</button>
  </div>
  <div class="detail-description">
    <p>Frontier AI models offer powerful capabilities for perception, reasoning, and action, but their computation can be too slow and unpredictable for physical systems with limited onboard resources. A robot cannot pause the world while waiting for inference or communication to finish. <strong>We co-design AI models and closed-loop control systems so delayed reasoning, asynchronous execution, and limited computing are treated as part of the autonomy problem.</strong> The goal is not simply faster inference, but reliable closed-loop behavior while the physical and social environment continues to change.</p>
  </div>
  <div class="pub-section-label">Selected Publications</div>
  <div class="publications compact-bib">
    {% bibliography --query @*[keywords=realtime]* %}
  </div>
</div>

<!-- Evaluation and Validation for Trustworthy Deployment detail -->
<div class="research-detail" id="detail-evaluation">
  <div class="detail-header">
    <h3>Evaluation and Validation for Trustworthy Deployment</h3>
    <button class="detail-close" onclick="closeDetail()">&times;</button>
  </div>
  <div class="detail-description">
    <p>Reliable and efficient evaluation remains a key bottleneck to deploying physical AI systems in open-world environments. A single aggregate score or a small set of real-world tests cannot establish readiness across diverse operating conditions. <strong>We integrate generative simulation, sample-efficient evaluation and diagnosis, and human-interaction benchmarks into a unified validation pipeline.</strong> This pipeline uses limited real-world data efficiently, expands coverage beyond observed conditions, and exposes risks hidden by aggregate metrics. Together, these components provide practitioners and stakeholders with evidence for informed deployment decisions.</p>
  </div>
  <div class="pub-section-label">Selected Publications</div>
  <div class="publications compact-bib">
    {% bibliography --query @*[keywords=evaluation]* %}
  </div>
</div>

<!-- Continual and Personalized Adaptation from Deployment Experience detail -->
<div class="research-detail" id="detail-adaptation">
  <div class="detail-header">
    <h3>Continual and Personalized Adaptation from Deployment Experience</h3>
    <button class="detail-close" onclick="closeDetail()">&times;</button>
  </div>
  <div class="detail-description">
    <p>No fixed policy can anticipate every environment, task, or user objective it will encounter after deployment. <strong>We develop model-based planning, residual reinforcement learning, and continual learning for targeted policy adaptation.</strong> Human interventions guide personalized updates, while policy composition reuses existing capabilities for new tasks. Together, these methods support adaptation at multiple timescales, from online refinement of robot behavior to continual updates of foundation-model-based policies.</p>
  </div>
  <div class="pub-section-label">Selected Publications</div>
  <div class="publications compact-bib">
    {% bibliography --query @*[keywords=adaptation]* %}
  </div>
</div>

<script>
function toggleDetail(card, targetId) {
  var detail = document.getElementById(targetId);
  var allDetails = document.querySelectorAll('.research-detail');
  var allCards = document.querySelectorAll('.research-card');
  var isVisible = detail.classList.contains('visible');

  // Close all
  allDetails.forEach(function(d) { d.classList.remove('visible'); });
  allCards.forEach(function(c) { c.classList.remove('active'); });

  // Toggle clicked
  if (!isVisible) {
    detail.classList.add('visible');
    card.classList.add('active');
    setTimeout(function() {
      detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 50);
  }
}

function closeDetail() {
  document.querySelectorAll('.research-detail').forEach(function(d) { d.classList.remove('visible'); });
  document.querySelectorAll('.research-card').forEach(function(c) { c.classList.remove('active'); });
}
</script>

<br>
For a complete list of publications, visit the [Publications](/lab/publications/) page.

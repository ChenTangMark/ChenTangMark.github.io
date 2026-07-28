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
  height: 140px;
  width: auto;
}
.lab-hero .lab-name {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}

/* Card grid */
.research-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
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
  height: 200px;
  overflow: hidden;
  background: #e9ecef;
}
html[data-theme="dark"] .research-card .card-image {
  background: #2a2a3c;
}

.research-card .card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.research-card:hover .card-image img {
  transform: scale(1.05);
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

Our research focuses on enabling the **safe deployment of learning-based autonomous systems interacting with humans**. We study challenges across the deployment pipeline: evaluating systems before deployment, building adaptive autonomy for human environments, and integrating autonomous systems into infrastructure networks.

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

<!-- Evaluation detail -->
<div class="research-detail" id="detail-evaluation">
  <div class="detail-header">
    <h3>Evaluating Autonomous Systems Before Deployment</h3>
    <button class="detail-close" onclick="closeDetail()">&times;</button>
  </div>
  <div class="detail-description">
    <p>Autonomous systems must operate safely in complex human environments, but real-world testing is limited and risky. We develop scalable evaluation methods — including <strong>generative simulation</strong> for interactive environments, <strong>diffusion models</strong> for trajectory prediction and scenario generation, and <strong>off-policy evaluation</strong> techniques — to rigorously assess autonomous system performance before deployment. We also build <strong>benchmarks and datasets</strong> for driving reasoning to enable standardized evaluation across the community.</p>
  </div>
  <div class="pub-section-label">Selected Publications</div>
  <div class="publications compact-bib">
    {% bibliography --query @*[keywords=evaluation]* %}
  </div>
</div>

<!-- Adaptation detail -->
<div class="research-detail" id="detail-adaptation">
  <div class="detail-header">
    <h3>Adaptive Autonomy for Human Environments</h3>
    <button class="detail-close" onclick="closeDetail()">&times;</button>
  </div>
  <div class="detail-description">
    <p>Learning-based autonomous systems must adapt to human behavior, safety constraints, and changing objectives during deployment. We develop methods that combine <strong>residual reinforcement learning</strong> with control theory for online policy customization, enable <strong>offline-to-online RL</strong> for safe deployment, and leverage <strong>imitation learning</strong> from human demonstrations. Our work also explores how <strong>foundation models</strong> can operate under real-time control constraints to produce robust, human-aware autonomy.</p>
  </div>
  <div class="pub-section-label">Selected Publications</div>
  <div class="publications compact-bib">
    {% bibliography --query @*[keywords=adaptation]* %}
  </div>
</div>

<!-- Infrastructure detail -->
<div class="research-detail" id="detail-infrastructure">
  <div class="detail-header">
    <h3>Autonomous Systems in Infrastructure Networks</h3>
    <button class="detail-close" onclick="closeDetail()">&times;</button>
  </div>
  <div class="detail-description">
    <p>When autonomous systems deploy at scale, they interact with large-scale transportation and infrastructure systems. We study how autonomous agents affect and integrate into these networks through <strong>cooperative autonomous driving</strong> via language communication, <strong>infrastructure-aware autonomy</strong>, and <strong>system-level optimization</strong> for safety and efficiency in human-AI mobility systems.</p>
  </div>
  <div class="pub-section-label">Selected Publications</div>
  <div class="publications compact-bib">
    {% bibliography --query @*[keywords=infrastructure]* %}
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

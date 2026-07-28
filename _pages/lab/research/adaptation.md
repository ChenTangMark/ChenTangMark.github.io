---
layout: lab
title: "Adaptive Autonomy for Human Environments"
permalink: /lab/research/adaptation/
---

{% include lab/compact_bib.liquid %}

<a href="/lab/research/" class="research-back-link">&larr; Back to Research Overview</a>

Learning-based autonomous systems must adapt to human behavior, safety constraints, and changing objectives during deployment. We develop methods that combine **residual reinforcement learning** with control theory for online policy customization, enable **offline-to-online RL** for safe deployment, and leverage **imitation learning** from human demonstrations. Our work also explores how **foundation models** can operate under real-time control constraints to produce robust, human-aware autonomy.

### Selected Publications

<div class="publications compact-bib">
  {% bibliography --query @*[keywords=adaptation]* %}
</div>

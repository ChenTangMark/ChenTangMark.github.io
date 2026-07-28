---
layout: lab
title: Photos
permalink: /lab/photos/
---

<div class="photo-gallery">
  {% if site.data.lab_photos.gallery and site.data.lab_photos.gallery.size > 0 %}
    <div class="gallery-grid">
      {% for photo in site.data.lab_photos.gallery %}
        <div class="gallery-item">
          <img src="{{ photo.image | prepend: 'assets/img/lab/gallery/' | relative_url }}" alt="{{ photo.caption }}">
          {% if photo.caption %}
            <div class="gallery-caption">
              {{ photo.caption }}
              {% if photo.date %}
                <br><small>{{ photo.date | date: "%B %Y" }}</small>
              {% endif %}
            </div>
          {% endif %}
        </div>
      {% endfor %}
    </div>
  {% else %}
    <p style="text-align: center; color: var(--global-text-color-light); padding: 3rem 0;">
      <em>Photos coming soon!</em>
    </p>
  {% endif %}
</div>

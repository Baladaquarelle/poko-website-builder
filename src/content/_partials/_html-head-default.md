<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="generator" content="{{ eleventy.generator }}" />
<meta name="generator" content="poko" />

{# Metadata #}
{% include "_metadata-default.md" ignore missing %}
{% include "_metadata.md" ignore missing %}

{# Alternate langs #}
{% for link in templateTranslations %}

<link rel="alternate" hreflang="{{link.lang}}" href="{{baseUrl}}{{link.url}}" />
{% if link.isDefault %}
<link rel="alternate" hreflang="x-default" href="{{baseUrl}}{{link.url}}" />
{% endif %}

{% endfor %}

{# Favicons #} {# TODO: Generate favicons, manifest, etc #}

{# HTML head injection #}

{% partial "_html-head.md" %}
{{ globalSettings.htmlHead | safe }}
{# {% getBundle "html", "head" %} #}

{# Internal CSS: E-mail obfuscation + CSS head injection (from globalSettings) + bundle #}

{{htmlExternalCssFiles | safe}}

<link rel="stylesheet" href="{% getBundleFileUrl 'css', 'external' %}">

<style>
{{ globalSettings.cssHead | safe }}
{% getBundle "css" %}
</style>

{# JS: detection + bundle #}

<script>
(function(H){H.className=H.className.replace(/\bno-js\b/,'js')})(document.documentElement)
{% getBundle "js" %}
</script>

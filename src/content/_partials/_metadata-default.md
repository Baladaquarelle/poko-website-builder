{# TODO: Improve metadata #}
{% set metaImage = metadata.image.src or metadata.image %}

<meta property="og:site_name" content="{{ env.SITE_NAME }}" />

<title>{{ metadata.title }}</title>
<meta property="og:title" content="{{ metadata.title }}" />

{% if metadata.description %}

<meta name="description" content="{{ metadata.description }}" />
<meta property="og:description" content="{{ metadata.description }}" />
{% endif %}

{% if metadata.author %}

<meta name="author" content="{{ metadata.author }}" />
{% endif %}

{% if metaImage %}

<meta name="image" content="{{ metaImage | ogImage }}" />
<meta property="twitter:image" content="{{ metaImage | ogImage }}" />
<meta property="og:image" content="{{ metaImage | ogImage }}" />
<meta property="og:image:url" content="{{ metaImage | ogImage }}" />
<meta property="og:image:secure_url" content="{{ metaImage | ogImage }}" />
{# TODO: image properties #}
{# <meta property="og:image:type" content="image/jpeg" />
<meta property="og:image:width" content="400" />
<meta property="og:image:height" content="300" />
<meta property="og:image:alt" content="A shiny red apple with a bite taken out" /> #}
{% endif %}

<link rel="canonical" href="{{ metadata.canonicalUrl or env.PROD_URL + page.url }}" />
<meta property="og:url" content="{{ metadata.canonicalUrl or env.PROD_URL + page.url }}" />

{# TODO: Updated time #}
{# <meta property="og:updated_time" content="2023-12-11T00:00:00Z"> #}

{# TODO: more specific page type #}

<meta property="og:type" content="website" />

{# Example from https://w3things.com/blog/open-graph-meta-tags/ #}
{#

<meta name="title" property="og:title" content="Moving W3Things from WordPress to 11ty (Eleventy)">
<meta name="description" property="og:description" content="Migrating W3Things from WordPress to 11ty (Eleventy) static site generator. Sharing the site transfer experience and more.">
<meta name="author" content="Danial Zahid">

<meta name="image" property="og:image" content="https://w3things.com/blog/moving-w3things-from-wordpress-to-11ty/media/moving-w3things-from-wordpress-to-11ty.png">
<meta property="og:image:secure_url" content="https://w3things.com/blog/moving-w3things-from-wordpress-to-11ty/media/moving-w3things-from-wordpress-to-11ty.png">
<meta property="og:image:type" content="image/png">
<meta property="og:image:alt" content="Moving W3Things from WordPress to 11ty (Eleventy)">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="en_US">
<meta property="og:site_name" content="W3Things">
<meta property="og:type" content="article">
<meta property="og:url" content="https://w3things.com/blog/moving-w3things-from-wordpress-to-11ty/">
<meta property="og:updated_time" content="2023-12-11T00:00:00Z">

<meta property="article:publisher" content="https://www.facebook.com/w3things/">
<meta property="article:author" content="https://www.facebook.com/iamdanialzahid">
<meta property="article:published_time" content="2023-12-10T18:00:00Z">
<meta property="article:modified_time" content="2023-12-11T00:00:00Z">
<meta property="article:section" content="Site News">
<meta property="article:tag" content="Eleventy">
<meta property="article:tag" content="JavaScript">
<meta property="article:tag" content="SEO">
<meta property="article:tag" content="Website Optimization">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@w3things">
<meta name="twitter:creator" content="iamdanialzahid">
<meta name="twitter:title" content="Moving W3Things from WordPress to 11ty (Eleventy)">
<meta name="twitter:description" content="Migrating W3Things from WordPress to 11ty (Eleventy) static site generator. Sharing the site transfer experience and more.">
<meta name="twitter:image" content="https://w3things.com/blog/moving-w3things-from-wordpress-to-11ty/media/moving-w3things-from-wordpress-to-11ty.png">
<meta name="twitter:image:alt" content="Moving W3Things from WordPress to 11ty (Eleventy)">
#}

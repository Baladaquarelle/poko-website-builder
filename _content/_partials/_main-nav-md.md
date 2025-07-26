{% set navPages = collections.all | filterCollection({ by: 'lang', value:
lang }) | eleventyNavigation %}
{% if navPages | length %}

<header class="full-bleed-before">
    <nav>
    <!-- Main pages navigation -->
    {% if navPages[0].key == 'pages' and navPages[0].order == -1 and globalSettings.logo %}
    <div class="nav-logo">
        {# prettier-ignore #}
        <a
        href="{{navPages[0].url}}"
        hreflang="{{navPages[0].lang}}"
        {% if navPages[0].url == page.url %}aria-current="page"{% endif %}
        >
        <img
            src="{{navPages[0].data.globalSettings.logo}}"
            alt="{{navPages[0].title}}"
            width="100"
        />
        </a>
    </div>
    {% endif %}
    <ul role="list" id="main-nav" class="reel scroll-shadows-horizontal">
        {% for link in navPages %}
        {# prettier-ignore #}
        {% if link.key == 'pages' and link.order == -1 and link.data.globalSettings.logo %}
        {# Extract logo out of main list #}
        {% else %}
        <li>
        {# prettier-ignore #}
        <a
            href="{{link.url}}"
            hreflang="{{link.lang}}"
            {% if link.url == page.url %}aria-current="page"{% endif %}
            >{{link.title}}</a
        >
        </li>
        {% endif %}
        {% endfor %}
    </ul>

    </nav>
    <!-- Language navigation -->
    {% if page.url | locale_links | length %}
    {% include "lang-nav-details.njk" %}
    {% endif %}

</header>
{% endif %}

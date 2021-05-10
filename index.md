## General
This site is under construction

## Links
- [Test site with `Vue 3 + TypeScript + Vite`](/vite-test/) (by GitHub Pages)
  - and also deployed to:
    - [https://boring-booth-95cb46.netlify.app](https://boring-booth-95cb46.netlify.app) (by Netlify)
    - [https://vite-test.firebaseapp.com](https://vite-test.firebaseapp.com) (by Firebase)
  - This is **public** repo -> [https://github.com/ike1z/vite-test](https://github.com/ike1z/vite-test)
- [Test site with `Svelte + TypeScript + Vite`](/svelte-test/) (by GitHub Pages)
  - This is **private** repo -> [https://github.com/ike1z/svelte-test](https://github.com/ike1z/svelte-test)


---

{{ site.name }}

---

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

# PardeshiGroups official website

Static HTML5 / CSS3 / Vanilla JavaScript website. No build command, framework, API key, or backend required.

## Folder structure

```
PardeshiGroups/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── logo.png
    └── founder.png
```

## Run locally

1. Open the `PardeshiGroups` folder in VS Code.
2. Install/use the Live Server extension and select **Open with Live Server** on `index.html` (or open `index.html` directly in a browser).
3. Check mobile layout, menu, theme toggle, and anchor links.

## Customize

- Edit text in `index.html`.
- Edit palette and layout in `style.css`.
- In `script.js`, fill in `CONFIG.email`, `github`, `linkedin`, `instagram`, `founderGithub`, and `founderLinkedin` with actual valid links. Empty entries are automatically hidden.
- To show projects, add real projects to `CONFIG.projects`. Example:

```js
{
  name: 'Actual project name',
  description: 'What this project does',
  image: 'assets/project-image.png',
  stack: ['HTML', 'CSS', 'JavaScript'],
  github: 'https://github.com/YOUR_USERNAME/REPOSITORY',
  demo: 'https://YOUR-DEPLOYED-PROJECT.example'
}
```

- Replace the existing images in `assets/` if desired, keeping their names.
- Open Graph image uses a relative path; after obtaining a real production domain, replace with an absolute HTTPS URL for more reliable social previews.

## GitHub

1. Create a new GitHub repository named `PardeshiGroups` (leave it empty).
2. In the project directory, run:

```bash
git init
git add .
git commit -m "Launch PardeshiGroups website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/PardeshiGroups.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username and authenticate as prompted.

## Vercel

1. Visit https://vercel.com/new and import the GitHub repository.
2. Choose **Other** as the framework preset if prompted.
3. Set Root Directory to `./` (repository root).
4. Leave Build Command blank / disabled, and use the repository root as output directory (`.`) if prompted.
5. No environment variables are needed. Click **Deploy**.
6. Future pushes to the connected main branch will trigger deployments.

## Notes

- There is no contact form because functional server-side delivery is not configured; email uses `mailto:` when a real address is supplied.
- No fictional projects, clients, employees, or statistics are included.
- Fonts load from Google Fonts with local fallbacks.

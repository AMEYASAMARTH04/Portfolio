# My Portfolio

A simple, responsive portfolio site (HTML, CSS, JavaScript) with dark mode and project detail pop-ups.

## Customize

1. **Projects and skills**: open `script.js` and edit the `projects` and `skills` lists at the top.
2. **Name, about text, email, social links**: open `index.html` and replace the placeholder text
   ("Your Name", `you@example.com`, `your-username`).
3. **Colors**: change the variables at the top of `style.css`.

Preview locally by double-clicking `index.html`.

## Host on GitHub Pages

1. Create a new repository on GitHub. For a main site named `your-username.github.io`,
   name the repo exactly `your-username.github.io`.
2. Upload `index.html`, `style.css`, `script.js` and `README.md`
   (on GitHub: **Add file → Upload files**), then commit.
3. Go to **Settings → Pages**. Under **Build and deployment**, set Source to
   **Deploy from a branch**, choose branch **main** and folder **/ (root)**, then Save.
4. After a minute or two your site will be live at `https://your-username.github.io`.

Using git from the terminal instead:

```bash
git init
git add .
git commit -m "Add portfolio site"
git branch -M main
git remote add origin https://github.com/your-username/your-username.github.io.git
git push -u origin main
```

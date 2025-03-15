---
title: "Fonts in NextJS"
description: "How NextJS optimizes fonts in your app"
date: "2025-03-16"
---

When custom fonts are used in a web application, they typically do not display immediately upon the user's first browser request. Instead, the browser will use a fallback or system font until the custom fonts are fully loaded. This process can lead to a layout shift, where the text size, spacing, or even the entire layout changes, causing elements around it to shift.

While this is a common mechanism, it can negatively impact performance and user experience. One way to mitigate this issue is by hosting custom font files alongside other static assets. However, there are scenarios where the font files may not be readily available, such as when they are hosted externally or when using web font services that require script registration.

Next.js addresses these challenges by automatically optimizing fonts in your application through the `next/font` module. This module downloads the font files **at build time** and hosts them with your other **static assets**. As a result, when a user visits your app, there are **no additional network requests** for fonts, which significantly improves performance and reduces layout shifts.

Additionally, Next.js provides features such as:
- **Font Subsetting**: Only the characters used in your application are included, reducing file size.
- **Automatic Font Loading**: Fonts are loaded in a way that minimizes blocking of rendering, enhancing the perceived performance of your app.
- **Support for Variable Fonts**: This allows for more flexibility and reduced file sizes by using a single font file that can adjust to different styles and weights.

By leveraging these optimizations, Next.js ensures a smoother and more efficient experience for users when it comes to font rendering.


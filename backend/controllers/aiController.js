const { GoogleGenAI } = require('@google/genai');

const generateWebsite = async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ message: 'Prompt is required' });
        }

        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
             return res.status(500).json({ message: 'GEMINI_API_KEY is not configured in backend' });
        }

        const ai = new GoogleGenAI({ apiKey });

        const text_prompt = `You are an expert frontend developer and UI/UX designer. The user will provide a detailed prompt describing what kind of website they want. Based on the user’s description, generate a fully working, production-ready website as a **single HTML file**. Use only **HTML, Tailwind CSS (via CDN)**, vanilla JavaScript, and GSAP (via CDN).

Strict output rules:
- Return the website as a single fenced Markdown code block with the language tag \`\`\`html.
- Do NOT include any explanations, text, or extra code blocks outside that single block. Only the HTML file content.

Technical requirements:
1. **Stack**: HTML + Tailwind CSS (via CDN) + vanilla JavaScript + GSAP (via CDN). Everything in one file.
2. **Responsive**: Must be fully responsive (mobile, tablet, desktop) with modern grid and flex layouts.
3. **Theme**: Default **dark mode**, but if the website type fits better in light mode, auto-select light mode. Include a **toggle button** to switch between dark and light themes.
4. **Animations & Interactions**:
    - GSAP scroll-based animations (fade, slide, stagger, parallax).
    - Smooth hover effects with scale, shadow, and gradient transitions.
    - Sticky navbar with subtle shadow on scroll.
    - Animated gradient backgrounds or floating decorative shapes.
5. **Visual richness**:
    - Use high-quality **royalty-free images** (Unsplash via direct URLs).
    - Apply **soft shadows, glassmorphism, or neumorphism** effects where suitable.
    - Modern cards, rounded corners, gradient buttons, hover animations.
6. **UI Sections** (as per user request):
    - Sticky **Navbar** with logo + links + theme toggle.
    - **Hero section** with headline, subheadline, CTA button, and background image/gradient.
    - **Main content**: features grid, product showcase, gallery, blog cards, or whatever fits user’s request.
    - **Call to Action** with strong button.
    - **Footer** with the text: "Made with WebBuilder"
7. **Code quality**: Clean, semantic HTML5, ARIA labels for accessibility, well-indented, professional Tailwind usage.
8. **Performance**: Optimized. No external CSS/JS frameworks beyond Tailwind + GSAP. Use responsive images, gradients, inline SVGs, or Unsplash placeholders.

Final instruction: Output only the single fenced Markdown code block with the full HTML file content. Nothing else.

Website prompt: ${prompt}`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: text_prompt,
        });

        const generatedText = response.text ? response.text() : "";
        res.status(200).json({ result: generatedText });

    } catch (error) {
        console.error("AI Generation Error:", error);
        res.status(500).json({ message: 'AI Generation Failed', error: error.message });
    }
};

module.exports = { generateWebsite };

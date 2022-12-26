import * as HighlightJs from 'highlight.js';
import * as MarkdownIt from 'markdown-it';
import * as MarkdownItTexMath from 'markdown-it-texmath';
import * as Katex from "katex";

export const BlogContentTypes = {
    HTML: "html",
    Markdown: "markdown"
}

const hljs = HighlightJs.default;

const markdownIt = new MarkdownIt({
    html: true,
    highlight: (str, lang) => {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return `<pre class="hljs" style="padding: 10px;"><code>${hljs.highlight(str, {language: lang}).value}</code></pre>`;
            } catch (_) {
            }
        }
        return '';
    }
});

markdownIt.use(MarkdownItTexMath, {
    engine: Katex.default,
    delimiters: 'dollars',
    katexOptions: {
        macros: {
            "\\RR": "\\mathbb{R}"
        }
    }
});

console.log(markdownIt.render('$a$'))

const markdownParser = (content) => {
    return markdownIt.render(content);
}

export const parseBlogContent = (content, contentType) => {
    switch (contentType) {
        case BlogContentTypes.Markdown:
            return markdownParser(content);
        case BlogContentTypes.HTML:
        default:
            return content;
    }
}
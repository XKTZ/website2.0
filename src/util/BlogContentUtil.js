import * as HighlightJs from 'highlight.js';
import * as MarkdownIt from 'markdown-it';

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
                return hljs.highlight(str, {
                    language: lang
                }).value;
            } catch (_) {}
        }
        return '';
    }
});

const markdownParser = (content) => {
    return markdownIt.render(content);
}

export const parseBlogContent = (content, contentType) => {
    switch (contentType) {
        case BlogContentTypes.HTML:
        default:
            return content;
        case BlogContentTypes.Markdown:
            return markdownParser(content);
    }
}
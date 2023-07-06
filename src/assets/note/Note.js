const noteTitleToURL = (title) => {
    return title.split(' ').map(x => x.toLowerCase()).join('-')
}

export class NoteDefinition {
    id
    title
    urlTitle
    paths
    content
    contentType
    category
    reference

    constructor({title, paths, content, contentType, category, reference}) {
        this.title = title;
        this.urlTitle = noteTitleToURL(this.title);
        this.paths = paths;
        this.content = content;
        this.contentType = contentType;
        this.category = category;
        this.reference = reference;
    }

    idWith(id) {
        this.id = id;
        return this;
    }
}

const trim = (s, c) => {
    let st = 0, ed = s.length - 1;
    while (st <= ed && s[st] === c) {
        st++;
    }
    while (ed >= st && s[ed] === c) {
        ed--;
    }
    if (st > ed) {
        return '';
    } else {
        return s.substring(st, ed + 1);
    }
}

export const codeBlockOf = (lang, code) => trim(`
${'```'}${lang}
${trim(code, '\n')}
${'```'}
`, '\n')

export const imgOf = (url, alt = '') => `![${alt}](${url})`

export const urlOf = (url, alt = '') => `[${alt}](${url})`

export const NotePaths = {
    AI: ["Artificial Intelligence"]
}

export const BlogTags = {
    AI: "Artificial Intelligence"
}
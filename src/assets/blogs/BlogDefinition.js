export class BlogDefinition {
    title
    paths
    content
    contentType
    tags
    createDate
    updateDate

    constructor({title, paths, content, contentType, tags, createDate, updateDate}) {
        this.title = title;
        this.paths = paths;
        this.content = content;
        this.contentType = contentType;
        this.tags = tags;
        this.createDate = createDate;
        this.updateDate = updateDate;
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

export const imgOf = (url, alt = '') => `![${alt}]({url})`

export const BlogPaths = {
    AI: ["Artificial Intelligence"],
    Pytorch: ["Artificial Intelligence", "Pytorch"],
    SoftwareDevelopment: ["Software Development"],
    Hibernate: ["Software Development", "Hibernate"]
}

export const BlogTags = {
    AI: "Artificial Intelligence",
    Pytorch: "Pytorch"
}
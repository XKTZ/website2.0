import {ref} from "vue";

const routerLink = (name, path) => {
    return {
        router: true,
        name,
        path
    }
}

const externalLink = (name, path) => {
    return {
        router: false,
        name,
        path
    }
}

export const subpages = [
    routerLink("Home", "/"),
    routerLink("Projects", "/projects"),
    routerLink("Blogs", "/blogs"),
    routerLink("Skills", "/skills"),
    routerLink("Achievements", "/achievements"),
    externalLink("Resume", `${require("@/assets/resume.pdf").default}`)
];
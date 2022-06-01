import {ref} from "vue";

function linkOf(name, img, link) {
    return {
        name,
        img,
        link
    }
}

export const externalLinks = ref([
    linkOf("Markham, ON", "img/map_location.svg", ""),
    linkOf("Github", "img/github.svg", "https://github.com/XKTZ"),
    linkOf("Linkedin", "img/linkedin.svg", "https://www.linkedin.com/in/yidi-chen-a5a1a822a/"),
    linkOf("Email", "img/message.svg", "mailto:ericchenxktz@gmail.com")
]);
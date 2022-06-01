import {ref} from "vue";

const projectOf = (name, desc, img, link) => {
    return {name, desc, img, link}
}

export const projects = ref([
    projectOf(
        "Xkamework",
        "A java inverse of controlling framework supporting dependency injection",
        "img/projects/xkamework.png",
        "https://github.com/XKTZ/xkamework"
    ),
    projectOf(
        "Game Of Generals",
        "A game of generals game written in java, able to play in local area network",
        "img/projects/game_of_generals.png",
        "https://github.com/XKTZ/cpt-game-of-generals"
    ),
    projectOf(
        "Website1.0",
        "My website 1.0 version written in Java, Springboot, Vue3, Element-Plus, and MySQL",
        "img/projects/website1.0.png",
        "https://github.com/XKTZ/website",
    ),
    projectOf(
        "Website2.0",
        "My website 2.0 version written in Vue3 and Element-Plus",
        "img/projects/website2.0.png",
        "https://github.com/XKTZ/website2.0"
    ),
    projectOf(
        "Starcraft2 Process Helper",
        "A Java & JavaFX program helping record the buildling process in starcraft-2",
        "img/projects/sc2_helper.png",
        "https://github.com/XKTZ/sc2-process"
    )
])
import {ref} from "vue";

const projectOf = (name, desc, img, link) => {
    return {name, desc, img, link}
}

export const projects = ref([
    projectOf(
        "Xkamework",
        "A java inverse of controlling framework supporting dependency injection",
        "projects/xkamework.png",
        "https://github.com/XKTZ/xkamework"
    ),
    projectOf(
        "Neural Network in Numpy",
        "A library built in Numpy for supporting the deep learning neural network",
        "projects/numpy_nn.png",
        "https://github.com/XKTZ/mlp-in-numpy"
    ),
    projectOf(
        "Email Manager",
        "An email manager intended to make email management similar to accessing in a file explorer",
        "projects/email_manager.png",
        "https://github.com/XKTZ/email-manager"
    ),
    projectOf(
        "Game Of Generals",
        "A game of generals game written in java, able to play in local area network",
        "projects/game_of_generals.png",
        "https://github.com/XKTZ/cpt-game-of-generals"
    ),
    // projectOf(
    //     "Website1.0",
    //     "My website 1.0 version written in Java, Springboot, Vue3, Element-Plus, and MySQL",
    //     "projects/website1.0.png",
    //     "https://github.com/XKTZ/website",
    // ),
    projectOf(
        "Website2.0",
        "My website 2.0 version written in Vue3 and Element-Plus",
        "projects/website2.0.png",
        "https://github.com/XKTZ/website2.0"
    ),
    projectOf(
        "Starcraft2 Process Helper",
        "A Java & JavaFX program helping record the buildling process in starcraft-2",
        "projects/sc2_helper.png",
        "https://github.com/XKTZ/sc2-process"
    )
])
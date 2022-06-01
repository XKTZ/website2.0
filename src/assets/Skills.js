import {ref} from "vue";

const skillOf = function (...tags) {
    const tagList = []
    for (let tag of tags) {
        tagList.push(tag)
    }
    return tagList
}

const categoryOf = function (title, tags) {
    return {
        title,
        tags
    }
}

export const skills = ref([
    categoryOf("Backend", skillOf("Java", "Spring", "SpringBoot", "C++", "Python")),
    categoryOf("Frontend", skillOf("HTML", "CSS", "Javascript", "Vue", "Element-Plus")),
    categoryOf("Database", skillOf("MySQL"))
])
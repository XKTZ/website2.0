import {NumberRecognition} from "@/assets/blogs/number-recognition/NumberRecognition";
import {CodeforcesLuckyChains} from "@/assets/blogs/codeforce-edu-139-lucky-chains/LuckyChains";

export const blogs = [
    NumberRecognition,
    CodeforcesLuckyChains
].sort((a, b) => (b.createDate - a.createDate))
    .map((blog, idx) => blog.idWith(idx));

export const getBlog = (id) => {
    return blogs[id]
}
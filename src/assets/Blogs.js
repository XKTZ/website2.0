import {NumberRecognition} from "@/assets/blogs/number-recognition/NumberRecognition";
import {CodeforcesLuckyChains} from "@/assets/blogs/codeforce-edu-139-lucky-chains/LuckyChains";
import {AGC044C} from "@/assets/blogs/agc-044-c/StrangeDance";
import {CCC23S4} from "@/assets/blogs/ccc-23-s4/MinimumCostRoads";
import {CollectCoin} from "@/assets/blogs/leetcode-2603-collect-coins-in-a-tree/CollectCoin";
import {CodeforcesMonsters} from "@/assets/blogs/codeforce-codeton-4-monsters/monsters";

export const blogs = [
    NumberRecognition,
    CodeforcesLuckyChains,
    AGC044C,
    CCC23S4,
    CollectCoin,
    CodeforcesMonsters
].sort((a, b) => (b.createDate - a.createDate))
    .map((blog, idx) => blog.idWith(idx));

export const getBlog = (id) => {
    return blogs[id]
}
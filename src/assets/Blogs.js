import {NumberRecognition} from "@/assets/blogs/number-recognition/NumberRecognition";
import {CodeforcesLuckyChains} from "@/assets/blogs/codeforce-edu-139-lucky-chains/LuckyChains";
import {AGC044C} from "@/assets/blogs/agc-044-c/StrangeDance";
import {CCC23S4} from "@/assets/blogs/ccc-23-s4/MinimumCostRoads";
import {CollectCoin} from "@/assets/blogs/leetcode-2603-collect-coins-in-a-tree/CollectCoin";
import {CodeforcesMonsters} from "@/assets/blogs/codeforce-codeton-4-monsters/monsters";
import {MinimizeMaximumDifference} from "@/assets/blogs/leetcode-2616/MinimizeMaximumDifference";
import {CodeForces872D2} from "@/assets/blogs/codeforce-872-d-islands/FloatingIslands";
import {VikaAndWiki} from "@/assets/blogs/codeforce-885-f-wiki/VikaAndWiki";
import {Codeforces9012E} from "@/assets/blogs/codeforce-901-jelly-fish-and-math/JellyFishAndMath";

export const blogs = [
    NumberRecognition,
    CodeforcesLuckyChains,
    AGC044C,
    CCC23S4,
    CollectCoin,
    CodeforcesMonsters,
    MinimizeMaximumDifference,
    CodeForces872D2,
    VikaAndWiki,
    Codeforces9012E
].sort((a, b) => (b.createDate - a.createDate))
    .map((blog, idx) => blog.idWith(idx));

export const getBlog = (id) => {
    return blogs[id]
}
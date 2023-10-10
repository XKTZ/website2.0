import {BlogDefinition, BlogPaths, BlogTags, codeBlockOf, urlOf} from "@/assets/blogs/BlogDefinition";
import {BlogContentTypes} from "@/util/BlogContentUtil";

const createDate = new Date(2023, 7, 22);
const updateDate = new Date(2023, 7, 22);

const content = `
The original question is: ${urlOf("https://codeforces.com/contest/1848/problem/F", "F. Vika and Wiki")}.

If there is a special operation $\\mathcal{F}(a) : \\mathbb{A}^n \\to \\mathbb{A}^n$, where $a$ is an array, and outputs the new array. $\\mathbb{A}$ is type of array.

Set $\\mathcal F ^n (a) = \\mathcal{F} (\\mathcal{F}^{n-1} (a))$.

Asking to find, what is the smallest integer $n$ such that, $\\varphi [\\mathcal{F}^n (a)]$, where $\\varphi$ is a statement.

If $\\varphi$ satisfies a **special property**, that $\\varphi[\\mathcal{F}^n (a)] \\implies \\varphi[\\mathcal{F}^{n+1} (a)]$, then, we could do binary search on $n$.

Find a large enough $R$ such that $\\varphi[\\mathcal{F}^n (a)]$, then $L = 0$, do binary search to find the first index.

${codeBlockOf('cpp', `
if phi(a'), then return a
let l = 1, r = 10^9;
while l < r, do {
    let mid = (l + r) / 2;
    let a' = F(a, mid);
    if phi(a'), then {
        r := mid;
    } else {
        l := mid + 1;
    }
}
`)}

Then there is another problem: what if it isn't possible calculate $\\mathcal F^n(a)$ in $O(1)$?

If it is possible to calculate $\\mathcal F^{2^t} (a)$ in $O(1)$, then, repeat the following process:

initialize $l' = 0, r' = 2^{\\lceil \\log {r} \\rceil }$, add a new variable called $cnt = 0$ then:

1. If perform $l := mid + 1$, then reset $a := \\mathcal F ^{mid} (a)$, reset $l := 1$, reset $r := r - mid$, $cnt := cnt + mid$
2. If perform $r := mid$, then do the same as before, do nothing else.

Finally, return $cnt + l$

The original question can be solved by this method, $\\varphi[a]: \\forall{x \\in a}, x = 0$.  
 
`

export const VikaAndWiki = new BlogDefinition({
    title: "Codeforces Round 885: Vika And Wiki",
    paths: BlogPaths.Codeforces,
    content: content,
    contentType: BlogContentTypes.Markdown,
    tags: [BlogTags.Algorithms, BlogTags.Codeforces],
    createDate: createDate,
    updateDate: updateDate
});

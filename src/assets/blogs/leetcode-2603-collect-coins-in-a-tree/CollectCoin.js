import {BlogDefinition, BlogPaths, BlogTags, codeBlockOf, urlOf} from "@/assets/blogs/BlogDefinition";
import {BlogContentTypes} from "@/util/BlogContentUtil";

const createDate = new Date(2023, 3, 26);
const updateDate = new Date(2023, 3, 26);

const content = `
The original question is: ${urlOf("https://leetcode.com/problems/collect-coins-in-a-tree/", "Collect Coins in a Tree\n")}.

It is easy to observe that the final path will consisting of a set of $u \\to v$ and $v \\to u$ s. And no edge will be visited more than 2 times.

Therefore, in this case, we want to get the number of edges will be visited. And then multiply it by 2.

If the root is fixed, the question is easy, we can solve it by writing like:

${codeBlockOf('c++', `
void dfsinit(int x, int p) {
    dp[x] = 0;
    pa[x] = p;
    if (p == -1) dpth[x] = 0;
    else dpth[x] = dpth[p] + 1;
    has0[x] = cs[x];
    has1[x] = false;
    has2[x] = false;
    for (auto v: adj[x]) {
        if (v == p) continue;
        dfsinit(v, x);
        has1[x] = has0[v] || has1[v] || has1[x];
        has2[x] = has1[v] || has2[v] || has2[x];
        dp[x] += dp[v];
        if (has2[v] || dp[v]) {
            dp[x] ++;
        }
    }
}
`)}

However, we could start with arbitrary vertex. So it would be hard for us to brute force one by one.

But, we find the path is also a tree. So it doesn't matter where we treat it as a root. We only need to find a vertex which we have to go to anyways, and start at that vertex.

It is easy to find the vertex we have to go to. Firstly, start at root $0$ and init. Let the coined vertex with max depth be $u$.

We have to visit $v = pa[pa[u]]$ anyways. Because if we visit some child of $pa[u]$ instead, then it means there exists another coined vertex $t$ which is deeper than $u$, contradicting.

So, we start at $v$, do a dfs again, and get the answer.
`

export const CollectCoin = new BlogDefinition({
    title: "Collect Coins in a Tree",
    paths: BlogPaths.LeetCode,
    content: content,
    contentType: BlogContentTypes.Markdown,
    tags: [BlogTags.Algorithms, "LeetCode"],
    createDate: createDate,
    updateDate: updateDate
});

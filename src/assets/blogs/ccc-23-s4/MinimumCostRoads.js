import {BlogDefinition, BlogPaths, BlogTags, codeBlockOf, urlOf} from "@/assets/blogs/BlogDefinition";
import {BlogContentTypes} from "@/util/BlogContentUtil";

const createDate = new Date(2023, 2, 18);
const updateDate = new Date(2023, 2, 18);

const content = `
Original question is from Canadian Computing Competition 2023, Senior 4.

This question is a variance of minimum spanning tree. We sort all edges and check the distance between vertexes at each addition.

Firstly, if adding an edge $e = (u, v, w)$ changes the overall weight, then the $\\text{dis}[u, v]$ must has been changed.

Proof: if $\\text{dis}[u, v] < e_w$, then going through the path from $u$ to $v$ will be better to go through the edge.

Then, if $\\text{dis}[u, v]$ has been changed, then we need the edge $e = (u, v, w)$.

Proof: at least we need to update a path from $u$ to $v$. So we need this edge.

Solution:

At first, we sort all edges by (length, cost). Then we prove by induction:

Assume at edge $(k-1)$s, we have used some edges. Then, at edge $k$, we know original distance between $u$ and $v$:

1. If $\\text{dis}[u, v] < length$, then we obviously don't need to add this edge. We know we don't need to add it in future because length is sorted.
2. If $\\text{dis}[u, v] > length$, then we obviously need to add this edge. We know add future edges will not help because it is sorted in length.
3. If $\\text{dis}[u, v] = length$, this is a special case we need to argue. We want to prove, in this case, we don't need to add edge:

If $\\text{dis}[u, v] = length$, then we know there exists a path from $u$ to $v$ which is same as length of edge. Because our induction case is all necessary edges in past, so it is better for us to not add such edge to save the cost.
    
So, we only add this edge if $\\text{dis}[u, v] > length$.

So we just do a MST then dijkstra for each pair of points.
`;

export const CCC23S4 = new BlogDefinition({
    title: "CCC 23 S4: Minimum Cost Roads",
    paths: BlogPaths.CCC,
    content,
    contentType: BlogContentTypes.Markdown,
    tags: [BlogTags.Algorithms, "Graph Theory", "Minimum Spanning Tree", "Dijkstra"],
    createDate: createDate,
    updateDate: updateDate
});
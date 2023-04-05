import {BlogDefinition, BlogPaths, BlogTags, codeBlockOf, urlOf} from "@/assets/blogs/BlogDefinition";
import {BlogContentTypes} from "@/util/BlogContentUtil";

const createDate = new Date(2023, 4, 4);
const updateDate = new Date(2023, 4, 4);

const content = `
The original question is: ${urlOf("https://codeforces.com/contest/1810/problem/E", "E. Monsters")}.

Firstly, it is easy to see how to do it from one vertex having $a_i = 0$. We could just use a priority queue, each edge is considered as $(w, v), w = a_v$

Then, we need generalize it to all vertexes. Clearly, we want to maintain a DSU able to keep size.

Observe that, if there exists a vertex $k$, a vertex $i$, and a vertex $j$, $a_i = a_j = 0$, and we could go from $i$ to $k$, and go from $j$ to $k$, then we could either go from $j$ to all vertexes under DSU $i$ and $j$, or reverse.

Proof:

Let all vertexes we could go from $i$ be $S$, and all vertexes we could go from $j$ be $T$, then let $p = \\argmax_{t \\in S \\cup T} {a_t}$. We know $p \\in S \\lor p \\in T$.

WLOG, let $p \\in S$, then, all $a_j, j \\in T$ having $a_j \\leq a_p$, so we could go from $p$ to all vertexes in $T$ through vertex $k$.

Then, we notice that, we only need to go through all points in $1$ to $N$. As long as we meet a point $i$ with $a_i = 0$, we bfs it. And we merge the edge left.

That is, if original edge of vertex $i$ is $S$, and there is a valid edge $u \\to v$ (which is $(v, a_v)$, and edges for $v$ is $T$. Then, in DSU, we merge $parent_i$ and $parent_v$. In heap, we say, $hp_{parent_i} = (S \\cup T) - (v, a_v)$. And search again. In this bfs, $vis_i$ is considered as $parent(i) \\neq i$.

Notice that we don't need to consider the order we visiting two nodes $i$ and $j$. Assume $i < j$, If $p$ can be visited from $i$, then in $i$'s bfs, we will already visit $j$. If $p$ can be visited from $j$, then in $j$ we will go back to $i$ again.

But some important thing we need to notice here is that, since we use $parent_i \\neq i$ as $vis_i$, when we go from a small $i$ to a large $j$ in bfs that $a_i = a_j = 0$, we need to ensure that $j$ won't be the parent, so the DSU needs to ensure $i < j$ then $parent_j \\larr parent_i$.

Finally, the problem becomes: how to efficiently union two heaps? (That is, calculate the ordered heap $S \\cup T -  (v, a_v)$ ).

We don't need to analyzing those complexities to enable brute force because we have an $O(1)$ merging heap actually. Use a ${urlOf("https://en.wikipedia.org/wiki/Pairing_heap", "Pairing heap")} is enough. 

The time complexity will be armotized by the edges: for each edge (directed), we add it once, remove it once. So complexity is $O(N \\log (N))$.

${codeBlockOf('cpp',
`
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;

constexpr ll MAXN = 2e5 + 5;

ll idx;
pair<ll, ll> val[MAXN * 2];
ll chld[MAXN * 2];
ll sibling[MAXN * 2];

inline ll meld(ll x, ll y) {
    if (x == -1) {
        return y;
    }
    if (y == -1) {
        return x;
    }
    // x <= y
    if (val[x].second > val[y].second) {
        swap(x, y);
    }
    sibling[y] = chld[x];
    chld[x] = y;
    return x;
}

inline ll add(ll x, pair<ll, ll> v) {
    ++idx;
    val[idx] = v;
    chld[idx] = -1;
    sibling[idx] = -1;
    return meld(x, idx);
}

inline ll mrg(ll x) {
    if (x == -1 || sibling[x] == -1) {
        return x;
    }
    ll y = sibling[x];
    ll z = sibling[y];
    return meld(mrg(z), meld(x, y));
}

inline pair<pair<ll, ll>, ll> pop(ll x) {
    return {val[x], mrg(chld[x])};
}

ll N, M;
ll a[MAXN];
ll pa[MAXN];
ll hp[MAXN];
ll sz[MAXN];
vector<ll> adj[MAXN];

inline ll paof(ll x) {
    return pa[x] != x ? pa[x] = paof(pa[x]) : x;
}

inline void merge(ll x, ll y) {
    x = paof(x);
    y = paof(y);
    if (x > y) {
        swap(x, y);
    }
    pa[y] = x;
    sz[x] += sz[y];
    hp[x] = meld(hp[x], hp[y]);
}

void bfs(ll x) {
    ll p = 0;
    while (hp[p = paof(x)] != -1 && val[hp[p]].second <= sz[p]) {
        auto [ed, newhp] = pop(hp[p]);
        hp[p] = newhp;
        auto [v, w] = ed;
        if (paof(v) != p) {
            merge(p, v);
        }
    }
}

void test() {
    cin >> N >> M;
    idx = 0;
    for (ll i = 1; i <= N; i++) {
        cin >> a[i];
        pa[i] = i;
        sz[i] = 1;
        hp[i] = -1;
        adj[i].clear();
    }
    for (ll i = 1; i <= M; i++) {
        ll x, y;
        cin >> x >> y;
        adj[x].push_back(y);
        adj[y].push_back(x);
    }
    for (ll i = 1; i <= N; i++) {
        for (auto v : adj[i]) {
            hp[i] = add(hp[i], {v, a[v]});
        }
    }
    for (ll i = 1; i <= N; i++) {
        if (a[i] == 0 && pa[i] == i) {
            bfs(i);
        }
    }
    if (sz[paof(1)] == N) {
        cout << "YES" << '\\n';
    } else {
        cout << "NO" << '\\n';
    }
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);

    ll T;
    cin >> T;
    while (T--) {
        test();
    }
}
`)}
`

export const CodeforcesMonsters = new BlogDefinition({
    title: "CodeTON Round 4 E: Monsters",
    paths: BlogPaths.Codeforces,
    content: content,
    contentType: BlogContentTypes.Markdown,
    tags: [BlogTags.Algorithms, BlogTags.Codeforces],
    createDate: createDate,
    updateDate: updateDate
});

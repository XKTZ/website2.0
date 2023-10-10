import {BlogDefinition, BlogPaths, BlogTags, codeBlockOf, urlOf} from "@/assets/blogs/BlogDefinition";
import {BlogContentTypes} from "@/util/BlogContentUtil";

const createDate = new Date(2023, 10, 9);
const updateDate = new Date(2023, 10, 9);

const content = `
Original question is: ${urlOf("https://codeforces.com/contest/1874/problem/B", "Jelly Fish And Math")}.

The key idea of the question is to reduce the number of cases:

Given an indexed array of elements $A$. Each operation, we are allowed to perform some specific operation $\\mathcal F_k$ on $A$, to get like:

$$
B = \\mathcal F_k(A), B_i = \\mathcal G_k (A_i)
$$

Asking some information about operates from $A$ to $C$.

Where $G_k$ is an operation. Notice this means the operation $\\mathcal G$ is independent from the index and other elements.

Then, through the identity of function, we know, $A_i = A_j \\implies \\mathcal G_k(A_i) = \\mathcal G_k(A_j)$. Then, we know, if $A_i = A_j, C_i \\neq C_j$, there doesn't exists a sequence of operations to transform $A_i$ to $C_i$ and transform $A_j$ to $C_j$.

So, we can reduce the cases to different $A_i$ corresponding with different $C_i$.

That is, if we want to perform $A$ to $C$, there are actually only $(|T| + 1)^{|S|}$ cases to consider (one case is empty),
where $|S|$ means the total number of cases of the beginning of $A_i$, and $|T|$ means the number of different $C_i$ we are pursuing.

We will have a map: $S \\to T$, meaning for each element in $S$, we want to transform it to a specific element in $T$.

If $(|T| + 1)^{|S|}$ is sufficiently small, we are able to perform a BFS on the problem. Let $f_{A \\to C}$ stands for the function that:

$$
f_{A\\to C}(A_i) = C_i: A_i = A_j \\implies f_{A \\to C} (A_i) = f_{A \\to C} (A_j)
$$

For some other cases where doesn't exist, just simply set it as empty.

Then, the BFS is (considering number of steps, for example):

1. $dp[f_{C \\to C}] = 0$
2. $dp[f_{P \\to C}] = \\min_{Q, \\exists k, \\mathcal F_k (P) = Q} \\{dp[f_{Q \\to C}]\\}$

For this question, notice that, $A$ can be considered as a binary array. Number of cases of $A$ is depending on $(a, b, m)$, has $|S| = 8$. Number of cases of $C$ is based on $(c, d)$ has $|T| = 4$. Totally, it is $5^8$ which is sufficiently small. So we could perform BFS.

${codeBlockOf('cpp', `
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;

constexpr ll MAXN = (5 * 5 * 5 * 5 * 5 * 5 * 5 * 5);

constexpr ll pow5[9] = {1, 5, 25, 125, 625, 3125, 15625, 78125, 390625};
constexpr ll INF = 0x3f3f3f3f3f3f3f3f;

ll dp[MAXN];

ll loc(ll msk, ll k) {
    return (msk / pow5[k]) % 5;
}

ll f(ll a, ll b, ll c) {
    return a << 2 | b << 1 | c;
}

ll g(ll x, ll y) {
    return x << 1 | y;
}

ll byop(ll z, ll op) {
    ll msk = 0;
    for (ll a = 0; a < 2; a++) {
        for (ll b = 0; b < 2; b++) {
            for (ll m = 0; m < 2; m++) {
                ll t = loc(z, f(a, b, m));
                ll x = (t >> 1) & 1, y = t & 1;
                if (op == 0) {
                    x = x & y;
                } else if (op == 1) {
                    x = x | y;
                } else if (op == 2) {
                    y = x ^ y;
                } else if (op == 3) {
                    y = y ^ m;
                }
                msk += pow5[f(a, b, m)] * g(x, y);
            }
        }
    }
    return msk;
}

void bfs() {
    ll msk = 0;
    for (ll a = 0; a < 2; a++) {
        for (ll b = 0; b < 2; b++) {
            for (ll m = 0; m < 2; m++) {
                msk += pow5[f(a, b, m)] * g(a, b);
            }
        }
    }
    memset(dp, 0x3f, sizeof(dp));
    queue<ll> q;
    q.push(msk);
    dp[msk] = 0;
    while (!q.empty()) {
        msk = q.front();
        q.pop();
        for (ll op = 0; op < 4; op++) {
            ll t = byop(msk, op);
            if (dp[t] == INF) {
                dp[t] = dp[msk] + 1;
                q.push(t);
            }
        }
    }

    for (ll i = 0; i < pow5[8] - 1; i++) {
        for (ll j = 0; j < 8; j++) {
            if (loc(i, j) == 4) {
                for (ll t = 0; t < 4; t++) {
                    dp[i] = min(dp[i], dp[i - (4 - t) * pow5[j]]);
                }
            }
        }
    }
}

void test() {
    ll a, b, c, d, m;
    cin >> a >> b >> c >> d >> m;
    ll msk = pow5[8] - 1;
    for (ll i = 0; i < 30; i++) {
        ll p = (a >> i) & 1, q = (b >> i) & 1, r = (m >> i) & 1;
        ll x = (c >> i) & 1, y = (d >> i) & 1;
        if (loc(msk, f(p, q, r)) == 4) {
            msk -= (4 - g(x, y)) * pow5[f(p, q, r)];
        } else if (loc(msk, f(p, q, r)) != g(x, y)) {
            cout << -1 << '\\n';
            return;
        }
    }

    if (dp[msk] == INF) {
        cout << -1 << '\\n';
        return;
    }
    cout << dp[msk] << '\\n';
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);
    bfs();
    ll T;
    cin >> T;
    while (T --) {
        test();
    }
}
`)}

`;

export const Codeforces9012E = new BlogDefinition({
    title: "Codeforce 902 Div. 2 E: Jelly Fish And Math",
    paths: BlogPaths.Codeforces,
    content,
    contentType: BlogContentTypes.Markdown,
    tags: [BlogTags.Algorithms, "Graph Theory", "Expected Number"],
    createDate: createDate,
    updateDate: updateDate
});
import {BlogDefinition, BlogPaths, BlogTags, codeBlockOf, urlOf} from "@/assets/blogs/BlogDefinition";
import {BlogContentTypes} from "@/util/BlogContentUtil";

const createDate = new Date(2023, 1, 7);
const updateDate = new Date(2023, 1, 7);

const content = `
The original question is: ${urlOf("https://atcoder.jp/contests/agc044/tasks/agc044_c", "AGC 44-C")}.

Question is asking maintain a set of 3-digit numbers modulus 3^N. There are two different operations:

1. Swap all 1 positions and 2 positions in base-3
2. Add 1 in all the number

We could use a **trie** to maintain the set of numbers. 

For operation 1, we use **lazy propagation** on trie to do the operation in $O(1)$.

For operation 2, we want an add1 operation on number. So we maintain the trie reversely - instead of goes from high bit -> low bit, we go from low bit -> high bit.

Normally the trie is like:

${codeBlockOf('cpp', `
    if (depth == N) {
        val[x] = valon ++;
    } else {
        tr[x][0] = build(depth + 1);
        tr[x][1] = build(depth + 1);
        ...
    }
`)}

In this case the trie is building from high bit to low bit. Reversely, in this question, we save the low bit at first, then save high bit.

Then, the add1 operation becomes, tr[x][0] -> tr[x][1], tr[x][1] -> tr[x][2], tr[x][2] -> tr[x][0], then add1 on tr[x][0] (original tr[x][2]).

So it is $O(log(N))$

${codeBlockOf('cpp', `
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;

constexpr ll MAXN = 12;
constexpr ll MAXM = 2e6 + 5;

ll pow3[MAXN + 1];

ll son[MAXM][3];
ll val[MAXM];
bool lazy[MAXM];
ll ton = 1;

inline void pushdown(ll x) {
    if (lazy[x]) {
        lazy[son[x][0]] = !lazy[son[x][0]];
        lazy[son[x][1]] = !lazy[son[x][1]];
        lazy[son[x][2]] = !lazy[son[x][2]];
        swap(son[x][1], son[x][2]);
        lazy[x] = false;
    }
}

inline void S(ll x) {
    if (x == 0)
        return;
    lazy[x] = !lazy[x];
}

inline void R(ll x) {
    if (x == 0)
        return;
    pushdown(x);
    swap(son[x][0], son[x][1]);
    swap(son[x][0], son[x][2]);
    R(son[x][0]);
}

ll N;
string s;

inline ll btree(ll depth, ll pon) {
    ll t = ton++;
    if (depth == N) {
        val[t] = pon;
    } else {
        val[t] = -1;
        son[t][0] = btree(depth + 1, pon);
        son[t][1] = btree(depth + 1, pon + pow3[depth]);
        son[t][2] = btree(depth + 1, pon + 2 * pow3[depth]);
    }
    return t;
}

ll pos[MAXM];

inline void calcpos(ll depth, ll x, ll pon) {
    pushdown(x);
    if (val[x] >= 0) {
        pos[val[x]] = pon;
        return;
    } else {
        calcpos(depth + 1, son[x][0], pon);
        calcpos(depth + 1, son[x][1], pon + pow3[depth]);
        calcpos(depth + 1, son[x][2], pon + 2 * pow3[depth]);
    }
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);

    cin >> N;
    cin >> s;

    pow3[0] = 1;
    for (ll i = 1; i <= N; i++){
        pow3[i] = pow3[i - 1] * 3;
    }

    ll rt = btree(0, 0);

    for (auto c : s) {
        if (c == 'S') {
            S(rt);
        } else {
            R(rt);
        }
    }
    calcpos(0, rt, 0);

    for (ll i = 0; i < pow3[N]; i++) {
        cout << pos[i] << ' ';
    }
    cout << '\\n';
}
`)}

### Extension

Other than simply swapping two positions, there are also other more complex operations able to be done on trie with lazy propagation.

For example, for an XOR operation, we could save the XORed Number as lazy notation.

And we could also do a minus1 operation on the trie. 
`

export const AGC044C = new BlogDefinition({
    title: "AGC 044 C: Strange Dance (Set of Base-K Numbers Wth Bit and Add Operation)",
    paths: BlogPaths.Atcoder,
    content: content,
    contentType: BlogContentTypes.Markdown,
    tags: [BlogTags.Algorithms],
    createDate: createDate,
    updateDate: updateDate
});

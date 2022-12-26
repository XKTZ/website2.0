import {BlogDefinition, BlogPaths, BlogTags, codeBlockOf, urlOf} from "@/assets/blogs/BlogDefinition";
import {BlogContentTypes} from "@/util/BlogContentUtil";

const createDate = new Date(2022, 11, 25);
const updateDate = new Date(2022, 11, 25);

const content = `
The original question is: ${urlOf("https://codeforces.com/contest/1766/problem/D", "Codeforces Lucky Chains")}.

This question is asking for find the minimum $k$ so that there exists a prime $q$, such that $q \\mid x$, $q \\mid y$

So, without loss of generality, let $x \\geq y$:

$$
\\begin{array}{l}
\\gcd(x + k, y + k) \\\\
= \\gcd(x - y, y + k) \\\\
\\end{array}
$$

$x-y$ is fixed value, so prime factorize $x-y$, for each prime $p$, the smallest multiple appear for $y + k$ is
$y + k = \\lceil \\frac{y}{p}\\rceil p$. The minimum $y+k$ is the answer

Source code:

${codeBlockOf("c++", `
#include <bits/stdc++.h>
using namespace std;
 
typedef int ll;
 
vector<ll> prms;
bool isp[10005];
 
template <typename F, typename T>
inline T pf(F &&f, ll y, T t) {
    for (auto &x : prms) {
        if (x * x > y) {
            break;
        }
        if (y % x == 0) {
            t = f(x, t);
        }
        while (y % x == 0) {
            y /= x;
        }
    }
    if (y != 1) {
        t = f(y, t);
    }
    return t;
}
 
inline pair<ll, ll> find_min_pf(ll x, pair<ll, ll> t) {
    t.second = min(((t.first + x - 1) / x) * x, t.second);
    return t;
}
 
ll x, y;
 
inline void test() {
    cin >> x >> y;
    if (x < y)
        swap(x, y);
    if (gcd(x, y) != 1) {
        cout << 0 << '\\n';
        return;
    } else if (x - y == 1) {
        cout << -1 << '\\n';
        return;
    }
    x -= y;
    pair<ll, ll> res = pf(find_min_pf, x, make_pair(y, 0x3f3f3f3f3f3f3f3f));
    cout << (res.second - y) << '\\n';
}
 
int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);
    fill(isp, isp + 10005, true);
    for (ll i = 2; i < 10005; i++) {
        if (isp[i]) {
            prms.push_back(i);
            for (ll j = i * 2; j < 10005; j += i) {
                isp[j] = false;
            }
        }
    }
    ll T;
    cin >> T;
    while (T--)
        test();
}
`)}
`

export const CodeforcesLuckyChains = new BlogDefinition({
    title: "Codeforces Round 139 D: Lucky Chains",
    paths: BlogPaths.Codeforces,
    content: content,
    contentType: BlogContentTypes.Markdown,
    tags: [BlogTags.Algorithms, BlogTags.Codeforces],
    createDate: createDate,
    updateDate: updateDate
});

import {BlogDefinition, BlogPaths, BlogTags, codeBlockOf, urlOf} from "@/assets/blogs/BlogDefinition";
import {BlogContentTypes} from "@/util/BlogContentUtil";

const createDate = new Date(2023, 4, 9);
const updateDate = new Date(2023, 4, 9);

const content = `
The original question is: ${urlOf("https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/description/", "Minimize the Maximum Difference of Pairs")}.

The question itself is easy. I am just writing to try to provide a relatively rigorous prove why this method would work.

Formula:

$$
f(n) = \\begin{cases}
1 + f(n + 2), a_n - a_{n+1} \\leq k, \\\\
f(n + 1), a_n - a_{n+1} > k
\\end{cases}
$$

Assume $a_n$ is sorted in decreasing order, go from back to front.

Proof:

Assume we are on index $n$, and $a_{n} - a_{n + 1} > k$, then it is obvious that $f(n) = f(n + 1)$ because $a_n$ can't match with any other values.

Assume we are on index $n$, and $a_n - a_{n+1} \\leq k$, then we firstly prove, if we choose the index $n$, we will choose index $n+1$ as pair. We know removing $a_{n+1}$ will be better than removing $a_{n+2}$. When we compare to remove $a_{n+i}$ and $a_{n+i+1}$, if $a_{n+i+1}$ can be pairing with $a_n$, we find $a_{n+i}, a_{n+i+2}, ...$ is absolutely worse than $a_{n+i+1}, a_{n + i + 2}, ...$. Also, assume in removing $a_{n + i + 1}$, all of $a_{n+1}, ..., a_{n + i - 1}$ can be paired with some indexes, then in removing $a_{n+i}$, they can also paired with those indexes. Therefore, we conclude that, if we can use a strategy in removing $a_{n + i + 1}$, we can always use same strategy in $a_{n + i}$ (since $a_{n + i} - a_{n + j} \\leq k$ if $j < i$). So removing smaller $i$ will be better.

Secondly, we prove that if we are meeting a removable $a_n$, then we will always remove it. Assume we are removing $a_n$ and $a_{n+1}$ (as we proved before), we are left with $a_{n + 2}, ...$. If we are not removing $a_n$, we are removing $a_{n + 1}, a_{n+2} ...$. Then, Assume we can use $a_{n+2}, ...$ to form $t$, we want to prove, $a_{n+1}, a_{n + 2}, ...$ never form larger than $t + 1$ (the $1$ is our pair $(a_n, a_{n+1})$). If it form $q > t+1$, assume $a_{n+1}$ is paired with some index $j$ (since it has paired, otherwise it will be $q=a_{n+2}, ...=t$), then removing $a_{n+1}$ and $a_j$, we result in removed is $q-1$ and is also a subset of $a_{n+2}, ...$. So $q > t + 1$ means $q-1 > t$, contradicting. So we will always remove $a_n$ and $a_{n+1}$ if we can.

The solution is just an easy binary search.
`

export const MinimizeMaximumDifference = new BlogDefinition({
    title: "Minimize the Maximum Difference of Pairs",
    paths: BlogPaths.LeetCode,
    content: content,
    contentType: BlogContentTypes.Markdown,
    tags: [BlogTags.Algorithms, "LeetCode"],
    createDate: createDate,
    updateDate: updateDate
});

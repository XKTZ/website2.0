import {BlogDefinition, BlogPaths, BlogTags, codeBlockOf, urlOf} from "@/assets/blogs/BlogDefinition";
import {BlogContentTypes} from "@/util/BlogContentUtil";

const createDate = new Date(2023, 5, 13);
const updateDate = new Date(2023, 5, 13);

const content = `
Original question is ${urlOf("https://codeforces.com/contest/1825/problem/D2", "Floating Islands")}.

## My original idea

$$
\\begin{array}{l}
\\mathbb{E}(\\#) \\\\
= \\sum_{F} p(F) \\sum_i F(i) \\\\
= \\dfrac{1}{\\binom{N}{K}} \\sum_i \\sum_{F} F(i)
\\end{array}
$$

$F: \\mathbb{N} \\to \\{0, 1\\}$ is an arrangement, output if $i$ is good node.

Then, we want to calculate \\sum_{F} F(i). We observe that, a node is a good node if and only if for all its childrens, $sz_i$ (chosen in children) have $c_i \\leq \\dfrac{k}{2}$.

But, then I don't know how to calculate this combination. It seems here we need an $O(N^2)$ dp.

## Correct Idea:

We notice that, if $K$ is odd, then answer is $1$, because \\textbf{transition} from $x$ to $y$ will always make cost different. Transition means transfer from good node $a$ to good node $b$ where exists a path $a \\to b$.

If $K$ is even, we observe that, if there exists two good nodes $x$ and $y$. Then, $sz_x = K - sz_x$, and $sz_y = K - sz_y$. And at the same time, $sz_x = sz_y$. $sz_i$ is number of chosen nodes under subtree $i$.

Proof: If $sz_x \\neq K - sz_x$, then $sz_x > K - sz_x$. Because otherwise if $sz_x < K - sz_x$, we can move to parent of $x$, which will be better than $x$, so $x$ isn't good. It is the same for $y$.

If $y$ is in subtree of $x$ or $x$ is in subtree of $y$, WLOG, let $y$ be $x$'s parent. From $x$ moving to $y$ in each step $u \\to u'$, we will have:

$K - sz_u < sz_u \\leq sz_\\{u'\\}$. We lost $sz_u$, earning $K - sz_u$. Resulting in $K - sz_u - sz_u < 0$'s benefit. And in $u'$, we have $K - sz_\\{u'\\} < sz_\\{u'\\}$.

So, total benefit is decreasing. $y$ can't be a good node.

If $y$ is in some of $x$'s parent $z$'s child. Then, we know, at $z$, we have the sum, $C_z > C_x$. Then, if we go down to $y$ in paths $u \\to w$, we have $K - sz_u \\geq sz_x > \\dfrac{N}{2} \\geq sz_u$, so $K - sz_u > sz_u$. So each step we are losing benefit.

So, $C_y < C_x$, $y$ can't be a good node.

So, if there exists two good nodes, $x, y$, then $sz_x = K - sz_x = sz_y = K - sz_y$. i.e., $sz_x = sz_y = \\dfrac{K}{2}$.

Then, we want to prove, if $sz_x = N - sz_x$, then $x$ is a good node. This is easy, considering moving $x$ to $y$, where $y$ is a good node but $sz_y \\neq N - sz_y$. We can arrive $C_y > C_x$.

Then,

$$
\\begin{array}{l}
\\mathbb{E}(\\#) \\\\
= \\sum_{F} p(F) (1 + \\sum_e T(e_u, e_v, F)) \\\\
= \\sum_{F} p(F) + p(F) \\sum_e T(e_u, e_v, F) \\\\
= 1 + \\sum_{F} p(F) \\sum_e T(e_u, e_v, F) \\\\
= 1 + \\sum_e p(F) \\sum_{F} T(e_u, e_v, F)
\\end{array}
$$

$T$ means if transfer from $e\\_u$ to $e\\_v$ is valid in $F$

What is $\\sum_{F} T(e\\_u, e\\_v, F)$? As we proved, a transition is valid if and only if # of nodes at $u$'s side is same # of nodes at $v$'s side. So, it is

$$
\\binom{\\#_u}{K / 2} \\binom{\\#_v}{K / 2}
$$

So, we know, answer is: $1 + \\sum_e p(F) \\binom{\\#_{e_1}}{K / 2} \\binom{\\#_{e_2}}{K / 2}$.

`;

export const CodeForces872D2 = new BlogDefinition({
    title: "CodeForces: Floating Islands",
    paths: BlogPaths.Codeforces,
    content,
    contentType: BlogContentTypes.Markdown,
    tags: [BlogTags.Algorithms, "Graph Theory", "Expected Number"],
    createDate: createDate,
    updateDate: updateDate
});
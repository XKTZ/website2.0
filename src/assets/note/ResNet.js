import {NoteCategory, NoteDefinition, NotePaths} from "@/assets/note/Note";

const content = `

$$
x' = \\mathcal{A} (\\mathcal{F}(x) + h(x)) + g(x)
$$

where $\\mathcal{F}(x)$ is the fitting function, and $h(x)$ or $g(x)$ is a residual function. $\\mathcal{A}(x)$ is activation.

### Location between $\\mathcal{A}$ and $h(x)$.

The original paper writes the residual network as $x' = \\mathcal{A} (\\mathcal{F}(x) + h(x))$.

However, a possible better residual could be $x' = \\mathcal{F}(\\mathcal{A}(BN(x)))) + h(x)$ <sup>[2]</sup>.

In this case, we can obtain

$$
x_{L} = \\sum^{L-1}_{i = 0} \\mathcal{F_{i}} (x_{i}, \\theta_{i}) + x_0
$$



`;

export const ResNet = new NoteDefinition({
    title: "ResNet",
    paths: NotePaths.AI,
    content: content,
    contentType: "markdown",
    category: NoteCategory.AI,
    reference: [
        ["Deep Residual Learning for Image Recognition", "https://doi.org/10.48550/arXiv.1512.03385"],
        ["Identity Mappings in Deep Residual Networks", "https://arxiv.org/pdf/1603.05027.pdf"]
    ]
});
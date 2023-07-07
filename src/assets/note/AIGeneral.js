import {NoteCategory, NoteDefinition, NotePaths} from "@/assets/note/Note";

const content = `
### Loss

#### Cross Entropy Loss

Pytorch uses cross entropy loss **defaultly with softmax**.

<br/>

### Dropout

1. It is better to set dropout **after** maxpooling.

#### Between final linear layers

1. Generally with a possibility of $0.5$

#### Between other layers like convolution layers

1. Generally with a possiblity of $0.1$

### 

<br/>

### Optimizer

#### Adam

- Learning rate: $3 \\times 10^{-4}$

#### AdamW

- Learning rate: $3 \\times 10^{-4}$
- Weight decay: $10^{-n}, n \\in \\mathbb{N}$
`;

export const AIGeneral = new NoteDefinition({
    title: "General Tips",
    paths: NotePaths.AI,
    content: content,
    contentType: "markdown",
    category: NoteCategory.AI,
    reference: []
});
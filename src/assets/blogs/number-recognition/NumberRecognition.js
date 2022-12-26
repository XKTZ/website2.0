import {BlogDefinition, BlogPaths, BlogTags, codeBlockOf, imgOf} from "@/assets/blogs/BlogDefinition";
import {BlogContentTypes} from "@/util/BlogContentUtil";

const createDate = new Date(2022, 8, 4);

const updateDate = new Date(2022, 8, 4);

const content = `
By using pytorch, I trained a number recognition AI, reaching high correctness.

## Dataset

The dataset I choose is the MNIST. It contains 60K training data and 10K testing data.

${codeBlockOf("python",
    `
dataset_train = torchvision.datasets.MNIST(MNIST_DATASET_PATH, train=True, transform=transform_train, download=True)
dataset_test = torchvision.datasets.MNIST(MNIST_DATASET_PATH, train=False, transform=transform_train, download=True)
`)}

## Transforms

The transform is normal ToTensor + Normalize. It is not useful to use random gray scale (because the MNIST dataset is already gray scaled) or random crop / random horizontal flip (because you cannot flip/crop the number and still asks for same output)

${codeBlockOf("python",
    `
transform_train = transforms.Compose([
transforms.ToTensor(),
transforms.Normalize((.5,), (.5,))
])

transform_test = transforms.Compose([
    transforms.ToTensor(),
    transforms.Normalize((.5,), (.5,))
])
`)}

## Model

### Normal one

The normal (original design) has the process like this:

<img src="${require(`@/assets/blogs/number-recognition/img/normal_model.png`)}" alt="normal_model" width="400px"/>

${codeBlockOf("python", `
class NRNormal(nn.Module):
    network: nn.Module

    def __init__(self):
        super(NRNormal, self).__init__()

        self.network = nn.Sequential(
            # 1 * 28 * 28 -> 16 * 14 * 14
            nn.Conv2d(1, 16, 3, padding=1),
            nn.Conv2d(16, 16, 3, padding=1),
            nn.MaxPool2d(2),
            nn.BatchNorm2d(16),
            nn.ReLU(),

            # 16 * 14 * 14 -> 32 * 7 * 7
            nn.Conv2d(16, 32, 3, padding=1),
            nn.Conv2d(32, 32, 3, padding=1),
            nn.MaxPool2d(2),
            nn.BatchNorm2d(32),
            nn.ReLU(),

            # 32 * 7 * 7 -> 64 * 4 * 4
            nn.Conv2d(32, 64, 3, padding=1),
            nn.Conv2d(64, 64, 3, padding=1),
            nn.Conv2d(64, 64, 3, padding=1),
            nn.MaxPool2d(2, padding=1),
            nn.BatchNorm2d(64),
            nn.ReLU(),

            # 64 * 4 * 4 -> 64 * 4 * 4
            nn.Conv2d(64, 64, 3, padding=1),
            nn.Conv2d(64, 64, 3, padding=1),
            nn.Conv2d(64, 64, 1, padding=1),
            nn.MaxPool2d(2, padding=1),
            nn.BatchNorm2d(64),
            nn.ReLU(),

            # 64 * 4 * 4 -> (64 * 4 * 4 = 512)
            nn.Flatten(),
            # 512 -> 256
            nn.Linear(64 * 4 * 4, 256),
            nn.Dropout(),
            # 256 -> 256
            nn.Linear(256, 256),
            nn.Dropout(),
            # 256 -> 10
            nn.Linear(256, 10)
        )

    def forward(self, x):
        return self.network(x)
`)}

It could be found that this model is based on VGG-16. Because there are not too many feature in a number image, I removed one layer and decreased the dimenisons of convolution to increase the efficiency.

The result shows the decrement of layers and dimensions don't influence the result too much - the correctness is around 99.2%

![](${require(`@/assets/blogs/number-recognition/img/normal_model_result.png`)})

### Lite one

Even though the normal version of convolution network works, its efficiency is not high enough still. So I removed the layer of the network again.

${codeBlockOf("python", `
class NRLite(nn.Module):
    network: nn.Module

    def __init__(self):
        super(NRLite, self).__init__()

        self.network = nn.Sequential(
            # 1 * 28 * 28 -> 16 * 14 * 14
            nn.Conv2d(1, 16, 3, padding=1),
            nn.Conv2d(16, 16, 3, padding=1),
            nn.MaxPool2d(2),
            nn.BatchNorm2d(16),
            nn.ReLU(),

            # 16 * 14 * 14 -> 32 * 7 * 7
            nn.Conv2d(16, 32, 3, padding=1),
            nn.Conv2d(32, 32, 3, padding=1),
            nn.MaxPool2d(2),
            nn.BatchNorm2d(32),
            nn.ReLU(),

            # 32 * 7 * 7 -> 64 * 4 * 4
            nn.Conv2d(32, 64, 3, padding=1),
            nn.Conv2d(64, 64, 3, padding=1),
            nn.Conv2d(64, 64, 3, padding=1),
            nn.MaxPool2d(2, padding=1),
            nn.BatchNorm2d(64),
            nn.ReLU(),

            # 64 * 4 * 4 -> (64 * 4 * 4 = 512)
            nn.Flatten(),
            # 512 -> 256
            nn.Linear(64 * 4 * 4, 256),
            nn.Dropout(),
            # 256 -> 256
            nn.Linear(256, 256),
            nn.Dropout(),
            # 256 -> 10
            nn.Linear(256, 10)
        )

    def forward(self, x):
        return self.network(x)
`)}

It could be found that the decrement of number of layers doesn't decrease the overall accuracy.

![](${require("@/assets/blogs/number-recognition/img/lite_model_result.png")})
`

export const NumberRecognition = new BlogDefinition({
    title: "Number Recognition in Pytorch",
    paths: BlogPaths.Pytorch,
    content: content,
    contentType: BlogContentTypes.Markdown,
    tags: [BlogTags.AI, BlogTags.Pytorch, "VGG-16"],
    createDate: createDate,
    updateDate: updateDate
});
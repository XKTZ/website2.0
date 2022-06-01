import {ref} from "vue";

const column = (label, name, width) => {
    return {label, name, width}
}

const category = (name, description, dataTypes, dataTable) => {
    let ret = {
        name,
        description: `<div style="text-align: justify;">${description}</div>`,
        dataTypes,
        dataTable: []
    }
    for (let value of dataTable) {
        let row = {}
        for (let i = 0; i < dataTypes.length; i++) {
            row[dataTypes[i].name] = value[i]
        }
        ret.dataTable.push(row)
    }
    return ret;
}

export const achievements = ref([
    category(
        "American Mathematics Competitions (AMC)",
        `<a href="https://www.maa.org/math-competitions" target="_blank">American Mathematics Competitions</a>
                   is the competition organized by Mathematics Association Of America.
                   People who get enough mark in AMC 10/12 is able to do
                   <a href="https://www.maa.org/math-competitions/invitational-competitions" target="_blank">
                        American Invitational Mathematics Exam
                   </a>(AIME)`,
        [
            column("Contest", "name", 60),
            column("Time", "time", 40),
            column("Score", "score", 45),
            column("Other", "other", 80)
        ],
        [
            ["AMC 10B", 2020, '108/150', "Qualified to take AIME"],
            ["AMC 12B", 2021, '85.5/150', "Qualified to take AIME"]
        ]
    ),
    category(
        "Canadian Open Mathematics Challenge",
        `<a href="https://cms.math.ca/competitions/">Canadian Open Mathematics Challenge</a> (COMC)
                   is Canada's premier national mathematics competition.
                   Participants get enough marks in COMC is allowed to take Canadian Mathematics Olympiads (CMO)
                   Participants don't get enough for CMO but close will be invited to write 
                   CMO Qualifying Repêchage Competition (CMOQR), and participants who get good result in CMOQR are also qualified for CMO`,
        [
            column("Time", "time", 40),
            column("Score", "score", 40),
            column("CMOQR Cutoff", "cmoqrCutoff", 60),
            column("CMO Cutoff", "cmoCutoff", 60)
        ],
        [
            [2021, "67/80", 62, 68]
        ]
    ),
    category(
        "Canadian Computing Competition",
        `<a href="https://cemc.uwaterloo.ca/contests/ccc-cco.html" target="_blank">Canadian Computing Competition</a>
                   (CCC) is the competition organized by University of Waterloo.
                   It is one of the most premier high school computing competition in Canada.`,
        [
            column("Level", "name", 40),
            column("Time", "time", 40),
            column("Score", "score", 40),
            column("Rank", "rank", 50)
        ],
        [
            ["Junior", 2020, '64/75', "286/3769"],
            ["Senior", 2021, '52/75', "107/2920"],
            ["Senior", 2022, '51/75', "55/3262"]
        ]
    ),
    category(
        "Competitive Programming Websites Info",
        `Following is my information on some competitive programming websites`,
        [
            column("Website", "name", 80),
            column("Account", "account", 80),
            column("Rank Now", "rankNow", 60),
            column("Rank Highest", "rankHigh", 80)
        ],
        [
            [
                `<a href='https://dmoj.ca/' target="_blank">DM::OJ</a>`,
                `<a href="https://dmoj.ca/user/YidiChen" target="_blank">YidiChen</a>`,
                "2054 (Master)",
                "2054 (Master)"
            ],
            [
                `<a href='https://codeforces.com/' target="_blank">Codeforces</a>`,
                `<a href="https://codeforces.com/profile/ericchenxktz" target="_blank">ericchenxktz</a>`,
                "1462 (Specialist)",
                "1589 (Specialist)"
            ]
        ]
    )
])
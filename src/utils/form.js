function nameToOption(names) {
    return names.map((name) => ({
        name,
        value: name
    }))
}

export const SEARCH_FILTER = {
    RELEASE_TIME: [
        {
            name: '全部',
            value: 0
        },
        ...Array(21)
            .fill(0)
            .map((item, index) => ({
                name: 2022 - index,
                value: 2022 - index
            }))
    ],
    // 97
    LETTER: [
        {
            name: '全部',
            value: ''
        },
        ...nameToOption(
            Array(26)
                .fill(0)
                .map((item, index) => String.fromCharCode(65 + index))
        )
    ]
}


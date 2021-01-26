export default class request {
    static getCategories () {
        return fetch("https://opentdb.com/api_category.php")
    }
    static getQuestions () {
        const question = document.getElementById("question").value;
        const categories = document.getElementById("categories").value;
        const types = document.getElementById("types").value;
        const difficulty = document.getElementById("difficulty").value;

        if (difficulty!=="select-difficulty" && types!=="select-types" && categories!=="select-categories") {
        return fetch(`https://opentdb.com/api.php?amount=${question}&category=${categories}&difficulty=${difficulty}&type=${types}`)
        } else {
        return 1;
        }
    }
}
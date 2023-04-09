class OpenTriviaApi {
    private baseUrl: string;
    private categoriesAction: string;
    private questionsAction: string;

    public categoriesUrl: string;
    public questionsUrl: string;

    constructor() {
        this.baseUrl = "https://opentdb.com";
        this.categoriesAction = "api_category.php";
        this.questionsAction = "api.php";

        this.categoriesUrl = `${this.baseUrl}/${this.categoriesAction}`;
        this.questionsUrl = `${this.baseUrl}/${this.questionsAction}/`;
    }

    public mapResponseToQuestionModel(response: any[]): QuestionModel[] {
        return response.map((question) => {
            return {
                category: question.category,
                type: question.type,
                difficulty: question.difficulty,
                question: question.question,
                correctAnswer: question.correct_answer,
                incorrectAnswers: question.incorrect_answers,
            } as QuestionModel;
        });
    }

    public constructQuestionsUrl(params: any): string {
        return (
            `${this.questionsUrl}` +
            `${this.addNumOfQuestionsParameter(params.numOfQuestions)}` +
            `${this.addCategoryParameter(params.category)}` +
            `${this.addDifficultyParameter(params.difficulty)}` +
            `${this.addTypeParameter(params.type)}`
        );
    }

    private addNumOfQuestionsParameter(amount: string): string {
        return `?amount=${amount}`;
    }

    private addCategoryParameter(category: string): string {
        return category === "" ? "" : `&category=${category}`;
    }

    private addDifficultyParameter(category: string): string {
        return category === "" ? "" : `&difficulty=${category}`;
    }

    private addTypeParameter(type: string): string {
        return type === "" ? "" : `&type=${type}`;
    }
}

export default OpenTriviaApi;
